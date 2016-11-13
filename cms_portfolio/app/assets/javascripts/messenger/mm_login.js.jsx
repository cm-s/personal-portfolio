var LoginForum = React.createClass({
    getInitialState: function() {
        return {
            forumFilled: false
        };
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
                        minimumLenght={3}
                        maximumLength={25}
                        spacesAllowed={false}/><br/>
                    <p id="password">Password:</p>
                    <PasswordField id="password"
                        className="mm-login"
                        placeholder="More than seven characters"
                        showVulnerabilities={this.showVulnerabilities}/><br/>
                    <SubmitButton id="login-button"
                        className="mm-forum-button"
                        value="Login"/>
                </forum>
            </div>
        );
    }
});
