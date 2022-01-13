import React, { Component } from 'react'
import './TopBar.css'
import { withRouter } from 'react-router';


class SignUpForm extends Component {

    state = {
        userName: "Noor02",
        userPassword: "noor",
        userType: "traveller",
        userEmail: "divnoorkaur04@gmail.com",
        userId: 0,
    }

    filledInputHandler = (event) => {
        this.setState((prevState) => {
            let stateVal = prevState;
            stateVal[event.target.name] = event.target.value;
            return {
                ...stateVal,
            };
        })
    }

    cancelHandler = () => {
        this.props.history.push("/")

        localStorage.setItem("showSignUpModal", false);
        this.setState({
            userName: "",
            userPassword: "",
            userType: "",
            userEmail: "",
            userId: null,
        })
    }

    signedUpHandler = (event) => {
        event.preventDefault();
        let count = 0;
        let index = 0;
        let demoLists = JSON.parse(localStorage.getItem("userList"));
        if (demoLists !== undefined && demoLists !== null) {
            index = demoLists.length;
            for (let i = 0; i < demoLists.length; i++) {
                if (this.state.userName !== demoLists[i].userName && this.state.userEmail !== demoLists[i].userEmail) {
                    count++;
                }
            }
        }
        localStorage.setItem("showSignUpModal", false);
        localStorage.setItem("loggedIn", true);
        let data = {
            userName: this.state.userName,
            userPassword: this.state.userPassword
        }
        localStorage.setItem("currentUser", JSON.stringify(data));
        localStorage.setItem("currentUserIndex", index);
        if (demoLists === null || demoLists.length === count) {
            this.props.onAddUser(
                this.state.userName,
                this.state.userPassword,
                this.state.userEmail,
                this.state.userType
            );

            this.setState({
                userName: "",
                userPassword: "",
                userType: "",
                userEmail: "",
                userId: 0,
            })
        }
        else (alert("User already exists. Try logging in!"))

    };

    render() {
        return (
            <form className='completeform' onSubmit={this.signedUpHandler}>
                <header className='header'>
                    <div>
                        SIGN UP
                    </div></header>

                <div className='inputdiv'>
                    <label className='ilabel'>UserName</label>
                    <input
                        type="text"
                        name='userName'
                        placeholder='name'
                        className='forminput'
                        required
                        onChange={this.filledInputHandler}
                    />
                </div>
                <div className='inputdiv'>
                    <label className='ilabel'>EmailId</label>
                    <input
                        type="email"
                        name='userEmail'
                        placeholder='1234@abc.com'
                        className='forminput'
                        required
                        onChange={this.filledInputHandler}
                    />
                </div>
                <div className='inputdiv'>
                    <label className='ilabel'>Password</label>
                    <input
                        type="password"
                        name='userPassword'
                        placeholder='password'
                        className='forminput'
                        required
                        onChange={this.filledInputHandler}
                    />
                </div>
                <div className='inputdiv'>
                    <label className='ilabel'>UserType</label>
                    <input
                        list="types"
                        name='userType'
                        placeholder='UserType'
                        className='forminput'
                        required
                        onChange={this.filledInputHandler}
                    />
                    <datalist id="types">
                        <option>Traveller</option>
                        <option>Host</option>
                    </datalist>
                </div>
                <div className='inputdiv2'>
                    <button className='formButton'>Create Profile</button>
                    <button onClick={this.cancelHandler} className='formButton2'>Cancel</button>
                </div>
            </form>
        )
    }
}

export default withRouter(SignUpForm);