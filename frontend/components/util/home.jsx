import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="home-splash">
    <h1 className="welcome">Welcome to Spotifly!</h1>
    <p id="home-para">Spotifly is a insect themed music player site based off of Spotify. To listen to music, first create a playlist using the 
    link on the sidebar. Then either search for a song using the search link, or go directly to the full listing of songs and add one to your playlist. Then simply select the playlist from the sidebar
    and all of the added songs will be ready to play by hitting the "play" button next to their respective titles.</p>
    <p id="home-para">
      Each song will be added to the top of the queue when played, and you can naviagate through the song queue using the arrow buttons or the queue list button. Additionally, the player will be seeded with two starter songs in the queue, that are ready to play immediately.
    </p>
    <p id="home-para">(Bug: Leaving the music player on while logging in and out will initialize multiple howler audio objects causing echoing. Refresh Page to fix.) </p>
  </div>
);

export default Home;
