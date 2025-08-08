const img = document.querySelector("img");
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const infoIcon = document.querySelector(".info");
const para = document.querySelector("p");
infoIcon.addEventListener("click", () => {
  if (para.style.display == "none") {
    para.style.display = "block";
  } else {
    para.style.display = "none";
  }
});

for (const [key, value] of urlParams) {
  if (key != "blur") {
    img.style.filter += `${key}(${Number(value)}%)`;
  } else {
    img.style.filter += `${key}(${Number(value)}px)`;
  }
}
