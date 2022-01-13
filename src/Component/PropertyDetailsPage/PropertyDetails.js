import React, { Component, Fragment } from 'react';
import './PropertyDetails.css';
import propertyImage from '../../assets/searchpage.jpeg'
import { withRouter } from 'react-router';


class PropertyDetails extends Component {

    state = {
        checkinDate: "",
        checkoutDate: "",
        numberofGuests: JSON.parse(localStorage.getItem("DetailsNeeded")),
        propertyId: null,
        nights: 0,
        total: 0
    }

    dateHandler = (event) => {
        this.setState((prevState) => {
            let stateVal = prevState;
            stateVal[event.target.name] = event.target.value;
            return {
                ...stateVal,
            };
        });
    }

    parseDate(str) {
        var mdy = str.split('-');
        return new Date(mdy[0], mdy[1] - 1, mdy[2]);
    }

    calculateHandler = () => {
        let date1 = this.state.checkinDate;
        let d1 = this.parseDate(date1);
        let date2 = this.state.checkoutDate;
        let d2 = this.parseDate(date2);
        let time = d2 - d1;
        let numberNights = Math.round((d2 - d1) / (1000 * 60 * 60 * 24));
        let index = JSON.parse(localStorage.getItem("DetailsNeeded"));
        let propertiesAvailable = JSON.parse(localStorage.getItem("PropertyList"));
        let price = ((propertiesAvailable[index].propertyPerNightCost) * numberNights);
        this.setState({
            nights: numberNights,
            total: price
        })
        localStorage.setItem("reservation", this.state);
    }

    reservationHandler = () => {
        if (this.state.total > 0) {
            localStorage.setItem("Reserved", true)
            localStorage.setItem("reservation", JSON.stringify(this.state));
            this.props.history.push("/Reserved");
        }
        else {
            alert("Please enter valid dates")
        }
    }

    render() {
        let index = JSON.parse(localStorage.getItem("DetailsNeeded"));
        let propertiesAvailable = JSON.parse(localStorage.getItem("PropertyList"));
        return (
            <Fragment>
                <div className='detaildiv'>
                    <div className='headering'>{propertiesAvailable[index].propertyName}</div>
                    <div className='titleheadering'> <i class="bi bi-star-fill"></i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="rgb(69, 69, 201)" class="bi bi-star-fill star" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg> {propertiesAvailable[index].propertyRating}   {propertiesAvailable[index].propertyLocation} </div>
                    <div className='mainImageBox'>
                        <div className='imageBox1'>
                            <div className='imagediv'><img src={propertiesAvailable[index].propertyImage[0]} className='img1' /></div>
                        </div>
                        <div className='imageBox2'>
                            <div className='imagediv'><img src={propertiesAvailable[index].propertyImage[1]} className='img2' /></div>
                            <div className='imagediv'><img src={propertiesAvailable[index].propertyImage[2]} className='img2' /></div>
                        </div>
                        <div className='imageBox3'>
                            <div className='imagediv'><img src={propertiesAvailable[index].propertyImage[3]} className='img3' /></div>
                            <div className='imagediv'><img src={propertiesAvailable[index].propertyImage[4]} className='img4' /></div>
                        </div>
                    </div>
                    <div className='outerbox'>
                        <div className='contentdiv'>
                            <span className='headering2'>{propertiesAvailable[index].propertyType} hosted by {propertiesAvailable[index].propertyHost}</span>
                            <span className='headering3'>{propertiesAvailable[index].propertyGuestCapacity} Guests <i className="bi bi-dot"></i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
                                <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" /></svg> {propertiesAvailable[index].propertyBedroomCount} Bedrooms  <i class="bi bi-dot"></i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
                                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" /></svg>  {propertiesAvailable[index].propertyBedCount} Beds <i class="bi bi-dot"></i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
                                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" /></svg>  {propertiesAvailable[index].propertyBathroomCount} Bathrooms
                            </span>
                            <span className='subheadering'>

                            </span>
                            <span className='Features'><i class="bi bi-stars"></i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stars" viewBox="0 0 16 16">
                                <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z" />
                            </svg> Enhanced Clean </span>
                            {propertiesAvailable[index].propertyPetsAllowed === true && <span className='Features'><i class="bi bi-bookmark"></i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16">
                                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                            </svg> Pets Allowed</span>}
                            {propertiesAvailable[index].propertyWifi === true &&
                                <span className='Features'><i class="bi bi-wifi"></i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wifi" viewBox="0 0 16 16">
                                    <path d="M15.384 6.115a.485.485 0 0 0-.047-.736A12.444 12.444 0 0 0 8 3C5.259 3 2.723 3.882.663 5.379a.485.485 0 0 0-.048.736.518.518 0 0 0 .668.05A11.448 11.448 0 0 1 8 4c2.507 0 4.827.802 6.716 2.164.205.148.49.13.668-.049z" />
                                    <path d="M13.229 8.271a.482.482 0 0 0-.063-.745A9.455 9.455 0 0 0 8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065A8.46 8.46 0 0 1 8 7a8.46 8.46 0 0 1 4.576 1.336c.206.132.48.108.653-.065zm-2.183 2.183c.226-.226.185-.605-.1-.75A6.473 6.473 0 0 0 8 9c-1.06 0-2.062.254-2.946.704-.285.145-.326.524-.1.75l.015.015c.16.16.407.19.611.09A5.478 5.478 0 0 1 8 10c.868 0 1.69.201 2.42.56.203.1.45.07.61-.091l.016-.015zM9.06 12.44c.196-.196.198-.52-.04-.66A1.99 1.99 0 0 0 8 11.5a1.99 1.99 0 0 0-1.02.28c-.238.14-.236.464-.04.66l.706.706a.5.5 0 0 0 .707 0l.707-.707z" />
                                </svg> Easy Wifi Access</span>
                            }
                            {propertiesAvailable[index].propertyKitchen === true &&
                                <span className='Features'><i class="bi bi-basket2-fill"></i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-basket2-fill" viewBox="0 0 16 16">
                                    <path d="M5.929 1.757a.5.5 0 1 0-.858-.514L2.217 6H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.623l1.844 6.456A.75.75 0 0 0 3.69 15h8.622a.75.75 0 0 0 .722-.544L14.877 8h.623a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1.717L10.93 1.243a.5.5 0 1 0-.858.514L12.617 6H3.383L5.93 1.757zM4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm4-1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1z" />
                                </svg> Open to all Kitchen</span>
                            }
                            {propertiesAvailable[index].propertyParking === true &&
                                <span className='Features'><i class="bi bi-coin"></i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-coin" viewBox="0 0 16 16">
                                    <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z" />
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                    <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                                </svg> Free Parking</span>
                            }
                            {propertiesAvailable[index].propertyTV === true &&
                                <span className='Features'><i class="bi bi-tv-fill"></i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tv-fill" viewBox="0 0 16 16">
                                    <path d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zM2 2h12s2 0 2 2v6s0 2-2 2H2s-2 0-2-2V4s0-2 2-2z" />
                                </svg> TV setup</span>
                            }
                            {propertiesAvailable[index].propertyBathtub === true &&
                                <span className='Features'><i class="bi bi-archive-fill"></i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-archive-fill" viewBox="0 0 16 16">
                                    <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z" />
                                </svg> Bathrooms furnished with bathtub</span>
                            }
                            <span className='subheadering'>

                            </span>
                            <span className='Features'>{propertiesAvailable[index].propertyDescription}</span>
                            <span className='subheadering'>

                            </span>


                        </div>
                        <div className='pricecard'>
                            <div className='drates'>
                                <span className='dpPrice'>{propertiesAvailable[index].propertyPerNightCost}$/Night</span>
                            </div>
                            <div className='dateinputs'>
                                <div>
                                    <label className='edatepicketlabel'>CheckIn Dates</label>
                                    <input type="date" className='edatepicker' name='checkinDate' placeholder='Check-In Date' onChange={this.dateHandler} />
                                </div>
                                <div>
                                    <label className='datepicketlabel'>CheckOut Dates</label>
                                    <input type="date" className='datepicker' name='checkoutDate' placeholder='Check-Out Date' onChange={this.dateHandler} />
                                </div>
                            </div>
                            <div className='guestinput'>

                                <input type="number" className='guestpicker' name='numberofGuests' placeholder='Guests' onChange={this.dateHandler} />
                            </div>

                            <div>
                                <button className='calculatebutton' onClick={this.calculateHandler}>Calculate Cost</button>
                            </div>
                            <div className='pricing'>
                                <span className='calspan'>${propertiesAvailable[index].propertyPerNightCost} /Night * {this.state.nights} Nights</span>
                                <span className='finalspan'> $ {this.state.total}</span>
                            </div>
                            <div>
                                <button className='reservebutton' onClick={this.reservationHandler}>Reserve Property</button>
                            </div>
                        </div>
                    </div>
                </div>

            </Fragment >
        )
    }
}

export default withRouter(PropertyDetails);