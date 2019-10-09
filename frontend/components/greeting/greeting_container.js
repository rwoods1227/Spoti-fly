import { connect } from 'react-redux';
import Greeting from './greeting'
import { logout, login } from '../../actions/session_actions';

const mapStateToProps = ({ entities, session }) => ({ // destructured state
  currentUser: entities.users[session.id]
});

const mapDipatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  login: (user) => dispatch(login(user)) // come back later
});


export default connect(mapStateToProps, mapDipatchToProps)(Greeting)