//= require jquery
//= require jquery_ujs
//= require turbolinks
var menu_out = false;
var details_menu_out = false;
var settings_dropdown_pos = 0;
var disabled_link = false;

// Simple function to adjust the predetermined positioning of the
function position_settings_dropdown() {
    settings_dropdown_pos = parseInt($('#menu').css('marginLeft')) + parseInt($('#menu').css('marginRight')) + parseInt($('#settings').css('marginLeft')) + 50 - 98;
};

$(document).ready(function() {
if ($('body').is('#messenger'))
{

    // Presets
    position_settings_dropdown();
    $('.checkbox-ripple').css('transform', 'scale(0)');
    $('#settings-dropdown-arrow').css('transform', 'translateX(-22px)')
    // Menu mechanics
    $('#menu').click(function(event) {
        event.stopPropagation();
        $('html').click(function() {
            $('menu').animate({'margin-left': '-335px'}, 200);
        });
        $('menu').animate({'margin-left': '0'}, 200);
    });
    $('menu').click(function(event) {
        event.stopPropagation();
    });
    // Settings button & menu mechanics
    $('#settings').click(function(event) {
        position_settings_dropdown();
        $('#settings-dropdown').css('left', settings_dropdown_pos + 'px');
        $('#settings-dropdown').addClass('revealed').css('display', 'block').removeClass('hidden');
        setTimeout(function () {
            $('.sd-index').css('display', 'block');
            $('.sd-divider').css('display', 'block');
        }, 400);
        event.stopPropagation();
        $('html').click(function() {
            $('#settings-dropdown').removeClass('revealed').addClass('hidden');
        });
    });
    $('#settings-dropdown').click(function(event) {
        event.stopPropagation();
    });
    // About menu mechanics
    $('#about').click(function() {
        if (!details_menu_out) {
            $('#details-container').animate({'left': '100%'}, 200);
            details_menu_out = true;
        } else {
            $('#details-container').animate({'left': '120%'}, 200);
            details_menu_out = false;
        };
    });

} // endif

});
