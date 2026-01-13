// debouncing
function debouncing(fn, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), delay);
  };
}

// throttling
function throttle(fn, delay) {
  let lastTime = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastTime >= delay) {
      fn.apply(this, args);
      lastTime = now;
    }
  };
}

// memoization
function memooize(fn) {
  let cache = {};
  return (n) => {
    if (cache[n]) return cache[n];
    cache[n] = fn(n);
    return cache[n];
  };
}

const slowSquare = memooize((n) => {
  console.log("Calculating...");
  return n * n;
});

console.log(slowSquare(5));
console.log(slowSquare(5));
console.log(slowSquare(6));
console.log(slowSquare(6));

// Avoiding Reflows
// const box = document.getElementById("box");
// for (let i = 0; i < 100; i++) {
//   box.style.width = box.offsetWidth + 10 + "px";
// }

// let newWidth = box.offsetWidth;
// for (let i = 0; i < 100; i++) {
//   newWidth += 10;
// }
// box.style.width = newWidth + "px";

// Efficient Loops
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
}
for (let i = 0, len = items.length; i < len; i++) {
  console.log(items[i]);
}
for (const item of items) {
  console.log(item);
}
items.forEach((item) => console.log(item));

// Optimize slow functions
function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}
console.log(sum([1, 2, 3]));
console.log(sum([1, 2, 3]));
console.log(sum([4, 5, 6]));
console.log(sum([4, 5, 6]));

let lastArr = null;
let lastTotal = null;
function optimizedSum(arr) {
  if (arr === lastArr) {
    return lastTotal;
  }

  const total = arr.reduce((acc, ele) => acc + ele, 0);

  lastArr = arr;
  lastTotal = total;
  return total;
}
console.log(optimizedSum([1, 2, 3]));
console.log(optimizedSum([1, 2, 3]));
console.log(optimizedSum([4, 5, 6]));
console.log(optimizedSum([4, 5, 6]));
