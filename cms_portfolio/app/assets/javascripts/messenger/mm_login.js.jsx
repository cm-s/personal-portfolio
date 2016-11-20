var LoginForum = React.createClass({
    getInitialState: function() {
        return {
            forumFilled: false
        };
    },
    commState: function() {
        if (this.refs.password.getAuthState() && this.refs.user_name.getAuthState()) {
            console.log("data submitted");
            return true;
        };
        console.log("data not submitted");
        return false;
    },
    renderState: function() {
        if (!this.state.stateTracker) {
            this.setState({
                stateTracker: true
            });
            setTimeout( () => {
                if (this.refs.password.getAuthState() && this.refs.user_name.getAuthState()) {
                    this.refs.submit.setState({
                        statusColor: '#1eb437'
                    });
                };
                this.setState({
                    stateTracker: false
                });
            }.bind(this), 800);
        };
    },
    postData: function() {
        let user_name = this.refs.user_name.getValue();
        let password = this.refs.password.getValue();
        $.ajax({
            url: '/mm_users/login',
            type: 'POST',
            data: {
                user_name: user_name,
                password: password
            }
        });
    },
    render: function() {
        return (
            <div>
                <h3>Login to <mark>Material Messenger</mark></h3>
                <forum onKeyDown={this.renderState}>
                    <p className="forum-label">Username:</p>
                    <TextField className="mm-login"
                        placeholder="Someone"
                        ref="user_name"
                        minimumLenght={3}
                        maximumLength={25}
                        spacesAllowed={false}/><br/>
                    <p className="forum-label">Password:</p>
                    <PasswordField className="mm-login"
                        ref="password"
                        placeholder="More than seven characters"/><br/>
                    <SubmitButton ref="submit"
                        id="login-button"
                        className="forum-button"
                        commState={this.commState}
                        postData={this.postData}
                        value="Login"
                        width={68}
                        height={47}/>
                </forum>
            </div>
        );
    }
});
