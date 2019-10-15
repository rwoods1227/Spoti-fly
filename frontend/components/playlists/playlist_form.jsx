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
      .then(data => this.props.history.push(`/playlist/${data.playlist.id}`));
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
      <section className="playlist-detail">
        {/*  eventually use my image here for logo<img src="/assets/playlist-logo.svg" alt="Copyright of Nintendo playlist" /> */}
        <ul>
          {this.errors()}
        </ul>
        <form className="playlist-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.title}
            placeholder="Title"
            onChange={this.update('title')}
          />
          <label>
            Private?
            <input
              type="checkbox"
              value={this.state.private}
              onChange={this.update('private')}
            />
          </label>

          <button>Create playlist</button>
        </form>
      </section>
    );
  }
}

export default withRouter(PlaylistForm);