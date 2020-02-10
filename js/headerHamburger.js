//
function toggleNav() {
  var body = document.body;
  var hamburger = document.getElementById('js-hamburger');

  hamburger.addEventListener('click', function () {
    console.log("test")
    body.classList.toggle('nav-open');
  });

}
toggleNav();
/*
function toggleImg() {
  var img = document.getElementById("img_4");

  img.addEventListener('mouseover', function () {
    console.log("test");
  })
}
toggleImg();
*/