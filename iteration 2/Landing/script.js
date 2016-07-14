var headerHasText = false;
var animatedIntro = false;
function delayInto(element, time, margin) {
    setTimeout(function() {
        $(element).animate({'margin-left': margin}, 350)
    }, time)
};

$(document).ready(function() {
    //setup button
    $('#jsportal').click(function() {
        document.location.href = '../Javabox/javabox.html';
    });
    var pHeight = $('.text-sect#one').height();
    $('#jsportal').css('margin-top', pHeight + 35 + 'px');
    //manage header bar
    $(document).on('scroll', function() {
        $('#header-bar').css('background-color', 'rgba(34, 43, 144, ' + ((window.scrollY/3.5)/100) + ')');
        if ( (window.scrollY/3.5)/100 >= 1 ) {
            $('#header-bar').css('box-shadow', '0 5px 5px rgba(0, 0, 0, 0.26)');
            if ( !headerHasText ) {
                $('#header-bar-text').animate({'opacity': '1'}, 400);
                headerHasText = true;
            };
        };
        if ( (window.scrollY/3.5)/100 < 1 ) {
            $('#header-bar').css('box-shadow', 'initial');
            if ( headerHasText ) {
                $('#header-bar-text').animate({'opacity': '0'}, 300);
                headerHasText = false;
            };
        };
    });
    $(document).on('scroll', function() {
        if ( window.scrollY >= 152 && !animatedIntro ) {
            $('.selfPortrait').animate({'box-shadow': '0 20px 20px rgba(3, 224, 255, 0.28)'}, 370).delay(30).animate({'box-shadow': '0 5px 5px rgba(0, 0, 0, 0.18)'}, 350);
            delayInto('.text-sect-intro#line1', 50, '10px');
            delayInto('.text-sect-intro#line2', 200, '55px');
            delayInto('.text-sect-intro#line3', 500, '55px');
            delayInto('.text-sect-intro#line4', 650, '10px');
            $('#spreadline1R').delay(190).addClass('revealed');
            $('#spreadline1L').delay(190).addClass('revealed');
            $('#spreadline2R').delay(290).addClass('revealed');
            $('#spreadline2L').delay(290).addClass('revealed');
            $('#spreadline3R').delay(390).addClass('revealed');
            $('#spreadline3L').delay(390).addClass('revealed');
            $('#spreadline4R').delay(490).addClass('revealed');
            $('#spreadline4L').delay(490).addClass('revealed');
            $('#spreadline5R').delay(590).addClass('revealed');
            $('#spreadline5L').delay(590).addClass('revealed');
            animatedIntro = true;
        };
    });
    //manage header bar button
    $('#button-ripple').click(function() {
        $(this).animate({'opacity': '0.5'}, 80).delay(30).animate({'opacity': '0'}, 80);
        window.scroll(0, 0);
    });
});
