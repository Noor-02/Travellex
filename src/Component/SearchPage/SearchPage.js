import React, { Component, Fragment } from 'react'
import './SearchPage.css'
import image from '../../assets/searchpage.jpeg'
import { withRouter } from 'react-router';

class SearchPage extends Component {

    state = {
        showPriceController: false,
        filterLocation: "Jakarta",
        filterPriceStart: "3000",
        filterPriceEnd: "10000",
        filterType: "Hotel Room",
        filterRating: 4,
        filterGuests: 100,
        filterWifi: false,
        filterKitchen: false,
        filterParking: false,
        filterTV: false,
        filterBathtub: false,
        filterPetsAllowed: false,
        originalPropertyList: [],
        filteredList: []
    }

    priceControllerHandler = () => {
        this.setState({
            showPriceController: true
        })
    }

    hidePriceControllerHandler = () => {
        let data = [];
        ((this.props.nameGuestFilter === null || this.props.nameGuestFilter.length === 0) ? (data = this.state.originalPropertyList) : (data = this.props.nameGuestFilter));
        let finalList = [];
        finalList = data.filter((item) => {
            if (item.propertyPerNightCost >= this.state.filterPriceStart && item.propertyPerNightCost <= this.state.filterPriceEnd) {
                return item;
            }
        })
        console.log(finalList);
        this.setState({
            showPriceController: false,
            filteredList: finalList
        })
    }

    filterHandler = (event) => {
        let finalList = [];
        let data = [];
        // console.log(this.props.nameGuestFilter);
        ((this.props.nameGuestFilter === null || this.props.nameGuestFilter.length === 0) ? (data = this.state.originalPropertyList) : (data = this.props.nameGuestFilter));
        // console.log(event.target.value);
        // console.log("data", data);


        if (event.target.name === "filterType") {
            finalList = data.filter((item) => {
                if (item.propertyType === event.target.value) {
                    return item;
                }
            })
        }
        else if (event.target.name === "filterPriceStart" || event.target.name === "filterPriceEnd") {
            this.setState((prevState) => {
                let stateVal = prevState;
                stateVal[event.target.name] = event.target.value
                return {
                    ...stateVal
                }
            })
        }
        else if (event.target.name === "filterRating") {
            finalList = data.filter((item) => {
                // console.log("outside", typeof (parseInt(event.target.value)), event.target.name, typeof (item.propertyRating));
                if (item.propertyRating === parseInt(event.target.value)) {
                    console.log("inside");
                    return item;
                }
            })
        }

        this.setState({
            filteredList: finalList
        })

        console.log(this.state.filteredList)
    }

    detailRedirectHandler = (event, key) => {
        this.props.history.push(`/Details/:${key}`);
        localStorage.setItem("DetailsNeeded", key);
    }

    buttonFieldHandler = (event) => {
        let finalList = [];

        let data = this.props.nameGuestFilter;

        if (event.target.name === "filterWifi") {
            let midData = this.state.filterWifi;
            finalList = data.filter((item) => {
                if (item.propertyWifi === !midData) {
                    return item;
                }
            })
            if (finalList === null || finalList.length === 0) {
                data = this.state.originalPropertyList;
                finalList = data.filter((item) => {
                    if (item.propertyWifi === !midData) {
                        return item;
                    }

                })
            }
            this.setState({
                filterWifi: !midData
            })

        }
        if (event.target.name === "filterKitchen") {
            let midData = this.state.filterKitchen;
            finalList = data.filter((item) => {
                if (item.propertyKitchen === !midData) {
                    return item;
                }
            })
            if (finalList === null || finalList.length === 0) {
                data = this.state.originalPropertyList;
                finalList = data.filter((item) => {
                    if (item.propertyKitchen === !midData) {
                        return item;
                    }

                })
            }
            this.setState({
                filterKitchen: !midData
            })

        }
        if (event.target.name === "filterParking") {
            let midData = this.state.filterParking;
            finalList = data.filter((item) => {
                if (item.propertyParking === !midData) {
                    return item;
                }
            })
            if (finalList === null || finalList.length === 0) {
                data = this.state.originalPropertyList;
                finalList = data.filter((item) => {
                    if (item.propertyParking === !midData) {
                        return item;
                    }

                })
            }
            this.setState({
                filterParking: !midData
            })

        }
        if (event.target.name === "filterTV") {
            let midData = this.state.filterTV;
            finalList = data.filter((item) => {
                if (item.propertyTV === !midData) {
                    return item;
                }
            })
            if (finalList === null || finalList.length === 0) {
                data = this.state.originalPropertyList;
                finalList = data.filter((item) => {
                    if (item.propertyTV === !midData) {
                        return item;
                    }

                })
            }
            this.setState({
                filterTV: !midData
            })

        }
        if (event.target.name === "filterPetsAllowed") {
            let midData = this.state.filterPetsAllowed;
            finalList = data.filter((item) => {
                if (item.propertyPetsAllowed === !midData) {
                    return item;
                }
            })
            if (finalList === null || finalList.length === 0) {
                data = this.state.originalPropertyList;
                finalList = data.filter((item) => {
                    if (item.propertyPetsAllowed === !midData) {
                        return item;
                    }
                })
            }
            this.setState({
                filterPetsAllowed: !midData
            })

        }
        if (event.target.name === "filterBathtub") {
            let midData = this.state.filterBathtub;
            finalList = data.filter((item) => {
                if (item.propertyBathtub === !midData) {
                    return item;
                }
            })
            if (finalList === null || finalList.length === 0) {
                data = this.state.originalPropertyList;
                finalList = data.filter((item) => {
                    if (item.propertyBathtub === !midData) {
                        return item;
                    }
                })
            }
            this.setState({
                filterBathtub: !midData
            })
        }
        this.setState({
            filteredList: finalList
        })

    }

    componentDidMount() {

        let dataset = this.props.nameGuestFilter;
        let data = JSON.parse(localStorage.getItem("PropertyList"));
        let finalList = dataset !== null ? dataset : [];
        this.setState({
            originalPropertyList: data,
            filteredList: finalList,
        })
    }

    componentDidUpdate(prevProps) {
        if (this.props.nameGuestFilter !== prevProps.nameGuestFilter) {
            this.setState({
                filteredList: this.props.nameGuestFilter
            })
        }
    }

    render() {

        const pricechip = ["sbuttonsearch"];
        if (this.state.showPriceController === true) {
            pricechip.push("clickedborder")
        } else pricechip.push("notclickedborder")

        const wifichip = ["sbuttonsearch"];
        if (this.state.filterWifi === true) {
            wifichip.push("clickedborder");
        }
        else wifichip.push("notclickedborder");

        const kitchenchip = ["sbuttonsearch"];
        if (this.state.filterKitchen === true) {
            kitchenchip.push("clickedborder");
        }
        else kitchenchip.push("notclickedborder");

        const parkingchip = ["sbuttonsearch"];
        if (this.state.filterParking === true) {
            parkingchip.push("clickedborder");
        }
        else parkingchip.push("notclickedborder");

        const tvchip = ["sbuttonsearch"];
        if (this.state.filterTV === true) {
            tvchip.push("clickedborder");
        }
        else tvchip.push("notclickedborder");

        const bathtubchip = ["sbuttonsearch"];
        if (this.state.filterBathtub === true) {
            bathtubchip.push("clickedborder");
        }
        else bathtubchip.push("notclickedborder");

        const petschip = ["sbuttonsearch"];
        if (this.state.filterPetsAllowed === true) {
            petschip.push("clickedborder");
        }
        else petschip.push("notclickedborder");

        let datalist = this.state.filteredList;
        return (
            <Fragment>
                <div className='tabledivsearch'>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <div className='sdivsearch'>
                                        <button onClick={this.priceControllerHandler} className={pricechip.join(' ')} >Price</button>
                                    </div>
                                </td>
                                <td>
                                    <div className='sdivsearchinput'>
                                        <input className='sinputsearchp' list='typeOfPlace' placeholder='Type Of Place' name='filterType' onChange={this.filterHandler} />
                                        <datalist id='typeOfPlace'>
                                            <option>Entire Place</option>
                                            <option>Hotel Room</option>
                                            <option>Private Room</option>
                                            <option>Shared Room</option>
                                        </datalist>
                                    </div>
                                </td>
                                <td>
                                    <div className='sdivsearchinput'>
                                        <input className='sinputsearch' type="number" placeholder='PropertyRating' name='filterRating' min="1" max="5" onChange={this.filterHandler} />
                                    </div>
                                </td>
                                <td>
                                    <div className='sdivsearch'>
                                        <button name='filterWifi' onClick={this.buttonFieldHandler} className={wifichip.join(' ')}>Wifi</button>
                                    </div>
                                </td>
                                <td>
                                    <div className='sdivsearch'>
                                        <button name='filterKitchen' onClick={this.buttonFieldHandler} className={kitchenchip.join(' ')}>Kitchen</button>
                                    </div>
                                </td>
                                <td>
                                    <div className='sdivsearch'>
                                        <button name='filterParking' onClick={this.buttonFieldHandler} className={parkingchip.join(' ')}>Parking</button>
                                    </div>
                                </td>
                                <td>
                                    <div className='sdivsearch'>
                                        <button name='filterTV' onClick={this.buttonFieldHandler} className={tvchip.join(' ')}>TV</button>
                                    </div>
                                </td>
                                <td>
                                    <div className='sdivsearch'>
                                        <button name='filterBathtub' onClick={this.buttonFieldHandler} className={bathtubchip.join(' ')}>Bathtub</button>
                                    </div>
                                </td>
                                <td>
                                    <div className='sdivsearch'>
                                        <button name='filterPetsAllowed' onClick={this.buttonFieldHandler} className={petschip.join(' ')}>Pets Allowed</button>
                                    </div>
                                </td>

                            </tr>
                        </tbody>
                    </table>
                </div>
                {this.state.showPriceController &&
                    <div className='pricediv'>
                        <header className='headerpricediv'>Price Range</header>
                        <div className='priceinputters'>
                            <div className='mininputdiv'>
                                <label className='minpricelabel'>Min Price</label>
                                <input className='minpriceinputter' type="number" placeholder='760' name="filterPriceStart" onChange={this.filterHandler} />
                            </div>
                            <div className='maxinputdiv'>
                                <label className='maxpricelabel'>Max Price</label>
                                <input className='maxpriceinputter' type="number" placeholder='10000+' name="filterPriceEnd" onChange={this.filterHandler} />
                            </div>
                        </div>
                        <footer className='footerpricediv'>
                            <button className='pricecancelbutton' onClick={this.hidePriceControllerHandler}>Cancel</button>
                            <button className='pricecancelbutton' type='submit' onClick={this.hidePriceControllerHandler} >Save</button>
                        </footer>
                    </div>
                }
                <div className='goodPropertyList'>
                    {(datalist !== null && datalist.length !== 0) && datalist.map((item, index) => (
                        <Fragment>

                            <div className='goodPropertyItem'>
                                <img className='simage' src={item.propertyImage[0]} />
                                <div className='chardiv'>
                                    <div><span className='pguest'>{item.propertyLocation}</span></div>
                                    <div className='namediv'>
                                        <span className='pname'>{item.propertyName}</span>
                                        <button className='detailbutton' onClick={(event) => this.detailRedirectHandler(event, item.propertyId)}>View Details</button>
                                    </div>
                                    <div className='detailerdiv'>
                                        <span className='pguest'>{item.propertyGuestCapacity} Guests <i className="bi bi-suit-diamond-fill"></i><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="rgba(94,89,89,1)" class="bi bi-suit-diamond-fill" viewBox="0 0 16 16">
                                            <path d="M2.45 7.4 7.2 1.067a1 1 0 0 1 1.6 0L13.55 7.4a1 1 0 0 1 0 1.2L8.8 14.933a1 1 0 0 1-1.6 0L2.45 8.6a1 1 0 0 1 0-1.2z" />
                                        </svg></span>
                                        <span className='pguest'>{item.propertyBedroomCount} Bedrooms <i className="bi bi-suit-diamond-fill"></i><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="rgba(94,89,89,1)" class="bi bi-suit-diamond-fill" viewBox="0 0 16 16">
                                            <path d="M2.45 7.4 7.2 1.067a1 1 0 0 1 1.6 0L13.55 7.4a1 1 0 0 1 0 1.2L8.8 14.933a1 1 0 0 1-1.6 0L2.45 8.6a1 1 0 0 1 0-1.2z" />
                                        </svg></span>
                                        <span className='pguest'>{item.propertyBedCount} Beds <i className="bi bi-suit-diamond-fill"></i><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="rgba(94,89,89,1)" class="bi bi-suit-diamond-fill" viewBox="0 0 16 16">
                                            <path d="M2.45 7.4 7.2 1.067a1 1 0 0 1 1.6 0L13.55 7.4a1 1 0 0 1 0 1.2L8.8 14.933a1 1 0 0 1-1.6 0L2.45 8.6a1 1 0 0 1 0-1.2z" />
                                        </svg></span>
                                        <span className='pguest'>{item.propertyBathroomCount} Bathrooms <i className="bi bi-suit-diamond-fill"></i><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="rgba(94,89,89,1)" class="bi bi-suit-diamond-fill" viewBox="0 0 16 16">
                                            <path d="M2.45 7.4 7.2 1.067a1 1 0 0 1 1.6 0L13.55 7.4a1 1 0 0 1 0 1.2L8.8 14.933a1 1 0 0 1-1.6 0L2.45 8.6a1 1 0 0 1 0-1.2z" />
                                        </svg></span>
                                        <span className='pguest'>{item.propertyType} </span>
                                    </div>
                                    {/* <div>
                                        <span className='pguest'>{item.propertyDescription}</span>
                                    </div> */}
                                    <div>
                                        {item.propertyWifi === true && <span className='pguest'>Wifi <i className="bi bi-suit-diamond-fill"></i><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="rgba(94,89,89,1)" class="bi bi-suit-diamond-fill" viewBox="0 0 16 16">
                                            <path d="M2.45 7.4 7.2 1.067a1 1 0 0 1 1.6 0L13.55 7.4a1 1 0 0 1 0 1.2L8.8 14.933a1 1 0 0 1-1.6 0L2.45 8.6a1 1 0 0 1 0-1.2z" />
                                        </svg></span>}
                                        {item.propertyKitchen === true && <span className='pguest'>Kitchen <i className="bi bi-suit-diamond-fill"></i><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="rgba(94,89,89,1)" class="bi bi-suit-diamond-fill" viewBox="0 0 16 16">
                                            <path d="M2.45 7.4 7.2 1.067a1 1 0 0 1 1.6 0L13.55 7.4a1 1 0 0 1 0 1.2L8.8 14.933a1 1 0 0 1-1.6 0L2.45 8.6a1 1 0 0 1 0-1.2z" />
                                        </svg></span>}
                                        {item.propertyParking === true && <span className='pguest'>Free Parking <i className="bi bi-suit-diamond-fill"></i><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="rgba(94,89,89,1)" class="bi bi-suit-diamond-fill" viewBox="0 0 16 16">
                                            <path d="M2.45 7.4 7.2 1.067a1 1 0 0 1 1.6 0L13.55 7.4a1 1 0 0 1 0 1.2L8.8 14.933a1 1 0 0 1-1.6 0L2.45 8.6a1 1 0 0 1 0-1.2z" />
                                        </svg></span>}
                                        {item.propertyTV === true && <span className='pguest'>Rooms with TVs <i className="bi bi-suit-diamond-fill"></i><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="rgba(94,89,89,1)" class="bi bi-suit-diamond-fill" viewBox="0 0 16 16">
                                            <path d="M2.45 7.4 7.2 1.067a1 1 0 0 1 1.6 0L13.55 7.4a1 1 0 0 1 0 1.2L8.8 14.933a1 1 0 0 1-1.6 0L2.45 8.6a1 1 0 0 1 0-1.2z" />
                                        </svg></span>}
                                        {item.propertyBathtub === true && <span className='pguest'>Bathrooms furnished with Bathtub <i className="bi bi-suit-diamond-fill"></i><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="rgba(94,89,89,1)" class="bi bi-suit-diamond-fill" viewBox="0 0 16 16">
                                            <path d="M2.45 7.4 7.2 1.067a1 1 0 0 1 1.6 0L13.55 7.4a1 1 0 0 1 0 1.2L8.8 14.933a1 1 0 0 1-1.6 0L2.45 8.6a1 1 0 0 1 0-1.2z" />
                                        </svg></span>}
                                        {item.propertyPetsAllowed === true && <span className='pguest'>Pets Allowed</span>}
                                    </div>
                                    <div>
                                        <div className='rates'>
                                            <span className='prating'> <i className="bi bi-star-fill"></i><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="rgb(69, 69, 201)" class="bi bi-star-fill star" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg> {item.propertyRating}  Rating</span>
                                            <span className='pPrice'>{item.propertyPerNightCost}$/Night</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='bordersing'></div>
                        </Fragment>

                    ))
                    }

                    {
                        (datalist === null || datalist.length === 0) &&
                        <div className='goodPropertyListtext'>
                            <span className='textspan'>No result found! Please search again.</span>
                        </div>
                    }

                </div >
            </Fragment >
        )
    }
}

export default withRouter(SearchPage);