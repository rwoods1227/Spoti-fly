import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {

  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleClass = this.toggleClass.bind(this);
    this.state ={active: false};

  }

  handleSubmit(e){
    e.preventDefault();
    let demoUser = { username: "hunter4", email: "hunter4@aol.com", password: "123456" };
    this.props.login(demoUser);
  }

  toggleClass() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  };

  render() {
 
    if (this.props.currentUser) {
      return (
        <nav className="banner-nav">
          <ul className="signed-out-links">
            <li id="nav-link" key="Github">
              <a href="https://github.com/rwoods1227" target="_blank">
                Github 
              </a>
            </li>
            <li id="nav-link" key="Portfolio">
              <a href="https://ryanwoodsdev.com" target="_blank">
                Portfolio Site
              </a>
            </li>
            {/* <li id="nav-link" key="Download"><Link to="/">Download</Link></li> */}
            <li id="nav-separator" key="separator"></li>

            <li className="nav-user-li">
              <div id="nav-button" onClick={this.toggleClass}>
                <img
                  id="profile-icon"
                  src={window.avatarIcon}
                  alt="profileIcon"
                />
                <p id="nav-profile">Profile</p>
              </div>
              <div
                className={
                  this.state.active ? "nav-profile-dropdown-banner" : "hidden"
                }
              >
                {/* <div className="arrow-up"></div>  giving up on the tool tip triangle thing*/}
                <ul className="dropdown-ul">
                  <li id="dropdown-li" key="Account">
                    <Link id="account" to="/account">
                      Account
                    </Link>
                  </li>
                  <li id="dropdown-li" key="Logout">
                    <input
                      id="logout-button"
                      type="submit"
                      value="Logout"
                      onClick={this.props.logout}
                    />
                  </li>
                </ul>
              </div>
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