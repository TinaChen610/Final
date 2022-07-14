const $slideLs = $('#SlideLs');
const $bnt1 = $('#Btn1');
const $bnt2 = $('#Btn2');
const $bnt3 = $('#Btn3');
const $bnt4 = $('#Btn4');
const $bnt5 = $('#Btn5');
const $bnt6 = $('#Btn6');
const isMobile = $(window).width() <= 480;
const $nav = $('#Nav')


// console.log(isMobile);


$bnt1.addClass('js-nav-btn');

$bnt1.click(function () {
    if ($(this).hasClass('js-nav-btn')) {
        return;
    }
    $(this).addClass('js-nav-btn').siblings().removeClass('js-nav-btn');
    $slideLs.css({
        top: 0,
        left: 0,
    });
    if(isMobile) {
        $nav.removeClass('js-nav');
    }
});

$bnt2.click(function () {
    if ($(this).hasClass('js-nav-btn')) {
        return;
    }
    $(this).addClass('js-nav-btn').siblings().removeClass('js-nav-btn');
    $slideLs.css({
        top: 0,
        left: '-100vw',
    });
    if(isMobile) {
        $nav.removeClass('js-nav');
    }
});

$bnt3.click(function () {
    if ($(this).hasClass('js-nav-btn')) {
        return;
    }
    $(this).addClass('js-nav-btn').siblings().removeClass('js-nav-btn');
    $slideLs.css({
        top: 0,
        left: '-200vw',
    });
    if(isMobile) {
        $nav.removeClass('js-nav');
    }
});

$bnt4.click(function () {
    if ($(this).hasClass('js-nav-btn')) {
        return;
    }
    $(this).addClass('js-nav-btn').siblings().removeClass('js-nav-btn');
    $slideLs.css({
        top: '-100vh',
        left: 0,
    });
    if(isMobile) {
        $nav.removeClass('js-nav');
    }
});

$bnt5.click(function () {
    if ($(this).hasClass('js-nav-btn')) {
        return;
    }
    $(this).addClass('js-nav-btn').siblings().removeClass('js-nav-btn');
    $slideLs.css({
        top: '-100vh',
        left: '-100vw',
    });
    if(isMobile) {
        $nav.removeClass('js-nav');
    }
});

$bnt6.click(function () {
    if ($(this).hasClass('js-nav-btn')) {
        return;
    }
    $(this).addClass('js-nav-btn').siblings().removeClass('js-nav-btn');
    $slideLs.css({
        top: '-100vh',
        left: '-200vw',
    });
    if(isMobile) {
        $nav.removeClass('js-nav');
    }
});

if (isMobile) {
    const $slideItem = $slideLs.find('.slide-item');
    $slideItem.scroll(function(){
        if($(this).scrollTop() == 0) {
            $nav.removeClass('js-nav');
        }
        else{
            $nav.addClass('js-nav');
        }
    });
}

$('.pd-item > a').fancybox({
    protect: true,
    loop: true,
    transitionEffect: 'circular',
});