const btnDeleteAll = document.getElementById("btn_delete_all");
const btnConfirm = document.getElementById("btn_confirm_delete");
const btnCancel = document.getElementById("btn_cancel_delete");
const btnBack = document.getElementById("btn_back");
const btnSave = document.getElementById("btnSave");
const btnGitHub = document.getElementById("btn_github");

const engine = document.getElementById("engine");
const searchbar = document.querySelector(".searchbar");

const colorLeft = document.getElementById("colorLeft");
const colorRight = document.getElementById("colorRight");

let searchEngine = localStorage.getItem("searchEngine");
if (searchEngine == null) {
  searchEngine = "google";
  engine.value = "google";
} else {
  engine.value = searchEngine;
}

engine.addEventListener("change", function (e) {
  searchEngine = engine.value;
  localStorage.setItem("searchEngine", searchEngine);
  location.reload();
});

if (localStorage.getItem("colorLeft") != null) {
  colorLeft.value = localStorage.getItem("colorLeft");
}
if (localStorage.getItem("colorRight") != null) {
  colorRight.value = localStorage.getItem("colorRight");
}

document.documentElement.style.setProperty("--bg-radial-left", colorLeft.value);
document.documentElement.style.setProperty(
  "--bg-radial-right",
  colorRight.value,
);

colorLeft.addEventListener("input", () => {
  localStorage.setItem("colorLeft", colorLeft.value);
  document.documentElement.style.setProperty(
    "--bg-radial-left",
    colorLeft.value,
  );
});

colorRight.addEventListener("input", () => {
  localStorage.setItem("colorRight", colorRight.value);
  document.documentElement.style.setProperty(
    "--bg-radial-right",
    colorRight.value,
  );
});

btnDeleteAll.addEventListener("click", () => {
  document.querySelector(".confirm").style.display = "flex";
});

btnConfirm.addEventListener("click", () => {
  localStorage.clear();
  location.reload();
});
btnCancel.addEventListener("click", () => {
  document.querySelector(".confirm").style.display = "none";
});

btnBack.addEventListener("click", () => {
  window.open("../index.html", "_self");
});

btnGitHub.addEventListener("click", () => {
  window.open("https://www.github.com/max-studios", "_blank");
});
