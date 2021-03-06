gsap.registerPlugin(ScrollTrigger);

var elem = document.getElementById('tall');
var hit = document.getElementsByClassName('uwu');


LottieScrollTrigger({
  target: "#tall",
  path: "LRS21.json",
  speed: "fast",
  pin: ".uwu",
  anticipatePin: true,
  start: "top",
  end: () => `+=${elem.offsetHeight * 3}`,
  scrub: 2,
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
