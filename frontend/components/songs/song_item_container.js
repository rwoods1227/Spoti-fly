import { connect } from "react-redux";
import { createPlaylistSong } from "../../actions/playlist_song_actions";
import { selectAllPlaylists } from "../../reducers/selectors";
// import { requestPlaylists } from "../../actions/playlist_actions";
import SongItem from "./song_item";

const mapStateToProps = (state) => ({
  playlists: selectAllPlaylists(state),
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
  createPlaylistSong: (playlist_song) => dispatch(createPlaylistSong(playlist_song))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongItem);