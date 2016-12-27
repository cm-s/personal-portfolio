var introText = "only"

$(document).on('turbolinks:load', () => {
if ($('body').is('#projects'))
{
    setTimeout( () => {
        $('#pw-text-container').animate({'opacity': '0'}, 1900);
        setTimeout( () => {
            $('#pw-text-container').css('display', 'none');
        }, 1901);
    }, 3000);
};
});
