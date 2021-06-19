function nextFrame() {
    var q = function (sel) { return document.querySelector(sel); };
    q(".exhaust-box").appendChild(q(".exhaust-box img:first-child"));
}

setInterval(nextFrame, 100)