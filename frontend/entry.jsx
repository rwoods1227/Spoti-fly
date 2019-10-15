import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store"
import Root from "./components/root";

import {requestSong, requestSongs} from "./actions/song_actions";
import {requestPlaylist, requestPlaylists, createPlaylist, updatePlaylist, deletePlaylist} from "./actions/playlist_actions"

window.requestPlaylist = requestPlaylist;
window.requestPlaylists = requestPlaylists;
window.createPlaylist = createPlaylist;
window.updatePlaylist = updatePlaylist;
window.deletePlaylist = deletePlaylist;

window.requestSong = requestSong;
window.requestSongs = requestSongs;


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

