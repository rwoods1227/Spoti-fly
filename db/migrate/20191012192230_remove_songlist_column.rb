class RemoveSonglistColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :playlists, :songlist
  end
end
