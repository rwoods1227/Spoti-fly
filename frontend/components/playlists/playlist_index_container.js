import { connect } from "react-redux";
import { selectAllPlaylists} from "../../reducers/selectors";
import { requestPlaylists} from "../../actions/playlist_actions";
import PlaylistIndex from "./playlist_index";

const mapStateToProps = (state) => ({
  playlists: selectAllPlaylists(state),
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
  requestPlaylists: (filter) => dispatch(requestPlaylists(filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistIndex);