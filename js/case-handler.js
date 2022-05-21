var caseDialog = document.getElementById("caseDialog"),
  theItem = document.getElementById("theItem"),
  youGot = document.getElementById("youGot"),
  caseOkay = document.getElementById("caseOkay"),
  caseList = document.getElementById("caseList"),
  noCases = document.getElementById("noCases"),
  soundCaseCardDescription =
    "Вы устали от однообразного звука при дрочке чикенбеконов левой кнопкой мыши? Хотите испытывать совершенно новое ощущение при дрочке? Получите совершенно новый звук, который вы сможете активировать в настройках!",
  clickCaseCardDescription =
    "Устали дрочить кнопку мыши и получать мало чикенбеконов? Устали постоянно покупать различные выебоны? Кейс с рандомным выпадением чикенбеконов - самое то!",
  cases = ["Рандомный звук", "Рандомные чикенбеконы"],
  caseData = [
    { clicks: 150, got: !1 },
    { clicks: 300, got: !1 },
    { clicks: 500, got: !1 },
    { clicks: 1e3, got: !1 },
    { clicks: 1500, got: !1 },
    { clicks: 2500, got: !1 },
    { clicks: 5e3, got: !1 },
    { clicks: 8e3, got: !1 },
    { clicks: 12e3, got: !1 },
    { clicks: 17e3, got: !1 },
    { clicks: 25e3, got: !1 },
    { clicks: 32e3, got: !1 },
  ],
  casesInventory = [];
function checkCases() {
  for (x in caseData)
    if (clicks >= caseData[x].clicks && !caseData[x].got) {
      var e = cases[generateNumberBetween(0, cases.length - 1)];
      (caseData[x].got = !0),
        casesInventory.push(e),
        console.log(`Got Case: ${e}`),
        playSound("NewCase");
      var a = { message: `Вы получили наёбку "${e}"`, timeout: 3e3 };
      return (
        snackbar.MaterialSnackbar.showSnackbar(a),
        showCase(e, caseIdify(e)),
        void caseUpdate()
      );
    }
}
function caseIdify(e) {
  switch (e) {
    case "Рандомный звук":
      return "soundCase";
    case "Рандомные чикенбеконы":
      return "clickCase";
    default:
      var a = { message: `Наёбка "${e}" не найдена!`, timeout: 2e3 };
      snackbar.MaterialSnackbar.showSnackbar(a);
  }
}
function caseUnIdify(e) {
  switch (e) {
    case "soundCase":
      return "Рандомный звук";
    case "clickCase":
      return "Рандомные чикенбеконы";
    default:
      var a = { message: `Наёбка "${e}" не найдена!`, timeout: 2e3 };
      snackbar.MaterialSnackbar.showSnackbar(a);
  }
}
function showCase(e, a) {
  var s = document.createElement("div"),
    c = document.createElement("div"),
    t = document.createElement("div"),
    n = document.createElement("h3"),
    o = document.createElement("p"),
    d = document.createElement("div"),
    i = document.createElement("a"),
    r = document.createElement("div");
  switch (
    (s.classList.add(
      `${a}Card`,
      "card-wide",
      "mdl-card",
      "mdl-shadow--2dp",
      "mdl-cell",
      "mdl-cell--3-col-desktop",
      "mdl-cell--4-col-tablet"
    ),
    (c.id = `${a}CardImage`),
    c.classList.add("mdl-card__title"),
    t.classList.add("mdl-card__supporting-text"),
    (n.innerText = e),
    a)
  ) {
    case "soundCase":
      o.innerText = soundCaseCardDescription;
      break;
    case "clickCase":
      o.innerText = clickCaseCardDescription;
      break;
    default:
      var l = { message: `Наёбка "${theCase}" не найдена!`, timeout: 2e3 };
      snackbar.MaterialSnackbar.showSnackbar(l);
  }
  d.classList.add("mdl-card__actions", "mdl-card--border"),
    i.classList.add(
      "mdl-button",
      "mdl-button--colored",
      "mdl-js-button",
      "mdl-js-ripple-effect"
    ),
    (i.innerText = "Открыть наёбку"),
    i.addEventListener("click", function () {
      switch (a) {
        case "soundCase":
          openSoundCase();
          break;
        case "clickCase":
          openClickCase();
          break;
        default:
          var e = { message: `Наёбка "${theCase}" не найдена!`, timeout: 2e3 };
          snackbar.MaterialSnackbar.showSnackbar(e);
      }
    }),
    r.classList.add(`${a}Spacer`, "mdl-layout-spacer"),
    s.append(c),
    t.append(n),
    t.append(o),
    s.append(t),
    d.append(i),
    s.append(d),
    caseList.append(s),
    caseList.append(r);
}
function loadCases() {
  for (x in (console.log("Loading cases..."), casesInventory))
    switch (caseIdify(casesInventory[x])) {
      case "soundCase":
        showCase("Рандомный звук", "soundCase", soundCaseCardDescription);
        break;
      case "clickCase":
        showCase(
          "Рандомные чикенбеконы",
          "clickCase",
          clickCaseCardDescription
        );
        break;
      default:
        var e = {
          message: `Кейс "${casesInventory[x]}" не найден!`,
          timeout: 2e3,
        };
        snackbar.MaterialSnackbar.showSnackbar(e);
    }
  caseUpdate();
}
function caseUpdate() {
  0 === casesInventory.length
    ? (noCases.style.display = "block")
    : (noCases.style.display = "none");
}