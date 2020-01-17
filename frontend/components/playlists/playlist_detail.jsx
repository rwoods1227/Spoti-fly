import React from 'react';
import { Route } from 'react-router-dom';
import SongItemContainer from '../songs/song_item_container';
// import ItemDetailContainer from '../items/item_detail_container';

class PlaylistDetail extends React.Component {

  componentDidMount() {
    this.props.requestPlaylist(this.props.match.params.playlistId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.playlistId !== this.props.match.params.playlistId) {
      this.props.requestPlaylist(this.props.match.params.playlistId);
    }
  }

  render() {
    const playlist = this.props.playlist;
    if (!playlist) return null;


    return (
      <section className="playlist-detail">
        <ul className="playlist-detail-left-ul">
          <img id="album-placeholder" src={window.playlistLogo} alt="Playlist Logo"/>
          <li id="playlist-detail-left-li">
            <h1 className="playlist-detail-left-title">{playlist.title}</h1>
          </li>
          <li id="playlist-detail-left-li">
            <h2 className="playlist-detail-left-author">Creator: {playlist.author.username}</h2>
          </li>
          <li id="playlist-detail-left-li">
            <p className="playlist-detail-left-description">{playlist.description}</p>
          </li>
        </ul>
        <section className="songlist">
          <h1 className="playlist-detail-right-title">Songs</h1>
          <ul className="song-list-ul">
            {playlist.songs.map((song,i) => <SongItemContainer key={i} func={this.props.func} song={song} inPlaylist={true}/>)}
          </ul>
        </section>
        {/* <Route path="/playlist/:playlistId/item/:itemId" component={ItemDetailContainer} /> */}
      </section>
    );
  }
}

export default PlaylistDetail;