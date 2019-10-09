import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    let signedOutLink = "signed-out-link"; // gonna have to change up what is rendered here
    if (this.props.currentUser) {
      return (
        <nav className="banner-nav">
          <ul className="signed-out-links">
            <li id="nav-link" key="Premium"><Link to="/">Premium </Link></li>
            <li id="nav-link" key="Help"><Link to="/">Help</Link></li>
            <li id="nav-link" key="Download"><Link to="/">Download</Link></li>
            <li id="nav-separator" key="separator"></li>

            <li className="nav-user-li">
              <p className="signed-in-username">Welcome {this.props.currentUser.username}</p>
              <button onClick={this.props.logout}>Logout</button>
            </li>
          </ul>
        </nav>
   
      );
    } else {
      return (
        <nav className="banner-nav">
          <ul className="signed-out-links">
            <li id="nav-link" key="Premium"><Link to="/">Premium </Link></li>
            <li id="nav-link" key="Help"><Link to="/">Help</Link></li>
            <li id="nav-link" key="Download"><Link to="/">Download</Link></li>
            <li id="nav-separator" key="separator"></li>

            <li id="signed-out-link" key="signup"><Link to="/signup">Signup </Link></li>
            <li id="signed-out-link" key="login"><Link to="/login"> Login</Link></li>
          </ul>
        </nav>
      )
    }
  }
}

export default Greeting;