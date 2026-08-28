let formElement = document.querySelector(".form-section form");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let userName = event.target.username.value;
    let userEmail = event.target.userEmail.value;
    let userContact = event.target.userContact.value;
    console.log(`${userName}, ${userEmail}, ${userContact}`);

    event.target.reset();
});

