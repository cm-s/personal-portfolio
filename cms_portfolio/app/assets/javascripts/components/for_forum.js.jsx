var TextField = React.createClass({
    getInitialState: function() {
        return {
            minimumLenght: false,
            maximumLength: false,
            spacesAllowed: true,
            filled: false,
            error: false,
            statusColor: '#777',
            errorState: 'translateY(0)'
        };
    },
    componentDidMount: function() {
        this.setState({
            minimumLenght: this.props.minimumLenght,
            maximumLength: this.props.maximumLength,
            spacesAllowed: this.props.spacesAllowed
        });
    },
    assert_filled: function(event) {
        if (this.state.minimumLenght && event.target.value.length >= this.state.minimumLenght && this.state.maximumLength && event.target.value.length <= this.state.maximumLength) {
            console.log("Passed length validation");
            if (!this.state.spacesAllowed) {
                if (event.target.value.indexOf(' ') == -1) {
                    this.setState({
                        filled: true,
                        error: false,
                        statusColor: '#777',
                        errorState: 'translateY(0)'
                    });
                } else {
                    this.setState({
                        filled: false,
                        error: "Cannot contain spaces",
                        statusColor: '#c5260a',
                        errorState: 'translateY(2.4rem)'
                    });
                };
            } else {
                this.setState({
                    filled: true,
                    error: false,
                    statusColor: '#777',
                    errorState: 'translateY(0)'
                });
            };
        } else if (this.state.maximumLength && event.target.value.length > this.state.maximumLength) {
            this.setState({
                filled: false,
                error: "Cannot be beyond " + this.state.maximumLength + " characters long",
                statusColor: '#c5260a',
                errorState: 'translateY(2.4rem)'
            });
        } else if (!this.state.minimumLenght || !this.state.maximumLength) {
            this.setState({
                filled: true
            });
        };
    },
    getAuthState: function() {
        return this.state.filled;
    },
    getValue: function() {
        return this.refs.input.value;
    },
    render: function() {
        return (
            <span className="forum-entry-container">
                <input type="text"
                    className={this.props.className + ' forum-entry-field'}
                    placeholder={this.props.placeholder}
                    onChange={this.assert_filled}
                    ref="input"></input>
                <span className="forum-entry-underline"
                    style={{ background: this.state.statusColor }}></span>
                <span className="forum-entry-error"
                    style={{ transform: this.state.errorState }}>{this.state.error}</span>
            </span>
        );
    }
});
var PasswordField = React.createClass({
    getInitialState: function() {
        return {
            authenticated: false,
            error: false,
            statusColor: '#888',
            errorState: 'translateY(0)'
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
                    this.setState({
                        authenticated: false,
                        error: "Cannot contain: < > { } [ ] | @ / * % : ; .",
                        statusColor: '#c5260a',
                        errorState: 'translateY(2.4rem)'
                    });
                    return false;
                };
            };
            for (let index = 0; index < event.target.value.length; index++) {
                if (!excluded(numbers, event.target.value[index])) {
                    console.log("authenticated, data is numeric");
                    this.setState({
                        authenticated: true,
                        error: false,
                        statusColor: '#777',
                        errorState: 'translateY(0)'
                    });
                    return true;
                };
            };
            this.setState({
                authenticated: false,
                error: "Must contain at least one number",
                statusColor: '#c5260a',
                errorState: 'translateY(2.4rem)'
            });
        } else {
        };
    },
    getAuthState: function() {
        return this.state.authenticated;
    },
    getValue: function() {
        return this.refs.input.value;
    },
    render: function() {
        return (
            <span className="forum-entry-container">
                <input type="password"
                    placeholder={this.props.placeholder}
                    className={this.props.className + ' forum-entry-field'}
                    onChange={this.assert_filled}
                    ref="input"></input>
                <span className="forum-entry-underline"
                    style={{ background: this.state.statusColor }}></span>
                <span className="forum-entry-error"
                    style={{ transform: this.state.errorState }}>{this.state.error}</span>
            </span>
        );
    }
});
var SubmitButton = React.createClass({
    getInitialState: function() {
        return {
            statusColor: '#777'
        };
    },
    attemptSubmission: function() {
        if (this.props.commstate()) {
            console.log("Submitting");
            this.props.postData();
        };
    },
    render: function() {
        return <button id={this.props.id}
            type="submit"
            onClick={this.attemptSubmission}
            className={this.props.className}
            style={{ background: this.state.statusColor }}>{this.props.value}</button>;
    }
});