var menu_out = false;
var details_menu_out = false;
var settings_dropdown_pos = 0;
var disabled_link = false;

// Simple function to adjust the predetermined positioning of the
function position_settings_dropdown() {
    settings_dropdown_pos = parseInt($('#menu').css('marginLeft')) + parseInt($('#menu').css('marginRight')) + parseInt($('#settings').css('marginLeft')) + 30 - 98;
};

var MmNavbar = React.createClass({
    getInitialState: function() {
        return {

        }
    },
    render: function() {
        if (document.querySelector('body').id.match(/messenger/i))
        return (
            <nav id="navbar-container">
                <CircularButton opaque={false}
                    size={40}
                    icon=''
                    id="menu"
                    position='relative'/>
                <CircularButton opaque={false}
                    size={40}
                    icon='mdi mdi-settings mdi-24px mdi-light'
                    id="settings"
                    position='relative'/>
                <input type="search"
                    placeholder="Search for poeple"
                    id="search-bar"></input>
                <CircularButton opaque={false}
                    size={40}
                    icon='mdi mdi-message-plus mdi-24px mdi-light'
                    id="compose"
                    position='relative'/>
                <CircularButton opaque={false}
                    size={40}
                    icon='mdi mdi-information-outline mdi-24px mdi-light'
                    id="about"
                    position='relative'/>
            </nav>
        )
    }
})

$(document).on('turbolinks:load', () => {
if ($('body').is('#messenger'))
{

    // Presets
    position_settings_dropdown();
    $('.checkbox-ripple').css('transform', 'scale(0)');
    if (getBrowserType() == 'Chrome') $('#settings-dropdown-arrow').css('transform', 'translateX(-22px)')
    // Menu mechanics
    $('#menu').click( (event) => {
        event.stopPropagation();
        $('html').click(function() {
            $('menu').animate({'margin-left': '-335px'}, 200);
        });
        $('menu').animate({'margin-left': '0'}, 200);
    });
    $('menu').click( (event) => {
        event.stopPropagation();
    });
    // Settings button & menu mechanics
    $('#settings').click( (event) => {
        position_settings_dropdown();
        $('#settings-dropdown').css('left', settings_dropdown_pos + 'px');
        $('#settings-dropdown').addClass('revealed').css('display', 'block').removeClass('hidden');
        setTimeout( () => {
            $('.sd-index').css('display', 'block');
            $('.sd-divider').css('display', 'block');
        }, 400);
        event.stopPropagation();
        $('html').click( () => {
            $('#settings-dropdown').removeClass('revealed').addClass('hidden');
        });
    });
    $('#settings-dropdown').click( (event) => {
        event.stopPropagation();
    });
    // About menu mechanics
    $('#about').click( () => {
        if (!details_menu_out) {
            $('#details-container').removeClass('reset').addClass('pressed');
            details_menu_out = true;
        } else {
            $('#details-container').removeClass('pressed').addClass('reset');
            details_menu_out = false;
        };
    });
    $('#search-bar').keyup( () => {

    })

} // endif

});
