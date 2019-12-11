class CreatePlaylists < ActiveRecord::Migration[5.2]
  def change
    create_table :playlists do |t|
      t.string :title, null: false
      t.text :songlist, array: true, default: [] 
      t.boolean :private, default: true 
      t.string :description 
      t.integer :author_id, null: false 
      t.timestamps
    end
    add_index(:playlists, :author_id)
  end
end
