console.clear();

const canvas21text = document.getElementById("hero-lightpass-16");
const context21text = canvas21text.getContext("2d");

// canvas.width = document.body.clientWidth;
// canvas.height = document.body.clientHeight;

canvas21text.width = 1080;
canvas21text.height = 1620;

const frameCount16 = 263;
const currentFrame16 = index => (
    `./pngs/21Text/9x21_Text${index.toString().padStart(3, '0')}.png`
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
    end: () => `+=${canvas21text.offsetHeight * 3}`,
    scrub: 2
  },
  onUpdate: render // use animation onUpdate instead of scrollTrigger's onUpdate
});

images16[0].onload = render;

function render() {
  context21text.clearRect(0, 0, canvas21text.width, canvas21text.height);
  context21text.drawImage(images16[rocket16.frame], 0, 0, images16[rocket16.frame].width, images16[rocket16.frame].height, //source rectangle
    0, 0, canvas21text.width, canvas21text.height); //destination rectangle
}