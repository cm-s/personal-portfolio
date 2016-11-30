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
    setTimeout( () => {
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

var AboutMeSection = React.createClass({
    temptIntro: function() {
        if (window.scrollY > 1830) {
            console.debug("running into");
        };
    },
    render: function() {
        return (
            <article mouseMove={this.temptIntro}>
                <div id="attention">
                    <h5><strong>Scroll Down, Get A Better View</strong></h5>
                </div>
            </article>
        );
    }
});

document.addEventListener('turbolinks:load', () => { if (document.querySelector('body').id == 'index') {
    spatial_randomizer();

    $('#toTop').click( () => {
        $('html, body').animate({scrollTop: 0}, 600);
    });
    $('#github').click( () => {
        $('#shroud').css('z-index', '20');
        $('#shroud').animate({'opacity': '1'}, 200);
        document.location.href = 'https://github.com/cm-s/skillsDev';
    });
    $('#github').on('mouseenter', () => {
        $('#github-slider').removeClass('reset');
        $('#github-slider').addClass('triggered');
    });
    $('#github').on('mouseleave', () => {
        $('#github-slider').removeClass('triggered');
        $('#github-slider').addClass('reset');
    });
    $('#window-close').on('')
    $(document).on('scroll', () => {
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
}});
