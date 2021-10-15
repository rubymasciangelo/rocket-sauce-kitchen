const html = document.documentElement;
const canvas = document.getElementById("hero-lightpass");
const context = canvas.getContext("2d");

//const frameCount = 192;
const frameCount = 60;


//gets the image from the directory, padstart handles the 000 naming aspect
const currentFrame = index => (
    //`./Exhaust-Sequence/RocketExhaust${index.toString().padStart(3, '0')}.png`
    `./svgs/RSF/image2vector (${index.toString().padStart(2, '1')}).svg`
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

    function resizeCO() {
        var newCW = canvas.width + 1;
        var newCH = canvas.height + 1;
        canvas.width = newCW;
        canvas.height = newCH;
        requestAnimationFrame(() => updateImage(frameIndex + 1));
    }
    
    function resizeCE() {
        var newCW = canvas.width - 1;
        var newCH = canvas.height - 1;
        canvas.width = newCW;
        canvas.height = newCH;
        requestAnimationFrame(() => updateImage(frameIndex + 1));
    }
    

    if (frameIndex < 0) {
        //update image source and draw new image on canvas
    requestAnimationFrame(() => updateImage(frameIndex + 1));
    
    } else if(frameIndex > 0 && frameIndex%2 == 0) {
        //context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        //requestAnimationFrame(() => updateImage(frameIndex + 1));
        resizeCE();
    } else {
        resizeCO();
    }
});


preloadImages();


//re-draw canvas option