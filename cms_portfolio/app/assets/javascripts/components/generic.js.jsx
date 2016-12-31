var WideButton = React.createClass({
    follow: function() {
        document.addEventListener('turbolinks:before-render', () => {
            sleep(300);
        });
        Turbolinks.visit(this.props.href);
    },
    render: function() {
        return (
            <button ref="self"
                className={this.props.className + ' wide-button'}
                onClick={this.follow}
                style={{
                    margin: this.props.margin,
                    background: this.props.background,
                }}>
                {this.props.text}
                <Responder ref="ripple"
                    className="generic"
                    dimensions={this.props.width}/>
            </button>
        );
    }
});
var Responder = React.createClass({
    getInitialState: function() {
        return {
            animating: false,
            top: false,
            left: false
        };
    },
    componentDidMount: function() {
        console.log(this.props.dimensions);
        $($(this.refs.self)[0].parentElement).on('click', (event) => {
            this.setState({
                animating: 'animating',
                top: (event.pageY - (this.props.dimensions)) - $($(this.refs.self)[0].parentElement).offset().top,
                left: (event.pageX - (this.props.dimensions)) - $($(this.refs.self)[0].parentElement).offset().left
            });
            setTimeout(function () {
                this.setState({
                    animating: false
                });
            }.bind(this), 300);
        });
    },
    render: function() {
        return <span ref="self"
            className={this.state.animating + ' ' + this.props.className + ' ripple'}
            style={{
                top: this.state.top + 'px',
                left: this.state.left + 'px',
                height: this.props.dimensions * 2 + 'px',
                width: this.props.dimensions * 2 + 'px'
            }}></span>;
    }
});
var CircularButton = React.createClass({
    getInitialState: function() {
        if (!this.props.opaque) return {
            boxShadow: 'none',
            backgroundColor: 'transparent'
        };
        else return {
            boxShadow: '0 1px 1px rgba(0,0,0,0.3)',
            backgroundColor: '#dddddd'
        };
    },
    render: function() {
        return (
            <div className="circular-button"
                id={this.props.id}
                style={{
                    boxShadow: this.state.boxShadow,
                    backgroundColor: this.state.backgroundColor,
                    position: this.props.position,
                    height: this.props.size + 'px',
                    width: this.props.size + 'px'
                }}>
                <i className={this.props.icon}></i>
                <Responder dimensions={this.props.size}/>
            </div>
        );
    }
})
