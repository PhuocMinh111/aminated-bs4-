function showSubmenu(event) {
  event.target.parentNode.querySelector(".sub-menu").classList.add("show");
}
function hideSubmenu(event) {
  document
    .querySelectorAll(".sub-menu")
    .forEach((item) => item.classList.remove("show"));
}

document.querySelectorAll(".link-btn").forEach((item) => {
  item.addEventListener("mouseover", showSubmenu, true);
  item.addEventListener("mouseout", hideSubmenu);
});
document
  .querySelector(".header-container")
  .addEventListener("mouseout", hideSubmenu);
