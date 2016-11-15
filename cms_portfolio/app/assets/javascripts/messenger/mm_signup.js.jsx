var SignupForum = React.createClass({
    getInitialState: function() {
        return {
            user: this.props.user
        };
    },
    componentDidMount: function() {
        $('input').on('keydown', (event) => {
            if (event.keyCode == 13) {
                event.preventDefault();
                return false;
            };
        });
        $('button').on('click', (event) => {
            event.preventDefault();
        });
    },
    commstate: function() {
        if (this.refs.password.getAuthState() && this.refs.user_name.getAuthState()
         && this.refs.last_name.getAuthState() && this.refs.first_name.getAuthState()) {
            console.log("data submitted");
            return true;
        };
        console.log("data not submitted");
        return false;
    },
    render: function() {
        return (
            <div>
                <h3>Signup for <mark>Material Messenger</mark></h3>
                <form>
                    <p className="forum-label">First Name:</p>
                    <TextField spacesAllowed={false}
                        placeholder="First name"
                        ref="first_name"/>
                    <p className="forum-label">Last Name:</p>
                    <TextField spacesAllowed={true}
                        placeholder="Last name"
                        ref="last_name"/>
                    <p className="forum-label">Username:</p>
                    <TextField minimumLenght={3}
                        maximumLength={25}
                        spacesAllowed={false}
                        ref="user_name"
                        placeholder="Over three characters"/>
                    <p className="forum-label">Password:</p>
                    <PasswordField placeholder="Over six characters"
                        ref="password"/>
                    <SubmitButton value="Sign Up"
                        commstate={this.commstate}
                        className="forum-button"/>
                </form>
            </div>
        );
    }
});
