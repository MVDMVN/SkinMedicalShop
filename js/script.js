document.addEventListener("DOMContentLoaded", () => {
  new Splide("#hero-slider", {
    type: "loop",
    autoplay: true,
    interval: 3000,
    pauseOnHover: false,
    arrows: true,
    pagination: true,
    speed: 800,
    perMove: 1,
  }).mount();

  new Splide("#popular-slider", {
    type: "loop",
    perMove: 1,
    perPage: 4,
    gap: "40px",
    pagination: true,
    arrows: false,
    breakpoints: {
      1024: { perPage: 3 },
      768: { perPage: 2 },
      480: { perPage: 1 },
    },

    breakpoints: {
      768: {
        perPage: 2,
        gap: "12px",
      },
    },
  }).mount();

  new Splide("#rec-splide", {
    type: "loop",
    width: "850px",
    perPage: 3,
    perMove: 1,
    gap: "20px",
    pagination: true,
    focus: 0,
    omitEnd: true,
    breakpoints: {
      1024: { perPage: 3, gap: "20px" },
      768: { perPage: 1.5, gap: "20px" },
      0: { perPage: 1.5, gap: "16px" },
    },
  }).mount();

  new Splide("#discount-slider", {
    type: "loop",
    perMove: 1,
    perPage: 4,
    gap: "40px",
    pagination: true,
    arrows: false,
    breakpoints: {
      1024: { perPage: 3 },
      768: { perPage: 2 },
      480: { perPage: 1 },
    },

    breakpoints: {
      768: {
        perPage: 2,
        gap: "12px",
      },
    },
  }).mount();

  new Splide("#brands-splide", {
    type: "loop",
    width: "1460px",
    perPage: 4,
    perMove: 1,
    gap: "20px",
    pagination: true,
    arrows: false,
    focus: 0,
    omitEnd: true,
    breakpoints: {
      1024: { perPage: 3, gap: "20px" },
      768: { perPage: 2.5, gap: "14px" },
      0: { perPage: 2.5, gap: "8px" },
    },
  }).mount();

  new Splide("#reviews-splide", {
    type: "loop",
    width: "1460px",
    perPage: 3,
    perMove: 1,
    gap: "20px",
    pagination: true,
    focus: 0,
    omitEnd: true,
    breakpoints: {
      1024: { perPage: 3, gap: "20px" },
      768: { perPage: 2, gap: "14px" },
      560: { perPage: 1, gap: "14px" },
      0: { perPage: 1, gap: "8px" },
    },
  }).mount();
});
