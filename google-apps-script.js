// ============================================================
// GOOGLE APPS SCRIPT — Proxy con ScraperAPI (bypassa Cloudflare)
// ============================================================
// Si necesitas actualizar la API key de ScraperAPI, cámbiala aquí:
var SCRAPER_API_KEY = "4168657fbc03642ccc67af5bb980fbf5";

function doGet(e) {
  const url = e.parameter.url;

  if (!url || !url.includes("cardmarket.com")) {
    return jsonResponse({ error: "URL inválida" });
  }

  try {
    var scraperUrl = "http://api.scraperapi.com?api_key=" + SCRAPER_API_KEY + "&url=" + encodeURIComponent(url) + "&render=false&country_code=es";

    var response = UrlFetchApp.fetch(scraperUrl, {
      muteHttpExceptions: true,
      followRedirects: true
    });

    var statusCode = response.getResponseCode();
    var html = response.getContentText("UTF-8");

    if (statusCode !== 200) {
      return jsonResponse({ error: "HTTP " + statusCode, statusCode, htmlSnippet: html.substring(0, 300) });
    }

    // 1. JSON-LD (más fiable)
    var jsonLdRegex = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g;
    var match;
    while ((match = jsonLdRegex.exec(html)) !== null) {
      try {
        var data = JSON.parse(match[1]);
        var items = Array.isArray(data["@graph"]) ? data["@graph"] : [data];
        for (var i = 0; i < items.length; i++) {
          var offers = items[i].offers;
          if (offers) {
            var price = parseFloat(offers.lowPrice !== undefined ? offers.lowPrice : offers.price);
            if (!isNaN(price) && price > 0) {
              return jsonResponse({ price: price, source: "json-ld" });
            }
          }
        }
      } catch (e) {}
    }

    // 2. Regex fallback
    var patterns = [
      /class="[^"]*color-primary[^"]*"[^>]*>\s*([\d]+[,.][\d]+)\s*€/,
      /"lowPrice"\s*:\s*"?([\d.]+)"?/,
      /Desde[^€<]{0,30}?([\d]+[,.][\d]+)\s*€/i,
      /From[^€<]{0,30}?([\d]+[,.][\d]+)\s*€/i,
      /"price"\s*:\s*"([\d.]+)"/
    ];

    for (var j = 0; j < patterns.length; j++) {
      var m = html.match(patterns[j]);
      if (m) {
        var p = parseFloat(m[1].replace(",", "."));
        if (!isNaN(p) && p > 0) {
          return jsonResponse({ price: p, source: "html-regex-" + j });
        }
      }
    }

    return jsonResponse({ error: "Precio no encontrado", statusCode: statusCode, htmlSnippet: html.substring(0, 300) });

  } catch (err) {
    return jsonResponse({ error: err.toString() });
  }
}

function jsonResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
