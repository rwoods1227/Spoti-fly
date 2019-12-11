import {
  RECEIVE_PLAYLIST_SONG,
  REMOVE_PLAYLIST_SONG
} from '../actions/playlist_song_actions';
import merge from 'lodash/merge';

const playlistSongsReducer= (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PLAYLIST_SONG:
      return merge({}, state, { [action.playlist_song.id]: action.playlist_song })
    case REMOVE_PLAYLIST_SONG:
      let newState = merge({}, state);
      delete newState[action.playlistSongId]
      return newState;
    default:
      return state;
  }
};

export default playlistSongsReducer;