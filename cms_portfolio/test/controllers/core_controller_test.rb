require 'test_helper'

class CoreControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get core_index_url
    assert_response :success
  end

  test "should get projects" do
    get core_projects_url
    assert_response :success
  end

  test "should get getmessenger" do
    get core_getmessenger_url
    assert_response :success
  end

end
