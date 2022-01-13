import React, { Component, Fragment } from "react";
import './Component/TopBar/TopBar.css'
import Modal from './Component/UI/Modal'
import SignUpForm from './Component/TopBar/SignUpForm'
import LogInForm from './Component/TopBar/LogInForm'
import SearchBar from './Component/TopBar/SearchBar'
import HomePage from "./Component/HomePage/HomePage";
import SearchPage from './Component/SearchPage/SearchPage';
import { Switch, Route, Link } from 'react-router-dom';
import PropertyDetails from "./Component/PropertyDetailsPage/PropertyDetails";
import MyProperties from './Component/MyProperties/MyProperties'
import AddProperty from "./Component/AddProperty/AddProperty";
import Reserved from "./Component/Reserved/Reserved";
import EditProperty from "./Component/EditProperty/EditProperty";
import { withRouter } from 'react-router';

class App extends Component {

  state = {
    // currentDetailPage: null,
    propertyList: [
      {
        propertyName: "Eshwara Bungalows ",
        propertyRating: 4,
        propertyLocation: "Mumbai",
        propertyImage: ["https://a0.muscache.com/im/pictures/fc61b102-d0fd-40f8-a60a-87792e3081f1.jpg?im_w=1200", "https://a0.muscache.com/im/pictures/f95cfbec-cf62-49a4-8ea6-245e54049079.jpg?im_w=720", "https://a0.muscache.com/im/pictures/2dd68f19-4edf-4165-b59f-cbfb457841bc.jpg?im_w=720", "https://a0.muscache.com/im/pictures/8ceb276d-0a52-43e2-a860-ec9258d61652.jpg?im_w=720", "https://a0.muscache.com/im/pictures/49d9d23a-02b0-405a-8e17-d5000b0c8fd5.jpg?im_w=720"],
        propertyHost: "Devesh",
        propertyGuestCapacity: 9,
        propertyBedroomCount: 4,
        propertyBedCount: 6,
        propertyBathroomCount: 2,
        propertyDescription: "If you seek a peaceful holiday in solitude away from the crowd, then you have to head to The Eshwara Bungalow, where carefully curated artifacts and colonial heritage furniture with a modern touch, all amidst nature's beauty, will leave you spellbound. The calming farm atmosphere and the spectacular greenery here provides for a relaxing break. In addition, during your stay you will certainly get to experience Malnad hospitality and culture, food from the region and lots more.",
        propertyWifi: true,
        propertyKitchen: true,
        propertyParking: true,
        propertyTV: true,
        propertyBathtub: false,
        propertyPetsAllowed: true,
        propertyPerNightCost: 300,
        propertyAvailabilityDate: "2021-12-19",
        propertyId: 0,
        propertyType: "Hotel Room"
      },
      {
        propertyName: "Ederra Bungalows ",
        propertyRating: 4,
        propertyLocation: "London",
        propertyImage: ["https://a0.muscache.com/im/pictures/709a1cfc-8193-445b-a2be-8108d3bdcfd5.jpg?im_w=1200", "https://a0.muscache.com/im/pictures/3dd5ac0e-4bcb-4c33-957f-8b307fb6eae0.jpg?im_w=720", "https://a0.muscache.com/im/pictures/621c6c52-471e-441a-8671-e6082041b861.jpg?im_w=720", "https://a0.muscache.com/im/pictures/cf05fbf5-2dae-4666-9504-afcea474ecf1.jpg?im_w=720", "https://a0.muscache.com/im/pictures/3f993d78-b383-42f7-b981-f9c7018edff7.jpg?im_w=1200"],
        propertyHost: "Noor",
        propertyGuestCapacity: 6,
        propertyBedroomCount: 2,
        propertyBedCount: 2,
        propertyBathroomCount: 1,
        propertyDescription: "If you seek a peaceful holiday in solitude away from the crowd, then you have to head to The Eshwara Bungalow, where carefully curated artifacts and colonial heritage furniture with a modern touch, all amidst nature's beauty, will leave you spellbound. The calming farm atmosphere and the spectacular greenery here provides for a relaxing break. In addition, during your stay you will certainly get to experience Malnad hospitality and culture, food from the region and lots more. You will have the time of your life here with perfectly beautiful views of the snow-topped mountains and the tree houses.",
        propertyWifi: false,
        propertyKitchen: true,
        propertyParking: true,
        propertyTV: true,
        propertyBathtub: false,
        propertyPetsAllowed: true,
        propertyPerNightCost: 600,
        propertyAvailabilityDate: "2021-12-19",
        propertyId: 1,
        propertyType: "Hotel Room"
      },
      {
        propertyName: "DBrooks Bungalows ",
        propertyRating: 4,
        propertyLocation: "Switzerland",
        propertyImage: ["https://a0.muscache.com/im/pictures/3f993d78-b383-42f7-b981-f9c7018edff7.jpg?im_w=1200", "https://a0.muscache.com/im/pictures/7a51522b-67e3-497a-b250-fd9951e35d61.jpg?im_w=720", "https://a0.muscache.com/im/pictures/3303def0-0475-41ba-aab1-c5f0fd062909.jpg?im_w=720", "https://a0.muscache.com/im/pictures/e894e1c3-bb2b-4447-a2e0-a7a0c1e33d15.jpg?im_w=1200", "https://a0.muscache.com/im/pictures/4cfc483d-f9d7-49a7-9d58-9f5e26b14a21.jpg?im_w=720"],
        propertyHost: "Devesh",
        propertyGuestCapacity: 8,
        propertyBedroomCount: 3,
        propertyBedCount: 3,
        propertyBathroomCount: 3,
        propertyDescription: "If you seek a peaceful holiday in solitude away from the crowd, then you have to head to The Eshwara Bungalow, where carefully curated artifacts and colonial heritage furniture with a modern touch, all amidst nature's beauty, will leave you spellbound. The calming farm atmosphere and the spectacular greenery here provides for a relaxing break. In addition, during your stay you will certainly get to experience Malnad hospitality and culture, food from the region and lots more.",
        propertyWifi: true,
        propertyKitchen: true,
        propertyParking: true,
        propertyTV: true,
        propertyBathtub: true,
        propertyPetsAllowed: true,
        propertyPerNightCost: 5000,
        propertyAvailabilityDate: "2021-12-19",
        propertyId: 2,
        propertyType: "Hotel Room"
      },
      {
        propertyName: "Sreeja Bungalows ",
        propertyRating: 4,
        propertyLocation: "Jakarta",
        propertyImage: ["https://a0.muscache.com/im/pictures/997934ed-22da-4114-b0ab-8e8d2a6d80ae.jpg?im_w=1200", "https://a0.muscache.com/im/pictures/faac23a5-9686-489f-bd98-49e73e0c747a.jpg?im_w=720", "https://a0.muscache.com/im/pictures/c15abe88-4796-4d06-aeff-edf83323e417.jpg?im_w=720", "https://a0.muscache.com/im/pictures/7418ef9a-6ce5-466a-a39a-e958e60e3ae9.jpg?im_w=720", "https://a0.muscache.com/im/pictures/17a5359a-f2f0-4053-9fae-105946c93022.jpg?im_w=720"],
        propertyHost: "Noor",
        propertyGuestCapacity: 4,
        propertyBedroomCount: 2,
        propertyBedCount: 4,
        propertyBathroomCount: 1,
        propertyDescription: "If you seek a peaceful holiday in solitude away from the crowd, then you have to head to The Eshwara Bungalow, where carefully curated artifacts and colonial heritage furniture with a modern touch, all amidst nature's beauty, will leave you spellbound. The calming farm atmosphere and the spectacular greenery here provides for a relaxing break. In addition, during your stay you will certainly get to experience Malnad hospitality and culture, food from the region and lots more.",
        propertyWifi: false,
        propertyKitchen: false,
        propertyParking: false,
        propertyTV: false,
        propertyBathtub: false,
        propertyPetsAllowed: false,
        propertyPerNightCost: 7000,
        propertyAvailabilityDate: "2021-12-19",
        propertyId: 4,
        propertyType: "Hotel Room"
      },
    ],
    showSignUpModal: false,
    showLogInModal: false,
    loggedIn: false,
    showSearchBar: false,
    userList: [
      {
        userName: "Noor",
        userEmail: "1234@abc.com",
        userPassword: "1234",
        userType: "Traveller",
        userId: 0,
      },
    ],
    filteredPropertyList: [],
  }

  propertyAdditionHandler = (propertyName,
    propertyRating,
    propertyLocation,
    propertyImage1,
    propertyImage2,
    propertyImage3,
    propertyImage4,
    propertyImage5,
    propertyGuestCapacity,
    propertyBedroomCount,
    propertyBedCount,
    propertyBathroomCount,
    propertyDescription,
    propertyWifi,
    propertyKitchen,
    propertyParking,
    propertyTV,
    propertyBathtub,
    propertyPetsAllowed,
    propertyPerNightCost,
    propertyAvailabilityDates,
    propertyHostedBy, propertyType) => {
    let demoList = this.state.propertyList;
    let imageList = [propertyImage1, propertyImage2, propertyImage3, propertyImage4, propertyImage5];
    demoList.push({
      propertyName: propertyName,
      propertyRating: propertyRating,
      propertyLocation: propertyLocation,
      propertyImage: imageList,
      propertyHost: propertyHostedBy,
      propertyGuestCapacity: propertyGuestCapacity,
      propertyBedroomCount: propertyBedroomCount,
      propertyBedCount: propertyBedCount,
      propertyBathroomCount: propertyBathroomCount,
      propertyDescription: propertyDescription,
      propertyWifi: propertyWifi,
      propertyKitchen: propertyKitchen,
      propertyParking: propertyParking,
      propertyTV: propertyTV,
      propertyBathtub: propertyBathtub,
      propertyPetsAllowed: propertyPetsAllowed,
      propertyPerNightCost: propertyPerNightCost,
      propertyAvailabilityDate: propertyAvailabilityDates,
      propertyId: demoList.length,
      propertyType: propertyType,
    })
    this.setState({
      propertyList: demoList
    })
    localStorage.setItem("PropertyList", JSON.stringify(this.state.propertyList));
  }

  propertyEditHandler = (propertyName,
    propertyRating,
    propertyLocation,
    propertyImage1,
    propertyImage2,
    propertyImage3,
    propertyImage4,
    propertyImage5,
    propertyGuestCapacity,
    propertyBedroomCount,
    propertyBedCount,
    propertyBathroomCount,
    propertyDescription,
    propertyWifi,
    propertyKitchen,
    propertyParking,
    propertyTV,
    propertyBathtub,
    propertyPetsAllowed,
    propertyPerNightCost,
    propertyAvailabilityDates,
    propertyHostedBy, propertyType) => {

    let intermediateList = this.state.propertyList;
    let imagingList = [propertyImage1, propertyImage2, propertyImage3, propertyImage4, propertyImage5];
    let editIndex = JSON.parse(localStorage.getItem("EditingProperty"));

    intermediateList[editIndex] = {
      propertyName: propertyName,
      propertyRating: propertyRating,
      propertyLocation: propertyLocation,
      propertyImage: imagingList,
      propertyHost: propertyHostedBy,
      propertyGuestCapacity: propertyGuestCapacity,
      propertyBedroomCount: propertyBedroomCount,
      propertyBedCount: propertyBedCount,
      propertyBathroomCount: propertyBathroomCount,
      propertyDescription: propertyDescription,
      propertyWifi: propertyWifi,
      propertyKitchen: propertyKitchen,
      propertyParking: propertyParking,
      propertyTV: propertyTV,
      propertyBathtub: propertyBathtub,
      propertyPetsAllowed: propertyPetsAllowed,
      propertyPerNightCost: propertyPerNightCost,
      propertyAvailabilityDate: propertyAvailabilityDates,
      propertyId: editIndex,
      propertyType: propertyType,
    }
    this.setState({
      propertyList: intermediateList,
    })
    localStorage.setItem("PropertyList", JSON.stringify(this.state.propertyList));
  }

  signupHandler = (event) => {
    console.log("signup clicked")
    this.setState({
      showSignUpModal: true,
    });
    localStorage.setItem("showSignUpModal", true);
  }

  logInHandler = (event) => {
    console.log("Login clicked")
    this.setState({
      showLogInModal: true,
    });
    localStorage.setItem("showLogInModal", true);
  }

  logOutHandler = (event) => {

    let data = {
      userName: "",
      userPassword: "",
    }
    localStorage.setItem("currentUser", JSON.stringify(data));
    localStorage.setItem("currentUserIndex", null)
    this.setState({
      loggedIn: false,
    })
    localStorage.setItem("loggedIn", false)
    this.props.history.push("/");
  }
  searchBarHandler = () => {
    this.setState({
      showSearchBar: true,
    })
    localStorage.setItem("showSearchBar", true);
    localStorage.setItem("searchDestination", null);
    localStorage.setItem("searchguest", null);
  }

  hideSearchBarHandler = () => {
    let datadestination = JSON.parse(localStorage.getItem("searchDestination"));
    let data0 = JSON.parse(localStorage.getItem("searchguest"));
    console.log("data0", typeof (data0), data0);
    //if guests is in input data0 is a string, else a null object
    let dataGuests = parseInt(data0);
    //dataguests is NaN if invalid input/no guest input else it is a number
    let dataset = JSON.parse(localStorage.getItem("PropertyList"));
    let finalList = [];
    console.log("dataset", dataset);
    console.log(dataGuests, datadestination, typeof (dataGuests), typeof (datadestination));

    if ((!isNaN(dataGuests)) || (datadestination !== undefined && datadestination !== null)) {


      if (datadestination !== "" && !isNaN(dataGuests)) {
        finalList = dataset.filter((item) => {
          if (item.propertyLocation === datadestination && item.propertyGuestCapacity === dataGuests) {
            return item;
          }
        })
      }

      else if (datadestination !== "" && (isNaN(dataGuests))) {
        console.log("inside", dataGuests)
        finalList = dataset.filter((item) => {
          if (item.propertyLocation === datadestination) {
            return item;
          }
        })
      }
      else if ((datadestination === "" || datadestination === undefined || datadestination === null) && !isNaN(dataGuests)) {
        finalList = dataset.filter((item) => {
          if (item.propertyGuestCapacity === dataGuests) {
            return item;
          }
        })
      }
    }
    console.log("hello", finalList);
    localStorage.setItem("FilteredNameGuestList", JSON.stringify(finalList));
    this.props.history.push('/SearchPage');
    localStorage.setItem("searchDestination", "");
    localStorage.setItem("searchguest", null);
    let finalFilteredList = finalList !== null ? finalList : dataset;
    this.setState({
      showSearchBar: false,
      filteredPropertyList: finalFilteredList,
    });


    localStorage.setItem("showSearchBar", false);

  }

  addUserHandler = (uName, uPassword, uEmail, uType) => {
    let demoList = this.state.userList;
    if (demoList !== undefined) {
      demoList.push({
        userName: uName,
        userEmail: uEmail,
        userPassword: uPassword,
        userType: uType,
        userId: demoList.length
      })
    }
    this.setState({
      userList: demoList
    });
    localStorage.setItem("userList", JSON.stringify(this.state.userList));
    // console.log(this.state.userList)
  }

  myPropertiesRedirect = () => {
    this.props.history.push("/MyProperties")
  }

  homePageHandler = () => {
    this.props.history.push("/");
  }

  componentDidMount() {
    let propertydata = JSON.parse(localStorage.getItem("PropertyList"));
    let users = JSON.parse(localStorage.getItem("userList"));
    let finalUserList = users !== null ? users : [];
    this.setState({
      propertyList: propertydata,
      userList: finalUserList,
      filteredPropertyList: propertydata
    });
  }

  render() {

    const travellexclass = ["name"];
    const navbarclass = ["navbar"]
    if (this.props.history.location.pathname === "/") {
      travellexclass.push("trvallexwhite");
      navbarclass.push("home");
    }
    else {
      navbarclass.push("nothome");
    }



    localStorage.setItem("PropertyList", JSON.stringify(this.state.propertyList));

    { this.state.propertyList.map(item => (<Link to={'Details/' + item.propertyId} />)) }
    { this.state.propertyList.map(item => (<Link to={'EditProperty/' + item.propertyId} />)) }

    const isloggedIn = JSON.parse(localStorage.getItem("loggedIn"));
    const currentLoggedInUser = parseInt(JSON.parse(localStorage.getItem("currentUserIndex")));
    let host = false;
    let userIn = { ...this.state.userList[currentLoggedInUser] };
    console.log(currentLoggedInUser, typeof (currentLoggedInUser), userIn.userType);
    if (isloggedIn && currentLoggedInUser >= 0) {
      if (userIn.userType === "Host") {
        host = true;
      }
    }

    ; return (
      <Fragment>
        <Fragment>
          <div className={navbarclass.join(' ')} >
            <div className='webstart'>
              <div onClick={this.homePageHandler} ><i className="bi bi-globe"></i>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="rgb(69, 69, 201)" className="bi bi-globe logo" viewBox="0 0 16 16">
                  <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
                </svg></div>
              <div className={travellexclass.join(' ')} onClick={this.homePageHandler}>Travellex</div>
              <button className='searchButton' onClick={this.searchBarHandler}>
                <div className="searchdiv">Start your search Now</div>
                <div className="searchicon">
                  <i className="bi bi-search"></i>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-search searchlogo" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </div>
              </button>
              {!(JSON.parse(localStorage.getItem("loggedIn"))) &&
                <div className='buttons'>
                  <button
                    className='signupbutton spec'
                    onClick={this.signupHandler}>
                    <div className='buttonsdiv'>SignUp</div>
                  </button>
                  <button
                    className='signupbutton'
                    onClick={(event) => this.logInHandler(event)}
                  ><div className='buttonsdiv'>LogIn</div>
                  </button>
                </div>}
              {JSON.parse(localStorage.getItem("loggedIn")) && <div className='buttons'><button className='signupbutton' onClick={this.logOutHandler}>LogOut</button></div>}
              {host && <div className='propertyButton'><button className='propertiesbutton' onClick={this.myPropertiesRedirect} >My Properties</button></div>}
            </div>
          </div >

          {JSON.parse(localStorage.getItem("showSignUpModal")) &&
            <Modal>
              <SignUpForm onAddUser={this.addUserHandler} />
            </Modal>}

          {JSON.parse(localStorage.getItem("showLogInModal")) &&
            <Modal>
              <LogInForm />
            </Modal>}
          {JSON.parse(localStorage.getItem("showSearchBar")) &&
            <SearchBar hidebar={this.hideSearchBarHandler} />
          }
        </Fragment >

        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/SearchPage" render={(props) => <SearchPage nameGuestFilter={this.state.filteredPropertyList} {...props} />} />
          <Route path="/Details/:id" render={(props) => <PropertyDetails  {...props} />} />
          <Route path="/Editproperty/:id" render={(props) => <EditProperty onEditProperty={this.propertyEditHandler}  {...props} />} />
          <Route path="/MyProperties" render={(props) => <MyProperties {...props} />} />
          <Route path="/Reserved" render={(props) => <Reserved  {...props} />} />
          <Route path="/AddProperty" render={(props) => <AddProperty onAddProperty={this.propertyAdditionHandler} {...props} />} />
        </Switch>

      </Fragment>
    )
  }
}

export default withRouter(App);