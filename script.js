let topButton = document.getElementById("go-up");
var iframeResume = document.getElementById("pdf");


//Google API call
function displayCount() {
  const visitorCount =  document.getElementById('visitorCounter');
  if (counterElement) {
    counterElement.textContent = `Visitors: ${visitorCount}`;
  }
}

window.addEventListener('load', displayVisitorCount);


window.onload = function() {
  initiallyHide();
  // adjust iframe
  iframeResume.width = iframe.contentWindow.document.body.scrollWidth + 'px';
  iframeResume.height = iframe.contentWindow.document.body.scrollHeight + 'px';
}
/*
//This is for animating the index.html article boxes on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isInterseting) {
      entry.target.classList.add("clear")
    }
  });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));*/

// To the top button
window.onscroll = function() {
  hide_toTop();
}
// Starts hidden
function initiallyHide() {
  topButton.style.display = "none";
}
// Hide to top of page
function hide_toTop() {
  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
    topButton.style.display = "block";
  }else {
    topButton.style.display = "none";
  }
}
// Go to top of page
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//Burger Menu Javascript
function toggleMenu() {
  document.getElementById('Dropdown').classList.toggle('show');
  document.getElemendById('.overlay');
}
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }

}

//implementt reduced motion behaviors
//let motionQuery = matchMedia('(prefers-reduced-motion)');

//const handleReduceMotionChanged = () => {
  //if (motionQuery.matches){
//
  //}
//}

//motionQuery.addListener(handleReduceMotionChanged);
//handleReduceMotionChanged()
