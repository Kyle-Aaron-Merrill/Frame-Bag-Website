/*--------------------------------Animation timeout-----------------*/
setTimeout(function(){
    document.body.className="";
},500);

/*-------------------------------Dropdown Function------------------*/
let buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', function(){
        if(this.classList.contains('burger-button') && !this.classList.contains('active')){
            this.classList.add('active');
            document.getElementById('dropdown').classList.add('active');
            document.getElementById('site-banner').classList.add('active');
            document.getElementById('site-nav').classList.add('active');
            document.getElementById('site-container').classList.add('active');
        }
        else{
            this.classList.remove('active');
            document.getElementById('dropdown').classList.remove('active');
            document.getElementById('site-banner').classList.remove('active');
            document.getElementById('site-nav').classList.remove('active');
            document.getElementById('site-container').classList.remove('active');
        }
    })
});

/*-----------------------------------Image Slider----------------------*/

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
/*----------------------------------------Scroll Function--------------------------*/
const scrollers = document.querySelectorAll('.scroll');
const root = document.querySelector('.scroller-root');
const options = {
  rootMargin: "-400px",
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry =>{
    entry.target.classList.toggle("show", entry.isIntersecting)
  });
}, options);

scrollers.forEach(scroller =>{
  observer.observe(scroller)
});
