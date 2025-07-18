const canvas_size = document.querySelector("#canvas-size");
const canvas_size_label = document.querySelector("output");

const gridbox = document.querySelector(".gridbox");

const clear_btn = document.querySelector(".clear-btn");
const erase_toggle = document.querySelector("#erase-toggle");
const randomize_toggle = document.querySelector("#randomize-toggle");
const color_selector = document.querySelector("#color-selector");

let pointerDown = false;

// Detect mouse down/up
document.body.addEventListener("pointerdown", () => {
  pointerDown = true;
});
document.body.addEventListener("pointerup", () => {
  pointerDown = false;
});

// Initial canvas size setup
canvas_size.value = 32;
canvas_size_label.value = canvas_size.value;
redraw_grid(canvas_size.value);

// Listen to slider input
canvas_size.addEventListener("input", () => {
  canvas_size_label.value = canvas_size.value;
  redraw_grid(canvas_size.value);
});

// Redraws grid with given size
function redraw_grid(size = canvas_size.value) {
  gridbox.innerHTML = ""; // Clear previous

  for (let i = 0; i < size; i++) {
    const row = document.createElement("div");
    row.classList.add("grid-row");

    for (let j = 0; j < size; j++) {
      const unit = document.createElement("div");
      unit.classList.add("grid-unit");
      row.appendChild(unit);
    }

    gridbox.appendChild(row);
  }
}

// Apply color to a grid unit
function colorUnit(target) {
  if (!target.classList.contains("grid-unit")) return;

  if (erase_toggle.checked) {
    target.style.backgroundColor = "#ffffff";
  } else if (randomize_toggle.checked) {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    target.style.backgroundColor = randomColor;
  } else {
    target.style.backgroundColor = color_selector.value;
  }
}

// Pointer interactions
gridbox.addEventListener("pointerover", (e) => {
  if (pointerDown) colorUnit(e.target);
});
gridbox.addEventListener("pointerdown", (e) => {
  colorUnit(e.target);
});

// Clear grid
clear_btn.addEventListener("click", () => {
  redraw_grid(canvas_size.value);
});
