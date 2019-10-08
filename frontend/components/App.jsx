import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import { Route, withRouter, Link } from 'react-router-dom';
import LoginFormContainer from "./sessionForms/login_form_container"
import SignupFormContainer from "./sessionForms/signup_form_container"
import { AuthRoute } from '../util/route_util';
//import SpotiflyLogo from "../app/assets/images/Spotifly.png";
const App = (props) => {

  // change banner classes for styling based on url path
  let headerClass = "banner";
  let outerDivClass = "";
  let greetingContainerBoolean = "";
  switch (props.location.pathname) {
    case "/signup":
      headerClass += " signup";
      outerDivClass += "signup-div";
      greetingContainerBoolean +="hidden";
      break;
    case "/login":
      headerClass += " login";
      outerDivClass += "login-div";
      greetingContainerBoolean += "hidden";
      break;
    case "/account":
      headerClass += " account";
      outerDivClass += "account-div";
      break;
    default:
      headerClass += " default";
      outerDivClass += "default-div";
      break;
  }
  //<img src={SpotiflyLogo} alt="Spotifly Logo"/>
  // <a href="" className="logo-link">
  //   <img src={window.logo} alt="Spotifly Logo" />
  // </a> 
  return(
  <div className="wrap">
    <div class={outerDivClass}>
      <header className={headerClass}>
        <div className="banner-container">
          <div className="logo-wrapper">
            <Link to="/" className="logo-link">
              <img src={window.logo} alt="Spotifly Logo" />
            </Link>
          </div>
          <div className={greetingContainerBoolean}>
            <GreetingContainer />
          </div>
        </div>
      </header>
      
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
    </div>
  </div> 
  )
};
export default withRouter(App);