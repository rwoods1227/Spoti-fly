import React from 'react'
import { Link, Redirect } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.props.history.push("/")); // could push /account here, would make more sense maybe, have to think about it
  }

  handleDemoLogin(e){
    e.preventDefault();
    let demoUser = { username: "hunter4", email: "hunter4@aol.com", password: "123456" };
    this.props.handleDemoLogin(demoUser);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    }
  }


  render() {
    let errors; 
    if (this.props.errors.length){
      errors = this.props.errors.map((error, i) => (
        <li key={i}>{error}</li>
      ))
    }
   


    if (this.props.formType === "signup") {

      return (
        <div className = "signup-form-container">
          <div className="signup-form-content">
            <ul>
              {errors}
            </ul>
            <h2 className="signup-form-title">Sign up with your email address</h2>
            <form id="signup-form">
              <fieldset>
                <ul className="signup-form-ul">
                  <li className="signup-form-li">
                    <input type="text" value={this.state.email} placeholder="Email" onChange={this.handleInput("email")} />
                  </li>
                  <li className="signup-form-li">
                    <input type="password" value={this.state.password} placeholder="Password" onChange={this.handleInput("password")} />
                  </li>
                  <li className="signup-form-li">
                    <input type="text" value={this.state.username} placeholder="Username" onChange={this.handleInput("username")} />
                  </li>
                  
                </ul>
              </fieldset>
              <button id="signup-button" onClick={this.handleSubmit}>Sign Up!</button>
            </form>
            <p className="signup-form-end">Already have an account?<Link to="/login">Log in</Link></p>
            <div className="guest-login-wrap">
              <p className="login-form-end">Guest Login</p>
              <button id="login-button" onClick={this.handleDemoLogin}>Demo Login</button>
            </div>
          </div>
        </div>
      )
    } else if (this.props.formType === "login") {

      return (
        <div className = "login-form-container">
          <div className="login-form-content">
            <ul>
              {errors}
            </ul>
            <h2 className="login-form-title">Log in with your Username and Password</h2>
            <form id="login-form">
              <fieldset>
                <ul className="login-form-ul">
                  <li className="login-form-li">
                    <input type="text" value={this.state.username} placeholder="Username" onChange={this.handleInput("username")} />
                  </li>
                  <li className="login-form-li">
                    <input type="password" value={this.state.password} placeholder="Password" onChange={this.handleInput("password")} />
                  </li>
                </ul>
              </fieldset>
              <button id="login-button" onClick={this.handleSubmit}>Log In</button>
            </form>
            <p className="login-form-end">No account?<Link to="/signup">Sign Up</Link></p>
            <div className="guest-login-wrap">
              <p className="login-form-end">Guest Login</p>
              <button id="login-button" onClick={this.handleDemoLogin}>Demo Login</button>
            </div>
          </div>
        </div>
      )// maybe change up the signup-button if I have oodles of time, to be ultra pixel perfect clone
    }
    else {
      return <Redirect to="/" />;
    }
  }
}


export default SessionForm;