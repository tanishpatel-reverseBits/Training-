// Memory Leak
// let c = 0;
// function startLeakyProcess() {
//   setInterval(() => {
//     c++;
//     console.log("Counter:", c);
//   }, 1000);
// }
// startLeakyProcess();
// startLeakyProcess();

// resolved Memory Leak
let counter = 0;
let interval = null;

function startProcess() {
  if (interval !== null) return;

  interval = setInterval(() => {
    counter++;
    console.log("Counter:", counter);
  }, 1000);
}

function stopProcess() {
  clearInterval(interval);
  interval = null;
}

startProcess();

setTimeout(() => {
  stopProcess();
  console.log("Process stopped 🛑");
}, 5000);
