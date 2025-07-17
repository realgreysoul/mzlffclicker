window.addEventListener("DOMContentLoaded", function () {
  if (!localStorage.getItem("warningAccepted")) {
    document.getElementById("warningDialog").style.display = "block";
    document.body.style.overflow = "hidden";
  }
  document.getElementById("warningOkay").onclick = function () {
    localStorage.setItem("warningAccepted", "true");
    document.getElementById("warningDialog").style.display = "none";
    document.body.style.overflow = "";
  };
});