var statsDialog = document.getElementById("statsDialog"),
  highestClicksText = document.getElementById("highestClicks"),
  totalClicksText = document.getElementById("totalClicks"),
  upgradesBoughtText = document.getElementById("upgradesBought"),
  casesOpenedText = document.getElementById("casesOpened"),
  highestClicks = 0,
  totalClicks = 0,
  upgradesBought = 0,
  casesOpened = 0;
function checkStats() {
  clicks > highestClicks && (highestClicks = clicks);
}
function showStats() {
  (highestClicksText.innerText =
    "Наибольшее количество чикенбеконов: " + highestClicks),
    (totalClicksText.innerText = "Всего кликов мышью: " + totalClicks),
    (upgradesBoughtText.innerText = "Все купленные выебоны: " + upgradesBought),
    (casesOpenedText.innerText = "Открытые наёбки: " + casesOpened),
    (statsDialog.style.display = "block");
}
document.getElementById("statsOkay").addEventListener("click", function () {
  statsDialog.style.display = "none";
});
