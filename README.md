# Spotifly
# [Live Demo](https://spotifly-app.herokuapp.com/#/)


## Technologies
 * Backend: PostgreSQl, Ruby / Rails
 * Frontend: JavaScript, React, Redux, HTMl CSS

## Background and Overview

Spotifly is bug-themed music site based off of Spotify. With it you can learn about and experience the hottest new bands and music from the best bugs around. 
![Spotifly Home](./screenshots/home.png)
## Features and Technical Challenges

### Songs and Playlists
* Song objects created with url links to hosted royalty free images and .mp3 files
```javascript
//App.jsx
this.state = {
      tracks: [
        {
          img:
            "https://icon-library.net/images/music-icon-transparent/music-icon-transparent-11.jpg",
          name: "Starter Song 1",
          desc: "Song to initialize player",
          src:
            "https://ia600901.us.archive.org/7/items/exp037/wrexsoul_-_alchemy_sound_-_12_-_dreamland_64kb.mp3"
        },
        {
          img:
            "https://icon-library.net/images/music-icon-transparent/music-icon-transparent-11.jpg",
          name: "Starter Song 2",
          desc: "Song to initialize player",
          src:
            "https://ia800901.us.archive.org/7/items/exp037/wrexsoul_-_alchemy_sound_-_03_-_2000_fathoms_and_diving_64kb.mp3"
        }
      ]
```
* Songs and playlists are joined through a joins table allowing them to be added into a playlist where they can be played
* Similar to sportify, many duplicates of the same song can be added to a single playlist
```ruby
class PlaylistSong < ApplicationRecord

  belongs_to :playlist,
  class_name: :Playlist,
  foreign_key: :playlist_id


  belongs_to :song,
  class_name: :Song,
  foreign_key: :song_id

  
end
```

![Playlist 1](./screenshots/players.png)
### Search
* Search takes in queries from an input and updates the matching results based on matching characters in the song title or artist
```javascript
getInfo() {
    let songTitles = [];
    this.props.songs.map(song => {
      if (
        song.title.toLowerCase().includes(this.state.query.toLowerCase()) || 
        song.artist.toLowerCase().includes(this.state.query.toLowerCase())
      ) {
        let titleAndId = song;
        songTitles.push(titleAndId);
      } 
    });
    let data = songTitles;
    this.setState({
      results: data
    });
  }
```
* These matches are fed into a sugestions compontent that converts each into a song item
* These song items are then listed without duplicates in order to allow the user to add songs into a playlist
```Javascript
const Suggestions = props => {
  let options = props.results.map(song => (
    <SongItemContainer key={song.id} song={song} func={props.func} inPlaylist={false} />) 
  );
  if (options.length === 0) {
    options = ["No Matching Songs Found :("];
  }

  return (
    <section id="index-songlist-search" className="songlist">
      <div className="nav-profile-dropdown-links-container">
        <ul className="song-list-ul">{options}</ul>
      </div>
    </section>
  );
};
```
![Spotifly Search](./screenshots/players.png)

### Path-based Styling
* Styling of some components is based off of the url pathname to provide dryer code
```javascript
//App.jsx
switch (this.props.location.pathname) {
      case "/signup":
        headerClass += " signup";
        outerDivClass += "signup-div";
        greetingContainerBoolean += "hidden";
        bannerContainer += " signup";
        logoWrapper += " signup";
        logoId = "auth-logo";
        break;
      case "/login":
        headerClass += " login";
        outerDivClass += "login-div";
        greetingContainerBoolean += "hidden";
        bannerContainer += " login";
        logoWrapper += " login";
        logoId = "auth-logo";
        break;
      case "/account":
        headerClass += " account";
        outerDivClass += "account-div";
        break;
      default:
        headerClass += " default";
        outerDivClass += "default-div";
        break;
    }
```
* Used to style components and in and if else to separate the two main sites(player and sign-in/splash)

![Spotifly splash-header](./screenshots/players.png)
![Spotifly login-header](./screenshots/players.png)
![Spotifly sidebar-header](./screenshots/players.png)


## Upcoming Additions
- albums
- search expansion
