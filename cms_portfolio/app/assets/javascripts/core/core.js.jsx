//= require jquery
//= require jquery_ujs
//= require turbolinks
var headerHasText = false;

var MmBubble = React.createClass({
    getInitialState: function() {
        return {
            top: this.props.top,
            left: this.props.left
        }
    },
    componentDidMount: function() {
        this.drift();
    },
    drift: function() {
        if ($('body').attr('id') == 'index') {
            let rand = Math.round(Math.random() * 20);
            if (rand >= 10) this.setState({
                top: this.state.top + rand + (rand + Math.round(Math.random() * 30)),
                left: this.state.left + rand - (rand + Math.round(Math.random() * 30))
            });
            else this.setState({
                top: this.state.top + rand - (rand + Math.round(Math.random() * 30)),
                left: this.state.left + rand + (rand + Math.round(Math.random() * 30))
            });
            setTimeout(function () {
                this.setState({
                    top: this.props.top,
                    left: this.props.left
                });
                setTimeout(function () {
                    this.drift();
                }.bind(this), this.props.interval / 2);
            }.bind(this), this.props.interval);
        };
    },
    render: function() {
        return <div className="mm-background-bubble"
            style={{
                top: this.state.top + 'px',
                left: this.state.left + 'px',
                height: this.props.size + 'px',
                width: this.props.size + 'px'
            }}></div>
    }
});

var Letter = React.createClass({
    getInitialState: function() {
        return {
            opacity: 1,
            passedTrigger: false
        };
    },
    triggerRecurser: function() {
        console.debug("One got Triggered");
        this.setState({
            opacity: 0
        });
        setTimeout(function () {
            this.props.invokeNextRecursion(this.props.iref - 1);
        }.bind(this), this.props.iref);
    },
    render: function() {
        return <mark className="intro-text"
            style={{ opacity: this.state.opacity }}>{this.props.innerText}</mark>
    }
});

var AboutMeSection = React.createClass({
    configureArray: function(sentance) {
        let output = Array.from(sentance);
        output = output.map((letter, index) => {
            return <Letter innerText={letter}
                ref={'l' + index}
                iref={index}
                invokeNextRecursion={this.invokeNextRecursion}/>
        }.bind(this));
        return output;
    },
    getInitialState: function() {
        return {
            latch: true,
            introText: this.configureArray("Scroll Down, Get A Better View"),
            descDisplay: 'none',
            introDisplay: 'flex'
        };
    },
    invokeNextRecursion: function(nextref) {
        if (eval('this.refs.l' + nextref))
            eval('this.refs.l' + nextref + '.triggerRecurser()');
        else {
            setTimeout(function () {
                this.setState({
                    introDisplay: 'none',
                    descDisplay: 'flex'
                });
                $('#card-three').css('background-color', '#222')
                this.portrayDiscription()
            }.bind(this), 400);
        };
    },
    temptIntro: function() {
        if (window.scrollY > 1630 && this.state.latch) {
            this.setState({
                latch: false
            });
            setTimeout(function () {
                this.refs.l29.triggerRecurser();
            }.bind(this), 780);
        };
    },
    portrayDiscription: function() {

    },
    render: function() {
        return (
            <article onMouseMove={this.temptIntro}
                style={{
                    backgroundColor: this.state.backgroundColor
                }}>
                <div id="introduction"
                    className="desc-element"
                    style={{ display: this.state.introDisplay }}>
                    <h5><strong>{this.state.introText}</strong></h5>
                </div>
                <div id="description"
                    className="desc-element"
                    style={{
                        display: this.state.descDisplay
                    }}>
                    <p>
                    {"As a young programmer, I don't dislike working with anything. I have taken on projects of varying creative and technical skill. With some deeper principle, I quite enjoy systems; Working in them, Creating them, Improving them. I've exercised myself through many projects. First and foremost the aptly named "}
                    <a href='https://github.com/cm-s/skillsDev'>skillsDev</a>
                    {" repository, with numerous others from "}
                    <a href='https://www.butte.edu/'>Butte College</a>
                    {" and one small repo that even contains exercises in assembly language."}
                    </p>
                </div>
            </article>
        );
    }
});

document.addEventListener('turbolinks:load', () => { if (document.querySelector('body').id == 'index') {

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
