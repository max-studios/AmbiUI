name = localStorage.getItem("name");
document.getElementById(pgreeting);
let hour = new Date().getHours();

if (hour < 12) {
  pgreeting.innerHTML = "Good morning, " + name + "!";
} else if (hour < 18) {
  pgreeting.innerHTML = "Good afternoon, " + name + "!";
} else {
  pgreeting.innerHTML = "Good evening, " + name + "!";
}
