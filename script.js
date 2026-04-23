// ==============================
// 📦 1. DATOS (CARDS)
// ==============================
const cardsData = [

  // 💎 CORE
  { name: "Mew", id: "mew", img: "images/mew.jpg", price: 9, min: 7, link: "https://www.cardmarket.com/es/Pokemon/Products/Singles/Unnumbered-Promos/Mew-V1" },
  { name: "Mewtwo", id: "mewtwo", img: "images/mewtwo.jpg", price: 2.5, min: 2, link: "https://www.cardmarket.com/es/Pokemon/Products/Singles/Unnumbered-Promos/Mewtwo-V2" },
  { name: "Surfing Pikachu", id: "surfing-pikachu", img: "images/surfing-pikachu.jpg", price: 9, min: 6, link: "https://www.cardmarket.com/es/Pokemon/Products/Singles/Unnumbered-Promos/Surfing-Pikachu-V2-UNP" },
  { name: "Meowth", id: "meowth", img: "images/meowth.jpg", price: 1, min: 0.8, link: "https://www.cardmarket.com/es/Pokemon/Products/Singles/Unnumbered-Promos/Meowth-V1" },
  { name: "Computer Error", id: "computer-error", img: "images/computer-error.jpg", price: 0.5, min: 0.4, link: "https://www.cardmarket.com/es/Pokemon/Products/Singles/Unnumbered-Promos/Computer-Error-UNP" },

  // 🏟️ GYM
  { name: "Misty's Staryu", id: "misty-staryu", img: "images/misty-staryu.jpg", price: 1.5, min: 1, link: "https://www.cardmarket.com/es/Pokemon/Products/Singles/Unnumbered-Promos/Mistys-Staryu" },
  { name: "Brock's Onix", id: "brock-onix", img: "images/brock-onix.jpg", price: 1, min: 0.8, link: "https://www.cardmarket.com/es/Pokemon/Products/Singles/Unnumbered-Promos/Brocks-Onix" },
  { name: "Erika's Dratini", id: "erika-dratini", img: "images/erika-dratini.jpg", price: 5, min: 4, link: "https://www.cardmarket.com/es/Pokemon/Products/Singles/Unnumbered-Promos/Erikas-Dratini" },
  { name: "Lt. Surge's Electabuzz", id: "lt-surge-electabuzz", img: "images/lt-surge-electabuzz.jpg", price: 1.5, min: 1.2, link: "https://www.cardmarket.com/es/Pokemon/Products/Singles/Unnumbered-Promos/Lt-Surges-Electabuzz" },
  { name: "Sabrina's Abra", id: "sabrina-abra", img: "images/sabrina-abra.jpg", price: 3.5, min: 3, link: "https://www.cardmarket.com/es/Pokemon/Products/Singles/Unnumbered-Promos/Sabrinas-Abra-UNP" },
  { name: "Blaine's Growlithe", id: "blaine-growlithe", img: "images/blaine-growlithe.jpg", price: 4.5, min: 4, link: "https://www.cardmarket.com/es/Pokemon/Products/Singles/Unnumbered-Promos/Blaines-Growlithe" },
  { name: "Brock's Mankey", id: "brock-mankey", img: "images/brock-mankey.jpg", price: 1.75, min: 1.5, link: "https://www.cardmarket.com/es/Pokemon/Products/Singles/Unnumbered-Promos/Brocks-Mankey" },

  // 🧱 SEGUNDO BLOQUE
  { name: "Farfetch'd", id: "farfetchd", img: "images/farfetchd.jpg", price: 5, min: 4, link: "https://www.cardmarket.com/es/Pokemon/Products/Singles/Unnumbered-Promos/Farfetchd" },
  { name: "Jynx", id: "jynx", img: "images/jynx.jpg", price: 1, min: 0.8, link: "https://www.cardmarket.com/es/Pokemon/Products/Singles/Unnumbered-Promos/Jynx-V1-UNP" },
  { name: "Cubone", id: "cubone", img: "images/cubone.jpg", price: 6, min: 5, link: "https://www.cardmarket.com/es/Pokemon/Products/Singles/Unnumbered-Promos/Cubone" },
  { name: "Erika's Bulbasaur", id: "erika-bulbasaur", img: "images/erika-bulbasaur.jpg", price: 6, min: 5, link: "https://www.cardmarket.com/es/Pokemon/Products/Singles/Unnumbered-Promos/Erikas-Bulbasaur" },
  { name: "Misty's Tentacool", id: "misty-tentacool", img: "images/misty-tentacool.jpg", price: 1.7, min: 1.4, link: "https://www.cardmarket.com/es/Pokemon/Products/Singles/Unnumbered-Promos/Mistys-Tentacool-UNP" },
  { name: "Lt. Surge's Jolteon", id: "lt-surge-jolteon", img: "images/lt-surge-jolteon.jpg", price: 7, min: 6, link: "https://www.cardmarket.com/es/Pokemon/Products/Singles/Unnumbered-Promos/Lt-Surges-Jolteon" },

  // 🏁 FINAL
  { name: "Togepi", id: "togepi", img: "images/togepi.jpg", price: 2.5, min: 2, link: "https://www.cardmarket.com/es/Pokemon/Products/Singles/Unnumbered-Promos/Togepi-V2-UNP" },
  { name: "Marill", id: "marill", img: "images/marill.jpg", price: 2, min: 1.5, link: "https://www.cardmarket.com/es/Pokemon/Products/Singles/Unnumbered-Promos/Marill-V1-UNP" },
  { name: "Giovanni's Nidoking", id: "giovanni-nidoking", img: "images/giovanni-nidoking.jpg", price: 7, min: 6, link: "https://www.cardmarket.com/es/Pokemon/Products/Singles/Unnumbered-Promos/Giovannis-Nidoking" },
  { name: "Koga's Ninja Gym", id: "ninja-gym", img: "images/ninja-gym.jpg", price: 1, min: 0.8, link: "https://www.cardmarket.com/es/Pokemon/Products/Singles/Unnumbered-Promos/Kogas-Ninja-Gym" },
  { name: "Slowking", id: "slowking", img: "images/slowking.jpg", price: 29, min: 25, link: "https://www.cardmarket.com/es/Pokemon/Products/Singles/Unnumbered-Promos/Hama-chans-Slowking" },
  { name: "Wooper", id: "wooper", img: "images/wooper.jpg", price: 6, min: 5, link: "https://www.cardmarket.com/es/Pokemon/Products/Singles/Unnumbered-Promos/Wooper-UNP" },
  { name: "Cleffa", id: "cleffa", img: "images/cleffa.jpg", price: 2.8, min: 2.3, link: "https://www.cardmarket.com/es/Pokemon/Products/Singles/Unnumbered-Promos/Cleffa" },
  { name: "Scizor", id: "scizor", img: "images/scizor.jpg", price: 2.5, min: 2, link: "https://www.cardmarket.com/es/Pokemon/Products/Singles/Unnumbered-Promos/Scizor-UNP" },
  { name: "Unown R", id: "unown", img: "images/unown.jpg", price: 18, min: 15, link: "https://www.cardmarket.com/es/Pokemon/Products/Singles/Unnumbered-Promos/Unown-R-UNP" },
  { name: "Smoochum", id: "smoochum", img: "images/smoochum.jpg", price: 6.5, min: 5.5, link: "https://www.cardmarket.com/es/Pokemon/Products/Singles/Unnumbered-Promos/Smoochum" }

];

// ==============================
// 🔗 2. REFS DOM
// ==============================
const container = document.getElementById("cards-container");
const binder = document.getElementById("binderView");
const wrapper = document.getElementById("binderViewWrapper");

// ==============================
// 🧩 3. CREAR CARTAS
// ==============================
cardsData.forEach((card, index) => {
  const div = document.createElement("div");
  div.className = "card";
  div.dataset.index = index;

  div.innerHTML = `
    <img src="${card.img}">
    <h3>${card.name}</h3>

    <div class="info">

      <div class="row">
        <span>💰</span>
        <div class="price-input">
          <span class="euro">€</span>
          <input id="price-${card.id}" value="${card.price}">
        </div>
      </div>

      <div class="row">
        <span>📉</span>
        <div class="price-input">
          <span class="euro">€</span>
          <input id="min-${card.id}" value="${card.min}">
        </div>
      </div>

      <div class="row">
        <span>🧾</span>
        <div class="price-input">
          <span class="euro">€</span>
          <input id="buy-${card.id}" placeholder="0">
        </div>
      </div>

      <div class="row">
        <span>✔</span>
        <input type="checkbox" id="check-${card.id}">
      </div>

      <div class="row condition-row">
        <span>⭐</span>
        <select id="cond-${card.id}">
          <option value="--">--</option>
          <option value="PO" ${card.condition === "PO" ? "selected" : ""}>PO</option>
          <option value="PL" ${card.condition === "PL" ? "selected" : ""}>PL</option>
          <option value="LP" ${card.condition === "LP" ? "selected" : ""}>LP</option>
          <option value="GD" ${card.condition === "GD" ? "selected" : ""}>GD</option>
          <option value="EX" ${card.condition === "EX" ? "selected" : ""}>EX</option>
        </select>
      </div>

      <div class="row">
        <span>📅</span>
        <input type="text" id="date-${card.id}" placeholder="2026-04-21">
      </div>

    </div>

    <a href="${card.link}" target="_blank">🔗</a>

    <div class="tooltip"></div>
  `;

  container.appendChild(div);
});

// ==============================
// 💾 4. CARGAR LOCALSTORAGE
// ==============================
document.querySelectorAll("input, select").forEach(input => {
  const saved = localStorage.getItem(input.id);

  if (saved !== null) {
    if (input.type === "checkbox") {
      input.checked = saved === "true";
    } else {
      input.value = saved;
    }
  }
});

// ==============================
// 📊 5. STATS Y PROGRESO
// ==============================
function updateStats() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const total = checkboxes.length;
  const completed = Array.from(checkboxes).filter(cb => cb.checked).length;
  const percent = total > 0 ? Math.round((completed / total) * 100) : 0;

  const totalEl = document.getElementById("total");
  const completedEl = document.getElementById("completed");
  const percentEl = document.getElementById("percent");

  if (totalEl) totalEl.textContent = total;
  if (completedEl) completedEl.textContent = completed;
  if (percentEl) percentEl.textContent = percent + "%";

  const progressBar = document.getElementById("progress-fill");
  if (progressBar) progressBar.style.width = percent + "%";

  let totalMin = 0;
  document.querySelectorAll('[id^="min-"]').forEach(input => {
    const value = parseFloat(input.value);
    if (!isNaN(value)) totalMin += value;
  });

  let totalSpent = 0;
  checkboxes.forEach(cb => {
    if (cb.checked) {
      const input = document.getElementById(cb.id.replace("check-", "buy-"));
      if (input) {
        const value = parseFloat(input.value);
        if (!isNaN(value)) totalSpent += value;
      }
    }
  });

  const totalSaved = totalMin - totalSpent;

  const totalMinEl = document.getElementById("totalMin");
  const totalSpentEl = document.getElementById("totalSpent");
  const totalSavedEl = document.getElementById("totalSaved");

  if (totalMinEl) totalMinEl.textContent = totalMin.toFixed(2) + "€";
  if (totalSpentEl) totalSpentEl.textContent = totalSpent.toFixed(2) + "€";
  if (totalSavedEl) totalSavedEl.textContent = totalSaved.toFixed(2) + "€";
}

// ==============================
// 🎨 6. COLORES DE CARTAS
// ==============================
function updateCardColors() {
  document.querySelectorAll(".card").forEach(card => {
    const priceInput = card.querySelector("input[id^='price-']");
    const minInput = card.querySelector("input[id^='min-']");
    const badge = card.querySelector(".badge");
    const tooltip = card.querySelector(".tooltip");

    if (!priceInput || !minInput) return;

    function cleanNumber(val) {
      return parseFloat(val.replace(",", ".").replace(/[^\d.]/g, ""));
    }

    const price = cleanNumber(priceInput.value);
    const registered = cleanNumber(minInput.value);

    card.classList.remove("good", "bad", "sniper");
    if (badge) badge.style.display = "none";

    if (!isNaN(price) && !isNaN(registered) && registered > 0) {
      const diff = (price - registered).toFixed(2);
      const percent = ((price / registered - 1) * 100).toFixed(0);

      if (price <= registered * 0.9) {
        card.classList.add("sniper");
        if (badge) badge.style.display = "block";
        if (tooltip) tooltip.textContent = `🔥 SNIPER → ahora ${price}€ | antes ${registered}€ (${diff}€, ${percent}%)`;
      } else if (price <= registered) {
        card.classList.add("good");
        if (tooltip) tooltip.textContent = `🟢 GOOD → ahora ${price}€ | antes ${registered}€ (${diff}€, ${percent}%)`;
      } else {
        card.classList.add("bad");
        if (tooltip) tooltip.textContent = `🔴 BAD → ahora ${price}€ | antes ${registered}€ (${diff}€, ${percent}%)`;
      }
    } else {
      if (tooltip) tooltip.textContent = "Sin datos de precio";
    }
  });
}

// ==============================
// 🏆 7. RANKING DE COMPRAS
// ==============================
function updateRanking() {
  const ranking = [];

  document.querySelectorAll(".card").forEach(card => {
    const name = card.querySelector("h3").textContent;
    const price = parseFloat(card.querySelector('[id^="price-"]').value);
    const min = parseFloat(card.querySelector('[id^="min-"]').value);

    if (!isNaN(price) && !isNaN(min) && min > 0) {
      const diff = price - min;
      let type = "bad";
      if (price <= min * 0.9) type = "sniper";
      else if (price <= min) type = "good";

      ranking.push({ name, diff, type });
    }
  });

  ranking.sort((a, b) => {
    const priority = { sniper: 0, good: 1, bad: 2 };
    if (priority[a.type] !== priority[b.type]) return priority[a.type] - priority[b.type];
    return a.diff - b.diff;
  });

  const list = document.getElementById("rankingList");
  list.innerHTML = "";

  ranking.slice(0, 3).forEach((item, i) => {
    const li = document.createElement("li");
    const emoji = item.type === "sniper" ? "🔥" : item.type === "good" ? "🟢" : "🔴";

    li.innerHTML = `
      <span>${i + 1}. ${emoji} ${item.name}</span>
      <span class="rank-${item.type}">${item.diff.toFixed(2)}€</span>
    `;

    list.appendChild(li);
  });
}

// ==============================
// 🎴 8. CONDICIÓN DE CARTAS
// ==============================
function updateConditionVisibility() {
  document.querySelectorAll(".card").forEach(card => {
    const check = card.querySelector('[id^="check-"]');
    const condRow = card.querySelector(".condition-row");
    if (!check || !condRow) return;
    condRow.style.display = check.checked ? "flex" : "none";
  });
}

function updateConditionColors() {
  document.querySelectorAll(".card").forEach(card => {
    const select = card.querySelector('[id^="cond-"]');
    if (!select) return;
    card.setAttribute("data-cond", select.value);
  });
}

// ==============================
// 🚀 9. INIT
// ==============================
function updateAll() {
  updateStats();
  updateCardColors();
  updateRanking();
  updateConditionVisibility();
  updateConditionColors();
}

updateAll();

// ==============================
// 🎯 10. EVENTOS
// ==============================

// Guardar inputs en localStorage
document.addEventListener("input", (e) => {
  const el = e.target;
  if (!el.id) return;

  if (el.type === "checkbox") {
    localStorage.setItem(el.id, el.checked);
    updateStats();
    updateConditionVisibility();
  } else {
    localStorage.setItem(el.id, el.value);
    updateStats();
    updateCardColors();
    updateRanking();
  }
});

// Guardar selects en localStorage
document.addEventListener("change", (e) => {
  const el = e.target;
  if (el.tagName === "SELECT") {
    localStorage.setItem(el.id, el.value);
    updateConditionColors();
    updateConditionVisibility();
  }
});

// Ordenar cartas
let sorted = false;

document.getElementById("sortBtn").addEventListener("click", () => {
  const cards = Array.from(container.querySelectorAll(".card"));

  if (!sorted) {
    cards.sort((a, b) => {
      const priceA = parseFloat(a.querySelector('[id^="price-"]')?.value) || 0;
      const minA = parseFloat(a.querySelector('[id^="min-"]')?.value) || 0;
      const priceB = parseFloat(b.querySelector('[id^="price-"]')?.value) || 0;
      const minB = parseFloat(b.querySelector('[id^="min-"]')?.value) || 0;
      return (priceA - minA) - (priceB - minB);
    });
    document.getElementById("sortBtn").textContent = "↩️ Orden original";
  } else {
    cards.sort((a, b) => a.dataset.index - b.dataset.index);
    document.getElementById("sortBtn").textContent = "🔃 Ordenar por mejores compras";
  }

  cards.forEach(card => container.appendChild(card));
  sorted = !sorted;
});

// Historial toggle
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("toggleHistory");
  const box = document.getElementById("historyBox");
  if (btn && box) btn.addEventListener("click", () => box.classList.toggle("hidden"));
});

// Guardar log
document.getElementById("saveLog").addEventListener("click", () => {
  const cards = document.querySelectorAll(".card");
  let log = "";
  let totalMin = 0;
  let totalSpent = 0;

  const today = new Date().toLocaleDateString();
  log += `📅 ${today}\n\n`;

  cards.forEach(card => {
    const name = card.querySelector("h3").textContent;
    const price = parseFloat(card.querySelector('[id^="price-"]').value) || 0;
    const min = parseFloat(card.querySelector('[id^="min-"]').value) || 0;
    const buy = parseFloat(card.querySelector('[id^="buy-"]').value) || 0;
    const date = card.querySelector('[id^="date-"]')?.value || "-";

    totalMin += min;
    totalSpent += buy;

    log += `${name} → ${price}€ (min ${min}€) [${date || "-"}]\n`;
  });

  log += `\n📉 TOTAL MERCADO: ${totalMin.toFixed(2)}€`;
  log += `\n💰 TOTAL GASTADO: ${totalSpent.toFixed(2)}€\n\n`;

  let history = JSON.parse(localStorage.getItem("historyLogs")) || {};
  if (!history[today]) history[today] = [];
  history[today].push(log);
  localStorage.setItem("historyLogs", JSON.stringify(history));
});

// Limpiar historial
document.getElementById("clearHistory").addEventListener("click", () => {
  if (!confirm("¿Seguro que quieres borrar TODO el historial?")) return;
  localStorage.removeItem("historyLogs");
  document.getElementById("historyOutput").innerHTML = "";
});

// Ver historial
document.getElementById("showHistory").addEventListener("click", loadHistoryByDay);

// Ver compradas
document.getElementById("showBought").addEventListener("click", () => {
  const box = document.getElementById("boughtBox");
  box.classList.toggle("hidden");

  if (!box.classList.contains("hidden")) {
    let html = "<h3>🛒 Cartas compradas</h3>";

    document.querySelectorAll(".card").forEach(card => {
      const check = card.querySelector('[id^="check-"]');
      if (!check?.checked) return;

      const name = card.querySelector("h3").textContent;
      const buy = card.querySelector('[id^="buy-"]')?.value || "-";
      const cond = card.querySelector('[id^="cond-"]')?.value || "-";
      const date = card.querySelector('[id^="date-"]')?.value || "-";

      html += `
        <div class="bought-item">
          <strong>${name}</strong><br>
          💰 ${buy}€ | ⭐ ${cond} | 📅 ${date}
        </div>
      `;
    });

    box.innerHTML = html;
  }
});

// Binder
let binderActive = false;

document.getElementById("binderBtn").addEventListener("click", () => {
  const cards = document.querySelectorAll(".card");
  binderActive = !binderActive;

  if (binderActive) {
    wrapper.classList.remove("hidden");
    container.style.display = "none";

    let html = "";

    cards.forEach(card => {
      const check = card.querySelector('[id^="check-"]');
      if (!check?.checked) return;

      const name = card.querySelector("h3").textContent;
      const img = card.querySelector("img").src;
      const cond = card.querySelector('[id^="cond-"]').value || "-";

      html += `
        <div class="binder-card">
          <img src="${img}">
          <div class="binder-info">
            <strong>${name}</strong><br>
            ⭐ ${cond}
          </div>
        </div>
      `;
    });

    binder.innerHTML = html;

    const totalSlots = 9;
    const current = binder.querySelectorAll(".binder-card").length;
    for (let i = current; i < totalSlots; i++) {
      binder.innerHTML += `
        <div class="binder-card" style="opacity:0.2;">
          <div style="height:150px; display:flex; align-items:center; justify-content:center;">🟦</div>
        </div>
      `;
    }

  } else {
    wrapper.classList.add("hidden");
    container.style.display = "grid";
  }
});

// Zoom modal
const modal = document.getElementById("zoomModal");
const modalImg = document.getElementById("zoomImg");

document.addEventListener("click", (e) => {
  if (e.target.closest(".info") || e.target.closest("select") || e.target.closest("input")) return;

  const img = e.target.closest("img");
  if (!img) return;

  modal.style.display = "flex";
  modal.style.pointerEvents = "auto";
  modalImg.src = img.src;
});

modal.addEventListener("click", () => {
  modal.style.display = "none";
  modal.style.pointerEvents = "none";
});

// Leyenda
document.getElementById("toggleLegend").addEventListener("click", () => {
  document.getElementById("legendBox").classList.toggle("hidden");
});

// Evitar propagación en .info
document.querySelectorAll('.info').forEach(info => {
  info.addEventListener('click', e => e.stopPropagation());
  info.addEventListener('mousedown', e => e.stopPropagation());
});

// ==============================
// 📜 11. HISTORIAL
// ==============================
function loadHistoryByDay() {
  const history = JSON.parse(localStorage.getItem("historyLogs")) || {};
  const output = document.getElementById("historyOutput");
  output.innerHTML = "";

  Object.keys(history).reverse().forEach(date => {
    const dayDiv = document.createElement("div");
    dayDiv.className = "history-day";

    const header = document.createElement("div");
    header.className = "history-header";
    header.innerHTML = `
      <span>📅 ${date}</span>
      <button class="delete-day">❌</button>
    `;

    const content = document.createElement("div");
    content.className = "history-content hidden";

    history[date].forEach(entry => {
      const p = document.createElement("pre");
      p.textContent = entry;
      content.appendChild(p);
    });

    header.addEventListener("click", () => content.classList.toggle("hidden"));

    header.querySelector(".delete-day").addEventListener("click", (e) => {
      e.stopPropagation();
      delete history[date];
      localStorage.setItem("historyLogs", JSON.stringify(history));
      loadHistoryByDay();
    });

    dayDiv.appendChild(header);
    dayDiv.appendChild(content);
    output.appendChild(dayDiv);
  });
}

function deleteHistoryEntry(date, index) {
  let history = JSON.parse(localStorage.getItem("historyLogs")) || {};
  history[date].splice(index, 1);
  if (history[date].length === 0) delete history[date];
  localStorage.setItem("historyLogs", JSON.stringify(history));
  loadHistoryByDay();
}
