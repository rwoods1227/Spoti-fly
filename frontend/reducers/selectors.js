export const selectAllPlaylists = (state) => {
  return Object.values(state.entities.playlists);
};

export const selectPlaylist = (state, playlistId) => {
  return state.entities.playlists[playlistId];
};

export const selectSong = (state, songId) => {
  return state.entities.songs[songId]
};

export const selectErrors = (state) => {
  return state.ui.errors;
}