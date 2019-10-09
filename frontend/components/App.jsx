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
  let bannerContainer= "banner-container";
  let logoWrapper = "logo-wrapper";
  switch (props.location.pathname) {
    case "/signup":
      headerClass += " signup";
      outerDivClass += "signup-div";
      greetingContainerBoolean += "hidden";
      bannerContainer += " signup";
      logoWrapper += " signup";
      break;
    case "/login":
      headerClass += " login";
      outerDivClass += "login-div";
      greetingContainerBoolean += "hidden";
      bannerContainer += " login";
      logoWrapper += " login";
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
    <div className={outerDivClass}>
      <header className={headerClass}>
        <div className={bannerContainer}>
          <div className={logoWrapper}>
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