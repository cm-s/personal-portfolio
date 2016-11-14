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
    },
    render: function() {
        return (
            <div>
                <h3>Signup for <mark>Material Messenger</mark></h3>
                <form>
                    <p className="forum-label">First Name:</p>
                    <TextField spacesAllowed={true}
                        placeholder="First name"
                        reference="first_name"/>
                    <p className="forum-label">Last Name:</p>
                    <TextField spacesAllowed={true}
                        placeholder="Last name"
                        reference="last_name"/>
                    <p className="forum-label">Username:</p>
                    <TextField minimumLenght={3}
                        maximumLength={25}
                        spacesAllowed={false}
                        reference="user_name"
                        placeholder="Over three characters"/>
                    <p className="forum-label">Password:</p>
                    <PasswordField placeholder="Over six characters"/>
                    <SubmitButton value="Sign Up"
                        className="forum-button"
                        ref="submitButton"/>
                </form>
            </div>
        );
    }
});
