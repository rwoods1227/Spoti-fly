import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({// where to use ownProps?
  errors: state.errors, // maybe different
  formType: "login"
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: (user) => dispatch(login(user)),
  handleDemoLogin: (user) => dispatch(login(user))
});



export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);