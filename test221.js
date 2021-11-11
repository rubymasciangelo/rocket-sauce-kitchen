console.clear();

const canvas21 = document.getElementById("hero-lightpass-21");
const context21 = canvas21.getContext("2d");

// canvas.width = document.body.clientWidth;
// canvas.height = document.body.clientHeight;

canvas21.width = 289;
canvas21.height = 658;

const frameCount21 = 263;
const currentFrame21 = index => (
    `./pngs/21A/RocketSauce_9x21${index.toString().padStart(3, '0')}.png`
);

const images21 = []
const rocket21 = {
  frame: 0
};

for (let i = 0; i < frameCount21; i++) {
  const img = new Image();
  img.src = currentFrame21(i);
  images21.push(img);
}

gsap.to(rocket21, {
  frame: frameCount21 - 1,
  snap: "frame",
  scrollTrigger: {
    end: () => `+=${canvas21.offsetHeight * 3}`,
    scrub: 2
  },
  onUpdate: render // use animation onUpdate instead of scrollTrigger's onUpdate
});

images21[0].onload = render;

function render() {
  context21.clearRect(0, 0, canvas21.width, canvas21.height);
  context21.drawImage(images21[rocket21.frame], 0, 0, images21[rocket21.frame].width, images21[rocket21.frame].height, //source rectangle
    0, 0, canvas21.width, canvas21.height); //destination rectangle
}