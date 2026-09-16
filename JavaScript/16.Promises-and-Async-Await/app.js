// console.log("Task1");

// setTimeout(() => {
//     console.log("Task2");
// }, 2000);

// console.log("Task3");

// Handle synchronous by Callback Hell
// setTimeout(() => {
//   console.log("Task1");
//   setTimeout(() => {
//     console.log("Task2");
//     setTimeout(() => {
//       console.log("Task3");
//     }, 5000);
//   }, 3000);
// }, 1000);

// let loginStatus = false;
// let myPromise = new Promise((resolve, reject) => {
//   if (loginStatus) {
//     resolve({ status: 1, msg: "Login Successfully" });
//   } else {
//     reject({ status: 0, msg: "Invalid username or password" });
//   }
// });

// myPromise
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// let doneTask = (taskNumber, time) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Task", taskNumber);
//       resolve();
//     }, time);
//   });
// };

// doneTask(1, 1000)
//   .then((response) => doneTask(2, 2000))
//   .then((response) => doneTask(3, 1000));

let doHomeWork = (subject) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${subject} homework done`);
    }, 1000);
  });
};

let finishHomeWork = async () => {
  // let myTask1 = await doHomeWork("Math");
  // console.log(myTask1);
  // let myTask2 = await doHomeWork("Science");
  // console.log(myTask2);
  // let myTask3 = await doHomeWork("English");
  // console.log(myTask3);
  // let myTask4 = await doHomeWork("Urdu");
  // console.log(myTask4);

  let allPromise = await Promise.all([
    doHomeWork("Math"),
    doHomeWork("Science"),
    doHomeWork("English"),
    doHomeWork("Urdu"),
  ]);

  console.log(allPromise);

  console.log("My all tasks are done.");
};

finishHomeWork();
