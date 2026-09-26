const birthDate = document.getElementById("birthDate");
const calculateBtn = document.getElementById("calculateBtn");
const result = document.getElementById("result");

const today = new Date();
// console.log(today);

calculateBtn.addEventListener("click", () => {
  if (birthDate.value === "") {
    result.textContent = "Please select your birth date";
    return;
  }
  const birth = new Date(birthDate.value);
  
  if (birth > today) {
    result.textContent = "Birth date cannot be in future";
    return;
  }

  const birthYear = birth.getFullYear();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();
  const birthMonth = birth.getMonth();
  const currentDay = today.getDate();
  const birthDay = birth.getDate();

  let age = currentYear - birthYear;

  if (
    currentMonth < birthMonth ||
    (currentMonth === birthMonth && currentDay < birthDay)
  ) {
    age--;
  }
  result.textContent = `You are ${age} years old`;
});
