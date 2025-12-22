const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const mobileMenu = document.getElementById("mobileMenu");
const menuLinks = document.querySelectorAll(".menu-link");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  mobileMenu.classList.add("hidden");
});

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});

function updateTime() {
  const options = {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  };

  const time = new Intl.DateTimeFormat("en-IN", options).format(new Date());

  document.getElementById("time").textContent = `IND ${time}`;
}

function ImageTrailing() {
  try {
    var Page = document.querySelector("#hero");
    if (!Page) return;

    const images = Array.from(
      { length: 9 },
      (_, i) => `./assets/${i + 1}.avif`
    );

    var lastX = 0;
    var lastY = 0;
    const distanceThreshold = 140;

    Page.addEventListener("mousemove", (e) => {
      if (e.target.closest("nav")) return;

      const rect = Page.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const dx = mouseX - lastX;
      const dy = mouseY - lastY;
      const distance = Math.sqrt(dx ** 2 + dy ** 2);

      if (distance > distanceThreshold) {
        const img = document.createElement("img");
        img.src = images[Math.floor(Math.random() * images.length)];
        img.style.position = "absolute";
        img.style.width = "180px";
        img.style.height = "240px";
        img.style.left = `${mouseX}px`;
        img.style.top = `${mouseY}px`;
        img.style.zIndex = "10";
        img.style.transform = `translate(-50%, -50%)`;

        Page.appendChild(img);

        gsap.fromTo(
          img,
          {
            scale: 0,
            rotate: 15,
          },
          {
            scale: 1,
            rotate: 0,
            duration: 0.5,
          }
        );

        setTimeout(() => {
          gsap.to(img, {
            y: 100,
            scale: 0,
            duration: 0.5,
            ease: Expo.easeInOut,
            onComplete: () => {
              img.remove();
            },
          });
        }, 600);

        lastX = mouseX;
        lastY = mouseY;
      }
    });
  } catch (error) {
    console.warn("ImageTrailing: Elements not found");
  }
}

ImageTrailing();
updateTime();
setInterval(updateTime, 1000);
