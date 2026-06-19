btnSubmit = document.getElementById("btnsubmit");
divFirstSetup = document.querySelector(".firstsetup");
divWebLinks = document.querySelector(".weblinks");
greeting = document.getElementById("pgreeting");

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
