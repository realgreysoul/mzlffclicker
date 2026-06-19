var clickCaseTimeout,
  clicksRegex = new RegExp("d*"),
  clickCaseContents = [
    "500 чикенбеконов",
    "500 чикенбеконов",
    "500 чикенбеконов",
    "500 чикенбеконов",
    "1000 чикенбеконов",
    "1000 чикенбеконов",
    "1000 чикенбеконов",
    "1500 чикенбеконов",
    "1500 чикенбеконов",
    "2500 чикенбеконов",
    "5000 чикенбеконов",
    "10000 чикенбеконов",
    "25000 чикенбеконов",
  ];
function getClickCaseResult() {
  return clickCaseContents[
    Math.floor(Math.random() * clickCaseContents.length)
  ];
}
async function openClickCase() {
  showModal(caseDialog);
  var e = document.getElementsByClassName("clickCaseCard"),
    s = document.getElementsByClassName("clickCaseSpacer");
  e[0].remove(), s[0].remove();
  var a = casesInventory.indexOf("Рандомные чикенбеконы");
  -1 !== a && casesInventory.splice(a, 1), caseUpdate();
  
  theItem.classList.add("case-rolling");
  
  for (var n = 100; n <= 500; n += 10) {
    await delay(n);
    var l = getClickCaseResult();
    theItem.innerHTML = l;
    applyCaseSlideAnimation();
    if (500 !== n) playSound("CaseRolling");
    else {
      theItem.classList.remove("case-rolling");
      theItem.classList.add("case-opening");
      
      (youGot.style.display = "block"),
        (caseOkay.style.display = "inline-block");
      
      var oldListener = caseOkay.onclick;
      caseOkay.onclick = function () {
        (youGot.style.display = "none"),
          (theItem.innerHTML = ""),
          (caseOkay.style.display = "none");
        theItem.classList.remove("case-opening");
        closeModal(caseDialog);
      };
      
      casesOpened++,
        console.log(`Got Clicks: ${l}`);
      var c = parseInt(l);
      (clicks += c),
        (clickCount.innerText = `Чикенбеконов: ${clicks}`),
        playSound("CaseOpening");
    }
  }
}
