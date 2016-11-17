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
    postData: function() {
        let first_name = this.refs.first_name.getValue();
        let last_name = this.refs.last_name.getValue();
        let user_name = this.refs.user_name.getValue();
        let password = this.refs.password.getValue();
        let image = this.refs.image.getValue();
        $.ajax({
            url: '/mm_users',
            type: 'POST',
            data: { messenger: {
                    user_name: user_name,
                    password: password,
                    first_name: first_name,
                    last_name: last_name,
                    image: image
                }
            }
        })
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
                    <ImageField ref="image"/>
                    <SubmitButton value="Sign Up"
                        commstate={this.commstate}
                        postData={this.postData}
                        className="forum-button"/>
                </form>
            </div>
        );
    }
});
