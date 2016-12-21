var SignupForum = React.createClass({
    getInitialState: function() {
        return {
            user: this.props.user,
            stateTracker: false
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
    commState: function() {
        if (this.refs.password.getAuthState() && this.refs.user_name.getAuthState()
         && this.refs.last_name.getAuthState() && this.refs.first_name.getAuthState()) {
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
                if (this.refs.password.getAuthState() && this.refs.user_name.getAuthState()
                && this.refs.last_name.getAuthState() && this.refs.first_name.getAuthState()) {
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
        let first_name = this.refs.first_name.getValue();
        let last_name = this.refs.last_name.getValue();
        let user_name = this.refs.user_name.getValue();
        let password = this.refs.password.getValue();
        $.ajax({
            url: '/mm_users',
            type: 'POST',
            data: { messenger: {
                    user_name: user_name,
                    password: password,
                    first_name: first_name,
                    last_name: last_name
                }
            }
        })
    },
    render: function() {
        return (
            <div>
                <h3>Signup for <mark>Material Messenger</mark></h3>
                <form onKeyDown={this.renderState}>
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
                        ref="submit"
                        commState={this.commState}
                        postData={this.postData}
                        className="forum-button"
                        width={120}
                        height={55}/>
                </form>
            </div>
        );
    }
});
