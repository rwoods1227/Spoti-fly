import React from 'react';
import { Link } from 'react-router-dom';
// too much trouble to have this along with the 3rd party player... depreciated until further notice

class AccountButtons extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    if (this.props.currentUser) {
      return (
        <div className="account-buttons-div">
          <ul className="playlist-detail-left-ul">
            <img id="album-placeholder" src={window.avatarIcon} alt="Account Icon" />
            <li id="playlist-detail-left-li">
              <h2 className="playlist-detail-left-author">{this.props.currentUser.username}</h2>
            </li>
            <li id="account-button">
              <Link to="/" id="splash-link">
                <div id="splash-button-div">
                  Go to Splash
                </div>
              </Link>
            </li>
            <li id="account-button" key="Logout">
              <input id="logout-button-account" type="submit" value="Logout" onClick={this.props.logout} />
            </li>
          </ul>
        </div>
      );
    } else {
      return (
        <span></span>
      )
    }
  }
};

export default AccountButtons;
