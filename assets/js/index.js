document.getElementById("mobile-menu").addEventListener("click", function () {
  const menu = document.getElementById("menu");
  const menuToggle = document.getElementById("mobile-menu");

  menu.classList.toggle("active");
  menuToggle.classList.toggle("active");
});
