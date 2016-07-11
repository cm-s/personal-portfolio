var headerHasText = false;
var animatedIntro = false;

$(document).ready(function() {
    //setup button
    $('#jsportal').click(function() {
        document.location.href = '../Javabox/javabox.html';
    });
    var pHeight = $('.text-sect#one').height();
    $('#jsportal').css('margin-top', pHeight + 35 + 'px');
    //manage header bar
    $(document).on('scroll', function() {
        $('#header-bar').css('background-color', 'rgba(117, 114, 114, ' + ((window.scrollY/3.5)/100) + ')');
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
            setTimeout(function() {
                $('.text-sect-intro#line1').animate({'margin-left': '10px'}, 350);
            }, 50);
            setTimeout(function() {
                $('.text-sect-intro#line2').animate({'margin-left': '55px'}, 350);
            }, 200);
            setTimeout(function() {
                $('.text-sect-intro#line3').animate({'margin-left': '55px'}, 350);
            }, 500);
            setTimeout(function() {
                $('.text-sect-intro#line4').animate({'margin-left': '10px'}, 350);
            }, 650);
            $('#spreadline1L').delay(400).addClass('revealed');
            $('#spreadline1R').delay(400).addClass('revealed');
            $('#spreadline2L').delay(400).addClass('revealed');
            $('#spreadline2R').delay(400).addClass('revealed');
            $('#spreadline3L').delay(400).addClass('revealed');
            $('#spreadline3R').delay(400).addClass('revealed');
            $('#spreadline4L').delay(400).addClass('revealed');
            $('#spreadline4R').delay(400).addClass('revealed');
            $('#spreadline5L').delay(400).addClass('revealed');
            $('#spreadline5R').delay(400).addClass('revealed');
            animatedIntro = true;
        };
    });
    //manage header bar button
    $('#button-ripple').click(function() {
        $(this).animate({'opacity': '0.5'}, 80).delay(30).animate({'opacity': '0'}, 80);
        window.scroll(0, 0);
    });
});
