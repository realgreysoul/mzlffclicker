var clickCount = document.getElementById("clickCount"),
  clicks = 0,
  perClick = 1,
  clickSound = "Default",
  unlockedClickSounds = ["Default"];
document.getElementById("clicker").addEventListener("click", function () {
  (clicks += perClick),
    (clickCount.innerText = `Чикенбеконов: ${clicks}`),
    totalClicks++,
    checkStats(),
    checkCases(),
    playSound(clickSound);
});