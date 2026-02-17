const display = document.getElementById("display");
const historyDiv = document.getElementById("history");
const themeToggle = document.getElementById("themeToggle");

// 👉 Controle de resultado exibido
let acabouDeCalcular = false;

function append(value) {

  // 🧹 Limpa automaticamente se acabou de calcular
  if (acabouDeCalcular) {
    display.value = "";
    acabouDeCalcular = false;
  }

  display.value += value;
}

function clearDisplay() {
  display.value = "";
  acabouDeCalcular = false;
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    const expression = display.value.replace('%', '/100');
    const result = eval(expression);

    // 👉 Trocar símbolos para exibição
    const formatted = display.value
      .replaceAll('*', '×')
      .replaceAll('/', '÷');

    addHistory(`${formatted} = ${result}`);

    display.value = result;

    // 👉 Ativa limpeza automática
    acabouDeCalcular = true;

  } catch {
    display.value = "Erro";
    acabouDeCalcular = true;
  }
}

function addHistory(text) {
  const item = document.createElement("p");
  item.textContent = text;
  historyDiv.prepend(item);
}

// 🌗 Tema claro/escuro
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.textContent =
    document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// ⌨️ Suporte teclado
window.addEventListener("keydown", (e) => {

  if (!isNaN(e.key) || "+-*/.%".includes(e.key)) {
    append(e.key);
  }

  if (e.key === "Enter") calculate();
  if (e.key === "Backspace") deleteLast();
  if (e.key === "Escape") clearDisplay();
});