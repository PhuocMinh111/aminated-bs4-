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
  .querySelectorAll(".header-container")
  .addEventListener("mouseout", hideSubmenu);

$(document).ready(function () {
  $(".testimonial-wrapper").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});
$("#scroll-top").click(function () {
  console.log("hello");
  widow.scrollTo(0, 0);
});
