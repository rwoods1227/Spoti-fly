import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    if (this.props.currentUser) {
      return (
        <div>
          <p>Welcome {this.props.currentUser.username}</p>
          <button onClick={this.props.logout}>Logout</button>
        </div>
      );
    } else {
      return (
        <ul className="signed-out-links">
          <li id="signed-out-link" key="signup"><Link to="/signup">Signup </Link></li>
          <li id="signed-out-link" key="login"><Link to="/login"> Login</Link></li>
        </ul>
      )
    }
  }
}

export default Greeting;