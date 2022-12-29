const menu = document.getElementById("menu");

function openMenu() {
 menu.classList.toggle("open");
}
function closeMenu() {
 if (menu.classList.contains("open")) {
  openMenu();
 }
}

document.addEventListener("click", (event) => {
 if (event.target.id != "burger-logo") {
  closeMenu();
 }
});

formt = document.getElementsByTagName("form")[0];

formt.addEventListener("submit", (event) => {
 event.preventDefault();
 text = document.getElementById("short-url").value;
 fetch("https://api.shrtco.de/v2/shorten?url=" + text)
  .then((response) => response.json())
  .then((text) => navigator.clipboard.writeText(text.result.short_link));
 alert("Copied short link in clip board");
});
