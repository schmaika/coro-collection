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
  { name: "Misty’s Staryu", id: "misty-staryu", img: "images/misty-staryu.jpg", price: 1.5, min: 1, link: "https://www.cardmarket.com/es/Pokemon/Products/Singles/Unnumbered-Promos/Mistys-Staryu" },
  { name: "Brock’s Onix", id: "brock-onix", img: "images/brock-onix.jpg", price: 1, min: 0.8, link: "https://www.cardmarket.com/es/Pokemon/Products/Singles/Unnumbered-Promos/Brocks-Onix" },
  { name: "Erika’s Dratini", id: "erika-dratini", img: "images/erika-dratini.jpg", price: 5, min: 4, link: "https://www.cardmarket.com/es/Pokemon/Products/Singles/Unnumbered-Promos/Erikas-Dratini" },
  { name: "Lt. Surge’s Electabuzz", id: "lt-surge-electabuzz", img: "images/lt-surge-electabuzz.jpg", price: 1.5, min: 1.2, link: "https://www.cardmarket.com/es/Pokemon/Products/Singles/Unnumbered-Promos/Lt-Surges-Electabuzz" },
  { name: "Sabrina’s Abra", id: "sabrina-abra", img: "images/sabrina-abra.jpg", price: 3.5, min: 3, link: "https://www.cardmarket.com/es/Pokemon/Products/Singles/Unnumbered-Promos/Sabrinas-Abra-UNP" },
  { name: "Blaine’s Growlithe", id: "blaine-growlithe", img: "images/blaine-growlithe.jpg", price: 4.5, min: 4, link: "https://www.cardmarket.com/es/Pokemon/Products/Singles/Unnumbered-Promos/Blaines-Growlithe" },
  { name: "Brock’s Mankey", id: "brock-mankey", img: "images/brock-mankey.jpg", price: 1.75, min: 1.5, link: "https://www.cardmarket.com/es/Pokemon/Products/Singles/Unnumbered-Promos/Brocks-Mankey" },

  // 🧱 SEGUNDO BLOQUE
  { name: "Farfetch’d", id: "farfetchd", img: "images/farfetchd.jpg", price: 5, min: 4, link: "https://www.cardmarket.com/es/Pokemon/Products/Singles/Unnumbered-Promos/Farfetchd" },
  { name: "Jynx", id: "jynx", img: "images/jynx.jpg", price: 1, min: 0.8, link: "https://www.cardmarket.com/es/Pokemon/Products/Singles/Unnumbered-Promos/Jynx-V1-UNP" },
  { name: "Cubone", id: "cubone", img: "images/cubone.jpg", price: 6, min: 5, link: "https://www.cardmarket.com/es/Pokemon/Products/Singles/Unnumbered-Promos/Cubone" },
  { name: "Erika’s Bulbasaur", id: "erika-bulbasaur", img: "images/erika-bulbasaur.jpg", price: 6, min: 5, link: "https://www.cardmarket.com/es/Pokemon/Products/Singles/Unnumbered-Promos/Erikas-Bulbasaur" },
  { name: "Misty’s Tentacool", id: "misty-tentacool", img: "images/misty-tentacool.jpg", price: 1.7, min: 1.4, link: "https://www.cardmarket.com/es/Pokemon/Products/Singles/Unnumbered-Promos/Mistys-Tentacool-UNP" },
  { name: "Lt. Surge’s Jolteon", id: "lt-surge-jolteon", img: "images/lt-surge-jolteon.jpg", price: 7, min: 6, link: "https://www.cardmarket.com/es/Pokemon/Products/Singles/Unnumbered-Promos/Lt-Surges-Jolteon" },

  // 🏁 FINAL
  { name: "Togepi", id: "togepi", img: "images/togepi.jpg", price: 2.5, min: 2, link: "https://www.cardmarket.com/es/Pokemon/Products/Singles/Unnumbered-Promos/Togepi-V2-UNP" },
  { name: "Marill", id: "marill", img: "images/marill.jpg", price: 2, min: 1.5, link: "https://www.cardmarket.com/es/Pokemon/Products/Singles/Unnumbered-Promos/Marill-V1-UNP" },
  { name: "Giovanni’s Nidoking", id: "giovanni-nidoking", img: "images/giovanni-nidoking.jpg", price: 7, min: 6, link: "https://www.cardmarket.com/es/Pokemon/Products/Singles/Unnumbered-Promos/Giovannis-Nidoking" },
  { name: "Koga’s Ninja Gym", id: "ninja-gym", img: "images/ninja-gym.jpg", price: 1, min: 0.8, link: "https://www.cardmarket.com/es/Pokemon/Products/Singles/Unnumbered-Promos/Kogas-Ninja-Gym" },
  { name: "Slowking", id: "slowking", img: "images/slowking.jpg", price: 29, min: 25, link: "https://www.cardmarket.com/es/Pokemon/Products/Singles/Unnumbered-Promos/Hama-chans-Slowking" },
  { name: "Wooper", id: "wooper", img: "images/wooper.jpg", price: 6, min: 5, link: "https://www.cardmarket.com/es/Pokemon/Products/Singles/Unnumbered-Promos/Wooper-UNP" },
  { name: "Cleffa", id: "cleffa", img: "images/cleffa.jpg", price: 2.8, min: 2.3, link: "https://www.cardmarket.com/es/Pokemon/Products/Singles/Unnumbered-Promos/Cleffa" },
  { name: "Scizor", id: "scizor", img: "images/scizor.jpg", price: 2.5, min: 2, link: "https://www.cardmarket.com/es/Pokemon/Products/Singles/Unnumbered-Promos/Scizor-UNP" },
  { name: "Unown R", id: "unown", img: "images/unown.jpg", price: 18, min: 15, link: "https://www.cardmarket.com/es/Pokemon/Products/Singles/Unnumbered-Promos/Unown-R-UNP" },
  { name: "Smoochum", id: "smoochum", img: "images/smoochum.jpg", price: 6.5, min: 5.5, link: "https://www.cardmarket.com/es/Pokemon/Products/Singles/Unnumbered-Promos/Smoochum" }

];

const binder = document.getElementById("binderView");
const wrapper = document.getElementById("binderViewWrapper");



// ==============================
// 🧩 2. CREAR CARTAS (DOM)
// ==============================

const container = document.getElementById("cards-container");

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
// 💾 3. CARGAR LOCALSTORAGE
// ==============================

// 🔹 CARGAR DATOS (inputs + select)
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
// 🎯 4. LISTENERS (EVENTOS)
// ==============================

// 🔹 GUARDAR TODO
document.addEventListener("input", (e) => {
  const el = e.target;
  if (!el.id) return;

  if (el.type === "checkbox") {
    localStorage.setItem(el.id, el.checked);

    // 🔥 SOLO esto para checkbox
    updateStats();
    updateConditionVisibility();

  } else {
    localStorage.setItem(el.id, el.value);

    updateStats();
    updateCardColors();
    updateRanking();
  }
});


// 🔹 SELECTS
document.addEventListener("change", (e) => {
  const el = e.target;

  if (el.tagName === "SELECT") {
    localStorage.setItem(el.id, el.value);

    updateConditionColors();
    updateConditionVisibility();
  }
});


// ==============================
// 📊 6. STATS Y PROGRESO
// ==============================

// 🔥 FUNCIÓN PRINCIPAL (stats + barra)
function updateStats() {
  // 🔹 CHECKBOXES
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');

  const total = checkboxes.length;
  const completed = Array.from(checkboxes).filter(cb => cb.checked).length;
  const percent = total > 0 ? Math.round((completed / total) * 100) : 0;

  // 🔹 TEXTO
  const totalEl = document.getElementById("total");
  const completedEl = document.getElementById("completed");
  const percentEl = document.getElementById("percent");

  if (totalEl) totalEl.textContent = total;
  if (completedEl) completedEl.textContent = completed;
  if (percentEl) percentEl.textContent = percent + "%";

  // 🔹 BARRA
  const progressBar = document.getElementById("progress-fill");
  if (progressBar) {
    progressBar.style.width = percent + "%";
  }

  // 📉 MERCADO MÍNIMO
  const minInputs = document.querySelectorAll('[id^="min-"]');
  let totalMin = 0;

  minInputs.forEach(input => {
    const value = parseFloat(input.value);
    if (!isNaN(value)) totalMin += value;
  });

  // 💰 GASTADO REAL
// 💰 GASTADO REAL (solo cartas marcadas)
let totalSpent = 0;

checkboxes.forEach(cb => {
  if (cb.checked) {
    const id = cb.id.replace("check-", "buy-");
    const input = document.getElementById(id);

    if (input) {
      const value = parseFloat(input.value);
      if (!isNaN(value)) {
        totalSpent += value;
      }
    }
  }
});

  // 💸 AHORRO
  const totalSaved = totalMin - totalSpent;

  // 🔹 ACTUALIZAR UI
  const totalMinEl = document.getElementById("totalMin");
  const totalSpentEl = document.getElementById("totalSpent");
  const totalSavedEl = document.getElementById("totalSaved");

  if (totalMinEl) totalMinEl.textContent = totalMin.toFixed(2) + "€";
  if (totalSpentEl) totalSpentEl.textContent = totalSpent.toFixed(2) + "€";
  if (totalSavedEl) totalSavedEl.textContent = totalSaved.toFixed(2) + "€";
}


// 🔹 Ejecutar al cargar
updateStats();

// ==============================
// 🎨 7. COLORES DE CARTAS
// ==============================

function updateCardColors() {
  
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
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

    // limpiar clases
    card.classList.remove("good", "bad", "sniper");

    // ocultar badge
    if (badge) badge.style.display = "none";

    if (!isNaN(price) && !isNaN(registered) && registered > 0) {

      const diff = (price - registered).toFixed(2);
      const percent = ((price / registered - 1) * 100).toFixed(0);

      // 🔥 SNIPER
      if (price <= registered * 0.9) {
        card.classList.add("sniper");

        if (badge) badge.style.display = "block";

        if (tooltip) {
          tooltip.textContent = `🔥 SNIPER → ahora ${price}€ | antes ${registered}€ (${diff}€, ${percent}%)`;
        }

      // 🟢 GOOD
      } else if (price <= registered) {
        card.classList.add("good");

        if (tooltip) {
          tooltip.textContent = `🟢 GOOD → ahora ${price}€ | antes ${registered}€ (${diff}€, ${percent}%)`;
        }

      // 🔴 BAD
      } else {
        card.classList.add("bad");

        if (tooltip) {
          tooltip.textContent = `🔴 BAD → ahora ${price}€ | antes ${registered}€ (${diff}€, ${percent}%)`;
        }
      }

    } else {
      if (tooltip) {
        tooltip.textContent = "Sin datos de precio";
      }
    }
  });
}

// ==============================
// 🏆 8. RANKING DE COMPRAS
// ==============================

function updateRanking() {
  const cards = document.querySelectorAll(".card");
  const ranking = [];

  cards.forEach(card => {
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

  // 🔥 PRIORIDAD: SNIPER primero, luego por mejor precio
  ranking.sort((a, b) => {
    const priority = { sniper: 0, good: 1, bad: 2 };
    if (priority[a.type] !== priority[b.type]) {
      return priority[a.type] - priority[b.type];
    }
    return a.diff - b.diff;
  });

  const list = document.getElementById("rankingList");
  list.innerHTML = "";

  ranking.slice(0, 3).forEach((item, i) => {
    const li = document.createElement("li");

    const emoji = item.type === "sniper" ? "🔥" :
                  item.type === "good" ? "🟢" : "🔴";

    li.innerHTML = `
      <span>${i + 1}. ${emoji} ${item.name}</span>
      <span class="rank-${item.type}">
        ${item.diff.toFixed(2)}€
      </span>
    `;

    list.appendChild(li);
  });
}

// ==============================
// 🔃 9. ORDENAR CARTAS
// ==============================

let sorted = false;

document.getElementById("sortBtn").addEventListener("click", () => {
  const container = document.getElementById("cards-container");
  const cards = Array.from(container.querySelectorAll(".card"));

  if (!sorted) {
    // ordenar por mejor precio
      cards.sort((a, b) => {
  const priceAEl = a.querySelector('[id^="price-"]');
  const minAEl = a.querySelector('[id^="min-"]');

  const priceBEl = b.querySelector('[id^="price-"]');
  const minBEl = b.querySelector('[id^="min-"]');

  const priceA = priceAEl ? parseFloat(priceAEl.value) || 0 : 0;
  const minA = minAEl ? parseFloat(minAEl.value) || 0 : 0;

  const priceB = priceBEl ? parseFloat(priceBEl.value) || 0 : 0;
  const minB = minBEl ? parseFloat(minBEl.value) || 0 : 0;

  return (priceA - minA) - (priceB - minB);
});

    document.getElementById("sortBtn").textContent = "↩️ Orden original";

  } else {
    // volver al orden original
    cards.sort((a, b) => {
      return a.dataset.index - b.dataset.index;
    });

    document.getElementById("sortBtn").textContent = "🔃 Ordenar por mejores compras";
  }

  cards.forEach(card => container.appendChild(card));

  sorted = !sorted;
});

// ==============================
// 🛠️ 10. AJUSTES INPUT FECHA
// ==============================

document.querySelectorAll('input[type="date"]').forEach(input => {

  // evitar que se abra al escribir
  input.addEventListener("keydown", (e) => {
    e.stopPropagation();
  });

});

// ==============================
// 🎴 11. CONDICIÓN DE CARTAS
// ==============================

/*function updateConditionVisibility() {
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    const check = card.querySelector('[id^="check-"]');
    const condRow = card.querySelector(".condition-row");

    if (!check || !condRow) return;

    condRow.style.display = check.checked ? "flex" : "none";
  });
}
*/
function updateConditionColors() {
  document.querySelectorAll(".card").forEach(card => {
    const select = card.querySelector('[id^="cond-"]');

    if (!select) return;

    card.setAttribute("data-cond", select.value);
  });
}

// ==============================
// 🚀 12. INIT (AL CARGAR)
// ==============================

function updateAll() {
  updateStats();
  updateCardColors();
  updateRanking();
  updateConditionVisibility();
  updateConditionColors();
}

// ==============================
// 🎯 13. EVENTOS UI (BOTONES)
// ==============================

document.addEventListener("DOMContentLoaded", () => {

  const btn = document.getElementById("toggleHistory");
  const box = document.getElementById("historyBox");

  if (!btn || !box) {
    console.log("❌ No encuentra toggleHistory o historyBox");
    return;
  }

btn.addEventListener("click", () => {
  box.classList.toggle("hidden");

});
  

});

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

    const dateInput = card.querySelector('[id^="date-"]');
    const date = dateInput ? dateInput.value : "-";

    totalMin += min;
    totalSpent += buy;

    log += `${name} → ${price}€ (min ${min}€) [${date || "-"}]\n`;
  });

  log += `\n📉 TOTAL MERCADO: ${totalMin.toFixed(2)}€`;
  log += `\n💰 TOTAL GASTADO: ${totalSpent.toFixed(2)}€\n\n`;



let history = JSON.parse(localStorage.getItem("historyLogs")) || {};

if (!history[today]) {
  history[today] = [];
}

history[today].push(log);

localStorage.setItem("historyLogs", JSON.stringify(history));
});


document.getElementById("clearHistory").addEventListener("click", () => {

  const confirmDelete = confirm("¿Seguro que quieres borrar TODO el historial?");

  if (!confirmDelete) return;

  localStorage.removeItem("historyLogs");
  document.getElementById("historyOutput").innerHTML = "";
});

// ==============================
// 📜 14. HISTORIAL
// ==============================

function loadHistoryByDay() {
  const history = JSON.parse(localStorage.getItem("historyLogs")) || {};

  const container = document.getElementById("historyOutput");
  container.innerHTML = "";

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

    // 👉 toggle abrir/cerrar
    header.addEventListener("click", () => {
      content.classList.toggle("hidden");
    });

    // 👉 borrar solo ese día
    header.querySelector(".delete-day").addEventListener("click", (e) => {
      e.stopPropagation();

      delete history[date];
      localStorage.setItem("historyLogs", JSON.stringify(history));

      loadHistoryByDay();
    });

    dayDiv.appendChild(header);
    dayDiv.appendChild(content);

    container.appendChild(dayDiv);
  });
}
document.getElementById("showHistory").addEventListener("click", () => {
  loadHistoryByDay();
});

function deleteHistoryEntry(date, index) {
  let history = JSON.parse(localStorage.getItem("historyLogs")) || {};

  history[date].splice(index, 1);

  // si el día se queda vacío → borrarlo
  if (history[date].length === 0) {
    delete history[date];
  }

  localStorage.setItem("historyLogs", JSON.stringify(history));

  loadHistoryByDay();
}

document.getElementById("showBought").addEventListener("click", () => {

  const cards = document.querySelectorAll(".card");
  const box = document.getElementById("boughtBox");

  box.classList.toggle("hidden");

  if (!box.classList.contains("hidden")) {

    let html = "<h3>🛒 Cartas compradas</h3>";

    cards.forEach(card => {

      const check = card.querySelector('[id^="check-"]');
      if (!check || !check.checked) return;

      const name = card.querySelector("h3").textContent;

      const buyInput = card.querySelector('[id^="buy-"]');
      const condSelect = card.querySelector('[id^="cond-"]');
      const dateInput = card.querySelector('[id^="date-"]');

      const buy = buyInput?.value || "-";
      const cond = condSelect?.value || "-";
      const date = dateInput?.value || "-";

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

let binderActive = false;

document.getElementById("binderBtn").addEventListener("click", () => {

  const cards = document.querySelectorAll(".card");
  const wrapper = document.getElementById("binderViewWrapper");
  const binder = document.getElementById("binderView");

  binderActive = !binderActive;

  if (binderActive) {

    wrapper.classList.remove("hidden");
    document.getElementById("cards-container").style.display = "none";

    let html = "";

    cards.forEach(card => {

      const check = card.querySelector('[id^="check-"]');
      if (!check || !check.checked) return;

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

    // ocultar grid normal
    document.getElementById("cards-container").style.display = "none";

  } else {
    binder.classList.add("hidden");
    document.getElementById("cards-container").style.display = "grid";
  }
});

const totalSlots = 9; // 3x3
const current = binder.querySelectorAll(".binder-card").length;

for (let i = current; i < totalSlots; i++) {
  binder.innerHTML += `
    <div class="binder-card" style="opacity:0.2;">
      <div style="height:150px; display:flex; align-items:center; justify-content:center;">
        🟦
      </div>
    </div>
  `;
}

//ZOOM//

const modal = document.getElementById("zoomModal");
const modalImg = document.getElementById("zoomImg");

document.addEventListener("click", (e) => {

  // 🔒 BLOQUEAR inputs y selects
  if (
    e.target.closest("select") ||
    e.target.closest("input") ||
    e.target.closest(".info")
  ) return;

  const img = e.target.closest("img");

  if (!img) return;

  modal.style.display = "flex";
  modal.style.pointerEvents = "auto";
  modalImg.src = img.src;

});

// 👉 cerrar
modal.addEventListener("click", () => {
  modal.style.display = "none";
  modal.style.pointerEvents = "none";
});

document.getElementById("toggleLegend").addEventListener("click", () => {
  const box = document.getElementById("legendBox");
  box.classList.toggle("hidden");
});



  /*card.addEventListener("mouseleave", () => {
    card.style.transform = "";
  });

let activeCard = null;

document.querySelectorAll(".card").forEach(card => {

  card.addEventListener("mouseenter", () => {
    activeCard = card;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
    activeCard = null;
  });

  card.addEventListener("mousemove", e => {
    if (activeCard !== card) return;

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = (x / rect.width - 0.5) * 10;
    const rotateX = (y / rect.height - 0.5) * -10;

    card.style.transform = `
      perspective(600px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.03)
    `;
  });

});

let scrolling;

window.addEventListener("scroll", () => {
  document.body.classList.add("scrolling");

  clearTimeout(scrolling);
  scrolling = setTimeout(() => {
    document.body.classList.remove("scrolling");
  }, 150);
});
*/

/*document.querySelectorAll(".card").forEach(card => {

  let rect;

  card.addEventListener("mouseenter", () => {
    rect = card.getBoundingClientRect();
  });

  card.addEventListener("mousemove", (e) => {

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = (x / rect.width - 0.5) * 20;
    const rotateX = (y / rect.height - 0.5) * -20;

    card.style.transform = `
      perspective(800px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.04)
    `;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
  });

});
*/

const hero = document.querySelector(".hero");

function spawnStar() {
  const star = document.createElement("div");
  star.className = "shooting-star";

  const type = Math.floor(Math.random() * 3); // 🔥 3 tipos

  let startX, startY, dx, dy, angle;

  const w = hero.offsetWidth;
  const h = hero.offsetHeight;

  const distance = 600 + Math.random() * 400;

  if (type === 0) {
    // 🌠 DIAGONAL (como ya tienes)
    // 🌠 DIAGONAL (BIEN HECHO)
    startX = -50 + Math.random() * (w + 100); // 🔥 fuera + ancho completo
    startY = -50; // 🔥 SIEMPRE desde arriba

    angle = (Math.random() * 60) - 30;

    dx = (Math.random() * 2 - 1) * distance;
    dy = distance; // 🔥 siempre hacia abajo

  } else if (type === 1) {
    // ⬇️ DESDE ARRIBA (cae)
    startX = Math.random() * w;
    startY = -50;

    angle = 90; // vertical

    dx = 0;
    dy = distance;

  } else {
    // ⬅️ DESDE LA DERECHA
    startX = w + 50;
    startY = Math.random() * h;

    angle = 180; // izquierda

    dx = -distance;
    dy = (Math.random() - 0.5) * 200; // ligera variación vertical
  }

  star.style.left = startX + "px";
  star.style.top = startY + "px";

  star.style.setProperty("--dx", dx + "px");
  star.style.setProperty("--dy", dy + "px");
  star.style.setProperty("--angle", angle + "deg");


  const duration = 1 + Math.random() * 1.5;
  let animationName;

  if (type === 0) animationName = "shoot-diagonal";
  else if (type === 1) animationName = "shoot-down";
  else animationName = "shoot-left";

  star.style.animation = `${animationName} ${duration}s linear`;

  hero.appendChild(star);

  setTimeout(() => {
    star.remove();
  }, duration * 1000);
}

document.addEventListener("click", (e) => {

  const img = e.target.closest("img");

  // SOLO si haces click en imagen
  if (!img) return;

  // 🚫 evitar inputs
  if (e.target.closest(".info")) return;

  modal.style.display = "flex";
  modalImg.src = img.src;
});

document.addEventListener("click", function(e) {
  if (
    e.target.tagName === "SELECT" ||
    e.target.tagName === "OPTION" ||
    e.target.closest("select")
  ) {
    e.stopPropagation();
  }
});

document.addEventListener("click", function(e) {
  if (
    e.target.tagName === "INPUT" ||
    e.target.tagName === "SELECT"
  ) {
    e.stopPropagation();
  }
});

document.querySelectorAll('.info').forEach(info => {
  info.addEventListener('click', e => e.stopPropagation());
  info.addEventListener('mousedown', e => e.stopPropagation());
});



function updateAll() {
  updateStats();
  updateCardColors();
  updateRanking();
  updateConditionVisibility();
  updateConditionColors();
}

updateAll();

document.addEventListener("click", (e) => {
  console.log("CLICK EN:", e.target);
});