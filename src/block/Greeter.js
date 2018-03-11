import React, {Component} from 'react';
class Greeter extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;

        let button = null;
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />;
        }

        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
            </div>
        );
    }
}
function UserGreeting(props) {
    return <h1 className="welcome">норм</h1>;
}
function GuestGreeting(props) {
    return <h1 className="welcome">кнопка меняющая текст!</h1>;
}
function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}
function LoginButton(props) {
    return (
        <button className="button" onClick={props.onClick}>
            Кнопка
        </button>
    );
}
function LogoutButton(props) {
    return (
        <button className="button" onClick={props.onClick}>
            Кнопка
        </button>
    );
}
export default Greeter