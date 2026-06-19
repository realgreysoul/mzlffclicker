const delay = (e) => new Promise((t) => setTimeout(t, e));
function generateNumberBetween(e, t) {
  return Math.floor(Math.random() * (t - e + 1)) + e;
}

function reinitializeClickerRipple() {
  var clicker = document.getElementById("clicker");
  if (clicker && typeof componentHandler !== "undefined") {
    // Remove the MDL component
    if (clicker.classList.contains("mdl-js-ripple-effect")) {
      componentHandler.downgradeElements([clicker]);
    }
    // Re-add the classes and upgrade
    clicker.classList.add("mdl-js-ripple-effect");
    componentHandler.upgradeDom();
  }
}

function applyCaseSlideAnimation() {
  var theItemElement = document.getElementById("theItem");
  if (theItemElement) {
    theItemElement.style.animation = "none";
    void theItemElement.offsetWidth;
    theItemElement.style.animation = "caseSlideLeft 0.08s ease-out";
  }
}
