class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: 0,
      boxShadow: '0 -5px 9px 10px rgba(0, 0, 0, 0.6)'
    }
  }
  componentDidMount() {
    this.triggerScrollSniffer()
  }
  triggerScrollSniffer()  {
    document.addEventListener('scroll', () => {
      if ((window.scrollY/3.8)/90 <= 0.9) {
        this.setState({
          opacity: (
            (window.scrollY/3.8) / 90
          ).toString()
        })
      }
    })
  }
  render() {
    return <nav>
      <div id="background" style={{
        opacity: this.state.opacity,
        boxShadow: this.state.boxShadow
      }}>

      </div>
      <i className="material-icons">settings</i>
    </nav>
  }
}

class Section extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return <section>

    </section>
  }
}
