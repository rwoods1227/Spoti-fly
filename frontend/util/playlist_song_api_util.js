// export const fetchPlaylists = (filter = {}) => {
//   return $.ajax({
//     method: "GET",
//     url: "/api/playlists",
//     data: filter
//   }) // see songs and song controller, also 
// };

export const fetchPlaylistSong = (id) => {
  return $.ajax({
    method: "GET",
    url: `/api/playlist_songs/${id}`
  })
};

export const createPlaylistSong = (playlist_song) => {
  return $.ajax({
    method: "POST",
    url: "/api/playlist_songs",
    data: { playlist_song }
  })
};

export const deletePlaylistSong = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `api/playlist_songs/${id}`
  })
}