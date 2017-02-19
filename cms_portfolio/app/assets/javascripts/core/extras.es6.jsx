var introText = "only"
class ElementalCard extends React.Component {
  componentDidMount() {
    $.ajax({
      url: '/core/extras/project',
      type: 'GET',
      contentType: 'text/html',
      async: true,
      data: { target: {
        id: 1
      } },
      success(response) {
        console.debug(response);
      }
    })
  }
  render() {
    return (
      <div className={'card' + this.props.side}>

      </div>
    );
  }
}

$(document).on('turbolinks:load', () => {
if ($('body').is('#extras'))
{
  setTimeout( () => {
    $('#pw-text-container').animate({'opacity': '0'}, 1900);
    setTimeout( () => {
      $('#pw-text-container').css('display', 'none');
    }, 1901);
  }, 3000);
};
});
