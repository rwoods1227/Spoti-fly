import React from 'react';
import { withRouter } from 'react-router-dom';

class PlaylistForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      private: false,
      author_id: this.props.currentUser.id
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createPlaylist(this.state)
      .then(data => this.props.history.push(`/player/playlist/${data.playlist.id}`));
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  errors() {
    if (this.props.errors) {
      return (
        this.props.errors.map(error => {
          return (<li className="error" key={error}>{error}</li>);
        })
      );
    }
  }

  render() {
    return (
      <div className="playlist-form-container">
        <div className="playlist-form-content">
          {/*  eventually use my image here for logo<img src="/assets/playlist-logo.svg" alt="Copyright of Nintendo playlist" /> */}
          <ul>
            {this.errors()}
          </ul>

          <h1 className="playlist-form-title"> Create a new Playlist</h1>        
          <form className="playlist-form" onSubmit={this.handleSubmit}>
            <fieldset>
              <ul className="playlist-form-ul">
                <li className="playlist-form-li">
                  <input
                    type="text"
                    value={this.state.title}
                    placeholder="Title"
                    onChange={this.update('title')}
                  />
                </li>
                <li className="playlist-form-li">
                  <textarea
                    type="textarea"
                    value={this.state.description}
                    placeholder="Description"
                    onChange={this.update('description')}
                  />
                </li>
                <li className="playlist-form-li">
                  <label id="checkbox-label">
                    Private?
                    <input
                      type="checkbox"
                      value={this.state.private}
                      onChange={this.update('private')}
                    />
                  </label>
                </li>
              </ul>
            </fieldset>
            <button id="create-playlist-button" onClick={this.handleSubmit}>Create Playlist</button>
          </form>
        </div>  
      </div>
    );
  }
}

export default withRouter(PlaylistForm);

