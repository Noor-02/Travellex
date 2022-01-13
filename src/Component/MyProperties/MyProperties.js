import React, { Component, Fragment } from 'react';
import './MyProperties.css';
import { withRouter } from 'react-router';

class MyProperties extends Component {

    formHandler = () => {
        this.props.history.push('/AddProperty');
    }

    detailRedirectHandler = (event, key) => {
        this.props.history.push(`/Details/:${key}`);
        localStorage.setItem("DetailsNeeded", key);
    }

    editHandler = (event, key) => {
        this.props.history.push(`/EditProperty/:${key}`);
        localStorage.setItem("EditingProperty", key);
    }

    render() {
        let user = JSON.parse(localStorage.getItem("currentUser")).userName;
        let demoList = JSON.parse(localStorage.getItem("PropertyList"));
        let finalList = demoList.filter((item) => {
            if (item.propertyHost === user) {
                return item;
            }
        }
        )

        const isloggedIn = JSON.parse(localStorage.getItem("loggedIn"));
        const currentLoggedInUser = JSON.parse(localStorage.getItem("currentUserIndex"));
        const usersList = JSON.parse(localStorage.getItem("userList"));
        let host = false;
        if (isloggedIn) {
            if (usersList[currentLoggedInUser].userType === "Host") {
                host = true;
            }
        }

        return (
            <Fragment>
                {host &&
                    <Fragment>
                        <div className='addButtondiv'>
                            <button className='addButton' onClick={this.formHandler}>
                                Add property
                            </button>

                        </div>
                        <div className='bordersing'></div>
                        <div className='goodPropertyList'>
                            {finalList !== null && finalList.map((item, index) => (
                                <Fragment>

                                    <div className='goodPropertyItem'>
                                        <img className='simage' src={item.propertyImage[0]} />
                                        <div className='chardiv'>
                                            <div><span className='pguest'>{item.propertyLocation}</span></div>
                                            <div className='namediv'>
                                                <span className='pname'>{item.propertyName}</span>
                                                <div>
                                                    <button className='detailingbutton' onClick={(event) => this.detailRedirectHandler(event, item.propertyId)}>View Details</button>
                                                    <button className='detailingbutton' onClick={(event) => this.editHandler(event, item.propertyId)} >Edit Details</button>
                                                </div>
                                            </div>


                                            <div className='detailerdiv'>
                                                <span className='pguest'>{item.propertyGuestCapacity} Guests <i class="bi bi-suit-diamond-fill"></i><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="black" className="bi bi-suit-diamond-fill" viewBox="0 0 16 16">
                                                    <path d="M2.45 7.4 7.2 1.067a1 1 0 0 1 1.6 0L13.55 7.4a1 1 0 0 1 0 1.2L8.8 14.933a1 1 0 0 1-1.6 0L2.45 8.6a1 1 0 0 1 0-1.2z" />
                                                </svg></span>
                                                <span className='pguest'>{item.propertyBedroomCount} Bedrooms <i class="bi bi-suit-diamond-fill"></i><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="black" className="bi bi-suit-diamond-fill" viewBox="0 0 16 16">
                                                    <path d="M2.45 7.4 7.2 1.067a1 1 0 0 1 1.6 0L13.55 7.4a1 1 0 0 1 0 1.2L8.8 14.933a1 1 0 0 1-1.6 0L2.45 8.6a1 1 0 0 1 0-1.2z" />
                                                </svg></span>
                                                <span className='pguest'>{item.propertyBedCount} Beds <i class="bi bi-suit-diamond-fill"></i><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="black" className="bi bi-suit-diamond-fill" viewBox="0 0 16 16">
                                                    <path d="M2.45 7.4 7.2 1.067a1 1 0 0 1 1.6 0L13.55 7.4a1 1 0 0 1 0 1.2L8.8 14.933a1 1 0 0 1-1.6 0L2.45 8.6a1 1 0 0 1 0-1.2z" />
                                                </svg></span>
                                                <span className='pguest'>{item.propertyBathroomCount} Bathrooms <i class="bi bi-suit-diamond-fill"></i><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="black" className="bi bi-suit-diamond-fill" viewBox="0 0 16 16">
                                                    <path d="M2.45 7.4 7.2 1.067a1 1 0 0 1 1.6 0L13.55 7.4a1 1 0 0 1 0 1.2L8.8 14.933a1 1 0 0 1-1.6 0L2.45 8.6a1 1 0 0 1 0-1.2z" />
                                                </svg></span>
                                                <span className='ptype'>{item.propertyType} </span>
                                            </div>
                                            {/* <div>
                                                <span className='pguest'>{item.propertyDescription}</span>
                                            </div> */}
                                            <div>
                                                {item.propertyWifi === true && <span className='pguest'>Wifi <i class="bi bi-suit-diamond-fill"></i><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="black" className="bi bi-suit-diamond-fill" viewBox="0 0 16 16">
                                                    <path d="M2.45 7.4 7.2 1.067a1 1 0 0 1 1.6 0L13.55 7.4a1 1 0 0 1 0 1.2L8.8 14.933a1 1 0 0 1-1.6 0L2.45 8.6a1 1 0 0 1 0-1.2z" />
                                                </svg></span>}
                                                {item.propertyKitchen === true && <span className='pguest'>Kitchen <i class="bi bi-suit-diamond-fill"></i><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="black" className="bi bi-suit-diamond-fill" viewBox="0 0 16 16">
                                                    <path d="M2.45 7.4 7.2 1.067a1 1 0 0 1 1.6 0L13.55 7.4a1 1 0 0 1 0 1.2L8.8 14.933a1 1 0 0 1-1.6 0L2.45 8.6a1 1 0 0 1 0-1.2z" />
                                                </svg></span>}
                                                {item.propertyParking === true && <span className='pguest'>Free Parking <i class="bi bi-suit-diamond-fill"></i><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="black" className="bi bi-suit-diamond-fill" viewBox="0 0 16 16">
                                                    <path d="M2.45 7.4 7.2 1.067a1 1 0 0 1 1.6 0L13.55 7.4a1 1 0 0 1 0 1.2L8.8 14.933a1 1 0 0 1-1.6 0L2.45 8.6a1 1 0 0 1 0-1.2z" />
                                                </svg></span>}
                                                {item.propertyTV === true && <span className='pguest'>Rooms with TVs <i class="bi bi-suit-diamond-fill"></i><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="black" className="bi bi-suit-diamond-fill" viewBox="0 0 16 16">
                                                    <path d="M2.45 7.4 7.2 1.067a1 1 0 0 1 1.6 0L13.55 7.4a1 1 0 0 1 0 1.2L8.8 14.933a1 1 0 0 1-1.6 0L2.45 8.6a1 1 0 0 1 0-1.2z" />
                                                </svg></span>}
                                                {item.propertyBathtub === true && <span className='pguest'>Bathrooms furnished with Bathtub <i class="bi bi-suit-diamond-fill"></i><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="black" className="bi bi-suit-diamond-fill" viewBox="0 0 16 16">
                                                    <path d="M2.45 7.4 7.2 1.067a1 1 0 0 1 1.6 0L13.55 7.4a1 1 0 0 1 0 1.2L8.8 14.933a1 1 0 0 1-1.6 0L2.45 8.6a1 1 0 0 1 0-1.2z" />
                                                </svg></span>}
                                                {item.propertyPetsAllowed === true && <span className='pguest'>Pets Allowed</span>}
                                            </div>
                                            <div>
                                                <div className='rates'>
                                                    <span className='prating'> <i class="bi bi-star-fill"></i><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="rgb(69, 69, 201)" className="bi bi-star-fill star" viewBox="0 0 16 16">
                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                    </svg> {item.propertyRating}  Rating</span>
                                                    <span className='pPrice'>{item.propertyPerNightCost}$/Night</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='bordersing'></div>
                                </Fragment>
                            ))}
                        </div>

                    </Fragment >}
                {!host && this.props.history.push('/')}
                {!host && alert("You do not have access to this page! LogIn and try again")}
            </Fragment >

        )
    }
}

export default withRouter(MyProperties);