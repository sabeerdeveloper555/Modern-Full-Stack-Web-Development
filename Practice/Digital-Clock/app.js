const clockEl = document.getElementById("clock");
setInterval(() => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  clockEl.textContent = `${hours}:${minutes}:${seconds}`;
}, 1000);
