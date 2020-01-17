import React from "react";
import SongItemContainer from "./song_item_container"
import { Route, Link } from "react-router-dom";


class SongIndex extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  componentDidMount() {
    let filter={};
    this.props.requestSongs(filter);
  }

  render() {
    // this will return all songs with button classes changing 
      return (
        <section id="index-songlist" className="songlist">
          <h1 className="all-songs-title"> All Songs</h1>
          <ul className="song-list-ul">
            {this.props.songs.map(song => <SongItemContainer key={song.id} song={song} func={this.props.func} currentUser={this.props.currentUser} inPlaylist={false} />)}
          </ul>
        </section>
      );
     
  }
}

export default SongIndex;