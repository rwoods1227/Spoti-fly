import { connect } from 'react-redux';
import PlaylistForm from './playlist_form';
import { createPlaylist } from '../../actions/playlist_actions';

// need to add errors here when possible 
const mapStateToProps = ({ entities, errors }) => ({
  errors: errors.session,
  currentUser: entities.users[session.id]
});

const mapDispatchToProps = dispatch => ({
  createPlaylist: playlist => dispatch(createPlaylist(playlist))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistForm);