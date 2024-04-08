// let a = 16;
// a > 60
//   ? console.log("Aged")
//   : a >= 18
//   ? console.log("Adult")
//   : console.log("Underaged");

let a = [
  {
    name: "Mrinmoy",
    age: 27,
  },
  {
    name: "Aparna",
    age: 20,
  },
  {
    name: "xyz",
    age: 16,
  },
];

// const Adult = a.map((item, index) => {
//   if (item.age >= 18) {
//     return `${item.name}'s age is ${item.age}`;
//   } else {
//     return null;
//   }
// });

// const Adult = a.filter((item) => {
//   return item.age >= 18;
// });
const Adult = a.filter((item) => item.age >= 18);
// console.log(Adult);

let arr = [3, 5, 6, 1, 4];
let sum = arr.reduce((acc, item) => {
  console.log(acc, item);
  return acc + item;
}, 0);
console.log(`Total: ${sum}`);
