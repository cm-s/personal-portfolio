var TextField = React.createClass({
    getInitialState: function() {
        return {
            minLength: false,
            spacesAllowed: true,
            filled: false
        };
    },
    componentDidMount: function() {
        this.setState({
            minLength: this.props.minLength,
            spacesAllowed: this.props.spacesAllowed
        });
    },
    assert_filled: function(event) {
        if (minLength && event.target.value.length >= minLength) {
            if (!spacesAllowed) {
                if (event.target.value.indexOf(' ') == -1) {
                    this.setState({
                        filled: true
                    });
                };
            } else {
                this.setState({
                    filled: true
                });
            };
        };
    },
    render: function() {
        return <input type="text" ref="text_field" className={this.props.className} placeholder={this.props.placeholder} onChange={this.assert_filled}></input>;
    }
});
var PasswordField = React.createClass({
    getInitialState: function() {
        return {
            authenticated: false,
        };
    },
    assert_filled: function(event) {
        var blacklist = ['<', '>', '{', '}', '[', ']', '|', '@', '/', '*', '%', ':', ';', '.'];
        var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        function excluded(array, value) {
            return array.every(index => index != value);
        };

        if (event.target.value.length > 6 && (event.target.value.indexOf(' ') === -1)) {
            for (let index = 0; index < event.target.value.length; index++) {
                if (!excluded(blacklist, event.target.value[index])) {
                    console.log("informing contains invalid characters");
                    //this.props.unauthenticated("bchars");
                    this.setState({
                        authenticated: false,
                        error: "Cannot contain: < > { } [ ] | @ / * % : ; ."
                    });
                    document.getElementsByClassName('forum-entry-error').innerText(this.state.error);
                    return false;
                };
            };
            console.log("passed blacklist authentication");
            for (let index = 0; index < event.target.value.length; index++) {
                if (!excluded(numbers, event.target.value[index])) {
                    console.log("authenticated, data is numeric");
                    this.setState({
                        authenticated: true,
                        error: false
                    });
                    return true;
                };
            };
            console.log("information not numeric");
            //this.props.unauthenticated('numeric');
            this.setState({
                authenticated: false,
                error: "Must contain at least one number"
            });
        };
    },
    render: function() {
        return (
            <div>
                <input type="password" ref="passwd_field" placeholder={this.props.placeholder} className={this.props.className} onChange={this.assert_filled}></input>;
                <span className="underline"></span>
                <span className="forum-entry-error">{this.state.error}</span>
            </div>
        );
    }
});
var SubmitButton = React.createClass({
    request_submission: function() {
        // Submit data if appropriate
    },
    render: function() {
        return <button type="submit" ref="submit_btn" onClick={this.request_submission} className={this.props.className}>{this.props.value}</button>;
    }
});
