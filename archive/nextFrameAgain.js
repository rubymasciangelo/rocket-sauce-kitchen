const html = document.documentElement;
const canvas = document.getElementById("hero-lightpass");
const context = canvas.getContext("2d");

//const frameCount = 192;
const frameCount = 77;


//gets the image from the directory, padstart handles the 000 naming aspect
const currentFrame = index => (
    //`./Exhaust-Sequence/RocketExhaust${index.toString().padStart(3, '0')}.png`
    `./PNG Sequence w Text-BG/Scroll Mockup_${index.toString().padStart(5, '186')}.png`
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
    context.drawImage(img, 0, 0, img.width, img.height, //source rectangle
                            0, 0, canvas.width, canvas.height); //destination rectangle
}

const updateImage = index => {
    img.src = currentFrame(index);
    context.drawImage(img, 0, 0, img.width, img.height, //source rectangle
        0, 0, canvas.width, canvas.height); //destination rectangle
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
//context.clearRect(0, 0, context.canvas.width, context.canvas.height);
});


preloadImages();

//this works but the images paint over and
//over on themselves and since the background
//is transparent that is not the vibe. ALSO
//something bad is going on with the sizing?

//This works but is flashy because of the transparent
//repainting, if the image was on an opaque
//baclground it would be fine probably


//6/24/21
//it seems like the best way to do this is to have
//them animate the exhaust over a logo. this is
//extra important because of mobile responsive issues






//either do this as fixed with no auto transparent paint 
//and then at transparent section insert a file every other png
//or last frame has absolute text div stacked over opaque bg with 
//transparent bg canvas stacked over it