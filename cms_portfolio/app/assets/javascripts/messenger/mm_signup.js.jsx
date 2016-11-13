var SignupForum = React.createClass({
    render: function() {
        return (
            <div>
                <h3>Signup for <mark>Material Messenger</mark></h3>
                <form>
                    <p className="forum-label">First Name:</p>
                    <TextField spacesAllowed={true}
                        placeholder="First name"/>
                    <p className="forum-label">Last Name:</p>
                    <TextField spacesAllowed={true}
                        placeholder="Last name"/>
                    <p className="forum-label">Username:</p>
                    <TextField minimumLenght={3}
                        maximumLength={25}
                        spacesAllowed={false}
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
