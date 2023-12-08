function faq(faqNumber) {
  let currentFaq = document.getElementById(faqNumber);
  currentFaq.style.display = "block";

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

function popdown(wineOrMenu) {
  document.getElementById(wineOrMenu).style.display = "none";
}

/*
 * Burgermenu
 */
function toggleMenu(e) {
  document.getElementById(e).classList.toggle("active");
}
