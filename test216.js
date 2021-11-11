console.clear();

const canvas16 = document.getElementById("hero-lightpass-16");
const context16 = canvas16.getContext("2d");

// canvas.width = document.body.clientWidth;
// canvas.height = document.body.clientHeight;

canvas16.width = 1080;
canvas16.height = 1620;

const frameCount16 = 263;
const currentFrame16 = index => (
    `./pngs/16A/RocketSauce_9x16${index.toString().padStart(3, '0')}.png`
);

const images16 = []
const rocket16 = {
  frame: 0
};

for (let i = 0; i < frameCount16; i++) {
  const img = new Image();
  img.src = currentFrame16(i);
  images16.push(img);
}

gsap.to(rocket16, {
  frame: frameCount16 - 1,
  snap: "frame",
  scrollTrigger: {
    end: () => `+=${canvas16.offsetHeight * 3}`,
    scrub: 2
  },
  onUpdate: render // use animation onUpdate instead of scrollTrigger's onUpdate
});

images16[0].onload = render;

function render() {
  context16.clearRect(0, 0, canvas16.width, canvas16.height);
  context16.drawImage(images16[rocket16.frame], 0, 0, images16[rocket16.frame].width, images16[rocket16.frame].height, //source rectangle
    0, 0, canvas16.width, canvas16.height); //destination rectangle
}