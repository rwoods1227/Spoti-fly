require 'test_helper'

class Api::PlaylistSongsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_playlist_songs_create_url
    assert_response :success
  end

  test "should get delete" do
    get api_playlist_songs_delete_url
    assert_response :success
  end

end
