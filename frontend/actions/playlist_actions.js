import * as API from '../util/playlist_api_util';

export const RECEIVE_PLAYLISTS = "RECEIVE_PLAYLISTS";
export const RECEIVE_PLAYLIST = "RECEIVE_PLAYLIST";
export const REMOVE_PLAYLIST = "REMOVE_PLAYLIST";

const receivePlaylists = (playlists) => ({
  type: RECEIVE_PLAYLISTS,
  playlists
})

const receivePlaylist = (playlist) => ({
  type: RECEIVE_PLAYLIST,
  playlist
})

const removePlaylist = (playlistId) => ({ 
  type: REMOVE_PLAYLIST,
  playlistId
})


export const requestPlaylists = (filter) => (dispatch) => (
  API.fetchPlaylists(filter).then(
    playlists => (dispatch(receivePlaylists(playlists)))
  )
)// filter comes from ajax and jbuilder (song_ids and index on controller)

export const requestPlaylist = (id) => (dispatch) => (
  API.fetchPlaylist(id).then(
    playlist => dispatch(receivePlaylist(playlist))
  )
)

export const createPlaylist = (playlist) => (dispatch) => (
  API.createPlaylist(playlist).then(
    playlist => dispatch(receivePlaylist(playlist))
  )
)

export const updatePlaylist = (playlist) => (dispatch) => (
  API.updatePlaylist(playlist).then(
    playlist => dispatch(receivePlaylist(playlist))
  )
)

export const deletePlaylist = (id) => (dispatch) => (
  API.deletePlaylist(id).then(
    playlist => dispatch(removePlaylist(id))
  )
)