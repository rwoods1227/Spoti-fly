# == Schema Information
#
# Table name: songs
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  artist     :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Song < ApplicationRecord

   validates :title, :artist, presence: true


    has_many :playlist_songs,
    class_name: :PlaylistSong,
    primary_key: :id,
    foreign_key: :song_id

    has_many :playlists, 
    through: :playlist_songs,
    source: :playlist
end
