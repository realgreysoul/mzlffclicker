const delay = (e) => new Promise((t) => setTimeout(t, e));
function generateNumberBetween(e, t) {
  return Math.floor(Math.random() * (t - e + 1)) + e;
}

function reinitializeClickerRipple() {
  var clicker = document.getElementById("clicker");
  if (clicker && typeof componentHandler !== "undefined") {
    if (clicker.classList.contains("mdl-js-ripple-effect")) {
      componentHandler.downgradeElements([clicker]);
    }
    clicker.classList.add("mdl-js-ripple-effect");
    componentHandler.upgradeDom();
  }
}
