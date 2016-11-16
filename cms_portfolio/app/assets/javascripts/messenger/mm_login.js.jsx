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
                <forum>
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
                    <SubmitButton id="login-button"
                        className="forum-button"
                        commstate={this.commstate}
                        postData={this.postData}
                        value="Login"/>
                </forum>
            </div>
        );
    }
});
