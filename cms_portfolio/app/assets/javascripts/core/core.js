//= require jquery
//= require jquery_ujs
//= require turbolinks
var headerHasText = false;

// MM bubble floating effects
var spatial_delimiter = 0;
var drift_direction = 0;

function drift(applicant) {
    switch (drift_direction) {
        case 1:
            $(applicant).addClass('dritfting_direc1');
            break;
        case 2:
            $(applicant).addClass('dritfting_direc2');
            break;
        case 3:
            $(applicant).addClass('dritfting_direc3');
            break;
    };
    setTimeout(function () {
        $(applicant).removeClass('dritfting_direc1');
        $(applicant).removeClass('dritfting_direc2');
        $(applicant).removeClass('dritfting_direc3');
    }, 600);
};

function spatial_randomizer() {
    spatial_delimiter = Math.floor(Math.random() * 40);
    drift_direction = (drift_direction >= 25) ? 1 : 2;
    drift_direction = (drift_direction == 2 && spatial_delimiter > 10) ? 3 : 2;
    if (spatial_delimiter <= 10) {
        drift('#mm-center-bubble');
    };
    if ((spatial_delimiter <= 25) && (spatial_delimiter >= 8)) {
        drift('#mm-outer-bubble1');
    };
    if ((spatial_delimiter <= 30) && (spatial_delimiter >= 21)) {
        drift('#mm-outer-bubble2');
    };
    if ((spatial_delimiter <= 40) && (spatial_delimiter >= 28)) {
        drift('#mm-outer-bubble3');
    };
    setTimeout(function () {
        spatial_randomizer();
    }, 300);
};

$(document).on('turbolinks:load', function() {
if ($('body').is('#index'))
{

    spatial_randomizer();

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
        $('#index-navbar').css('background-color', 'rgba(21, 27, 128, ' + ((window.scrollY/3.8)/100) + ')');
        if ( (window.scrollY/3.8)/100 >= 1 ) {
            $('#index-navbar').css('box-shadow', '0 2px 5px 2px rgba(0, 0, 0, 0.25)');
            if ( !headerHasText ) {
                $('h3').animate({'opacity': '1'}, 630);
                headerHasText = true;
            };
        };
        if ( (window.scrollY/3.8)/100 < 1 ) {
            $('#index-navbar').css('box-shadow', 'initial');
            if ( headerHasText ) {
                $('h3').animate({'opacity': '0'}, 630);
                headerHasText = false;
            };
        };
    });

} // endif
});
