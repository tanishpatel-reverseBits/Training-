// Trace execution order of JS code

console.log("1: Global start");

var a = 10;

function outer() {
  console.log("2: outer start");

  let b = 20;

  setTimeout(function timeoutCb() {
    console.log("6: setTimeout", a, b);
  }, 0);

  Promise.resolve().then(function promiseCb() {
    console.log("5: promise", a, b);
  });

  for (let i = 0; i < 2; i++) {
    console.log("3: loop", i);
  }

  return function inner() {
    console.log("7: inner", a, b);
  };
}

const fn = outer();

console.log("4: Global end");

fn();

// blocking code

console.log("Start");

for (let i = 0; i < 1e9; i++) {}

console.log("End");

// non-blocking code

console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

console.log("End");
