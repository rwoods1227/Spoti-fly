import { connect } from "react-redux";
import { selectAllSongs } from "../../reducers/selectors";
import { requestSongs } from "../../actions/song_actions";
import SongIndex from "./song_index";

const mapStateToProps = (state) => ({
  songs: selectAllSongs(state),
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
  requestSongs: (filter) => dispatch(requestSongs(filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongIndex);