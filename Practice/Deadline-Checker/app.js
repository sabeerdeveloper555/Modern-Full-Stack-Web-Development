const deadlineEl = document.getElementById("deadline");
const checkBtnEl = document.getElementById("checkBtn");
const resultEl = document.getElementById("result");

checkBtnEl.addEventListener("click", () => {
  if (deadlineEl.value === "") {
    resultEl.textContent = "Please select deadline";
    return;
  }

  const deadline = new Date(deadlineEl.value);
  deadline.setHours(0, 0, 0, 0);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (deadline < today) {
    resultEl.textContent = "Deadline has passed";
    resultEl.classList.add("error");
    resultEl.classList.remove("today", "success");
    return;
  }

  if (deadline.getTime() === today.getTime()) {
    resultEl.textContent = "Deadline is today";
    resultEl.classList.add("today");
    resultEl.classList.remove("error", "success");
    return;
  }

  const difference = deadline - today;
  const daysRemaining = Math.ceil(difference / (1000 * 60 * 60 * 24));
  resultEl.textContent = `Deadline is in ${daysRemaining} days`;
  resultEl.classList.add("success");
  resultEl.classList.remove("error", "today");
});
