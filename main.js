const pixelContainer = document.getElementById("pixel_container");
const pixelCount = document.getElementById("tile_size");
const resetbtn = document.getElementById("reset_button");
const gridToggle = document.getElementById("grid_toggle");

let mousedown = false;

/**
 * sets the amount of pixel tiles on the drawing board.
 * takes a number and multiplies it by itself to fill the board.
 * @param {int} size
 */
function setTiles(size) {
  pixelContainer.style.setProperty("--size", size);
  for (let i = 0; i < size * size; i++) {
    const tile = document.createElement("div");
    tile.classList.add("pixel_tile");
    tile.addEventListener("mouseover", () => {
      if (!mousedown) return;
      const color = document.getElementById("tile_color").value;
      tile.style.backgroundColor = color;
    });
    tile.addEventListener("mousedown", () => {
      const color = document.getElementById("tile_color").value;
      tile.style.backgroundColor = color;
    });
    pixelContainer.appendChild(tile);
  }
}

/**
 * resets the drawing board to the value provided in the PixelCount-Inputfield
 */
function reset() {
  pixelContainer.innerHTML = "";
  setTiles(pixelCount.value);
}

// All DOM eventlisteners________________________
pixelCount.addEventListener("keyup", reset);

resetbtn.addEventListener("click", reset);

gridToggle.addEventListener("change", () => {
  pixelContainer.classList.toggle("display_grid");
});

window.addEventListener("mousedown", () => {
  mousedown = true;
});

window.addEventListener("mouseup", () => {
  mousedown = false;
});
//____________________________________________

setTiles(pixelCount.value);
