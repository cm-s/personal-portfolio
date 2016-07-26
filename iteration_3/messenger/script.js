var convo_set_btn_state = false;

$(document).ready(function() {
    $('#conversation-settings').click(function() {
        if (!convo_set_btn_state) {
            $('#conversation-settings ul').attr('id', 'opened');
            convo_set_btn_state = true;
        } else {
            $('#conversation-settings ul').attr('id', 'closed');
            convo_set_btn_state = false;
        };
    });
});
