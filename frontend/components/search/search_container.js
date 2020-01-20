import { connect } from "react-redux";
import { selectAllSongs } from "../../reducers/selectors";
import { requestSongs } from "../../actions/song_actions";
import Search from "./search";


const mapStateToProps = state => ({
  songs: selectAllSongs(state),
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
  requestSongs: filter => dispatch(requestSongs(filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
