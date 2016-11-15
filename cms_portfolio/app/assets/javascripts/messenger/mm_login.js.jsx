var LoginForum = React.createClass({
    getInitialState: function() {
        return {
            forumFilled: false
        };
    },
    commstate: function() {
        if (this.refs.password.getAuthState() && this.refs.user_name.getAuthState()) {
            console.log("data submitted");
            return true;
        };
        console.log("data not submitted");
        return false;
    },
    render: function() {
        return (
            <div>
                <h3>Login to <mark>Material Messenger</mark></h3>
                <forum>
                    <p id="user-name">Username:</p>
                    <TextField id="user-name"
                        className="mm-login"
                        placeholder="Someone"
                        ref="user_name"
                        minimumLenght={3}
                        maximumLength={25}
                        spacesAllowed={false}/><br/>
                    <p id="password">Password:</p>
                    <PasswordField id="password"
                        className="mm-login"
                        ref="password"
                        placeholder="More than seven characters"/><br/>
                    <SubmitButton id="login-button"
                        className="forum-button"
                        commstate={this.commstate}
                        value="Login"/>
                </forum>
            </div>
        );
    }
});
