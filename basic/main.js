// for (let i = 0; i < clg.length; i++) {
//   console.log(clg[i].name);
// }
// clg.map(function (item, i) {
//   console.log(item);
// });

// function NameOfFun(name) {
//   console.log(name);
// }

const NameOfFun = () => {
  console.log("name");
};
const NameOfFun2 = (name) => console.log(name);

// NameOfFun2("Mrinmoy Ghosh");

let clg = [
  {
    name: "NSEC",
    year: 1992,
  },
  {
    name: "NBU",
    year: 2005,
  },
];

// let res = clg.map((item, index) => {
//   // console.log(`Year of Establishment of ${item.name} is ${item.year}`);
//   if (item.year >= 2000) {
//     return item.name;
//   } else {
//     return null;
//   }
// });

// let res = clg.filter((item) => item.year >= 2000);
// console.log(res);
// res.map((item) => console.log(item.name, item.year));

// Year of Establishment of NSEC is 1992

let arr = [1, 2, 5, 9, 10];
let sum = arr.reduce((acc, cur) => {
  console.log(acc, cur);
  return acc + cur;
}, 5);
console.log("Total: " + sum);
