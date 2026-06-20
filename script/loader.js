btnSubmit = document.getElementById("btnsubmit");
divFirstSetup = document.querySelector(".firstsetup");
divWebLinks = document.querySelector(".weblinks");
greeting = document.getElementById("pgreeting");

const savedLeft = localStorage.getItem("colorLeft");
const savedRight = localStorage.getItem("colorRight");

if (localStorage.getItem("name") == null) {
  greeting.style.display = "none";
  divWebLinks.style.display = "none";
  divFirstSetup.style.display = "block";
  btnSubmit.addEventListener("click", function () {
    let name = document.getElementById("inpname").value;
    localStorage.setItem("name", name);
    divFirstSetup.style.display = "none";
    location.reload();
  });
} else {
  let name = localStorage.getItem("name");
}

if (savedLeft !== null) {
  document.documentElement.style.setProperty("--bg-radial-left", savedLeft);
}
if (savedRight !== null) {
  document.documentElement.style.setProperty("--bg-radial-right", savedRight);
}
