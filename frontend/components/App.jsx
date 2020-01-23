import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import { Route, withRouter, Link } from 'react-router-dom';
import LoginFormContainer from "./sessionForms/login_form_container"
import SignupFormContainer from "./sessionForms/signup_form_container"
import { AuthRoute } from '../util/route_util';
import {UnAuthRoute} from '../util/route_util_logged_out'
import PlaylistDetailContainer from "./playlists/playlist_detail_container";
import PlaylistFormContainer from "./playlists/playlist_form_container";
import SongIndexContainer from "./songs/song_index_container";
import PlaylistIndexContainer from "./playlists/playlist_index_container";
import PlayerButton from "./util/player_button";
import AccountButtonsContainer from './util/account_buttons_container'
import Gallery from "./util/gallery";
import Player from "./player/player";
import Playlist from "react-mp3-player";
import Home from "./util/home";
import SearchContainer from "./search/search_container";



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: [
        {
          img:
            "https://icon-library.net/images/music-icon-transparent/music-icon-transparent-11.jpg",
          name: "Starter Song 1",
          desc: "Song to initialize player",
          src:
            "https://ia600901.us.archive.org/7/items/exp037/wrexsoul_-_alchemy_sound_-_12_-_dreamland_64kb.mp3"
        },
        {
          img:
            "https://icon-library.net/images/music-icon-transparent/music-icon-transparent-11.jpg",
          name: "Starter Song 2",
          desc: "Song to initialize player",
          src:
            "https://ia800901.us.archive.org/7/items/exp037/wrexsoul_-_alchemy_sound_-_03_-_2000_fathoms_and_diving_64kb.mp3"
        }
      ]
    };
    console.log(props)
  }

  updateTracks(evt) {
    console.log("updateTracks");
    console.log(evt)
    console.log(this.state.tracks)

    // let newTracks = this.state.tracks.concat(evt);
    // console.log(newTracks);
    this.setState({ tracks: evt.concat(this.state.tracks) });
  }


  // change banner classes for styling based on url path
  render() {
    let tracks = this.state.tracks;
    let headerClass = "banner";
    let outerDivClass = "";
    let greetingContainerBoolean = "";
    let bannerContainer = "banner-container";
    let logoWrapper = "logo-wrapper";
    let logoId = "main-spotifly-logo";
    switch (this.props.location.pathname) {
      case "/signup":
        headerClass += " signup";
        outerDivClass += "signup-div";
        greetingContainerBoolean += "hidden";
        bannerContainer += " signup";
        logoWrapper += " signup";
        logoId = "auth-logo";
        break;
      case "/login":
        headerClass += " login";
        outerDivClass += "login-div";
        greetingContainerBoolean += "hidden";
        bannerContainer += " login";
        logoWrapper += " login";
        logoId = "auth-logo";
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
    if (this.props.location.pathname.startsWith("/player")) {
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
                  <PlaylistIndexContainer func={this.updateTracks.bind(this)} />
                </div>
              </div>
            </header>
            <AuthRoute path="/player" render={() => <Playlist tracks={tracks} />} />

            <Route exact path="/player" component={Home} />
            <Route exact path="/player/search" component={SearchContainer} />
            <UnAuthRoute
              path="/player/settings/account"
              component={AccountButtonsContainer}
            />
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
            {/* should have some protected routes */}
            <Route
              path="/player/playlist/:playlistId"
              render={props => (
                <PlaylistDetailContainer
                  {...props}
                  func={this.updateTracks.bind(this)}
                />
              )}
            />
            <Route
              exact
              path="/player/createPlaylist"
              component={PlaylistFormContainer}
            />
            <Route
              exact
              path="/player/songs"
              render={props => (
                <SongIndexContainer
                  {...props}
                  func={this.updateTracks.bind(this)}
                />
              )}
            />
            {/* <Route exact path="/player/search" component={SearchContainer} />
             */}
          </div>
        </div>
      );
    } else {
      return (
        <div className="wrap">
          <div className={outerDivClass}>
            <header className={headerClass}>
              <div className={bannerContainer}>
                <div className={logoWrapper}>
                  <Link to="/" className="logo-link">
                    <img id={logoId} src={window.logo} alt="Spotifly Logo" />
                  </Link>
                </div>
                <div className={greetingContainerBoolean}>
                  <GreetingContainer />
                </div>
              </div>
            </header>

            <Route exact path="/" component={PlayerButton} />
            <Route exact path="/" component={Gallery} />
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
          </div>
        </div>
      );
    }
  }
};
// reverse authroute for account page? will do when components exist
export default withRouter(App);