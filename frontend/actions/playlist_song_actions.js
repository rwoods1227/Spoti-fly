import * as API from '../util/playlist_song_api_util';

export const RECEIVE_PLAYLIST_SONG = "RECEIVE_PLAYLIST_SONG";
export const REMOVE_PLAYLIST_SONG = "REMOVE_PLAYLIST_SONG";



const receivePlaylistSong = (playlist_song) => ({
  type: RECEIVE_PLAYLIST_SONG,
  playlist_song
})

const removePlaylistSong = (playlistSongId) => ({
  type: REMOVE_PLAYLIST_SONG,
  playlistSongId
})


export const requestPlaylistSong = (id) => (dispatch) => {
  return API.fetchPlaylistSong(id).then(
    playlist_song => dispatch(receivePlaylistSong(playlist_song))
  )
};

export const createPlaylistSong = (playlist_song) => (dispatch) => {
  return API.createPlaylistSong(playlist_song).then(
    playlist_song => dispatch(receivePlaylistSong(playlist_song))
  )
};


export const deletePlaylistSong = (id) => (dispatch) => {
  return API.deletePlaylistSong(id).then(
    playlist_song => dispatch(removePlaylistSong(id))
  )
};