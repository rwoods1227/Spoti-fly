import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import { Route, withRouter, Link } from 'react-router-dom';
import LoginFormContainer from "./sessionForms/login_form_container"
import SignupFormContainer from "./sessionForms/signup_form_container"
import { AuthRoute } from '../util/route_util';
import PlaylistDetailContainer from "./playlists/playlist_detail_container";
import PlaylistFormContainer from "./playlists/playlist_form_container";

import PlaylistIndexContainer from "./playlists/playlist_index_container"

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
  // once the enter player button is clicked from splash page, player is not protected but functionality is limited
  if (props.location.pathname.startsWith("/player")){
    return (
      <div className="wrap">
        <div className="player-div">
          <header className="player-sidebar">
            <div className="player-sidebar-container">
              <div className="player-logo">
                <Link to="/player" className="player-logo-link">
                  <img src={window.whiteLogo} alt="Spotifly Player Logo" />
                </Link>
              </div>
              <div className="sidebar-greeting">
                <PlaylistIndexContainer />
              </div>
            </div>
          </header>

          <AuthRoute path="/login" component={LoginFormContainer} />
          <AuthRoute path="/signup" component={SignupFormContainer} />
          {/* should have some protected routes */}
          <Route path="player/playlist/:playlistId" component={PlaylistDetailContainer} />
          <Route exact path="player/createPlaylist" component={PlaylistFormContainer} /> 

        </div>
      </div>
    )
  }
  else{
    return (
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
          <div id="player-div-button">
            <Link to="/player" id="player-link">
              Go to Player
            </Link>
          </div>
          <AuthRoute path="/login" component={LoginFormContainer} />
          <AuthRoute path="/signup" component={SignupFormContainer} />
        </div>
      </div>
    )
  }
 
};
// reverse authroute for account page? will do when components exist
export default withRouter(App);