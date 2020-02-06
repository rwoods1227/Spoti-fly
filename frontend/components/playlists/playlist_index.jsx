import React from "react";
import PlaylistIndexItem from "./playlist_index_item"
import { Route, Link } from "react-router-dom";
// import PlaylistDetailContainer from "./playlist_detail_container";
// import PlaylistFormContainer from "./playlist_form_container";

 class PlaylistIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let filter = (this.props.currentUser) ? {author_id: this.props.currentUser.id} : {};
    this.props.requestPlaylists(filter);
  }

  // have to edit from here after I know what I want to display
  // this.props.playlists gets all of the pokemon I think
  render() {
    let playlistLis ={};
    if (this.props.currentUser){
       playlistLis = this.props.playlists.map(playlist => {
        if (playlist.author_id === this.props.currentUser.id){ // filters to currentUser created playlists for sidebar
          return <PlaylistIndexItem playlist={playlist} key={playlist.id} />
        }
      });
    } 
    // the form container is not going to be a modal, just make it render content like the create pokemon button that accepts only title and description, author is automatically assigned
    // the exact path component will have to be the home page or splash or whatever and the path will be that exact path(spotify has browse/featured)
    // the pokemon/:pokemonId component will be the playlist render, so detail will be playlist show pretty much
    // sidebar button renders the modal form


    // model this after greeting, need toggleClass and maybe some state stuff. And handle submit possibly
    //look to pokedex to find overflow scroll option for playlists ul
    if (this.props.currentUser) {
      return (
        <nav className="sidebar-nav">
         
          <ul className="sidebar-links">
            <li id="sidebar-nav-link" key="Home"><img id="sidebar-icon" src={window.homeIcon} alt="Home" /><Link to="/player">Home </Link></li>
            <li id="sidebar-nav-link" key="Search"><img id="sidebar-icon" src={window.searchIcon} alt="Search" /><Link to="/player/search">Search</Link></li>
            <li id="sidebar-nav-link" key="Songs"><img id="sidebar-icon" src={window.SongIcon} alt="Songs" /><Link to="/player/songs">Songs</Link></li>

            <li className="sidebar-nav-user-li">
              <h4 id="user-playlists-header">Playlists</h4>
              <div className="sidebar-playlists">
                <div className="create-playlist-div">
                  <Link to="/player/createPlaylist">
                    <img id="sidebar-icon" src={window.plusIcon} alt="Add Playlist" />
                    <p id="create-playlist-link">Create Playlist</p>
                  </Link>
                </div>
                <ul className="playlists">
                  {playlistLis } 
                </ul>
              </div>
              <div className="sidebar-account-div">
                {/* can't get the music player to clear cache of html request currently, seems like too much work taking out movement between splach and players */}
                {/* <Link to="/player/settings/account"> */}
                  <img id="sidebar-icon" src={window.avatarIcon} alt="profileIcon" />
                  <p id="sidebar-nav-profile">{this.props.currentUser.username}</p>
                {/* </Link> */}
              </div>
            </li>
          </ul>
        </nav>

      );
    } else{
      // give the sidebar-signed-out-link the same styling as all of my buttons
      return(
        <nav className="sidebar-nav">
          <ul className="sidebar-links">
            <li id="sidebar-nav-link" key="Home"><img id="sidebar-icon" src={window.homeIcon} alt="Add Playlist" /><Link to="/player">Home </Link></li>

            <li id="sidebar-nav-separator" key="separator"></li>
            <li id="sidebar-signed-out-link">
              <Link to="/signup"><button id="sidebar-signed-out-link-login-btn" key="signup">Signup</button></Link>
              <Link to="/login"><button id="sidebar-signed-out-link-signup-btn" key="login"> Login</button></Link>
            </li>
          </ul>
          {/* <Route path="player/playlist/:playlistId" component={PlaylistDetailContainer} /> */}
        </nav>
      )
    }
  }
}

export default PlaylistIndex;