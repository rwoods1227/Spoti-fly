class Api::PlaylistsController < ApplicationController
  def create
    @playlist = Playlist.new(playlist_params)
    if @playlist.save
      render :show
    else
      render json: @playlist.errors.full_messages, status: 401
    end
  end

 #add song
 #custom route 
 

  def show
    @playlist = selected_playlist
  end
  
  def index
    if params[:author_id]
      @playlists = Playlist.where(author_id: params[:author_id])
    elsif params[:title]
      @playlists = Playlist.where(title: params[:title])
    else
      @playlists = Playlist.all
    end

    #private isnt something I can search for, maybe be able to search for association of songs but later
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
    @playlist = selected_playlist
    @playlist.update_attributes(playlist_params)
    render :show
    # if there is an error this may be wrong
  end


 
  private 
  def selected_playlist
    Playlist.find(params[:id])
  end
  
  def playlist_params
    params.require(:playlist).permit(:title, :private, :description, :author_id)
  end

  #having issues with strong params so removing for now
end


  

  