class Api::PlaylistsController < ApplicationController
  def create
    @playlist = Playlist.new(playlist_params)
    if @playlist.save
      login!(@playlist)
      render :show
    else
      render json: @playlist.errors.full_messages, status: 401
    end
  end

  def show
    @playlist = selected_playlist
  end
  
  def index
    @playlists = Playlist.all
  end

  def destroy
    @playlist = selected_playlist
    if @playlist
      @playlist.destroy
      render :show
    else
      render ['Could not find playlist']
    end
  end

  def update
  end

  private 
  def selected_playlist
    Playlist.find(params[:id])
  end
  
  def playlist_params
    params.require(:playlist).permit(:title, :songlist, :private, :description, :author_id)
  end

end


  

  