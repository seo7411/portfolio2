let tl = anime.timeline({
    easing: 'easeOutExpo',
    duration: 1000
});

tl.add({
    targets: '.yellow',
    translateX: 500,
})
.add({
    targets: '.yellow',
    translateY: 500,
})
.add({
    targets: '.yellow',
    translateX: 0,
})
.add({
    targets: '.yellow',
    translateY: 0,
})
.add({
    targets: '.green',
    translateX: 0,
    scale:1.5,
    rotate:360
})
.add({
    targets: '.red',
    translateX: 1000,
    scale:1.5,
    rotate:360
});