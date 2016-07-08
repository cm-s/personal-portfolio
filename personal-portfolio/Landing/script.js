var oldScroll = 0;
var opacity = 0;
$(document).ready(function() {
    //setup button
    $('#jsportal').click(function() {
        document.location.href = '../Javabox/javabox.html';
    });
    var pHeight = $('.text-sect#one').height();
    $('#jsportal').css('margin-top', pHeight + 35 + 'px');
    $(document).on('scroll', function() {
        $('#header-bar').css('background-color', 'rgba(117, 114, 114, ' + ((window.scrollY/3.5)/100) + ')');
        if ( (window.scrollY/3.5)/100 >= 1 ) {
            $('#header-bar').css('box-shadow', '0 5px 5px rgba(0, 0, 0, 0.26)');
        };
        if ( (window.scrollY/3.5)/100 < 1 ) {
            $('#header-bar').css('box-shadow', 'initial');
        };
    });
});
