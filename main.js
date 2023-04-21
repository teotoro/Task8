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