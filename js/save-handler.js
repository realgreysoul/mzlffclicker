var deleteSaveDialog = document.getElementById("deleteSaveDialog"),
  mobileSounds = document.getElementById("mobileSounds"),
  saveOnReload = !0;
function saveGame() {
  (console.log("Saving..."),
    localStorage.setItem("clicks", clicks),
    localStorage.setItem("perClickLevel", perClickLevel),
    localStorage.setItem("clickBombLevel", clickBombLevel),
    localStorage.setItem("clickFactoryLevel", clickFactoryLevel),
    localStorage.setItem("clickMinerLevel", clickMinerLevel),
    localStorage.setItem("autoClickerLevel", autoClickerLevel),
    localStorage.setItem("clickPortalLevel", clickPortalLevel),
    localStorage.setItem("highestClicks", highestClicks),
    localStorage.setItem("totalClicks", totalClicks),
    localStorage.setItem("upgradesBought", upgradesBought),
    localStorage.setItem("casesOpened", casesOpened),
    localStorage.setItem("unlockedClickSounds", unlockedClickSounds),
    localStorage.setItem("clickSound", clickSound),
    localStorage.setItem("casesInventory", casesInventory),
    localStorage.setItem("caseData", JSON.stringify(caseData)),
    localStorage.setItem(
      "mobileSoundsEnabled",
      document.getElementById("mobileSoundsCheckbox").checked,
    ),
    console.log("Saved!"),
    console.log(localStorage));
  snackbar.MaterialSnackbar.showSnackbar({
    message: "Игра успешно сохранена!",
    timeout: 2e3,
  });
}
function loadGame() {
  void 0 !== localStorage.clicks
    ? (console.log("Found save data, loading..."),
      console.log("Loading click count..."),
      (clicks = Number(localStorage.clicks)),
      (clickCount.innerText = `Чикенбеконов: ${clicks}`),
      console.log("Loading upgrades..."),
      (perClickLevel = Number(localStorage.perClickLevel)),
      (clickBombLevel = Number(localStorage.clickBombLevel)),
      (clickFactoryLevel = Number(localStorage.clickFactoryLevel)),
      (clickMinerLevel = Number(localStorage.clickMinerLevel)),
      (autoClickerLevel = Number(localStorage.autoClickerLevel)),
      (clickPortalLevel = Number(localStorage.clickPortalLevel)),
      loadPerClick(),
      loadClickBomb(),
      loadClickFactory(),
      loadClickMiner(),
      loadAutoClicker(),
      loadClickPortal(),
      checkAllMax(),
      console.log("Loading stats..."),
      (highestClicks = Number(localStorage.highestClicks)),
      (totalClicks = Number(localStorage.totalClicks)),
      (upgradesBought = Number(localStorage.upgradesBought)),
      (casesOpened = Number(localStorage.casesOpened)),
      console.log("Loading sounds..."),
      (unlockedClickSounds = localStorage.unlockedClickSounds.split(",")),
      console.log("Loading settings..."),
      (clickSound = localStorage.clickSound),
      "" !== localStorage.casesInventory &&
        ((casesInventory = localStorage.casesInventory.split(",")),
        loadCases()),
      (caseData = JSON.parse(localStorage.caseData)),
      console.log("Save data loaded!"))
    : console.log("No saved data, not loading data.");
  loadMobileSoundsSetting();
}
function loadMobileSoundsSetting() {
  if (void 0 === localStorage.mobileSoundsEnabled) return;
  var enabled = "true" === localStorage.mobileSoundsEnabled,
    checkboxInput = document.getElementById("mobileSoundsCheckbox"),
    checkboxLabel = document.getElementById("mobileSounds");
  checkboxInput.checked = enabled;
  checkboxLabel && checkboxLabel.classList.toggle("is-checked", enabled);
}
function deleteSave() {
  showModal(deleteSaveDialog);
}

document.getElementById("yesDelete").addEventListener("click", function () {
  (console.log("Deleting save..."),
    localStorage.clear(),
    (saveOnReload = !1),
    console.log("Save deleted, reloading..."));
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }
  location.reload();
});

document.getElementById("noDelete").addEventListener("click", function () {
  closeModal(deleteSaveDialog);
});
window.addEventListener("beforeunload", function () {
  saveOnReload && saveGame();
});
