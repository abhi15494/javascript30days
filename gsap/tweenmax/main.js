$('#cta').on('click', function(){
    // $('.panel-box').css('transform','scaleY(1)');
    // $('.panel-box *').css('opacity','1');
    TweenMax.to('.panel-box', 1.5, {
        scaleY: 1, 
        height: '100vh',
        ease: Bounce.easeOut
    });

    TweenMax.to('.panel-box img.img-fluid', 1.4, {
        opacity: 1,
        y: 0,
        delay: 1.5,
        ease: Expo.easeOut
    })
    TweenMax.to('.panel-box p', 1.4, {
        opacity: 1,
        y: 0,
        delay: 1.5,
        ease: Expo.easeOut
    })
    TweenMax.to('.panel-box .box', 3, {
        opacity: 1,
        scale: 1,
        y: 0,
        delay: 1,
        ease: Elastic.easeOut.config(1.5, 1)
    })

    TweenMax.staggerTo('.list-group li', 1, {
        opacity: 1,
        x: 0
    }, 0.2, afterListload)
})

function afterListload(){
    TweenMax.to('.panel-text h5', 1, {
        opacity: 1,
        scale: 1,
        y: 10
    });
}