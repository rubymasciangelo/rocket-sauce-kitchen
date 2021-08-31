gsap.registerPlugin(ScrollTrigger);

gsap.to(".star-6", {
    yPercent: -10,
    ease: "none",
    scrollTrigger: {
        trigger: "#stars",
        start: 'top bottom',
        scrub: true,
        markers: true
    },
});

gsap.to(".star-5", {
    yPercent: -10,
    ease: "none",
    scrollTrigger: {
        trigger: "#stars",
        scrub: true,
        markers: true
    },
});

gsap.to(".star-4", {
    yPercent: 10,
    ease: "none",
    scrollTrigger: {
        trigger: "#stars",
        scrub: true,
        markers: true
    },
});

gsap.to(".star-3", {
    yPercent: -30,
    ease: "none",
    scrollTrigger: {
        trigger: "#stars",
        scrub: true,
        markers: true
    },
});

gsap.to(".star-2", {
    yPercent: -50,
    ease: "none",
    scrollTrigger: {
        trigger: "#stars",
        scrub: true,
        markers: true
    },
});

gsap.to(".star-1", {
    yPercent: -800,
    ease: "none",
    scrollTrigger: {
        trigger: "#stars",
        scrub: true,
        markers: true
    },
});