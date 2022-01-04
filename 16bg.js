console.clear();

const canvas16bg = document.getElementById("hero-lightpass-16bg");
const context16bg = canvas16bg.getContext("2d");

// canvas.width = document.body.clientWidth;
// canvas.height = document.body.clientHeight;

canvas16bg.width = 1080;
canvas16bg.height = 1620;

const frameCount16bg = 263;
const currentFrame16bg = index => (
    `./pngs/16Bg/9x16_Background${index.toString().padStart(3, '0')}.png`
);

const images16bg = []
const rocket16bg = {
  frame: 0
};

for (let i = 0; i < frameCount16bg; i++) {
  const img = new Image();
  img.src = currentFrame16bg(i);
  images16bg.push(img);
}

gsap.to(rocket16bg, {
  frame: frameCount16bg - 1,
  snap: "frame",
  scrollTrigger: {
    end: () => `+=${canvas16bg.offsetHeight * 3}`,
    scrub: 2
  },
  onUpdate: render // use animation onUpdate instead of scrollTrigger's onUpdate
});

images16bg[0].onload = render;

function render() {
  context16bg.clearRect(0, 0, canvas16bg.width, canvas16bg.height);
  context16bg.drawImage(images16bg[rocket16bg.frame], 0, 0, images16bg[rocket16bg.frame].width, images16bg[rocket16bg.frame].height, //source rectangle
    0, 0, canvas16bg.width, canvas16bg.height); //destination rectangle
}