# require 'rails_helper'

# RSpec.describe Api::V1::CampgroundsController, type: :controller do
#   let!(:campground_1) { Campground.create(
#   name: 'Forked Lake Campground', 
#   caption: 'Rustic and remote campground. Almost all sites directly on lake. Many boat-in only.',
#   description: "Nice campground",
#   location: 'New York',
#   zip_code: '12847', 
#   campground_link: 'https://www.dec.ny.gov/outdoor/24467.html',
#   dogs_allowed: true,
#   electric_hookups: false,
#   water_hookups: false,
#   potable_water: true,
#   dump_station: false,
#   bathrooms: true,
#   showers: false
#   )}
#   let!(:campground_2) { Campground.create(
#     name: 'Little River State Park',
#     caption: 'Nice campground', 
#     description: 'Well maintained campground in Vermont.',
#     location: 'Vermont',
#     zip_code: '05676',
#     campground_link: 'https://www.dec.ny.gov/outdoor/24467.html',
#     dogs_allowed: true,
#     electric_hookups: false,
#     water_hookups: false,
#     potable_water: true,
#     dump_station: false,
#     bathrooms: true,
#     showers: true
#   )}

#   let!(:user_1) { User.create(
#     first_name: 'Kylo', 
#     last_name: 'Ren', 
#     email: 'kyloren@gmail.com', 
#     username: 'sad_boi', 
#     password: 'password',
#     role: 'member'
#   )}
  
#   let!(:user_2) { User.create(
#     first_name: 'Buffy', 
#     last_name: 'Summer', 
#     email: 'buffy@gmail.com', 
#     username: 'og_slayer', 
#     password: 'password',
#     role: 'admin'
#   )}

#   let!(:review_1) { Review.create(
#     title: 'Not bad', 
#     body: 'Overall okay campground.', 
#     rating: 4, 
#     campground: campground_1, 
#     user: user_2 
#   )}

#   let!(:review_2) { Review.create(
#     title: 'Awesome campground', 
#     body: 'Really enjoyed our stay! Campground was super clean and well-maintained!', 
#     rating: 5, 
#     campground: campground_2, 
#     user: user_1 
#   )}
  
#   describe 'GET#index' do
#     it 'return a successful status and content type of json' do
#       get :index
#         expect(response.status).to eq 200
#         expect(response.content_type).to eq 'application/json'
#     end

#     it 'should return the campground names, descriptions, locations and amentities from the database' do
#       get :index 
#         returned_response = JSON.parse(response.body)
#         expect(returned_response.length).to eq 2
        
#         expect(returned_response[0]['name']).to eq campground_1.name
#         expect(returned_response[0]['caption']).to eq campground_1.caption
#         expect(returned_response[0]['location']).to eq campground_1.location
#         expect(returned_response[1]['name']).to eq campground_2.name
#         expect(returned_response[1]['caption']).to eq campground_2.caption
#         expect(returned_response[1]['location']).to eq campground_2.location
#       end
#     end
    
#     describe 'GET#campground' do
#     it 'should return the name, description, location, amenities, and reviews of an individual campground on its own show page' do
#       get :show, params: {id: campground_1.id}
#       returned_response = JSON.parse(response.body)
      
#       expect(response.status).to eq 200
#       expect(response.content_type).to eq 'application/json'

#       expect(returned_response['name']).to eq campground_1.name
#       expect(returned_response['description']).to eq campground_1.description
#       expect(returned_response['location']).to eq campground_1.location
#       expect(returned_response['zip_code']).to eq campground_1.zip_code
#       expect(returned_response['dogs_allowed']).to eq campground_1.dogs_allowed
#       expect(returned_response['electric_hookups']).to eq campground_1.electric_hookups
#       expect(returned_response['water_hookups']).to eq campground_1.water_hookups
#       expect(returned_response['potable_water']).to eq campground_1.potable_water
#       expect(returned_response['dump_station']).to eq campground_1.dump_station
#       expect(returned_response['bathrooms']).to eq campground_1.bathrooms
#       expect(returned_response['showers']).to eq campground_1.showers

#       expect(returned_response['reviews'][0]['title']).to eq campground_1.reviews[0]['title']
#       expect(returned_response['reviews'][0]['body']).to eq campground_1.reviews[0]['body']
#       expect(returned_response['reviews'][0]['rating']).to eq campground_1.reviews[0]['rating']
#     end
#   end
# end
