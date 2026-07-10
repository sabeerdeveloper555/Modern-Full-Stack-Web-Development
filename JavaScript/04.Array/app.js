// let users = ["Sabeer", "Ahmed", "Bazil", "Omer"];
// console.log(users);

// Array ki values ko index ka number ka use kar ke access kar sakte hain.
// console.log(users[0]);
// console.log(users[2]);
// console.log(users[3]);

// let num = [10, 20, 30, 40, 50, [99, 77, 88]];
// console.log(num[5][1]);

// let users = ["Sabeer", "Ahmed", "Bazil", "Omer", "Muzammil", "Hammad"];

// let t = users.length;

// for, for in aur for of ka use kar ke array ki values iterate karey ge

// for(let i = 0; i < users.length; i++){
//     console.log(i, users[i]);
// }

// Members ko reverse mein print karna hai

// for (let i = t - 1; i >= 0; i--) {
//     console.log(i, users[i]);
// }

// let arr = [10, 20, 30, 40, 50, 99];

// For of loop array ke members nikal ke deta hai
// for (let arrs of arr) {
//   console.log(arrs);
// }

// For in loop array ke index nikal ke deta hai
// for (let k in arr) {
//   console.log(k,":", arr[k]);
// }

// Array ka sum nikalna hai
// let arr = [10, 20, 30, 40, 50, 60];
// let sum = 0;
// for(let items of arr){
//     sum += items;
//     console.log(items);
// }
// console.log(`The total sum of an array is: ${sum}`);

// Array mein se even numbers nikalna hai
// let arr = [10, 20, 30, 40, 50, 60, 55, 99, 77, 88, 44, 56, 21];

// for (let items of arr) {
//   if (items % 2 === 0) {
//     console.log(items);
//   }
// }

// Array se odd ne numbers nikalna hai
// let arr = [10, 20, 30, 40, 50, 60, 55, 99, 77, 88, 44, 56, 21];

// for (let items of arr) {
//   if (items % 2 !== 0) {
//     console.log(items);
//   }
// }

// Array ki values ko update jarna hai

// let l = [11, 22, 33, 44, 55, 66, 77];
// l[4] = 120;
// console.log(l);

// console.log("-----------Array Mutating Methods--------------");

// 1.push(): push method last mein value add karey ga array.
// let arr1 = [10, 20, 30, 40, 50];
// arr1.push(60);
// arr1.push(70);
// arr1.push(80, 90, 100);
// console.log(arr1);

// 2.pop(): pop method last ki value remove karey ga
// let arr1 = [10, 20, 30, 40, 50, 60, 70, 80 ,90, 100];
// console.log(arr1.pop());
// console.log(arr1.pop());
// console.log(arr1.pop());
// console.log(arr1);

// 3.shift(); shift method start ki value remove karey ga.
// let arr1 = [10, 20, 30, 40, 50, 60, 70, 80 ,90, 100];
// console.log(arr1.shift());
// console.log(arr1.shift());
// console.log(arr1.shift());
// console.log(arr1);

// 4.unshift(); unshift method start ki value add karey ga.
// let arr1 = [10, 20, 30, 40, 50, 60, 70, 80 ,90, 100];
// console.log(arr1.unshift(5,8,9));
// console.log(arr1.unshift(6));
// console.log(arr1.unshift(7));
// console.log(arr1);

// 5.splice(); splice method value ko add, removes yah replace karta hai kisi specified index pe.
//array.splice(startIndex, deleteCount, item1, item2, ...);
//startIndex: Kis index se operation start karna hai
//deletCount: Kitne elements remove karne hain
//item1, item2...: (Optional) Jo naye elements add karne hain
// let arr1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// console.log(arr1);
// arr1.splice(1, 2, 200, 300, 400);
// console.log(arr1);
// arr1.splice(1, 0, 200, 300);
// console.log(arr1);

// 6. sort(): sort method array ki values ko sort karta hai
// let arr2 = [55, 77, 66, 99, 88, 33, 22, 11, 44];
// console.log(arr2.sort());

// let str = ["Sabeer", "Ahmed", "Bazil", "Omer", "Hammad"]
// console.log(str.sort());

// 7. reverse(): reverse method array ki values ko reverse karta hai
// let arr2 = [55, 77, 66, 99, 88, 33, 22, 11, 44];
// console.log(arr2.sort());
// console.log(arr2.reverse());

// 8. fill(): fill method array jo array ke ek ya zyada elements ko ek hi value se fill (replace) kar deta hai. fill() original array ko modify karta hai.

// array.fill(value, start, end);
// value: Jo value fill karni hai
//start (optional): Kis index se fill karna hai
//end (optional): Kis index tak fill karna hai (end index include nahi hota)

// let arr2 = [55, 77, 66, 99, 88, 33, 22, 11, 44];
// arr2.fill(5, 1, 4);
// console.log(arr2);

// Practice

// let l = [1,2,3,4];
// for(let v of l){
//     l.pop();
// }
// console.log(l);

/*Initial
[1,2,3,4]

Iteration 1
v = 1
pop()

[1,2,3]

----------------

Iteration 2
v = 2
pop()

[1,2]

----------------

Next iteration?

Array ki length ab sirf 2 hai.
Loop stop.

Final:

[1,2] */

// let l = [1, 2, 3, 4];
// for (let v of l) {
//   l[3] = v;
// }
// console.log(l);
//Round 1: l[3]=1 [1,2,3,1]
//Round 2: l[3]=2 [1,2,3,2]
//Round 3: l[3]=3 [1,2,3,3]
//Round 4: l[3]=3 [1,2,3,3]

// Non-Mutating Methods

//1. slice(): slice method data copy karta hai aur new array return karta hai

// let colors = ["red", "green", "blue", "yellow", "orange"]
// console.log(colors);
// console.log(colors.slice(1,4));

//2. concat(): concat method do ya teen array ko merge karta hai.

// let arr1 = [10, 20, 30, 40, 50];
// let arr2 = [11, 22, 33, 44, 55];
// let arr3 = [60, 70, 80, 90]
// let newArr = arr1.concat(arr2, arr3);
// console.log(newArr);

//3. includes(): includes method array ke values ko dhoondta hai.

// let n = [10, 15, 250, 25, 30, 35, 40, 45];
// console.log(n.includes(35));

//4. indexOf(): indexOf method array ke values ka index number nikalta hai.

// let n = [10, 15, 25, 30, 35, 40, 45];
// console.log(n.indexOf(30));

//5. join(): join method array ke values ko string mein convert karta hai
// let colors = ["red", "green", "blue", "yellow", "orange"]
// console.log(colors.join(", "));

//6. toString(): toString method array ke values ke darmyan comma laga deta hai agar koi aur separator lagaye ge to answer ko change nhi karega
// let colors = ["red", "green", "blue", "yellow", "orange"]
// console.log(colors.toString());




