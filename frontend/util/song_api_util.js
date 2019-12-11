export const fetchSongs = (filter ={}) => {
  return $.ajax({
    method: "GET",
    url: "/api/songs", 
    data: filter
  }) // filter will be {artist: "xo-skelton"}, {title: "Femme Fatale"}
};   // at least I think it will, will have to check params in the controller to 
      // make sure things passed through correctly

export const fetchSong = (id) => {
  return $.ajax({
    method: "GET",
    url: `/api/songs/${id}`
  })
};
