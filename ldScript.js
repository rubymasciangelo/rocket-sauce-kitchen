var animation = bodymovin.loadAnimation({
    container: document.getElementById('anim'),
    path: 'Rocket-Exhaust.json',
    mode: 'scroll',
    actions: [
        {
            visibility: [0,1],
            type: 'seek',
            frames: [0, 100],
        },
    ],
});