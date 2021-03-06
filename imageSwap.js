var imgs = [
    "BRM-1.jpg",
    "BRM-2.jpg",
    "BRM-3.jpg",
    "BRM-4.jpg",
    "BRM-5.jpg",
    "BRM-6.jpg"
];

//image shuffle function
function shuffle(o) {
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

//reference to divs
var $divs = $(".images_wrapper > div");
//self executing function
(function randomBackground() {
    var randomImages = shuffle(imgs).slice(0, $divs.length);
    //cycle through divs
    var done;
    $divs.animate({
        opacity: .2
    },{
        start: function() {
            done = 0;
        },
        progress: function(p, n1, n2) {
            console.log(n1)
            if (!done && n1 > .7) {
                $divs.each(function(idx) {
                    $(this).css({ 'background-image': 'url(' + randomImages[idx] + ')'});
                });
                done = 1;
            }
        },
        complete: function() {
            $divs.animate({
                opacity: 1
            }, 400, function() {

            });
        }
    });
}());