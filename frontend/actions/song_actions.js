import * as API from '../util/song_api_util';

export const RECEIVE_SONGS = "RECEIVE_SONGS";
export const RECEIVE_SONG = "RECEIVE_SONG";


const receiveSongs = (songs) => ({
  type: RECEIVE_SONGS,
  songs
}) 

const receiveSong = (song) => ({
  type: RECEIVE_SONG,
  song
})

export const requestSongs = (filter) => (dispatch) => {
  return API.fetchSongs(filter).then(
    songs => dispatch(receiveSongs(songs))
  )
  };// filter will be title or artist or maybe later playlists

export const requestSong = (id) => (dispatch) => {
  return API.fetchSong(id).then(
    song => dispatch(receiveSong(song))
  )
  };