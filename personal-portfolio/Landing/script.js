var headerHasText = false;

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
    $('#button-ripple').click(function() {
        $('#button-ripple').animate({'opacity': '0.5'}, 80).delay(30).animate({'opacity': '0'}, 80);
        window.scroll(0, 0);
    });
});
