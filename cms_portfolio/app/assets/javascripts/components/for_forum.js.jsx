var TextField = React.Component({
    assert_filled: function(value) {
        // See if it's filled
    },
    componentDidMount: function() {
        $(this.refs.text_field).keyup(function() {
            this.assert_filled($(this.refs.text_field).val());
        });
    },
    render: function() {
        return <input type="text" ref="text_field" placeholder={this.props.placeholder}></input><br/>;
    }
});
var PasswordField = React.Componet({
    assert_filled: function(value) {
        // Determine if value meets criteria
    },
    componentDidMount: function() {
        $(this.refs.passwd_field).keyup(function() {
            this.assert_filled($(this.refs.passwd_field).val())
        });
    },
    render: function() {
        return <input type="password" ref="passwd_field" placeholder={this.props.placeholder}></input><br/>;
    }
});
var SubmitButton = React.Component({
    request_submission: function() {
        // Submit data if appropriate
    },
    render: function() {
        return <input type="submit" ref="submit_btn" onClick={this.request_submission}></input>{this.props.value}<br/>;
    }
})
