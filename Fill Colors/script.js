const yellowColorBox = document.querySelector("#yellow");
const redColorBox = document.querySelector("#red");
const blueColorBox = document.querySelector("#blue");
const purpleColorBox = document.querySelector("#purple");

const section = document.querySelector("section");

let selectedColor = null;

const selectColor = (e) => {
  yellowColorBox.classList.remove("active");
  redColorBox.classList.remove("active");
  blueColorBox.classList.remove("active");
  purpleColorBox.classList.remove("active");
  selectedColor = e.target.id;
  e.target.classList.toggle("active");
};

yellowColorBox.addEventListener("click", selectColor);
redColorBox.addEventListener("click", selectColor);
blueColorBox.addEventListener("click", selectColor);
purpleColorBox.addEventListener("click", selectColor);

for (let i = 0; i < 3; i++) {
  const div = document.createElement("div");
  div.style.width = "full";
  div.style.height = "70px";
  div.style.border = "1px solid gray";
  div.addEventListener("click", () => {
    div.style.backgroundColor = selectedColor;
  });
  section.appendChild(div);
}
