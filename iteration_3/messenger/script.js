$(document).ready(function() {
    $('.ripple').click(function() {
        $(this).animate({'opacity': '0.6'}, 90).delay(50).animate({'opacity': '0'}, 90);
    });
});
