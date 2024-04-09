var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

var sideMenu = document.getElementById("sidemenu");

function openmenu(){
  sideMenu.style.right = "0";
  openMenuBtn.style.display = "none"; 
  closeMenuBtn.style.display = "block"; 
}

function closemenu(){
  sideMenu.style.right = "-250px";
  openMenuBtn.style.display = "block"; 
  closeMenuBtn.style.display = "none"; 
}
