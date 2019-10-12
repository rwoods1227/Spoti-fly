import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store"
import Root from "./components/root";

import {fetchSong, fetchSongs} from "./util/song_api_util";
import {fetchPlaylist, fetchPlaylists, createPlaylist, updatePlaylist, deletePlaylist} from "./util/playlist_api_util"

window.fetchPlaylist = fetchPlaylist;
window.fetchPlaylists = fetchPlaylists;
window.createPlaylist = createPlaylist;
window.updatePlaylist = updatePlaylist;
window.deletePlaylist = deletePlaylist;

window.fetchSong = fetchSong;
window.fetchSongs = fetchSongs;


document.addEventListener("DOMContentLoaded", () => {

  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  
  //testing start
  window.getState = store.getState;
  window.dispatch = store.dispatch; 
  //testing end

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});

