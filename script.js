// Splash
setTimeout(() => {
  document.getElementById("splash").style.display = "none";
}, 2000);

// Sidebar
const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");

menuBtn.onclick = () => {
  sidebar.classList.toggle("active");
};
