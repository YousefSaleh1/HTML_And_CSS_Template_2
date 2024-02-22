function remeasure() {
  let el = document.querySelector(".scroller");
  let hieght =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  window.addEventListener("scroll", () => {
    let ScrollTop = document.documentElement.scrollTop;
    el.style.width = `${(ScrollTop / hieght) * 100}%`;
  });
}
setInterval(remeasure, 1000);