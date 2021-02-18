require 'rails_helper'

RSpec.describe Api::V1::CampgroundsController, type: :controller do

  let!(:campground_data) { { campground: {
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

  let(:user) { FactoryBot.create :user_2 }
  
  describe 'POST#create' do

    it "admin should be able to create new campgrounds" do
      sign_in user

      before_count = Campground.count
      post :create, params: campground_data, format: JSON
      after_count = Campground.count

      expect(after_count).to eq(before_count + 1)
    end 
  end
end