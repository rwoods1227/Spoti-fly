# == Schema Information
#
# Table name: playlist_songs
#
#  id          :integer          not null, primary key
#  song_id     :integer          not null
#  playlist_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class PlaylistSong < ApplicationRecord

  belongs_to :playlist,
  class_name: :Playlist,
  foreign_key: :playlist_id


  belongs_to :song,
  class_name: :Song,
  foreign_key: :song_id


  
end
