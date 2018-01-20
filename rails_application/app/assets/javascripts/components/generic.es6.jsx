class WideButton extends React.Component {
  follow() {
    document.addEventListener('turbolinks:before-render', () => {
      sleep(300);
    });
    Turbolinks.visit(this.props.href);
  }
  render() {
    return (
      <button ref="self"
        className={this.props.className + ' wide-button'}
        onClick={this.follow.bind(this)}
        style={{
            margin: this.props.margin,
            background: this.props.background,
        }}>
        {this.props.text}
        <Responder ref="ripple"
          className="generic"
          level={1}
          dimensions={this.props.width}/>
      </button>
    );
  }
}
class Responder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animating: false,
      top: false,
      left: false
    };
  }
  componentDidMount() {
    let primaryFxn = (event) => {
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
    };
    this.props.level == 2 ? $($(this.refs.self)[0].parentElement.parentElement).on('click', primaryFxn) :
    $($(this.refs.self)[0].parentElement).on('click', primaryFxn);
  }
  render() {
    if (this.props.level == 2) return (
      <span className="ripple-container">
        <span ref="self"
          className={this.state.animating + ' ' + this.props.className + ' ripple'}
          style={{
            top: this.state.top + 'px',
            left: this.state.left + 'px',
            height: this.props.dimensions * 2 + 'px',
            width: this.props.dimensions * 2 + 'px'
          }}>
        </span>
      </span>
    );
    else return <span ref="self"
          className={this.state.animating + ' ' + this.props.className + ' ripple'}
          style={{
            top: this.state.top + 'px',
            left: this.state.left + 'px',
            height: this.props.dimensions * 2 + 'px',
            width: this.props.dimensions * 2 + 'px'
          }}></span>;
  }
}
class CircularButton extends React.Component {
  constructor(props) {
    super(props);
    if (!this.props.opaque)
      this.state = {
        boxShadow: 'none',
        backgroundColor: 'transparent'
      };
    else this.state = {
      boxShadow: '0 1px 1px rgba(0,0,0,0.3)',
      backgroundColor: '#dddddd'
    };
  }
  render() {
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
        <Responder dimensions={this.props.size} level={2}/>
      </div>
    );
  }
}
