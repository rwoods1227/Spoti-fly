# == Schema Information
#
# Table name: playlists
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  songlist    :text             default("{}"), is an Array
#  private     :boolean          default("true")
#  description :string
#  author_id   :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Playlist < ApplicationRecord
  validates :title, :songlist presence: true
  validates :description, length: {maximum: 150}

   belongs_to :author,
    class_name: "User",
    primary_key: :id,
    foreign_key: :author_id
end
