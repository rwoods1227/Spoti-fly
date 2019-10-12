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

user1 = User.create!({ username: "hunter4", email: "hunter4@aol.com", password: "123456" })
user2 = User.create!({ username: "hunter5", email: "hunter5@aol.com", password: "123456" })
user3 = User.create!({ username: "hunter6", email: "hunter6@aol.com", password: "123456" })

song1 = Song.create!({title: "Love Bug", artist: "XO-skeletons"})
song2 = Song.create!({title: "He Died for Us", artist: "Praying-Mantises"})
song3 = Song.create!({title: "Femme Fatale", artist: "Praying-Mantises"})
song4 = Song.create!({title: "Here Comes the Dung", artist: "The Dung-Beetles"})
song5 = Song.create!({title: "Let it Roll", artist: "The Dung-Beetles"})

playlist1 = user1.playlists.create!({title: "XO-skeletons in my closet", private: true, description: "Favorite XO-Skeltons song"})
playlist2 = user1.playlists.create!({title: "Mantis Te'ouch", private: false, description: "Goth-christian-rock"})
playlist3 = user3.playlists.create!({title: "The Dung-Beetles greatest hits", private: false, description: "Best Dung-beetle songs"})

playlistSong1 = playlist1.playlist_songs.create!({song_id: song1.id})
playlistSong2 = playlist1.playlist_songs.create!({song_id: song3.id})
playlistSong3 = playlist1.playlist_songs.create!({song_id: song5.id})


playlistSong4 = playlist2.playlist_songs.create!({song_id: song2.id})
playlistSong5 = playlist2.playlist_songs.create!({song_id: song3.id})

playlistSong6 = playlist3.playlist_songs.create!({song_id: song4.id})
playlistSong7 = playlist3.playlist_songs.create!({song_id: song5.id})

#nope wrong