gsap.registerPlugin(ScrollTrigger);

var elem = document.getElementById('blastoff');
var hit = document.getElementsByClassName('main');


LottieScrollTrigger({
  target: "#blastoff",
  path: "RocketSauce_Full.json",
  speed: "slow",
  pin: ".main",
  anticipatePin: true,
  start: "top",
  end: () => `+=${elem.offsetHeight * 30}`,
  scrub: 1,
  markers: false
});


function LottieScrollTrigger(vars) {
	let playhead = {frame: 0},
		target = gsap.utils.toArray(vars.target)[0],
		speeds = {slow: "+=30000", medium: "+=1000", fast: "+=500"},
		st = {trigger: target, pin: true, start: "top top", end: speeds[vars.speed] || "+=30000", scrub: 1},
		animation = lottie.loadAnimation({
			container: target,
			renderer: vars.renderer || "svg",
			loop: false,
			autoplay: false,
			path: vars.path,
			rotation: 0.1
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
