function faq(faqNumber) {
  let currentFaq = document.getElementById(faqNumber);

  if (!currentFaq.parentElement.classList.contains("activeFaq")) {
    currentFaq.classList.add("faqanimation");
    currentFaq.parentElement.classList.add("activeFaq");
  } else if (currentFaq.parentElement.classList.contains("activeFaq")) {
    currentFaq.classList.remove("faqanimation");
    currentFaq.parentElement.classList.remove("activeFaq");
  } else {
    alert("Something went wrong, refresh the page");
  }

  for (let i = 0; i < document.getElementsByClassName("faqBox").length; i++) {
    if (faqNumber == "faq" + i) {
      //Ingen kode, da denne FAQ boks skal forblive åben
    } else {
      document.getElementById("faq" + i).classList.remove("faqanimation");
      document
        .getElementById("faq" + i)
        .parentElement.classList.remove("activeFaq");
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
