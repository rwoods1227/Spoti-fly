class Api::PlaylistSongsController < ApplicationController
  
    def create
    @playlist_song = PlaylistSong.new(playlist_song_params)
    if @playlist_song.save
      render :show
    else
      render json: @playlist_song.errors.full_messages, status: 401
    end
  end

 #add song
 #custom route 
 

  def show
    @playlist_song = selected_playlist_song
  end
  
  # def index
  #   if params[:song_id]
  #     @playlist_songs = PlaylistSong.where(author_id: params[:author_id])
  #   elsif params[:playlist_id]
  #     @playlist_songs = PlaylistSong.where(title: params[:title])
  #   else
  #     @playlist_songs = PlaylistSong.all
  #   end

  #   #private isnt something I can search for, maybe be able to search for association of songs but later
  # end

  def destroy
    @playlist_song = selected_playlist_song
    if @playlist_song
      @playlist_song.destroy
      render :show
    else
      render ['Could not find playlist_song']
    end
  end


 
  private 
  def selected_playlist_song
    PlaylistSong.find(params[:id])
  end
  
  def playlist_song_params
    params.require(:playlist_song).permit(:song_id, :playlist_id)
  end

end

