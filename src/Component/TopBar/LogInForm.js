import React, { Component, Fragment } from 'react';
import './TopBar.css'
import { withRouter } from 'react-router';

class LogInForm extends Component {

    state = {
        userName: "",
        userPassword: "",
    }

    cancelHandler = () => {
        localStorage.setItem("showLogInModal", false);
        this.props.history.push("/");

    }

    onLogInHandler = (event) => {
        // console.log("inside function")
        this.setState((prevState) => {
            let stateVal = prevState;
            stateVal[event.target.name] = event.target.value;
            return {
                ...stateVal,
            };
        })

    }

    loggedInHandler = () => {

        let data = JSON.parse(localStorage.getItem("userList"));
        console.log(data);
        let index = 0;
        let count = 0;
        if (data !== undefined && data !== null) {
            for (let i = 0; i < data.length; i++) {
                if (this.state.userName === data[i].userName && this.state.userPassword === data[i].userPassword) {
                    index = i;
                    localStorage.setItem("currentUserIndex", index);
                    // alert("inside function")
                    localStorage.setItem("loggedIn", true);
                    localStorage.setItem("showLogInModal", false);
                    localStorage.setItem("currentUser", JSON.stringify(this.state));
                    // console.log(JSON.parse(localStorage.getItem("userList")));
                }
                else count++;
            }
            if (data === null || count === data.length) {
                alert("User does not exist. Try signing up!")
                localStorage.setItem("loggedIn", false);
                localStorage.setItem("showLogInModal", false);
                localStorage.setItem("currentUser", JSON.stringify(this.state));
            }
        }
    }

    render() {
        return (
            <Fragment>
                <form className='loginform' onSubmit={this.loggedInHandler}>
                    <div className='lheader'>LOG IN</div>
                    <div className='inputdiv'>
                        <label className='ilabel'>UserName</label>
                        <input className='forminput' placeholder='UserName' name='userName' onChange={this.onLogInHandler} required />
                    </div>
                    <div className='inputdiv'>
                        <label className='ilabel'>Password</label>
                        <input type="password" className='forminput' placeholder='Password' name='userPassword' onChange={this.onLogInHandler} required />
                    </div>
                    <div className='inputdiv2'>
                        <button className='formButton'>LogIn</button>
                        <button onClick={this.cancelHandler} className='formButton2'>Cancel</button>
                    </div>
                </form>
            </Fragment>

        )
    }
}

export default withRouter(LogInForm);