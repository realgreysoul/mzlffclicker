var soundCaseTimeout,
  soundCaseContents = [
    "Penis",
    "Laugh",
    "AaAaAa",
    "AaAaAa2",
    "AaAaAa3",
    "AaAaAa4",
    "Who-o-o",
    "LoudBurping",
    "LoudBurping2",
    "Mom",
    "Secret",
  ];
function getSoundCaseResult() {
  return soundCaseContents[
    Math.floor(Math.random() * soundCaseContents.length)
  ];
}
async function openSoundCase() {
  caseDialog.style.display = "block";
  var e = document.getElementsByClassName("soundCaseCard"),
    n = document.getElementsByClassName("soundCaseSpacer");
  e[0].remove(), n[0].remove();
  var a = casesInventory.indexOf("Рандомный звук");
  -1 !== a && casesInventory.splice(a, 1), caseUpdate();
  for (var s = 100; s <= 500; s += 10) {
    await delay(s);
    var o = soundUnIdify(getSoundCaseResult());
    (theItem.innerHTML = o),
      500 !== s
        ? playSound("CaseRolling")
        : (-1 === unlockedClickSounds.indexOf(soundIdify(o)) &&
            unlockedClickSounds.push(soundIdify(o)),
          (youGot.style.display = "block"),
          (caseOkay.style.display = "inline-block"),
          caseOkay.addEventListener("click", function () {
            (caseDialog.style.display = "none"),
              (youGot.style.display = "none"),
              (theItem.innerHTML = ""),
              (caseOkay.style.display = "none");
          }),
          casesOpened++,
          console.log(`Got Sound: ${o}`),
          playSound("CaseOpening"));
  }
}
