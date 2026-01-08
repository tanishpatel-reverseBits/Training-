// build Interactive components
const p = document.getElementById("target");
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  p.classList.toggle("hidden");
});

//Implement event delegation
const menu = document.getElementById("menu");
menu.addEventListener("click", (e) => {
  const item = e.target.closest(".item");
  if (!item) return;
  console.log(e.target.textContent);
});

//Optimize DOM updates
const list = document.getElementById("list");

for (let i = 1; i <= 100; i++) {
  const li = document.createElement("li");
  li.textContent = `Item ${i}`;
  list.appendChild(li);
}

const fragment = document.createDocumentFragment();
for (let i = 1; i <= 100; i++) {
  const li = document.createElement("li");
  li.textContent = `Item ${i}`;
  fragment.appendChild(li);
}
list.appendChild(fragment);
