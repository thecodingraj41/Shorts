// TCR Logo Intro Animation

const logo = document.querySelector(".logo");
const outerRing = document.querySelector(".outer-ring");
const innerRing = document.querySelector(".inner-ring");
const playShape = document.querySelector(".play-shape");
const title = document.querySelector(".title");
const subtitle = document.querySelector(".subtitle");
const particles = document.querySelectorAll(".particles span");

// Initial State
logo.style.opacity = "0";
logo.style.transform = "scale(.4) rotate(-25deg)";

outerRing.style.opacity = "0";
innerRing.style.opacity = "0";
playShape.style.opacity = "0";

// Logo Entry
setTimeout(() => {
  logo.style.transition = "1.2s ease";

  logo.style.opacity = "1";
  logo.style.transform = "scale(1) rotate(0deg)";
}, 300);

// Outer Ring
setTimeout(() => {
  outerRing.style.transition = ".8s";

  outerRing.style.opacity = "1";
}, 1000);

// Inner Ring
setTimeout(() => {
  innerRing.style.transition = ".8s";

  innerRing.style.opacity = "1";
}, 1300);

// Play Shape
setTimeout(() => {
  playShape.style.transition = ".8s";

  playShape.style.opacity = "1";
}, 1700);

// Final Glow
setTimeout(() => {
  logo.style.filter = "drop-shadow(0 0 30px rgba(255,40,40,.8))";
}, 2500);

// Continuous Glow Animation
let glow = true;

setInterval(() => {
  if (glow) {
    playShape.style.filter = "drop-shadow(0 0 18px #ff2b2b)";

    outerRing.style.boxShadow =
      "0 0 20px rgba(255,0,0,.5),0 0 35px rgba(0,229,255,.2)";
  } else {
    playShape.style.filter = "drop-shadow(0 0 35px #ff2b2b)";

    outerRing.style.boxShadow =
      "0 0 35px rgba(255,0,0,.9),0 0 60px rgba(0,229,255,.4)";
  }

  glow = !glow;
}, 700);

// Floating Particle Effect
particles.forEach((particle, index) => {
  particle.style.animationDelay = `${index * 0.8}s`;
});

// Mouse Interaction
document.addEventListener("mousemove", (e) => {
  const x = (e.clientX - window.innerWidth / 2) / 45;
  const y = (e.clientY - window.innerHeight / 2) / 45;

  logo.style.transform = `translate(${x}px, ${y}px) scale(1)`;
});

// Click Pulse
document.addEventListener("click", () => {
  logo.animate(
    [
      {
        transform: "scale(1)",
      },

      {
        transform: "scale(1.12)",
      },

      {
        transform: "scale(1)",
      },
    ],

    {
      duration: 500,
      easing: "ease-out",
    },
  );
});
