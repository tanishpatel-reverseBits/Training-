const parent = document.getElementById("parent");
const child = document.getElementById("child");
const list = document.getElementById("list");

parent.addEventListener(
  "click",
  (e) => console.log(e.target, e.currentTarget, e.type),
  { capture: true }
);

child.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log(e.target, e.currentTarget, e.type);
});

list.addEventListener("click", (e) => {
  e.stopPropagation();
  if (e.target.tagName === "LI") {
    console.log(e.target.innerText);
  }
});

const el = document.getElementById("text");

console.log(el.style.color);
console.log(getComputedStyle(el).color);
