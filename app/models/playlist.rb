# == Schema Information
#
# Table name: playlists
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  private     :boolean          default("true")
#  description :string
#  author_id   :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Playlist < ApplicationRecord
  validates :title, presence: true
  validates :description, length: {maximum: 150}

   belongs_to :author,
    class_name: :User,
    primary_key: :id,
    foreign_key: :author_id

    has_many :playlist_songs,
    class_name: :PlaylistSong,
    primary_key: :id,
    foreign_key: :playlist_id

    has_many :songs,
    through: :playlist_songs,
    source: :song

end
