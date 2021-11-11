gsap.registerPlugin(ScrollTrigger);

var elem = document.getElementById('stars');


gsap.from(".star-6-smol", {
    y: "-100px",
    ease: "none",
    scrollTrigger: {
        trigger: "#stars",
        start: () => `+=${elem.offsetHeight * 1}`,
        end: () => `+=${elem.offsetHeight * 1.5}`,
        scrub: 2,
        // markers: true
    },
});

gsap.from(".star-5-smol", {
    y: "-50px",
    ease: "none",
    scrollTrigger: {
        trigger: "#stars",
        start: () => `+=${elem.offsetHeight * 1}`,
        end: () => `+=${elem.offsetHeight * 1.5}`,
        scrub: 2,
        // markers: true
    },
});

gsap.from(".star-4-smol", {
    y: "-50px",
    ease: "none",
    scrollTrigger: {
        trigger: "#stars",
        start: () => `+=${elem.offsetHeight * 1}`,
        end: () => `+=${elem.offsetHeight * 1.5}`,
        scrub: 2,
        // markers: true
    },
});

gsap.from(".star-3-smol", {
    y: "-15px",
    ease: "none",
    scrollTrigger: {
        trigger: "#stars",
        start: () => `+=${elem.offsetHeight * 1}`,
        end: () => `+=${elem.offsetHeight * 1.5}`,
        scrub: 2,
        // markers: true
    },
});

gsap.from(".star-2-smol", {
    y: "-30px",
    ease: "none",
    scrollTrigger: {
        trigger: "#stars",
        start: () => `+=${elem.offsetHeight * 1}`,
        end: () => `+=${elem.offsetHeight * 1.5}`,
        scrub: 2,
        // markers: true
    },
});

gsap.from(".star-1-smol", {
    y: "50px",
    ease: "none",
    scrollTrigger: {
        trigger: "#stars",
        start: () => `+=${elem.offsetHeight * 1}`,
        end: () => `+=${elem.offsetHeight * 1.5}`,
        scrub: 2,
        // markers: true
    },
});