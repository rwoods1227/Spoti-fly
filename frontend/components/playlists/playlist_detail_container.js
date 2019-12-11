import { connect } from 'react-redux';
import PlaylistDetail from './playlist_detail';
import { requestPlaylist } from '../../actions/playlist_actions'

const mapStateToProps = (state, ownProps) => {
  const playlist = state.entities.playlists[ownProps.match.params.playlistId];

  return {
    playlist
  };
};

const mapDispatchToProps = dispatch => ({
  requestPlaylist: id => dispatch(requestPlaylist(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistDetail);