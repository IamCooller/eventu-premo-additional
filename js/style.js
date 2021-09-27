$(document).ready(function() {

    /*loadSvg*/
    $('[data-svg]').each(function() {
        var $this = $(this);
        var $svg = $this.data('svg');
        var $filename = $svg.split('\\').pop().split('/').pop().replace(".svg", "");

        $this.load($svg, function(responseTxt, statusTxt) {
            if (statusTxt == "success") {
                $this.find('svg').addClass('svg svg-' + $filename + '');
            }
        });
    });
    thumbImg();

});


function fontSize() {
    if ($(window).width() < 767) {

        $('html').css({ fontSize: 15 + 'px' });
    }

    if ($(window).width() > 767) {
        var width = 1366; // ширина, от которой идет отсчет
        var fontSize = 15; // минимальный размер шрифта
        var bodyWidth = $('html').width();
        var multiplier = bodyWidth / width;
        if ($('html').width() >= width) fontSize = Math.floor(fontSize * multiplier);
        if ($('html').width() < width) fontSize = Math.floor(fontSize * multiplier);
        $('html').css({ fontSize: fontSize + 'px' });
    }
}

$(function() { fontSize(); });
$(window).resize(function() { fontSize(); });


$(document).on('click', 'a[href^="#"]', function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1300);
});








$(window).on('resize', function(e) {
    // Переменная, по которой узнаем запущен слайдер или нет.
    // Храним её в data
    var init = $(".hoodieShow__list").data('init-slider');
    // Если мобильный
    if (window.innerWidth < 768) {
        // Если слайдер не запущен
        if (init != 1) {
            // Запускаем слайдер и записываем в data init-slider = 1
            $('.hoodieShow__list').slick({
                arrows: false,
                dots: false,
                slidesToShow: 1,
                slidesToScroll: 1
            }).data({ 'init-slider': 1 });
        }
    }
    // Если десктоп
    else {
        // Если слайдер запущен
        if (init == 1) {
            // Разрушаем слайдер и записываем в data init-slider = 0
            $('.hoodieShow__list').slick('unslick').data({ 'init-slider': 0 });
        }
    }
}).trigger('resize');



$('.hoodiBuy__content-photo').slick({
    arrows: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1
})
$(window).on('resize', function(e) {
    // Переменная, по которой узнаем запущен слайдер или нет.
    // Храним её в data
    var initt = $(".hoodieDevelopment__list").data('init-slider');
    // Если мобильный
    if (window.innerWidth < 768) {
        // Если слайдер не запущен
        if (initt != 1) {
            // Запускаем слайдер и записываем в data init-slider = 1
            $('.hoodieDevelopment__list').slick({
                arrows: false,
                dots: false,
                slidesToShow: 1,
                slidesToScroll: 1
            }).data({ 'init-slider': 1 });
        }
    }
    // Если десктоп
    else {
        // Если слайдер запущен
        if (initt == 1) {
            // Разрушаем слайдер и записываем в data init-slider = 0
            $('.hoodieDevelopment__list').slick('unslick').data({ 'init-slider': 0 });
        }
    }
}).trigger('resize');


$('.hoodiBuy__content-main_size button').click(function(e) {
    e.preventDefault();
    $(this).find('svg').toggleClass('sizeActive');
});