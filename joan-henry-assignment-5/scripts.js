var lisimu = document.querySelector("#lisimu");
var themeButtons = document.querySelector("#themeButtons");
var fb = document.getElementById("fb");
var whatsapp = document.getElementById("whatsapp");

function changeThemeTo(theme) {
  // Remove all themes except for default theme
  lisimu.classList.remove("whatsapp", "fb");
  lisimu.classList.add(theme);

  // Add theme chosen when button clicked
  if (theme === "fb") {
    whatsapp.classList.remove("active");
    fb.classList.add("active");
  } else if (theme === "whatsapp") {
    fb.classList.remove("active");
    whatsapp.classList.add("active");
  } else {
    console.log("The theme does not exist");
  }
}

var darkMode = false;
function toggleDarkMode(e) {
  var button = document.getElementById("darkModeButton");
  button.classList.toggle("on");
  lisimu.classList.toggle("dark-mode");
}

function takeScreenshot() {
  html2canvas(lisimu).then((canvas) => {
    document.getElementById("download").appendChild(canvas);
  });
}
