var introText = "only"

$(document).on('turbolinks:load', function() {
if ($('body').is('#projects'))
{
    setTimeout(function () {
        $('#pw-text-container').animate({'opacity': '0'}, 1900);
        setTimeout(function () {
            $('#pw-text-container').css('display', 'none');
        }, 1901);
    }, 3000);
};
});
