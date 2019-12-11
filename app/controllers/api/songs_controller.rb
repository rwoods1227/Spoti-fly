#require "byebug"

class Api::SongsController < ApplicationController
  def show
    @song = Song.find(params[:id])
  end
  
  def index
    if params[:artist]
      @songs = Song.where(artist: params[:artist])
    elsif params[:title]
      @songs = Song.where(title: params[:title])
    else
      @songs = Song.all
    end
  end
end
