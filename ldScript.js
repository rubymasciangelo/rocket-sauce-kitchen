var animation = bodymovin.loadAnimation({
    container: document.getElementById('anim'),
    renderer: 'svg',
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