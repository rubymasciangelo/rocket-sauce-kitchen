gsap.registerPlugin(ScrollTrigger);

var elem = document.getElementById('blastoff');
var hit = document.getElementsByClassName('main');


LottieScrollTrigger({
  target: "#blastoff",
  path: "LRSF.json",
  speed: "fast",
  pin: ".main",
  anticipatePin: true,
  start: "top",
  end: () => `+=${elem.offsetHeight * 5}`,
  scrub: 1,
  rotation: 0.1,
  force3D: true,
  markers: false
});


function LottieScrollTrigger(vars) {
	let playhead = {frame: 0},
		target = gsap.utils.toArray(vars.target)[0],
		speeds = {slow: "+=2500", medium: "+=1000", fast: "+=50"},
		st = {trigger: target, pin: true, start: "top top", end: speeds[vars.speed] || "+=50", scrub: 1},
		animation = lottie.loadAnimation({
			container: target,
			renderer: vars.renderer || "svg",
			loop: false,
			autoplay: false,
			path: vars.path,
			rotation: 0.1,
			force3D: true
		});
	for (let p in vars) { // let users override the ScrollTrigger defaults
		st[p] = vars[p];
	}
	animation.addEventListener("DOMLoaded", function() {
		gsap.to(playhead, {
			frame: animation.totalFrames - 1,
			ease: "none",
			onUpdate: () => animation.goToAndStop(playhead.frame, true),
			scrollTrigger: st
		});
	});
}


var elemStar = document.getElementById('stars');


gsap.from(".star-6", {
    y: "-100px",
    ease: "none",
    scrollTrigger: {
        trigger: "#stars",
        start: () => `+=${elemStar.offsetHeight * 1.5}`,
        end: () => `+=${elemStar.offsetHeight * 2.5}`,
        scrub: 2,
        // markers: true
    },
});

gsap.from(".star-5", {
    y: "-50px",
    ease: "none",
    scrollTrigger: {
        trigger: "#stars",
        start: () => `+=${elemStar.offsetHeight * 1.5}`,
        end: () => `+=${elemStar.offsetHeight * 2.5}`,
        scrub: 2,
        // markers: true
    },
});

gsap.from(".star-4", {
    y: "-50px",
    ease: "none",
    scrollTrigger: {
        trigger: "#stars",
        start: () => `+=${elemStar.offsetHeight * 1.5}`,
        end: () => `+=${elemStar.offsetHeight * 2.5}`,
        scrub: 2,
        // markers: true
    },
});

gsap.from(".star-3", {
    y: "-15px",
    ease: "none",
    scrollTrigger: {
        trigger: "#stars",
        start: () => `+=${elemStar.offsetHeight * 1.5}`,
        end: () => `+=${elemStar.offsetHeight * 2.5}`,
        scrub: 2,
        // markers: true
    },
});

gsap.from(".star-2", {
    y: "-30px",
    ease: "none",
    scrollTrigger: {
        trigger: "#stars",
        start: () => `+=${elemStar.offsetHeight * 1.5}`,
        end: () => `+=${elemStar.offsetHeight * 2.5}`,
        scrub: 2,
        // markers: true
    },
});

gsap.from(".star-1", {
    y: "50px",
    ease: "none",
    scrollTrigger: {
        trigger: "#stars",
        start: () => `+=${elemStar.offsetHeight * 1.5}`,
        end: () => `+=${elemStar.offsetHeight * 2.5}`,
        scrub: 2,
        // markers: true
    },
});