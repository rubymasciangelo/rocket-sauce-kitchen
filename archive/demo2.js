const html = document.documentElement;
const canvas = document.getElementById("hero-lightpass");
const context = canvas.getContext("2d");

const frameCount = 192;


//gets the image from the directory, padstart handles the 000 naming aspect
const currentFrame = index => (
    `./Exhaust-Sequence/RocketExhaust${index.toString().padStart(3, '0')}.png`
)

const preloadImages = () => {
    for (let i = 1; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
    }
};    

const img = new Image()
    img.src = currentFrame(1);
    canvas.width=1158;
    canvas.height=770;
    img.onload=function(){
    context.drawImage(img, 0, 0);
}

const updateImage = index => {
    img.src = currentFrame(index);
    context.drawImage(img, 0, 0);
}

//get the scroll position and attribute it to an index position from the animation frame sequence
window.addEventListener('scroll', () => {  
const scrollTop = html.scrollTop;
const maxScrollTop = html.scrollHeight - window.innerHeight;
const scrollFraction = scrollTop / maxScrollTop;
const frameIndex = Math.min(
    frameCount - 1,
    Math.floor(scrollFraction * frameCount)
    );

//update image source and draw new image on canvas
requestAnimationFrame(() => updateImage(frameIndex + 1))
});


preloadImages();

//this works but the images paint over and
//over on themselves and since the background
//is transparent that is not the vibe. ALSO
//something bad is going on with the sizing?


//this is the only thing that needs to be in body
<canvas id="hero-lightpass" />


html {
    height: 100vh;
  }
  
  /* taller body to give us enough scroll room */
  body {
    height: 500vh;
  }
  
  /* does not exceed dimension of viewport */
  canvas {
    position: fixed;
    left: 50%;
    top: 50%;
    max-height: 100vh;
    max-width: 50vw;
    transform: translate(-50%, -50%);
  }