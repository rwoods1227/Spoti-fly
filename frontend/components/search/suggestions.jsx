import React from "react";
import { Link } from "react-router-dom";
import SongItemContainer from "../songs/song_item_container";

const Suggestions = props => {
  let options = props.results.map(song => (
    <SongItemContainer key={song.id} song={song} func={props.func} inPlaylist={false} />) 
  );
// func is currently undefined so we shall see how that goes
  if (options.length === 0) {
    options = ["No Matching Songs Found :("];
  }

  return (
    <section id="index-songlist" className="songlist">
      <div className="nav-profile-dropdown-links-container">
        <ul className="song-list-ul">{options}</ul>
      </div>
    </section>
  );
};

export default Suggestions;
