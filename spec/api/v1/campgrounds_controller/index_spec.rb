require 'rails_helper'

RSpec.describe Api::V1::CampgroundsController, type: :controller do
  let(:campground_1) { FactoryBot.create :campground_1 }
  let(:campground_2) { FactoryBot.create :campground_2 }

  let(:user_1) { FactoryBot.create :user_1 }
  let(:user_2) { FactoryBot.create :user_2 }

  let!(:review_1) { Review.create(
    title: 'Not bad', 
    body: 'Overall okay campground.', 
    rating: 4, 
    campground: campground_1, 
    user: user_2 
  )}

  let!(:review_2) { Review.create(
    title: 'Awesome campground', 
    body: 'Really enjoyed our stay! Campground was super clean and well-maintained!', 
    rating: 5, 
    campground: campground_2, 
    user: user_1 
  )}
  
  describe 'GET#index' do
    it 'return a successful status and content type of json' do
      get :index

      expect(response.status).to eq 200
      expect(response.content_type).to eq 'application/json; charset=utf-8'
    end

    it 'should return the campground names, descriptions, locations and amentities from the database' do
      get :index 

      returned_response = JSON.parse(response.body)
      expect(returned_response.length).to eq 2
      
      expect(returned_response[0]['name']).to eq campground_1.name
      expect(returned_response[0]['caption']).to eq campground_1.caption
      expect(returned_response[0]['location']).to eq campground_1.location
      expect(returned_response[1]['name']).to eq campground_2.name
      expect(returned_response[1]['caption']).to eq campground_2.caption
      expect(returned_response[1]['location']).to eq campground_2.location
    end
  end

end