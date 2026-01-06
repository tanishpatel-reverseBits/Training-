// console.log(typeof NaN);

// let x = "hello";
// x = "Hello";
// console.log(x);

// var b = 0.6 + 0.3;
// console.log(b);

// console.log(NaN === NaN);
// console.log(1 / 0);
// console.log(-1 / 0);

// console.log(typeof null);
// var s = Symbol("id");
// console.log(s);

// console.log(9007199254740992 + 1 === 9007199254740992);
// var n = BigInt(9007199254740992) + BigInt(1);
// console.log(n);

// let obj = {
//   1: "one",
//   1: "string one",
// };

// let id = Symbol("id");
// obj[id] = 123;
// obj[1] = "hi";

// console.log(obj);

// obj = {};

// const arr = [10, 20, 30];
// arr.push(4);
// console.log(arr);

// const person1 = {
//   name: "Tanish",
//   address: {
//     city: "Delhi",
//   },
// };
// const person2 = { ...person1 }; // shallow copy

// person2.name = "Krish";
// person2.address.city = "Ahmedabad";

// console.log(person1.name); // Tanish
// console.log(person1.address.city); //Ahmedabad

// const arr1 = [1, 2, 3];
// const arr2 = [...arr1];
// arr2[2] = 4;
// console.log(arr1); // [1, 2, 3]
// console.log(arr2); // [1, 2, 4]

// const a = [{ x: 1 }, 2];
// const f = [...a];
// f[0].x = 2;
// f[1] = 3;
// console.log(a[0].x); // 2 => because it creates shallow copy
// console.log(a[1]); // 2 =>  because it creates shallow copy

// const c = { x: 1 };
// const d = { y: 2 };
// const merged = { ...c, ...d, x: 5 }; // x becomes 5
// console.log(merged); // { x: 5, y: 2 }

// const user = {
//   name: "Tanish",
//   age: 22,
//   address: { city: "Ahmedabad" },
// };
// console.log(Object.entries(user)); // ["name", "age"]
// console.log(Object.hasOwn(user, "age"));
// Object.freeze(user);
// user.address.city = "Krish";
// user.role = "Admin";
// delete user.name;
// console.log(user);
// console.log(Object.isSealed(user));
// console.log(Object.getPrototypeOf(user));

// const proto = {
//   greet() {
//     console.log("Hello");
//   },
// };
// u = Object.create(proto);
// console.log(u.greet());

// const user3 = {};

// Object.defineProperty(user3, "id", {
//   value: 101,
//   writable: false,
// });

// user3.id = 200;
// console.log(user3.id); // 101

// console.log(true + false);
// console.log([, , ,].length);
// console.log([1, 2, 3, ""] + [4, 5, 6]);
// console.log(+true);
// console.log(parseInt(0.0000005)); //10
// console.log(true == "true");
// console.log(Number("true"));
// console.log(Number(undefined));
// console.log(Number(null));

// function fn() {
//   console.log(arguments);
// }
// fn(1, 2);

// aray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const nex = aray.reduce((acc, cur, i, arr) => acc + cur + i, 0);
// console.log(nex);

// const uers = ["a", "b", "c"];

// const ob = uers.reduce((acc, u) => {
//   acc[u] = true;
//   return acc;
// }, {});

// console.log(ob);

// const usr = {
//   name: "Tanish",
//   address: { city: "Delhi" },
// };

// const updated = {
//   ...usr,
//   address: {
//     ...usr.address,
//     city: "Mumbai",
//   },
// };

// console.log(usr);
// console.log(updated);

const a = [1, 2, 3];
console.log(a.at(-1));

const array1 = ["a", "b", "c"];
const iterator = array1.entries();
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);

const array2 = ["d", "e", , "f"];
const array3 = ["g", "h", "i"];
const array4 = ["j", "k", , "l"];
console.log(array1.concat(array2, array3, array4));
array4.push("m");
console.log(array1.concat(array2, array3, array4));

console.log([1, 2, 3, 4, 5].copyWithin(0, 3));
// [4, 5, 3, 4, 5]
console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4));
// [4, 2, 3, 4, 5]
console.log([1, 2, 3, 4, 5].copyWithin(-2, -3, -1));
// [1, 2, 3, 3, 4]

console.log([1, , 3].every((x) => x !== undefined));
console.log([2, , 2].every((x) => x === 2));

const array = [1, 2, 3, 4];

console.log(array.fill(0, 2, 4));
console.log(array.fill(5, 1));
console.log(array.fill(6));

const arr2 = [0, 1, [2, [3, [4, 5]]]];
console.log(arr2.flat());
console.log(arr2.flat(2));
console.log(arr2.flat(Infinity));

const arr3 = [1, 2, 1, 2, 1];
const result = arr3.flatMap((ele) => (ele === 2 ? [2, 2] : 1));
console.log(result);
console.log(arr3.includes(2, 2));
const keys = arr3.keys();
for (let key of keys) {
  console.log(key);
}

const months = ["Jan", "March", "April", "December"];
months.splice(1, 0, "Feb");
months.splice(
  4,
  0,
  "May",
  "June",
  "July",
  "Augest",
  "September",
  "Octomber",
  "November"
);
console.log(months);
console.log(arr3.toSorted().toReversed());

const primes = new Set([3, 5, 7, 11, 13, 17, 19]);
const odds = new Set([3, 5, 7, 9, 11, 13, 15, 17, 19]);
console.log(odds.isSupersetOf(primes)); // false
