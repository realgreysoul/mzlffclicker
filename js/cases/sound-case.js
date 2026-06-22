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
    "LoudBurping3",
    "Mom",
    "SonOfAWhore",
    "Secret",
  ];
function getSoundCaseResult() {
  return soundCaseContents[
    Math.floor(Math.random() * soundCaseContents.length)
  ];
}
async function openSoundCase() {
  showModal(caseDialog);
  var e = document.getElementsByClassName("soundCaseCard"),
    n = document.getElementsByClassName("soundCaseSpacer");
  (e[0].remove(), n[0].remove());
  var a = casesInventory.indexOf("Рандомный звук");
  (-1 !== a && casesInventory.splice(a, 1), caseUpdate());

  theItem.classList.remove("case-opening", "case-text-enter", "case-text-exit");
  theItem.innerHTML = "";

  for (var s = 100; s <= 500; s += 10) {
    await delay(s);
    var o = soundUnIdify(getSoundCaseResult());
    if (500 !== s) {
      cycleCaseText(o);
      playSound("CaseRolling");
    } else {
      await cycleCaseText(o);

      -1 === unlockedClickSounds.indexOf(soundIdify(o)) &&
        unlockedClickSounds.push(soundIdify(o));

      theItem.classList.add("case-opening");

      ((youGot.style.display = "block"),
        (caseOkay.style.display = "inline-block"));

      caseOkay.onclick = function () {
        ((youGot.style.display = "none"),
          (theItem.innerHTML = ""),
          (caseOkay.style.display = "none"));
        theItem.classList.remove("case-opening");
        closeModal(caseDialog);
      };

      (casesOpened++, console.log(`Got Sound: ${o}`), playSound("CaseOpening"));
    }
  }
}
