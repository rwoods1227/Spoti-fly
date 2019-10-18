import { connect } from 'react-redux';
import AccountButtons from './account_buttons'
import { logout} from '../../actions/session_actions';

const mapStateToProps = ({ entities, session }) => ({ // destructured state
  currentUser: entities.users[session.id]
});

const mapDipatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});


export default connect(mapStateToProps, mapDipatchToProps)(AccountButtons)