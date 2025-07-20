//for typed effect in main intro...
document.addEventListener("DOMContentLoaded", function () {
  var typed = new Typed("#typed", {
    strings: [
      "Full-Stack Web Developer...",
      "Coding Enthusiast...",
      "Problem Solver...",
      "Tech Explorer...",
    ],
    typeSpeed: 50,
    backSpeed: 40,
    backDelay: 1000,
    startDelay: 500,
    loop: true,
  });
});



//for particle body background...
particlesJS("particles-js", {
  particles: {
    number: {
      value: 80,
      density: { enable: true, value_area: 200 },
    },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#ffffff" },
      polygon: { nb_sides: 5 },
    },
    opacity: {
      value: 0.5,
      random: true,
    },
    size: {
      value: 3,
      random: true,
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#9333ea", //#9333ea
      opacity: 0.3,
      width: 1,
    },
    move: {
      enable: true,
      speed: 5,
      direction: "none",
      out_mode: "out",
    },
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true,
    },
    modes: {
      repulse: { distance: 100 },
      push: { particles_nb: 4 },
    },
  },
  retina_detect: true,
});



//for the form alert, message send successfully...
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const popup = document.getElementById("popup");
  const outer = document.getElementById("outer");

  popup.classList.remove("hidden");
  popup.classList.add("show");
  outer.classList.add("dimmed");
  this.reset();

  setTimeout(() => {
    popup.classList.remove("show");
    popup.classList.add("hidden");
    outer.classList.remove("dimmed");
  }, 3000); // Auto-hide after 3 seconds
});





