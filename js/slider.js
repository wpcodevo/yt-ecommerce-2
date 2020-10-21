const glide1 = document.getElementById("glide1");
const glide2 = document.getElementById("glide2");
console.log(glide2);

if (glide1)
  new Glide(glide1, {
    type: "carousel",
    startAt: 0,
    autoplay: 3000,
    hoverpause: true,
    perView: 1,
    animationDuration: 800,
    animationTimingFunc: "linear",
  }).mount();

if (glide2)
  new Glide(glide2, {
    type: "carousel",
    startAt: 0,
    perView: 5,
    rewin: false,
    autoplay: 2000,
    animationDuration: 800,
    animationTimingFunc: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
    breakpoints: {
      1200: {
        perView: 3,
      },
      768: {
        perView: 2,
      },
    },
  }).mount();
