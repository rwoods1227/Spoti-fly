import React from 'react';
import { Route } from 'react-router-dom';
// import Item from '../items/item';
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
    debugger;
    if (!playlist) return null;
    return (
      <section className="playlist-detail">
        <ul>
          <li>
            <h2>{playlist.name}</h2>
          </li>
          <li>{playlist.author.username}</li>
        </ul>
        {/* <section className="songlist">
          <h3>Items</h3>
          <ul className="toy-list">
            {items.map(item => <Item key={item.name} item={item} />)}
          </ul>
        </section>
          // this will be song stuff later
        <Route path="/playlist/:playlistId/item/:itemId" component={ItemDetailContainer} /> */}
      </section>
    );
  }
}

export default PlaylistDetail;