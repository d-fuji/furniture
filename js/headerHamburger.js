
// function toggleNav() {
//   var body = document.body;
//   var hamburger = document.getElementById('js-hamburger');

//   hamburger.addEventListener('click', function () {
//     body.classList.toggle('nav-open');
//   });

// }
// toggleNav();

const toggleNav = () => {
  let body = document.body;
  let hamburger = document.getElementById('js-hamburger');
  hamburger.addEventListener('click', () => {
    body.classList.toggle('nav-open');
  })
}
toggleNav()