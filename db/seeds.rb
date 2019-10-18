# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Song.destroy_all
Playlist.destroy_all
PlaylistSong.destroy_all

user1 = User.create!({ username: "hunter4", email: "hunter4@aol.com", password: "123456" })
user2 = User.create!({ username: "hunter5", email: "hunter5@aol.com", password: "123456" })
user3 = User.create!({ username: "hunter6", email: "hunter6@aol.com", password: "123456" })

song1 = Song.create!({title: "Love Bug", artist: "XO-skeletons"})
song2 = Song.create!({title: "He Died for Us", artist: "Praying-Mantises"})
song3 = Song.create!({title: "Femme Fatale", artist: "Praying-Mantises"})
song4 = Song.create!({title: "Here Comes the Dung", artist: "The Dung-Beetles"})
song5 = Song.create!({title: "Let it Roll", artist: "The Dung-Beetles"})

song6 = Song.create!({title: "Skeet-Skeet", artist: "Mo Skeet0"})
song7 = Song.create!({title: "One Day, One Life", artist: "Mo Skeet0"})
song8 = Song.create!({title: "Buzzzzzz", artist: "The Buzz"})
song9 = Song.create!({title: "Hive-Mine", artist: "The Buzz"})
song10 = Song.create!({title: "Droning on and on", artist: "The Buzz"})

song11 = Song.create!({title: "Spied on Her", artist: "Daddy SongLegs"})
song12 = Song.create!({title: "Web of Lies", artist: "Daddy SongLegs"})
song13 = Song.create!({title: "A Rack Need (aka Alcoholic's Demise)", artist: "Daddy SongLegs"})

song14 = Song.create!({title: "Moth on Fire", artist: "Too Many Moths to Feed"})
song15 = Song.create!({title: "Old Town Lamp", artist: "Too Many Moths to Feed"})
song16 = Song.create!({title: "Old Town Lamp(remix1)", artist: "Too Many Moths to Feed(feat. Mo Skeet0)"})
song17 = Song.create!({title: "Old Town Lamp(remix2)", artist: "Too Many Moths to Feed(feat. Daddy SongLegs)"})
song18 = Song.create!({title: "Old Town Lamp(remix3)", artist: "Too Many Moths to Feed(feat. The Buzz)"})
song19 = Song.create!({title: "Old Town Lamp(remix4)", artist: "Too Many Moths to Feed(feat. Mo Skeet0 and Daddy SongLegs)"})

playlist1 = user1.playlists.create!({title: "XO-skeletons in my closet", private: true, description: "Favorite XO-Skeltons songs"})
playlist2 = user1.playlists.create!({title: "Mantis Te'ouch", private: false, description: "Goth-christian-rock"})
playlist3 = user3.playlists.create!({title: "The Dung-Beetles greatest hits", private: false, description: "Best Dung-beetle songs"})

playlist4 = user1.playlists.create!({title: "Mo Skeet0", private: true, description: "Mo Skeet0 songs"})
playlist5 = user1.playlists.create!({title: "The Buzz", private: false, description: "The Buzz songs"})
playlist6 = user2.playlists.create!({title: "Daddy SongLegs greatest hits", private: false, description: "Daddy SongLegs songs"})

playlist7 = user1.playlists.create!({title: "Buzz", private: true, description: "Buzzzzzzzzzz"}) #like 5 buzzz songs
playlist8 = user1.playlists.create!({title: "8 Legs, 3 songs", private: false, description: "Daddy SongLegs songs"})
playlist9 = user1.playlists.create!({title: "Too Many Moths to Feed greatest hits", private: false, description: "Too Many Moths to Feed songs"})

playlist10 = user1.playlists.create!({title: "Lamp", private: true, description: "Lamp"})
playlist11 = user1.playlists.create!({title: "Lamp", private: false, description: "Lamp"})
playlist12 = user1.playlists.create!({title: "Lamp", private: false, description: "Lamp"})



playlistSong1 = playlist1.playlist_songs.create!({song_id: song1.id})
playlistSong2 = playlist1.playlist_songs.create!({song_id: song3.id})
playlistSong3 = playlist1.playlist_songs.create!({song_id: song5.id})


playlistSong4 = playlist2.playlist_songs.create!({song_id: song2.id})
playlistSong5 = playlist2.playlist_songs.create!({song_id: song3.id})

playlistSong6 = playlist3.playlist_songs.create!({song_id: song4.id})
playlistSong7 = playlist3.playlist_songs.create!({song_id: song5.id})


playlistSong8 = playlist10.playlist_songs.create!({song_id: song15.id})
playlistSong9 = playlist10.playlist_songs.create!({song_id: song16.id})
playlistSong10 = playlist10.playlist_songs.create!({song_id: song17.id})
playlistSong11 = playlist10.playlist_songs.create!({song_id: song18.id})
playlistSong12 = playlist10.playlist_songs.create!({song_id: song19.id})

playlistSong13 = playlist11.playlist_songs.create!({song_id: song15.id})
playlistSong14 = playlist11.playlist_songs.create!({song_id: song16.id})
playlistSong15 = playlist11.playlist_songs.create!({song_id: song17.id})
playlistSong16 = playlist11.playlist_songs.create!({song_id: song18.id})
playlistSong17 = playlist11.playlist_songs.create!({song_id: song19.id})

playlistSong18 = playlist12.playlist_songs.create!({song_id: song15.id})
playlistSong19 = playlist12.playlist_songs.create!({song_id: song16.id})
playlistSong20 = playlist12.playlist_songs.create!({song_id: song17.id})
playlistSong21 = playlist12.playlist_songs.create!({song_id: song18.id})
playlistSong22 = playlist12.playlist_songs.create!({song_id: song19.id})

playlistSong23 = playlist9.playlist_songs.create!({song_id: song14.id})
playlistSong24 = playlist9.playlist_songs.create!({song_id: song15.id})

playlistSong25 = playlist6.playlist_songs.create!({song_id: song11.id})
playlistSong26 = playlist6.playlist_songs.create!({song_id: song12.id})
playlistSong27 = playlist6.playlist_songs.create!({song_id: song13.id})

playlistSong28 = playlist8.playlist_songs.create!({song_id: song11.id})
playlistSong29 = playlist8.playlist_songs.create!({song_id: song12.id})
playlistSong30 = playlist8.playlist_songs.create!({song_id: song13.id})

playlistSong31 = playlist7.playlist_songs.create!({song_id: song8.id})
playlistSong32 = playlist7.playlist_songs.create!({song_id: song8.id})
playlistSong33 = playlist7.playlist_songs.create!({song_id: song8.id})
playlistSong34 = playlist7.playlist_songs.create!({song_id: song8.id})
playlistSong35 = playlist7.playlist_songs.create!({song_id: song8.id})

playlistSong36 = playlist5.playlist_songs.create!({song_id: song8.id})
playlistSong37 = playlist5.playlist_songs.create!({song_id: song9.id})
playlistSong38 = playlist5.playlist_songs.create!({song_id: song10.id})

playlistSong39 = playlist5.playlist_songs.create!({song_id: song6.id})
playlistSong40 = playlist5.playlist_songs.create!({song_id: song7.id})