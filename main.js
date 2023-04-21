document.addEventListener('DOMContentLoaded', () => {
    let hamburgerMenu = document.getElementById('hamburger-menu');
    let openDropDownMenu = document.getElementById('open');
    let closeDropDownMenu = document.getElementById('close');
    let dropDown = document.getElementById('menu')

    hamburgerMenu.addEventListener('click', function () {
        openDropDownMenu.classList.toggle('active-icon');
        closeDropDownMenu.classList.toggle('active-icon');
        dropDown.classList.toggle('drop-down');
    });
})

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
    dots[i].className = dots[i].className.replace(" active-dot", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active-dot";
}

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
  
    tabcontent = document.getElementsByClassName("tab-info");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("tab-title");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "flex";
    evt.currentTarget.className += " active-tab";

    evt.preventDefault()
  }
  
  // first tab default
  document.getElementById("default").click();