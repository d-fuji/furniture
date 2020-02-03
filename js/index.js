function toggleNav() {
    var body = document.body;
    var hamburger = document.getElementById('js-hamburger');
    var blackBg = document.getElementById('js-black-bg');
  
    hamburger.addEventListener('click', function() {
      body.classList.toggle('nav-open');
    });
    
  }
  toggleNav();

function toggleImg() {
    var img = document.getElementById("img_4");

    img.addEventListener('mouseover', function(){
        console.log("test");
    })
}
toggleImg();