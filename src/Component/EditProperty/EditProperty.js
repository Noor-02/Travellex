import React, { Component, Fragment } from 'react';
import '../AddProperty/AddProperty.css'
import { withRouter } from 'react-router';

class EditProperty extends Component {

    state = {
        propertyName: "",
        propertyRating: null,
        propertyLocation: "",
        propertyImage1: "",
        propertyImage2: "",
        propertyImage3: "",
        propertyImage4: "",
        propertyImage5: "",
        propertyHostedBy: JSON.parse(localStorage.getItem("currentUser")).userName,
        propertyGuestCapacity: null,
        propertyBedroomCount: null,
        propertyBedCount: null,
        prpertyBathroomCount: null,
        propertyDescription: "",
        propertyWifi: false,
        propertyKitchen: false,
        propertyParking: false,
        propertyTV: false,
        propertyBathtub: false,
        propertyPetsAllowed: false,
        propertyPerNightCost: null,
        propertyAvailabiltyDates: "",
        propertyType: ""
    }

    inputFieldHandler = (event) => {
        this.setState((prevState) => {
            let stateVal = prevState;
            stateVal[event.target.name] = event.target.value;
            return {
                ...stateVal,
            };
        });
    }

    checkboxHandler = (event) => {
        this.setState((prevState) => {
            let stateValue = prevState;
            stateValue[event.target.name] = !stateValue[event.target.name];
            return {
                ...stateValue,
            }
        }
        )
    }

    cancelHandler = () => {
        this.props.history.push("/MyProperties");
    }


    formSubmitHandler = (event) => {
        event.preventDefault();
        this.props.onEditProperty(
            this.state.propertyName,
            this.state.propertyRating,
            this.state.propertyLocation,
            this.state.propertyImage1,
            this.state.propertyImage2,
            this.state.propertyImage3,
            this.state.propertyImage4,
            this.state.propertyImage5,
            this.state.propertyGuestCapacity,
            this.state.propertyBedroomCount,
            this.state.propertyBedCount,
            this.state.propertyBathroomCount,
            this.state.propertyDescription,
            this.state.propertyWifi,
            this.state.propertyKitchen,
            this.state.propertyParking,
            this.state.propertyTV,
            this.state.propertyBathtub,
            this.state.propertyPetsAllowed,
            this.state.propertyPerNightCost,
            this.state.propertyAvailabiltyDates,
            this.state.propertyHostedBy,
            this.state.propertyType
        );

        this.setState({
            propertyName: "",
            propertyRating: null,
            propertyLocation: "",
            propertyImage1: "",
            propertyImage2: "",
            propertyImage3: "",
            propertyImage4: "",
            propertyImage5: "",
            propertyHostedBy: JSON.parse(localStorage.getItem("currentUser")).userName,
            propertyGuestCapacity: null,
            propertyBedroomCount: null,
            propertyBedCount: null,
            prpertyBathroomCount: null,
            propertyDescription: "",
            propertyWifi: false,
            propertyKitchen: false,
            propertyParking: false,
            propertyTV: false,
            propertyBathtub: false,
            propertyPetsAllowed: false,
            propertyPerNightCost: null,
            propertyAvailabiltyDates: "",
            propertyType: ""
        });

        this.props.history.push("/MyProperties");
    };

    componentDidMount() {
        let editingIndex = JSON.parse(localStorage.getItem("EditingProperty"));
        let EditingList = JSON.parse(localStorage.getItem("PropertyList"));
        let editObject = EditingList[editingIndex];
        let imageObject = editObject.propertyImage;
        this.setState({
            propertyName: editObject.propertyName,
            propertyRating: editObject.propertyRating,
            propertyLocation: editObject.propertyLocation,
            propertyImage1: imageObject[0],
            propertyImage2: imageObject[1],
            propertyImage3: imageObject[2],
            propertyImage4: imageObject[3],
            propertyImage5: imageObject[4],
            propertyHostedBy: JSON.parse(localStorage.getItem("currentUser")).userName,
            propertyGuestCapacity: editObject.propertyGuestCapacity,
            propertyBedroomCount: editObject.propertyBedroomCount,
            propertyBedCount: editObject.propertyBedCount,
            prpertyBathroomCount: editObject.propertyBathroomCount,
            propertyDescription: editObject.propertyDescription,
            propertyWifi: editObject.propertyWifi,
            propertyKitchen: editObject.propertyKitchen,
            propertyParking: editObject.propertyParking,
            propertyTV: editObject.propertyTV,
            propertyBathtub: editObject.propertyBathtub,
            propertyPetsAllowed: editObject.propertyPetsAllowed,
            propertyPerNightCost: editObject.propertyPerNightCost,
            propertyAvailabiltyDates: editObject.propertyAvailabiltyDates,
            propertyType: editObject.propertyType
        })
    }



    render() {

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
                        <div className="maincontainer">
                            <form className='mainform' onSubmit={this.FormSubmitHandler}>
                                <header className='aheader'>EDIT PROPERTY</header>
                                {/* <div className='flexrow'> */}
                                <div className='adiv'>
                                    <label className='namelabel'>Property Name:</label>
                                    <input value={this.state.propertyName} className='ainput' type="text" placeholder='Property Name' maxLength="100" name="propertyName" onChange={this.inputFieldHandler} required />
                                </div>
                                <div className='ardiv'>
                                    <form>
                                        <span className='ratinglabel'>Property Rating:</span>
                                        <label for="1" className='radiolabel'>
                                            <input className='radioinput' type="radio" name='propertyRating' value="1" onChange={this.inputFieldHandler} required />
                                            1
                                        </label>
                                        <label for="2" className='radiolabel'>
                                            <input className='radioinput' type="radio" name='propertyRating' onChange={this.inputFieldHandler} value="2" />
                                            2
                                        </label>
                                        <label for="3" className='radiolabel'>
                                            <input className='radioinput' type="radio" nname='propertyRating' onChange={this.inputFieldHandler} value="3" />
                                            3
                                        </label>
                                        <label for="4" className='radiolabel'>
                                            <input className='radioinput' type="radio" name='propertyRating' onChange={this.inputFieldHandler} value="4" />
                                            4
                                        </label>
                                        <label for="5" className='radiolabel'>
                                            <input className='radioinput' type="radio" name='propertyRating' onChange={this.inputFieldHandler} value="5" />
                                            5
                                        </label>

                                    </form>
                                </div>
                                {/* </div> */}
                                {/* <div className='flexrow'> */}
                                <div className='adiv'>
                                    <label className='locationlabel'>Property Location: </label>
                                    <input className='binput' value={this.state.propertyLocation} list='Location' placeholder='Location' name='propertyLocation' onChange={this.inputFieldHandler} />
                                    <datalist id='Location'>
                                        <option>Jakarta</option>
                                        <option>Mumbai</option>
                                        <option>Switzerland</option>
                                        <option>London</option>
                                        <option>Iceland</option>
                                    </datalist>
                                </div>
                                <div className='adiv' >
                                    <label className='typelabel'>Property Type:</label>
                                    <input className='cinput' value={this.state.propertyType} list='type' placeholder='Property Type' name='propertyType' onChange={this.inputFieldHandler} />
                                    <datalist id='type'>
                                        <option>Hotel Room</option>
                                        <option>Shared Room</option>
                                        <option>Entire Place</option>
                                        <option>Private Room</option>
                                    </datalist>
                                </div>
                                {/* </div> */}


                                <div className='urladiv'>
                                    <div>
                                        <label className='urlLabel'>Property Image URLs:</label>
                                        <input className='auinputf1' value={this.state.propertyImage1} placeholder='link' type="url" name='propertyImage1' onChange={this.inputFieldHandler} />
                                    </div>

                                    <input className='auinputf2' value={this.state.propertyImage2} placeholder='link' type="url" name='propertyImage2' onChange={this.inputFieldHandler} />
                                    <input className='auinputs1' value={this.state.propertyImage3} placeholder='link' type="url" name='propertyImage3' onChange={this.inputFieldHandler} />
                                    <input className='auinputs2' value={this.state.propertyImage4} placeholder='link' type="url" name='propertyImage4' onChange={this.inputFieldHandler} />
                                    <input className='auinputs' value={this.state.propertyImage5} placeholder='link' type="url" name='propertyImage5' onChange={this.inputFieldHandler} />


                                </div>
                                {/* <div className='flexrow'> */}
                                <div className='adiv'>
                                    <label className='guestlabel'>Guest Capacity:</label>
                                    <input className='dinput' value={this.state.propertyGuestCapacity} placeholder="0" type="number" min="1" max="10" name='propertyGuestCapacity' onChange={this.inputFieldHandler} />
                                </div>
                                <div className='adiv'>
                                    <label className='bedroomlabel'>Bedroom Count:</label>
                                    <input className='einput' value={this.state.propertyBedroomCount} placeholder="0" type="number" min="1" max="4" name='propertyBedroomCount' onChange={this.inputFieldHandler} />
                                </div>
                                {/* </div> */}
                                {/* <div className='flexrow'> */}
                                <div className='adiv'>
                                    <label className='bedlabel'>Bed Count:</label>
                                    <input className='finput' value={this.state.propertyBedCount} placeholder="0" type="number" min="1" max="8" name='propertyBedCount' onChange={this.inputFieldHandler} />
                                </div>
                                <div className='adiv'>
                                    <label className='bathroomlabel'>Bathroom Count:</label>
                                    <input className='ginput' placeholder="0" value={this.state.propertyBathroomCount} type="number" min="1" max="4" name='propertyBathroomCount' onChange={this.inputFieldHandler} />
                                </div>
                                {/* </div> */}


                                <div className='adiv'>
                                    <label className='desclabel'>Property Description:</label>
                                    <textarea className='atinput' value={this.state.propertyDescription} placeholder="Description" name='propertyDescription' onChange={this.inputFieldHandler}></textarea>
                                </div>
                                {/* <div className='flexrow'> */}

                                {/* <div className='flexrow'> */}
                                <div className='adiv'>
                                    <label className='costlabel'>Per Night Cost:</label>
                                    <input className='hinput' value={this.state.propertyPerNightCost} type="number" placeholder="$0" name='propertyPerNightCost' onChange={this.inputFieldHandler} />
                                </div>
                                <div className='adiv'>
                                    <label className='datelabel'>Availability Dates:</label>
                                    <input className='jinput' value={this.state.propertyAvailabiltyDates} type="date" name="propertyAvailabilityDates" onChange={this.inputFieldHandler} />
                                </div>
                                {/* </div> */}

                                <div className='acdiv'>
                                    <label className='wifilabel'>Wifi Availability</label>
                                    <input className='check1' type="checkbox" name='propertyWifi' onChange={this.checkboxHandler} />
                                </div>
                                <div className='acdiv'>
                                    <label className='kitchenlabel'>Kitchen Availability</label>
                                    <input className='check2' type="checkbox" name='propertyKitchen' onChange={this.checkboxHandler} />
                                </div>
                                <div className='acdiv'>
                                    <label className='parkinglabel'>Parking Availability</label>
                                    <input className='check' type="checkbox" name='propertyParking' onChange={this.checkboxHandler} />
                                </div>
                                {/* </div> */}
                                {/* <div className='flexrow'> */}
                                <div className='acdiv'>
                                    <label className='tvlabel'>TV Availability</label>
                                    <input className='check4' type="checkbox" name='propertyTV' onChange={this.checkboxHandler} />
                                </div>
                                <div className='acdiv'>
                                    <label className='bathtublabel'>Bathtub Availability</label>
                                    <input className='check5' type="checkbox" name='propertyBathtub' onChange={this.checkboxHandler} />
                                </div>
                                <div className='acdiv'>
                                    <label className='petslabel'>Pets Allowed</label>
                                    <input className='check' type="checkbox" name='propertyPetsAllowed' onChange={this.checkboxHandler} />
                                </div>
                                {/* </div> */}



                                <div className='actdiv'>
                                    <button type='submit' className='abutton' onClick={this.formSubmitHandler}>
                                        EDIT
                                    </button>
                                    <button type='submit' className='cabutton' onClick={this.cancelHandler}>
                                        CANCEL
                                    </button>
                                </div>
                            </form>
                        </div>
                    </Fragment>
                }
                {!host && this.props.history.push('/')}
                {!host && alert("You do not have access to this page! LogIn and try again")}
            </Fragment>
        )
    }
}

export default withRouter(EditProperty);