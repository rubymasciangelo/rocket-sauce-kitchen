gsap.registerPlugin(ScrollTrigger);

var elem = document.getElementById('stars');


gsap.from(".star-6", {
    y: "-100px",
    ease: "none",
    scrollTrigger: {
        trigger: "#stars",
        start: () => (window.innerWidth < 800 ? `+=${elem.offsetHeight * 1}` : `+=${elem.offsetHeight * 1.5}` ),
        end: () => (window.innerWidth < 800 ? `+=${elem.offsetHeight * 1.5}` : `+=${elem.offsetHeight * 2.5}` ),
        scrub: 2,
        // markers: true
    },
});

gsap.from(".star-5", {
    y: "-50px",
    ease: "none",
    scrollTrigger: {
        trigger: "#stars",
        start: () => (window.innerWidth < 800 ? `+=${elem.offsetHeight * 1}` : `+=${elem.offsetHeight * 1.5}` ),
        end: () => (window.innerWidth < 800 ? `+=${elem.offsetHeight * 1.5}` : `+=${elem.offsetHeight * 2.5}` ),
        scrub: 2,
        // markers: true
    },
});

gsap.from(".star-4", {
    y: "-50px",
    ease: "none",
    scrollTrigger: {
        trigger: "#stars",
        start: () => (window.innerWidth < 800 ? `+=${elem.offsetHeight * 1}` : `+=${elem.offsetHeight * 1.5}` ),
        end: () => (window.innerWidth < 800 ? `+=${elem.offsetHeight * 1.5}` : `+=${elem.offsetHeight * 2.5}` ),
        scrub: 2,
        // markers: true
    },
});

gsap.from(".star-3", {
    y: "-15px",
    ease: "none",
    scrollTrigger: {
        trigger: "#stars",
        start: () => (window.innerWidth < 800 ? `+=${elem.offsetHeight * 1}` : `+=${elem.offsetHeight * 1.5}` ),
        end: () => (window.innerWidth < 800 ? `+=${elem.offsetHeight * 1.5}` : `+=${elem.offsetHeight * 2.5}` ),
        scrub: 2,
        // markers: true
    },
});

gsap.from(".star-2", {
    y: "-30px",
    ease: "none",
    scrollTrigger: {
        trigger: "#stars",
        start: () => (window.innerWidth < 800 ? `+=${elem.offsetHeight * 1}` : `+=${elem.offsetHeight * 1.5}` ),
        end: () => (window.innerWidth < 800 ? `+=${elem.offsetHeight * 1.5}` : `+=${elem.offsetHeight * 2.5}` ),
        scrub: 2,
        // markers: true
    },
});

gsap.from(".star-1", {
    y: "50px",
    ease: "none",
    scrollTrigger: {
        trigger: "#stars",
        start: () => (window.innerWidth < 800 ? `+=${elem.offsetHeight * 1}` : `+=${elem.offsetHeight * 1.5}` ),
        end: () => (window.innerWidth < 800 ? `+=${elem.offsetHeight * 1.5}` : `+=${elem.offsetHeight * 2.5}` ),
        scrub: 2,
        // markers: true
    },
});