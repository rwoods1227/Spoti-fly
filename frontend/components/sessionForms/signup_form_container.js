import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup, login } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({ // where to use ownProps?
  errors: state.errors.session, // maybe different
  formType: "signup",
});

const mapDispatchToProps = (dispatch, ownProps) => ({
 processForm: (user) => dispatch(signup(user)),
 handleDemoLogin: (user) => dispatch(login(user))
});


export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);

