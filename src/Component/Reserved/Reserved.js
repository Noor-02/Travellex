import React, { Component, Fragment } from 'react';
import './Reserved.css';
import { withRouter } from 'react-router';

class Reserved extends Component {

    exitHandler = () => {
        localStorage.setItem("Reserved", false);
        this.props.history.push("/SearchPage");
    }

    render() {
        let reservation = JSON.parse(localStorage.getItem("Reserved"));
        let reserved = JSON.parse(localStorage.getItem("reservation"));
        let indexed = JSON.parse(localStorage.getItem("DetailsNeeded"));
        let properties = JSON.parse(localStorage.getItem("PropertyList"));
        return (
            <Fragment>
                {reservation &&
                    <div className='reserveddiv'>
                        <div className='logoing'><span className='retext'>RESERVATION COMPLETE</span> </div>
                        {/* <span className='resreveText1'></span> */}
                        <span><img className='rimage' src={properties[indexed].propertyImage[0]} /> </span>
                        <span className='resreveText1'>{properties[indexed].propertyName}</span>
                        <span className='resreveText3'>CheckIn Date: {reserved.checkinDate}</span>
                        <span className='resreveText4'>CheckOut Date: {reserved.checkinDate}</span>
                        <span className='resreveText5'>Number of Guests: {reserved.numberofGuests}</span>
                        <span className='resreveText6'>Total Expense: ${reserved.total}</span>
                        <span><button className='exit' onClick={this.exitHandler}>Exit</button></span>
                    </div>}
            </Fragment>
        )
    }
}

export default withRouter(Reserved);