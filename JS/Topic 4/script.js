// Build utility functions
const sum = (a, b) => a + b;
const isEven = (num) => num % 2 == 0;
const capitalize = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

console.log(sum(1, 2));
console.log(isEven(2));
console.log(capitalize("hELLO"));

// Refactor imperative code into functional style

//imperative code
const activeUsers1 = [];
const users = [
  { name: "Alice", active: true },
  { name: "Bob", active: false },
  { name: "Charlie", active: true },
];
for (let user of users) {
  if (user.active) {
    activeUsers1.push(user.name);
  }
}
console.log(activeUsers1);

//functional code
const activeUsers2 = users
  .filter((user) => user.active)
  .map((user) => user.name);

console.log(activeUsers2);
