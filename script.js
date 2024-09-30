const menuIcon = document.querySelector("#menu-icon");
const navList = document.querySelector(".navlist");

menuIcon.onclick = () => {
  navList.classList.toggle("active");
};
