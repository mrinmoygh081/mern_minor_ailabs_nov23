// Slider
var slideImg = document.getElementById("slideImage");

var images = new Array(
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpeg",
    "images/5.jpg",
    );

var len = images.length;
var i = 0 ;

function slider() {
    if (i>len-1) {
        i=0;
    }
    slideImg.src = images[i];
    i++;
    setTimeout('slider()',3000);
}


/*Animation*/

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  
  });
  
  
  
  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el));
  
  

/*Scroll*/

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop -150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navlinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a [href*= ' + id + ']').classList.add('active');

      })
    }
  })
}



