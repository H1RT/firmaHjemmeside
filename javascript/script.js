function faq(faqNumber) {
  document.getElementById(faqNumber).style.display = "block";

  for (let i = 0; i < document.getElementsByClassName("faqBox").length; i++) {
    if (faqNumber == "faq" + i) {
      console.log("Do nothing");
    } else {
      document.getElementById("faq" + i).style.display = "none";
    }
  }
}

function popup(wineOrMenu) {
  document.getElementById(wineOrMenu).style.display = "block";
}

function toggleMenu(e) {
  document.getElementById(e).classList.toggle("active");
}

/*
 * Burgermenu
 
document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menu-icon");
  const active = document.getElementById("active-menu");

  menuIcon.addEventListener("click", function () {
    active.classList.toggle("menu-opened");
  });
});
*/
