gsap.registerPlugin(ScrollTrigger);

const t1 = gsap.timeline();

const title = document.getElementById("hero-title-wrapper");
const desc = document.getElementById("hero-desc-wrapper");
const input = document.getElementById("input");
const logo = document.getElementById("logo");
const cart = document.getElementById("cart");
const navLinks = document.querySelectorAll(".nav-links");
const choose = document.querySelectorAll(".choose");
const product = document.querySelectorAll(".product");
const eImage = document.querySelector(".eImage");
const mImage1 = document.querySelectorAll(".mImage1");
const mImage2 = document.querySelector(".mImage2");
const eShadow = document.querySelector(".eShadow");
const mShadow = document.querySelector(".mShadow");
const up = document.querySelectorAll(".up");
const down = document.querySelector(".down");

t1.from(logo, {
  y: -80,
  opacity: 0,
  duration: 0.3,
  ease: "Power3.out",
})
  .from(navLinks, {
    y: -80,
    opacity: 0,
    stagger: 0.05,
    duration: 0.5,
    ease: "Power3.out",
  })
  .from(cart, {
    y: -100,
    opacity: 0,
    stagger: 0.3,
    duration: 0.3,
    ease: "Power3.out",
  });

if (title) {
  const placeholder = "|||BR|||";

  const cleanHTML = title.innerHTML
    .replace(/\s+/g, " ")
    .trim()
    .replace(/<br\s*\/?>/gi, placeholder);

  const words = cleanHTML.split(" ");

  console.log(words);

  title.innerHTML = words
    .map((word) => {
      if (word === placeholder) return "<br />";

      return `
        <span class="inline-block overflow-hidden">
          <span class="inline-block word">${word}</span>
        </span>
      `;
    })
    .join("");

  t1.from(".word", {
    y: "-100%",
    stagger: 0.12,
    duration: 0.7,
    ease: "power3.out",
  });
}

if (desc) {
  const placeholder = "|||BR|||";

  const cleanHTML = desc.innerHTML
    .replace(/\s+/g, " ")
    .trim()
    .replace(/<br\s*\/?>/gi, placeholder);

  const words = cleanHTML.split(" ");

  desc.innerHTML = words
    .map((word) => {
      if (word === placeholder) return "<br />";

      return `
        <span class="inline-block overflow-hidden">
          <span class="inline-block word-desc">${word}</span>
        </span>
      `;
    })
    .join("");

  t1.from(".word-desc", {
    y: "-100%",
    delay: -0.8,
    stagger: 0.05,
    duration: 0.5,
    ease: "power3.out",
  });
}

t1.from("#input", {
  y: "100%",
  delay: -0.29,
  duration: 0.3,
  ease: "power4.out",
});

const t2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#chooseUs",
    start: "top 60%",
    once: true,
  },
});

t2.from(choose, {
  opacity: 0,
  y: "20%",
  stagger: 0.15,
  duration: 0.3,
  ease: "Power4.out",
});

const t3 = gsap.timeline({
  scrollTrigger: {
    trigger: "#products",
    start: "top 60%",
    once: true,
  },
});

t3.from(product, {
  opacity: 0,
  y: "10%",
  stagger: 0.3,
  duration: 0.4,
  ease: "Power4.out",
});

const t4 = gsap.timeline({
  scrollTrigger: {
    trigger: "#experiences",
    start: "top 50%",
    once: true,
  },
});

t4.from(eImage, {
  xPercent: -100,
  duration: 0.5,
  ease: "Power4.out",
}).from(eShadow, {
  opacity: 0,
  duration: 0.2,
  ease: "Power4.out",
});

const t5 = gsap.timeline({
  scrollTrigger: {
    trigger: "#materials",
    start: "top 50%",
    once: true,
  },
});

t5.from(".mImage1", {
  xPercent: -100,
  duration: 0.6,
  ease: "power4.out",
})
  .from(
    ".mImage2",
    {
      xPercent: 100,
      duration: 0.6,
      ease: "power4.out",
    },
    "-=0.6"
  )
  .from(
    ".mShadow",
    {
      opacity: 0,
      duration: 0.2,
    },
    "-=0.2"
  );

const t6 = gsap.timeline({
  scrollTrigger: {
    trigger: "#testimonials",
    start: "top 20%",
    once: true,
  },
});

t6.from(up, {
  y: -60,
  opacity: 0,
  duration: 0.6,
  ease: "power4.out",
}).from(
  down,
  {
    y: 60,
    opacity: 0,
    duration: 0.6,
    ease: "power4.out",
  },
  "-=0.6"
);
