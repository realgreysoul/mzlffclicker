var clicker = document.getElementById("clicker"),
  perClickCard = document.getElementById("perClickCard"),
  perClickCardTitle = document.getElementById("perClickCardTitle"),
  perClickCardPrice = document.getElementById("perClickCardPrice"),
  perClickSpacer = document.getElementById("perClickSpacer"),
  perClickLevel = 0,
  perClickMax = !1,
  perClickLevelData = [
    { level: 1, price: 50, perClick: 2 },
    { level: 2, price: 200, perClick: 3 },
    { level: 3, price: 500, perClick: 5 },
    { level: 4, price: 1e3, perClick: 7 },
    { level: 5, price: 2e3, perClick: 10 },
    { level: 6, price: 2500, perClick: 15 },
    { level: 7, price: 5e3, perClick: 20 },
    { level: 8, price: 7500, perClick: 25 },
    { level: 9, price: 1e4, perClick: 50 },
    { level: 10, price: 15e3, perClick: 75 },
    { level: 11, price: 25e3, perClick: 100 },
    { level: 12, price: 35e3, perClick: 125 },
    { level: 13, price: 45e3, perClick: 150 },
    { level: 14, price: 55e3, perClick: 200 },
    { level: 15, price: 75e3, perClick: 250 },
    { level: 16, price: 95e3, perClick: 300 },
    { level: 17, price: 105e3, perClick: 400 },
  ];
function buyPerClick() {
  if (clicks >= perClickLevelData[perClickLevel].price) {
    if (
      ((clicks -= perClickLevelData[perClickLevel].price),
      (clickCount.innerText = `Чикенбеконов: ${clicks}`),
      (perClick = perClickLevelData[perClickLevel].perClick),
      (clicker.innerText = "ТРАХНУТЬ (+" + perClick + ")"),
      clicker.classList.remove("mdl-js-ripple-effect"),
      clicker.classList.add("mdl-js-ripple-effect"),
      ++perClickLevel >= perClickLevelData.length)
    )
      (perClickCard.style.display = "none"),
        (perClickSpacer.style.display = "none"),
        (perClickMax = !0);
    else {
      var e = perClickLevel + 1,
        l = perClickLevelData[perClickLevel].price;
      (perClickCardTitle.innerText = "КИРИЕШКИ (Уровень " + e + ")"),
        (perClickCardPrice.innerText = "Проебать " + l + " чикенбеконов");
    }
    upgradesBought++,
      playSound("NewUpgrade"),
      console.log(`Bought Upgrade: КИРИЕШКИ, Level: ${perClickLevel}`);
  } else {
    snackbar.MaterialSnackbar.showSnackbar({
      message: "Недостаточно чикенбеконов!",
      timeout: 2e3,
    });
  }
}
function loadPerClick() {
  if (0 !== perClickLevel)
    if (
      ((perClick = perClickLevelData[perClickLevel - 1].perClick),
      (clicker.innerText = "ТРАХНУТЬ (+" + perClick + ")"),
      perClickLevel >= perClickLevelData.length)
    )
      (perClickCard.style.display = "none"),
        (perClickSpacer.style.display = "none"),
        (perClickMax = !0);
    else {
      var e = perClickLevel + 1,
        l = perClickLevelData[perClickLevel].price;
      (perClickCardTitle.innerText = "КИРИЕШКИ (Уровень " + e + ")"),
        (perClickCardPrice.innerText = "Проебать " + l + " чикенбекоинов");
    }
}
