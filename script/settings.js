const btnDeleteAll = document.getElementById("btn_delete_all");
const btnConfirm = document.getElementById("btn_confirm_delete");
const btnCancel = document.getElementById("btn_cancel_delete");
const btnBack = document.getElementById("btn_back");

btnDeleteAll.addEventListener("click", () => {
  document.querySelector(".confirm").style.display = "block";
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
