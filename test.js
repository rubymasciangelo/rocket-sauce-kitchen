console.clear();

const canvas = document.getElementById("hero-lightpass");
const context = canvas.getContext("2d");

// canvas.width = document.body.clientWidth;
// canvas.height = document.body.clientHeight;

canvas.width = 1920;
canvas.height = 1080;

const frameCount = 60;
const currentFrame = index => (
    `../svgs/RSF/image2vector (${index.toString().padStart(2, '0')}).svg`
);

const images = []
const rocket = {
  frame: 0
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = currentFrame(i);
  images.push(img);
}

gsap.to(rocket, {
  frame: frameCount - 1,
  snap: "frame",
  scrollTrigger: {
    scrub: 0.5
  },
  onUpdate: render // use animation onUpdate instead of scrollTrigger's onUpdate
});

images[0].onload = render;

function render() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(images[rocket.frame], 0, 0, images[rocket.frame].width, images[rocket.frame].height, //source rectangle
    0, 0, canvas.width, canvas.height); //destination rectangle
}