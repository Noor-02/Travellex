import React, { Component } from 'react';
import { withRouter } from 'react-router';
import './TopBar.css'

class SearchBar extends Component {

    state = {
        destination: "",
        checkinDate: "",
        checkoutDate: "",
        guests: null,
        filteredList: [],
    }


    searchHandler = (event) => {

        // let data = this.state.filteredList;
        // let finalList = [];
        if (event.target.name === "destination") {
            let sdestination = "";
            sdestination = event.target.value;
            localStorage.setItem("searchDestination", JSON.stringify(sdestination));
        }

        else if (event.target.name === "guests") {
            let sguests = null;
            sguests = event.target.value;
            localStorage.setItem("searchguest", JSON.stringify(sguests));
        }

        this.setState({
            [event.target.name]: event.target.value,
            // filteredList: finalList
        })
    }

    componentDidMount() {
        let data = JSON.parse(localStorage.getItem("PropertyList"));
        this.setState({
            filteredList: data
        })
    }

    render() {

        const bgclass = [];
        if (this.props.history.location.pathname === "/") {
            bgclass.push("bgcolorhome");
        }
        else bgclass.push("bgcolornothome");

        return (
            <div className={bgclass}>
                <div className='tablediv'>
                    <table>
                        <tbody>
                            <tr>
                                <td className='borderright'>
                                    <div className='sdiv'>
                                        <div>
                                            <label className='slabel'>Location</label>
                                            <input className='sinput' list="destination" name="destination" placeholder='Where are you going?' onChange={this.searchHandler}></input>
                                            <datalist id="destination">
                                                <option>Switzerland</option>
                                                <option>Mumbai</option>
                                                <option>Jakarta</option>
                                                <option>London</option>
                                                <option>Iceland</option>
                                            </datalist>
                                        </div>


                                    </div>


                                </td>
                                <td className='borderright'>
                                    <div className='sdiv'>
                                        <div>
                                            <label className='slabel'>Check-In Date</label>
                                            <div></div>
                                            <input className='sinput' placeholder='Add Dates' type="date" name="checkinDate" onChange={this.searchHandler} ></input>
                                        </div>
                                    </div>
                                </td>
                                <td className='borderright'>
                                    <div className='sdiv'>
                                        <div>

                                            <label className='slabel'>Check-Out Date</label>
                                            <input className='sinput' placeholder='Add Dates' type="date" name="checkoutDate" onChange={this.searchHandler} ></input>
                                        </div>

                                    </div>

                                </td >
                                <td className='borderright'>
                                    <div className='sgdiv'>
                                        <div>
                                            <label className='slabel' >Guests</label>
                                            <input className='sinputg' type="number" placeholder='Add Guests' name="guests" onChange={this.searchHandler} ></input>
                                        </div>

                                    </div>
                                </td>
                                <td >
                                    <button className='sbutton' onClick={this.props.hidebar}>
                                        <div className="searchicong">
                                            <i className="bi bi-search"></i>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-search searchlogog" viewBox="0 0 16 16">
                                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                            </svg>
                                            <span className='icontext'>Search</span>
                                        </div>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div >)
    }
}

export default withRouter(SearchBar);