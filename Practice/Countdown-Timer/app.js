const timerEl = document.getElementById("timer");
const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");

let time = 10;
let intervalId;
let isRunning = false;

startBtn.addEventListener("click", () => {
  if (isRunning) {
    return;
  }

  isRunning = true;

  intervalId = setInterval(() => {
    time--;
    timerEl.textContent = time;
    if (time === 0) {
      clearInterval(intervalId);
      isRunning = false;
    }
  }, 1000);
});

resetBtn.addEventListener("click", () => {
  time = 10;
  timerEl.textContent = time;
  clearInterval(intervalId);
  isRunning = false;
});
