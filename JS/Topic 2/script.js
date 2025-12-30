// Create counter using closure
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}
const increaseCount = outer();
increaseCount();
increaseCount();
increaseCount();

// Fix hoisting-related bugs
console.log(a);
var a = 10;

let b = 10;
console.log(b);

var sayHi = function () {
  console.log("Hi");
};
sayHi();

// Implement private variables using closures
function createUser(n) {
  let password = "secret123";

  return {
    getName() {
      return n;
    },
    checkPassword(p) {
      return p === password;
    },
  };
}

const u = createUser("Tanish");

u.getName();
u.checkPassword("x");
u.password;
