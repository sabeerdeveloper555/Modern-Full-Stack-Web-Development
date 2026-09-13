const textareaEl = document.getElementById("textInput");
const paraCharCountEl = document.getElementById("charCount");

textareaEl.addEventListener("input", () => {
  if (textareaEl.value.length > 100) {
    paraCharCountEl.textContent = 'Maximum 100 characters are allowed';
    paraCharCountEl.classList.add("warning");
    
  } else {
    paraCharCountEl.textContent = `Characters: ${textareaEl.value.length}`;
    paraCharCountEl.classList.remove("warning");
  }
});
