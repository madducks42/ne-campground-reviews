require 'rails_helper'

RSpec.describe Api::V1::CampgroundsController, type: :controller do

  let!(:campground_good_data) { { campground: {
    name: "Forked Lake Campground",
    caption: "Rustic and remote campground. Almost all sites directly on lake. Many boat-in only.",
    description: "Nice campground",
    location: "New York",
    zip_code: "12847", 
    campground_link: "https://www.dec.ny.gov/outdoor/24467.html",
    dogs_allowed: true,
    electric_hookups: false,
    water_hookups: false,
    potable_water: true,
    dump_station: false,
    bathrooms: true,
    showers: false
  } } }

  let!(:campground_bad_data) { { campground: {
    name: "Forked Lake Campground",
    caption: "Rustic and remote campground. Almost all sites directly on lake. Many boat-in only.",
    description: "Nice campground",
    zip_code: "12847", 
    campground_link: "https://www.dec.ny.gov/outdoor/24467.html",
    dogs_allowed: true,
    electric_hookups: false,
    water_hookups: false,
    dump_station: false,
    bathrooms: true,
    showers: false
  } } }

  let(:user) { FactoryBot.create :user_2 }
  
  describe 'POST#create' do

    it "allows admins to create new campgrounds when good data is given" do
      sign_in user
      before_count = Campground.count
      post :create, params: campground_good_data, format: JSON
      after_count = Campground.count

      expect(after_count).to eq(before_count + 1)
    end
    
    it "returns the new campground as json" do
      sign_in user
      before_count = Campground.count
      post :create, params: campground_good_data, format: JSON
      api_response = JSON.parse(response.body)

      expect(api_response["name"].length).to eq 22
      expect(api_response["caption"].length).to eq 83
      expect(api_response["location"].length).to eq 8
    
    end

    it "does not allow admins to create new campgrounds when bad data is given" do
      sign_in user
      before_count = Campground.count
      post :create, params: campground_bad_data, format: JSON
      after_count = Campground.count

      expect(after_count).to eq(before_count)
    end

  end
end