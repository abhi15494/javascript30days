
function afterListload() {
    TweenMax.to('.panel-text h5', 1, {
        opacity: 1,
        scale: 1,
        y: 10
    });
}

$(document).ready(function () {
    const tl = new TimelineMax({
        paused: true,
        onComplete: function(){
            this.reverse();
        }
    });

    tl.to('.panel-box', 1.5, {
        scaleY: 1,
        height: '100vh',
        ease: Bounce.easeOut
    });

    tl.to('.panel-box img.img-fluid', 1.4, {
        opacity: 1,
        y: 0,
        delay: 1,
        ease: Expo.easeOut
    }, 0.5)
    tl.to('.panel-box p', 1.4, {
        opacity: 1,
        y: 0,
        delay: 1.5,
        ease: Expo.easeOut
    }, '=-3')
    tl.to('.panel-box .box', 3, {
        opacity: 1,
        scale: 1,
        y: 0,
        delay: 1,
        ease: Elastic.easeOut.config(1.5, 1)
    }, "=-3")

    $('#cta').on('click', function () {
        // $('.panel-box').css('transform','scaleY(1)');
        // $('.panel-box *').css('opacity','1');
    
        tl.play();

        // TweenMax.staggerTo('.list-group li', 1, {
        //     opacity: 1,
        //     x: 0
        // }, 0.2, afterListload)
    });
});