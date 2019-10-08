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
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.props.history.push("/"));
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    }
  }


  render() {
    const errors = this.props.errors.session.map((error, i) => (
      <li key={i}>{error}</li>
    ))


    if (this.props.formType === "signup") {

      return (
        <div>
          <Link to="/login">Login</Link>
          <ul>
            {errors}
          </ul>
          <h1>Sign Up</h1>
          <form>
            <label>User Name:
               <input type="text" value={this.state.username} onChange={this.handleInput("username")} />
            </label>
            <label>Email:
               <input type="text" value={this.state.email} onChange={this.handleInput("email")} />
            </label>
            <label>Password:
               <input type="password" value={this.state.password} onChange={this.handleInput("password")} />
            </label>
            <button onClick={this.handleSubmit}>Sign UP!</button>
          </form>
        </div>
      )
    } else if (this.props.formType === "login") {

      return (
        <div>
          <Link to="/signup">Sign Up</Link>
          <ul>
            {errors}
          </ul>
          <h1>Log In</h1>
          <form>
            <label>User Name:
               <input type="text" onChange={this.handleInput("username")} />
            </label>
            <label>Password:
               <input type="password" onChange={this.handleInput("password")} />
            </label>
            <button onClick={this.handleSubmit}>Log In</button>
          </form>
        </div>
      )
    }
    else {
      return <Redirect to="/" />;
    }
  }
}


export default SessionForm;