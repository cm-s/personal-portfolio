var headerHasText = false;

$(document).ready(function() {
    $('#toTop').click(function() {
        $('html, body').animate({scrollTop: 0}, 600);
    });
    $('#github').click(function() {
        $('#shroud').css('z-index', '20');
        $('#shroud').animate({'opacity': '1'}, 200);
        document.location.href = 'https://github.com/cm-s/skillsDev';
    });
    $('#github').on('mouseenter', function() {
        $('#github-slider').removeClass('reset');
        $('#github-slider').addClass('triggered');
    });
    $('#github').on('mouseleave', function() {
        $('#github-slider').removeClass('triggered');
        $('#github-slider').addClass('reset');
    });
    $('#window-close').on('')
    $(document).on('scroll', function() {
        $('nav').css('background-color', 'rgba(21, 27, 128, ' + ((window.scrollY/3.8)/100) + ')');
        if ( (window.scrollY/3.8)/100 >= 1 ) {
            $('nav').css('box-shadow', '0 2px 5px 2px rgba(0, 0, 0, 0.25)');
            if ( !headerHasText ) {
                $('h3').animate({'opacity': '1'}, 630);
                headerHasText = true;
            };
        };
        if ( (window.scrollY/3.8)/100 < 1 ) {
            $('nav').css('box-shadow', 'initial');
            if ( headerHasText ) {
                $('h3').animate({'opacity': '0'}, 630);
                headerHasText = false;
            };
        };
    });
});
