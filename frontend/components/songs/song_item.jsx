import React from 'react';
import { Link } from "react-router-dom";

// const SongItem = ({song, inPlaylist, currentUser=false}) => {

// this becomes this.props.song , this.props.inPlaylsit

class SongItem extends React.Component {
  constructor(props) {
    super(props);
    this.toggleClass = this.toggleClass.bind(this);
    this.state = { active: false };
    this.addSong = this.addSong.bind(this)
  }

  // componentDidMount() {
  //   let filter = (this.props.currentUser) ? { author_id: this.props.currentUser.id } : {};
  //   this.props.requestPlaylists(filter);
  // }
 
        // will not have time to implement 
  //   addToQueue() {
  //   const currentState = this.state.active;
  //   this.setState({ active: !currentState });
  // };

      // this will change class of dropdown of currentuser.playlist from hidden to whatever new one is, also with a modal
  toggleClass() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  };
        //adds song to dropdown playlist selection through making a playlistSong object
  addSong(playlistId) {
    let newPlaylistSong = {song_id: this.props.song.id, playlist_id: playlistId}
    this.props.createPlaylistSong(newPlaylistSong);
  };

   // need functionality for the two buttons, add queue doesn't matter but need add song to work

   // removed link around contetn to link to individual song, as that feature is not yet implemented
  render(){

    let songAdd = "hidden";
    let songAddQueue = "hidden";
    if (this.props.inPlaylist) {
      songAddQueue = "song-add-to-queue-button";
    } else if (!this.props.inPlaylist && this.props.currentUser) {
      songAdd = "song-add-button";
    }

    let playlistLis = {};
    if (this.props.currentUser) {
      playlistLis = this.props.playlists.map(playlist => {
        if (playlist.author_id === this.props.currentUser.id) {
          return(
           <li id = "dropdown-li" key={playlist.id}>
              <div id="add-song-button" onClick={()=> {this.addSong(playlist.id)}}>
                <p>{playlist.title}</p>
              </div>
           </li >
          )// change the styling soon probably of button
        }
      });
    } 





    return(
      <li key={this.props.song.id} id="song">
        <div className="song-details-div">
          <p id="song-title">{this.props.song.title}</p>
          <p id="song-artist">{this.props.song.artist}</p>
        </div>
        <button className={songAdd} onClick={this.toggleClass} key="add">Add
          <div className={this.state.active ? "song-dropdown" : "hidden"}>
            <ul className="song-dropdown-ul">
             {playlistLis}
            </ul>
          </div>
        </button>
        <button className={songAddQueue} key="queue">Add to Queue</button>
      </li>
    )
  }
 
};

export default SongItem;
