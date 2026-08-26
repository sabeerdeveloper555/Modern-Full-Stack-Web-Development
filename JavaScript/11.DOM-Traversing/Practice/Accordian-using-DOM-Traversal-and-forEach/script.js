let allQuestionList = document.querySelectorAll(".faq-item h3");

allQuestionList.forEach((question, index) => {
  question.addEventListener("click", () => {

    allQuestionList.forEach((q, i) => {

      if (i !== index) {
        q.lastElementChild.classList.remove("rotateIcon");
        q.nextElementSibling.classList.remove("showAnswer");
      }

    });
    question.lastElementChild.classList.toggle("rotateIcon");
    question.nextElementSibling.classList.toggle("showAnswer");
  });
});