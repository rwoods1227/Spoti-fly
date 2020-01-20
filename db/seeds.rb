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

song1 = Song.create!({title: "Love Bug", artist: "XO-skeletons", src:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/Underpolen_Netlabel/Jan_Strach/OOS/Jan_Strach_-_06_-_Xobe_Y_Na_Oxyb.mp3", img:"https://i.imgur.com/gY6stzR.jpg"})
song2 = Song.create!({title: "He Died for Us", artist: "Praying-Mantises", src:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/Netlabelism_Magazine/Man_Mantis/netlabelismcom_-_Compilation_0311/Man_Mantis_-_04_-_Teacups_of_Our_Ashes.mp3", img:"https://i.imgur.com/bZ28URL.jpg"})
song3 = Song.create!({title: "Femme Fatale", artist: "Praying-Mantises", src:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/Decoder_Magazine/Lately_Kind_of_Yeah/Veldt/Lately_Kind_of_Yeah_-_02_-_SMantis.mp3", img:"https://i.imgur.com/bZ28URL.jpg"})
song4 = Song.create!({title: "Here Comes the Dung", artist: "The Dung-Beetles", src:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/WFMU/Nicky_Andrews/Realistic_Psychosis/Nicky_Andrews_-_04_-_Stag_Beetles.mp3", img:"https://i.imgur.com/We4wCYY.jpg"})
song5 = Song.create!({title: "Let it Roll", artist: "The Dung-Beetles", src:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Diamond_Cuts/Best_Bytes_Volume_3/Diamond_Cuts_-_03_-_Beetlework.mp3", img:"https://i.imgur.com/We4wCYY.jpg"})

song6 = Song.create!({title: "Skeet-Skeet", artist: "Mo Skeet0", src:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/Music_for_Video/Alpha_Hydrae/uu_/Alpha_Hydrae_-_02_-_Mosquito_into_your_brain.mp3", img:"https://i.imgur.com/hN10ptQ.jpg"})
song7 = Song.create!({title: "One Day, One Life", artist: "Mo Skeet0", src:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/WFMU/Glove_Compartment/New_Numbers/Glove_Compartment_-_10_-_Im_a_Mosquito.mp3", img:"https://i.imgur.com/hN10ptQ.jpg"})
song8 = Song.create!({title: "Buzzzzzz", artist: "The Buzz", src:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Manta_Espectra/Live_in_LA_OBRA_-_REMEMBER_THE_PLACES/Manta_Espectra_-_02_-_pulses_by_bugs.mp3", img:"https://i.imgur.com/BP2YQDK.jpg"})
song9 = Song.create!({title: "Hive-Mine", artist: "The Buzz", src:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Manta_Espectra/Live_in_LA_OBRA_-_REMEMBER_THE_PLACES/Manta_Espectra_-_03_-_pulses_by_bugs2.mp3", img:"https://i.imgur.com/BP2YQDK.jpg"})
song10 = Song.create!({title: "Droning on and on", artist: "The Buzz", src:"https://archive.org/details/MicromusicCoucou021-90sChiptuneCoversCompilation/BonustrackB.Buskerdroid-BornSlippyByUnderworld.mp3", img:"https://i.imgur.com/BP2YQDK.jpg"})

song11 = Song.create!({title: "Spied on Her", artist: "Daddy SongLegs", src:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/WFMU/Spider_Bags/Live_on_WFMU_with_Todd-o-phonic_Todd_June_13_2015/Spider_Bags_-_04_-_Cop_Dream_Black_Eye__The_Bottle.mp3", img:"https://i.imgur.com/6Jf7ehr.jpg"})
song12 = Song.create!({title: "Web of Lies", artist: "Daddy SongLegs", src:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/WFMU/Spider_Bags/Live_on_WFMU_with_Todd-o-phonic_Todd_June_13_2015/Spider_Bags_-_05_-_Shadow_Man.mp3", img:"https://i.imgur.com/6Jf7ehr.jpg"})
song13 = Song.create!({title: "A Rack Need (aka Alcoholic's Demise)", artist: "Daddy SongLegs", src:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/WFMU/Spider_Bags/Live_on_WFMU_with_Todd-o-phonic_Todd_June_13_2015/Spider_Bags_-_02_-_Japanese_Vacation.mp3", img:"https://i.imgur.com/6Jf7ehr.jpg"})

song14 = Song.create!({title: "Moth on Fire", artist: "Too Many Moths to Feed", src:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/Murmure_Intemporel/Humanfobia/Witch_Spell/Humanfobia_-_03_-_Witch_Spell_II_-_Bats__Spiders.mp3", img:"https://i.imgur.com/bTSzB6L.jpg"})
song15 = Song.create!({title: "Old Town Lamp", artist: "Too Many Moths to Feed", src:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/KBOO/MothAbusive_Consumer/UnHerd_Archive/MothAbusive_Consumer_-_02_-_UnHerd_2_Moth_Abusive_Consumer.mp3", img:"https://i.imgur.com/bTSzB6L.jpg"})
song16 = Song.create!({title: "Old Town Lamp(remix1)", artist: "Too Many Moths to Feed(feat. Mo Skeet0)", src:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/Spleen_Coffin/Mother_Orchid/Spleencoffin_presents_Ladyz_in_Noyz/Mother_Orchid_-_08_-_Aardvark.mp3", img:"https://i.imgur.com/bTSzB6L.jpg"})
song17 = Song.create!({title: "Old Town Lamp(remix2)", artist: "Too Many Moths to Feed(feat. Daddy SongLegs)", src:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Mothcock/Mothcock_c20/Mothcock_-_Side_A_excerpt.mp3", img:"https://i.imgur.com/bTSzB6L.jpg"})
song18 = Song.create!({title: "Old Town Lamp(remix3)", artist: "Too Many Moths to Feed(feat. The Buzz)", src:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Mothboy/501_An_Electronic_Swindle/Mothboy_-_20_-_Rexy.mp3", img:"https://i.imgur.com/bTSzB6L.jpg"})
song19 = Song.create!({title: "Old Town Lamp(remix4)", artist: "Too Many Moths to Feed(feat. TMMtF)", src:"https://archive.org/details/Sueos_850/Gecko-Sueos-Satelite.mp3", img:"https://i.imgur.com/bTSzB6L.jpg"})

playlist1 = user1.playlists.create!({title: "XO-skeletons in my closet", private: true, description: "Favorite XO-Skeltons songs"})
playlist2 = user1.playlists.create!({title: "Mantis Te'ouch", private: false, description: "Goth-christian-rock"})
playlist3 = user3.playlists.create!({title: "The Dung-Beetles greatest hits", private: false, description: "Best Dung-beetle songs"})

playlist4 = user1.playlists.create!({title: "Mo Skeet0", private: true, description: "Mo Skeet0 songs"})
playlist5 = user1.playlists.create!({title: "The Buzz", private: false, description: "The Buzz songs"})
playlist6 = user2.playlists.create!({title: "Daddy SongLegs greatest hits", private: false, description: "Daddy SongLegs songs"})

playlist7 = user1.playlists.create!({title: "Buzz", private: true, description: "Buzzzzzzzzzz"}) #like 5 buzzz songs
playlist8 = user1.playlists.create!({title: "8 Legs, 3 songs", private: false, description: "Daddy SongLegs songs"})
playlist9 = user1.playlists.create!({title: "TMMtF greatest hits", private: false, description: "Too Many Moths to Feed songs"})

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