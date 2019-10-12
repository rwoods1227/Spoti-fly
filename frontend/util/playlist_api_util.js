export const fetchPlaylists = (filter ={}) => {
  return $.ajax({
    method: "GET",
    url: "/api/playlists", 
    data: filter
  }) // see songs and song controller, also 
};

export const fetchPlaylist = (id) => {
  return $.ajax({
    method: "GET",
    url: `/api/playlists/${id}`
  })
};

export const createPlaylist = (playlist) => {
  return $.ajax({
    method: "POST",
    url: "/api/playlists",
    data: { playlist }
  })
};

export const updatePlaylist = (playlist) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/playlists/${playlist.id}`,
    data: { playlist }
  })
};

export const deletePlaylist = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `api/playlists/${id}`
  })
}