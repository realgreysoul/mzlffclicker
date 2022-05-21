var settingsDialog = document.getElementById("settingsDialog"),
  clickSoundSelector = document.getElementById("clickSounds");
function showSettings() {
  clickSoundSelector.innerHTML = "";
  var e = document.createElement("option");
  for (x in ((e.value = "none"),
  (e.innerText = "Без звука"),
  clickSoundSelector.append(e),
  unlockedClickSounds))
    ((e = document.createElement("option")).value = unlockedClickSounds[x]),
      (e.innerText = soundUnIdify(unlockedClickSounds[x])),
      clickSoundSelector.append(e);
  settingsDialog.style.display = "block";
}
function doUpdate() {
  clickSound = clickSoundSelector.value;
}
document.getElementById("settingsSave").addEventListener("click", function () {
  console.log("Updating settings..."),
    doUpdate(),
    console.log("Settings updated!"),
    (settingsDialog.style.display = "none");
}),
  document
    .getElementById("settingsClose")
    .addEventListener("click", function () {
      settingsDialog.style.display = "none";
    });
