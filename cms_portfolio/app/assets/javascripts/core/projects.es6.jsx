var introText = "only"
class ElementalCard extends React.Component {
  render() {
    return (
      <div className={'card' + this.props.side}>

      </div>
    )
  }
}

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
