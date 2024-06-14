let topButton = document.getElementById("goUp");

window.onload = function() {
  initiallyHide();
}
window.onscroll = function() {
  hide_toTop();
}

function toggleMenu() {
  document.getElementById('Dropdown').classList.toggle('show');
  document.getElemendById('.overlay');
}

function initiallyHide() {
  topButton.style.display = "none";
}

function hide_toTop() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
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