import React from 'react';
import { Link } from 'react-router-dom';

const PlayerButton = () => (
  <div className="gallery-writing">
    <p id="small-title">Recommended Artists</p>
    <p id="big-para">Jump Back Into Spotifly, and listen to the hottest new Artists</p>
    <Link to="/player" id="player-link">
      <div id="player-div-button">Open Web Player</div>
    </Link>
  </div>
);

export default PlayerButton;