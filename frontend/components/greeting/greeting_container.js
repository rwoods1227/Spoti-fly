import { connect } from 'react-redux';
import Greeting from './greeting'
import { logout } from '../../actions/session_actions';

const mapStateToProps = ({ entities, session }) => ({ // destructured state
  currentUser: entities.users[session.id]
});

const mapDipatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});


export default connect(mapStateToProps, mapDipatchToProps)(Greeting)