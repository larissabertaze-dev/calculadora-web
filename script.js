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

const { useState, useEffect } = React;
  }

  // ⌨️ Teclado
  useEffect(() => {
    function handleKey(e) {
      if (!isNaN(e.key) || "+-*/.%".includes(e.key)) append(e.key);
      if (e.key === "Enter") calculate();
      if (e.key === "Backspace") deleteLast();
      if (e.key === "Escape") clearDisplay();
    }

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  });

  useEffect(() => {
    document.body.classList.toggle("dark", dark);
  }, [dark]);

  const buttons = [
    "C",
    "⌫",
    "%",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "=",
  ];

  function handleClick(btn) {
    if (btn === "C") return clearDisplay();
    if (btn === "⌫") return deleteLast();
    if (btn === "=") return calculate();
    append(btn);
  }

  return (
    <div className="calculator">
      <div className="top-bar">
        <h2>Calculadora</h2>
        <button onClick={() => setDark(!dark)}>
          {dark ? "☀️" : "🌙"}
        </button>
      </div>

      <div className="history">
        {history.map((item, i) => (
          <p key={i}>{item}</p>
        ))}
      </div>

      <input value={display} disabled className="display" />

      <div className="buttons">
        {buttons.map((btn, i) => (
          <button
            key={i}
            onClick={() => handleClick(btn)}
            className={
              btn === "="
                ? "equal"
                : btn === "0"
                ? "zero"
                : ""
            }
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}  );