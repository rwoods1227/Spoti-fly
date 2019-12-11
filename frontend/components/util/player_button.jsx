import React from 'react';
import { Link } from 'react-router-dom';

const PlayerButton = () => (
  <Link to="/player" id="player-link">
    <div id="player-div-button">
      Go to Player
    </div>
  </Link>
  
);

export default PlayerButton;