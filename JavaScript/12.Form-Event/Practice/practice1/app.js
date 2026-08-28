let formElement = document.querySelector(".form-section form");

let userData = [];

let errorDiv = document.querySelector(".error");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  let userName = event.target.username.value;
  let userEmail = event.target.userEmail.value;
  let userContact = event.target.userContact.value;

  let userObject = {
    userName,
    userEmail,
    userContact,
  };

  let checkMyEmail = userData.find((item) => item.userEmail == userEmail);

  if (checkMyEmail) {
    errorDiv.innerHTML = "Email Already Exist...";
    setTimeout(() => {
      errorDiv.innerHTML = '';
    }, 2000);
  } else {
    userData.push(userObject);
    storeDataInTable();
  }
});

let tableBody = document.querySelector("#tableBody");
let storeDataInTable = () => {
  let tableRow = "";
  userData.forEach((items, index) => {
    tableRow += `
            <tr>
              <td>${index + 1}</td>
              <td>${items.userName}</td>
              <td>${items.userEmail}</td>
              <td>${items.userContact}</td>
              <td>
                <button data-id=${index}>Delete</button>
              </td>
            </tr>
    `;
  });

  tableBody.innerHTML = tableRow;
};

tableBody.addEventListener("click", (e) => {
  if (e.target.tagName == "BUTTON") {
    if (confirm("Are you sure want to delete")) {
      let deleteData = e.target.getAttribute("data-id");
      userData.splice(deleteData, 1);
      storeDataInTable();
    }
  }
});
