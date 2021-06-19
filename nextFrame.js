const html = document.documentElement;
const frameCount = 192;

//get the scroll position (frameIndex) and attribute it to an index position from the animation frame sequence
window.addEventListener('scroll', () => {  
    const scrollTop = html.scrollTop;
    const maxScrollTop = html.scrollHeight - window.innerHeight;
    const scrollFraction = scrollTop / maxScrollTop;
    const frameIndex = Math.min(
        frameCount - 1,
        Math.floor(scrollFraction * frameCount)
        );
    });


    var eFrames = document.querySelectorAll("img.frameimg");


function nextFrame() {
    var i
    for (i = 0; i < eFrames.length; ++i) {
        e = eFrames[i];
        if (e.index === frameIndex) {
        e.style.opacity = "1";
        }
        else {
            e.style.opacity = "0";
        }
    }
}

    //for each item in the image list if the image index matches
    //the framecount then append the child or style opacity to 1