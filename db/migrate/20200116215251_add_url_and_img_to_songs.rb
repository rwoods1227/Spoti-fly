class AddUrlAndImgToSongs < ActiveRecord::Migration[5.2]
  def change
    add_column :songs, :src, :string
    add_column :songs, :img, :string
  end
end
