// ハンバーガーメニュー
const toggleNav = () => {
  let body = document.body;
  let hamburger = document.getElementById('js-hamburger');
  hamburger.addEventListener('click', () => {
    body.classList.toggle('nav-open');
  })
}
toggleNav()