window.addEventListener("DOMContentLoaded", function () {
  if (!localStorage.getItem("warningAccepted")) {
    showModal(document.getElementById("warningDialog"));
    document.body.style.overflow = "hidden";
  }
  document.getElementById("warningOkay").onclick = function () {
    localStorage.setItem("warningAccepted", "true");
    closeModal(document.getElementById("warningDialog"));
    document.body.style.overflow = "";
  };
});
