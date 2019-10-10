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
end
