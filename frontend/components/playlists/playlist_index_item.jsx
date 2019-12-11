import React from 'react'
import { Link } from "react-router-dom";

// sidebar links index
const PlaylistIndexItem = ({ playlist }) => {

  return (
    <li className="playlist-item">
      <Link to={`/player/playlist/${playlist.id}`}>
        <p>{playlist.title}</p>
      </Link>
    </li>
  );
}

export default PlaylistIndexItem;