require 'rails_helper'

RSpec.describe Api::V1::CampgroundsController, type: :controller do
  let!(:campground_1) { Campground.create(
    name: 'Forked Lake Campground',  
    description: 'Nice campground on lake',
    location: 'New York',
    amenities: 'Dogs allowed'
  )}
  let!(:campground_2) { Campground.create(
    name: 'Little River State Park', 
    description: 'Well maintained campground in Vermont.',
    location: 'Vermont',
    amenities: 'Dogs allowed'
  )}

  let!(:user_1) { User.create(
    first_name: 'Kylo', 
    last_name: 'Ren', 
    email: 'kyloren@gmail.com', 
    username: 'sad_boi', 
    password: 'password'
  )}
  
  let!(:user_2) { User.create(
    first_name: 'Buffy', 
    last_name: 'Summer', 
    email: 'buffy@gmail.com', 
    username: 'og_slayer', 
    password: 'password'
  )}

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
        expect(response.content_type).to eq 'application/json'
    end

    it 'should return the campground names, descriptions, locations and amentities from the database' do
      get :index 
        returned_response = JSON.parse(response.body)
        expect(returned_response.length).to eq 2
        
        expect(returned_response[0]['name']).to eq campground_1.name
        expect(returned_response[0]['description']).to eq campground_1.description
        expect(returned_response[0]['location']).to eq campground_1.location
        expect(returned_response[0]['amenities']).to eq campground_1.amenities
        expect(returned_response[1]['name']).to eq campground_2.name
        expect(returned_response[1]['description']).to eq campground_2.description
        expect(returned_response[1]['location']).to eq campground_2.location
        expect(returned_response[1]['amenities']).to eq campground_2.amenities
      end
    end
    
    describe 'GET#campground' do
    it 'should return the name, description, location, amenities, and reviews of an individual campground on its own show page' do
      get :show, params: {id: campground_1.id}
      returned_response = JSON.parse(response.body)
      
      expect(response.status).to eq 200
      expect(response.content_type).to eq 'application/json'

      expect(returned_response['name']).to eq campground_1.name
      expect(returned_response['description']).to eq campground_1.description
      expect(returned_response['location']).to eq campground_1.location
      expect(returned_response['amenities']).to eq campground_1.amenities

      expect(returned_response['reviews'][0]['title']).to eq campground_1.reviews[0]['title']
      expect(returned_response['reviews'][0]['body']).to eq campground_1.reviews[0]['body']
      expect(returned_response['reviews'][0]['rating']).to eq campground_1.reviews[0]['rating']
    end
  end
end
