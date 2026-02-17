const display = document.getElementById("display");
const historyDiv = document.getElementById("history");

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    let expression = display.value.replace('%', '/100');
    let result = eval(expression);

    addHistory(display.value + " = " + result);
    display.value = result;
  } catch {
    display.value = "Erro";
  }
}

function addHistory(entry) {
  const p = document.createElement("p");
  p.textContent = entry;
  historyDiv.prepend(p);
}

// ⌨️ Suporte ao teclado
window.addEventListener("keydown", (e) => {
  if (!isNaN(e.key) || "+-*/.%".includes(e.key)) {
    append(e.key);
  }

  if (e.key === "Enter") calculate();
  if (e.key === "Backspace") deleteLast();
  if (e.key === "Escape") clearDisplay();
});

// 🌗 Tema claro/escuro
const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggle.textContent =
    document.body.classList.contains("dark") ? "☀️" : "🌙";
});