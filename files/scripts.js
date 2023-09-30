/* script.js */

let mybutton = document.getElementById("myBtn");

window.addEventListener('scroll', function () {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";

  // ---- go to top button -----
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
})

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//------- GenAI button animation----------
const button = document.querySelector('.futuristic-button');
    button.classList.add('animate');
  
    setTimeout(() => {
        button.classList.remove('animate');
    }, 1500); // Adjust the duration of the animation



document.addEventListener('DOMContentLoaded', function () {
  const burgerMenu = document.querySelector('.burger-menu');
  const navLinks = document.querySelector('.nav-links');

  burgerMenu.addEventListener('click', function () {
    navLinks.classList.toggle('active');
  });
});

// ------------------resume button ----------------------------
function resume() {
  window.open("./files/Mohammad-Saud-Resume.pdf", "_blank")
}