window.addEventListener("DOMContentLoaded", function () {
  if (!localStorage.getItem("warningAccepted")) {
    showModal(document.getElementById("warningDialog"));
    document.body.style.overflow = "hidden";
  }
  document.getElementById("warningYes").onclick = function () {
    localStorage.setItem("warningAccepted", "true");
    closeModal(document.getElementById("warningDialog"));
    document.documentElement.classList.remove("warning-pending");
    document.body.style.overflow = "";
  };
  document.getElementById("warningNo").onclick = function () {
    location.href =
      "https://ya.ru/video/search?text=%D0%BC%D1%83%D0%BB%D1%8C%D1%82%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D1%8B";
  };
  document.getElementById("ageOkay").onclick = function () {
    closeModal(document.getElementById("ageDialog"));
  };
});
