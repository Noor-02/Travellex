import React, { Component, Fragment } from 'react';
import imagediv from '../../assets/homepage_image.jpg'
import './Homepage.css'
import { withRouter } from "react-router";

class HomePage extends Component {

    redirectHandler = () => {
        this.props.history.push('/SearchPage');
    }

    render() {
        return (
            <Fragment>
                <div className='imagedivv'>
                    <img src={imagediv} className='image' />
                    <span className='imgspan1'>Cant decide where to go?</span>
                    <span className='imgspan2'>Travellex got your back</span>
                    <button className='imagebutton' onClick={this.redirectHandler}>I am flexible</button>
                </div>
            </Fragment>
        )
    }
}

export default withRouter(HomePage);