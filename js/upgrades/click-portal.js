var clickPortalInterval,
  clickPortalCard = document.getElementById("clickPortalCard"),
  clickPortalCardTitle = document.getElementById("clickPortalCardTitle"),
  clickPortalCardPrice = document.getElementById("clickPortalCardPrice"),
  clickPortalSpacer = document.getElementById("clickPortalSpacer"),
  clickPortalLevel = 0,
  clickPortalMax = !1,
  clickPortalLevelData = [
    { level: 1, price: 5e3, perThirtySeconds: 1e4 },
    { level: 2, price: 3e4, perThirtySeconds: 2e4 },
    { level: 3, price: 1e5, perThirtySeconds: 5e4 },
    { level: 4, price: 25e4, perThirtySeconds: 75e3 },
    { level: 5, price: 1e6, perThirtySeconds: 1e5 },
  ];
function buyClickPortal() {
  if (clicks >= clickPortalLevelData[clickPortalLevel].price) {
    (clicks -= clickPortalLevelData[clickPortalLevel].price),
      (clickCount.innerText = `Чикенбеконов: ${clicks}`),
      clearInterval(clickPortalInterval);
    var e = clickPortalLevelData[clickPortalLevel].perThirtySeconds;
    if (
      ((clickPortalInterval = setInterval(function () {
        (clicks += e),
          (clickCount.innerText = `Чикенбеконов: ${clicks}`),
          checkCases(),
          checkStats(),
          checkCases();
      }, 2e4)),
      ++clickPortalLevel >= clickPortalLevelData.length)
    )
      (clickPortalCard.style.display = "none"),
        (clickPortalSpacer.style.display = "none"),
        (clickPortalMax = !0);
    else {
      var l = clickPortalLevel + 1,
        c = clickPortalLevelData[clickPortalLevel].price;
      (clickPortalCardTitle.innerText = "МАЗЕЛЛОВ (Уровень " + l + ")"),
        (clickPortalCardPrice.innerText = "Проебать " + c + " чикенбеконов");
    }
    upgradesBought++,
      playSound("NewUpgrade"),
      console.log(`Bought Upgrade: МАЗЕЛЛОВ, Level: ${clickPortalLevel}.`);
  } else {
    snackbar.MaterialSnackbar.showSnackbar({
      message: "Недостаточно чикенбеконов!",
      timeout: 2e3,
    });
  }
}
function loadClickPortal() {
  if (0 !== clickPortalLevel) {
    var e = clickPortalLevelData[clickPortalLevel - 1].perThirtySeconds;
    if (
      ((clickPortalInterval = setInterval(function () {
        (clicks += e),
          (clickCount.innerText = `Чикенбеконов: ${clicks}`),
          checkCases(),
          checkStats();
      }, 2e4)),
      clickPortalLevel >= clickPortalLevelData.length)
    )
      (clickPortalCard.style.display = "none"),
        (clickPortalSpacer.style.display = "none"),
        (clickPortalMax = !0);
    else {
      var l = clickPortalLevel + 1,
        c = clickPortalLevelData[clickPortalLevel].price;
      (clickPortalCardTitle.innerText = "МАЗЕЛЛОВ (Уровень " + l + ")"),
        (clickPortalCardPrice.innerText = "Проебать " + c + " чикенбеконов");
    }
  }
}
