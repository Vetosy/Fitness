const cursor = document.querySelector(".js-cursor");
const contentBox = document.querySelectorAll('.family__swiper');

const showCursor = () => {
  cursor.style.opacity = 1;
  cursor.classList.add('custom-cursor--active');
}

const hideCursor = () => {
  cursor.style.opacity = 0;
  cursor.classList.remove('custom-cursor--active');
}


contentBox.forEach((slide) => {
  slide.addEventListener("mouseenter", showCursor);
  slide.addEventListener("mouseleave", hideCursor);
});

document.addEventListener("mousemove", function (e) {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});
