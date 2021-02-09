require "factory_bot"

FactoryBot.define do
  # user_1
  factory :user_1, class: User do
    first_name { "Kylo" } 
    last_name { "Ren " }
    email { "sad_boi_6@example.com" }
    username { "sad_boi" }
    password { "password" }
    role { "member" }
  end

  # user_2
  factory :user_2, class: User do
    first_name { "Buffy" }
    last_name { "Summers" }
    email { "thechosenone@gmail.com" }
    username { "og_slayer" }
    password { "password" }
    role { "admin" }
  end

  # campground_1
  # factory :campground_1, class: Campground do
  #   name { "Forked Lake Campground" }
  #   caption { "Rustic and remote campground. Almost all sites directly on lake. Many boat-in only." }
  #   description { "Nice campground" }
  #   location { "New York" }
  #   zip_code { "12847" }
  #   campground_link { "https://www.dec.ny.gov/outdoor/24467.html" }
  #   dogs_allowed { true }
  #   electric_hookups { false }
  #   water_hookups { false }
  #   potable_water { true }
  #   dump_station { false }
  #   bathrooms { true }
  #   showers { false }
  # end

  # campground_2
  # factory :campground_2, class: Campground do
  #   name { "Little River State Park" }
  #   caption { "Nice campground" }
  #   description { "Well maintained campground in Vermont." }
  #   location { "Vermont" }
  #   zip_code { "05676" }
  #   campground_link { "https://www.dec.ny.gov/outdoor/24467.html" }
  #   dogs_allowed { true }
  #   electric_hookups { false }
  #   water_hookups { false }
  #   potable_water { true }
  #   dump_station { false }
  #   bathrooms { true }
  #   showers { true }
  # end

  # review_1
  # factory :review_1, class: Review do
  #   title { "Not bad" }
  #   body { "Overall okay campground." }
  #   rating { 4 }
  #   campground { campground_1 }
  #   user { user_2 }
  # end

  # review_2
  # factory :review_2, class: Review do
  #   title { "Awesome campground" }
  #   body { "Really enjoyed our stay! Campground was super clean and well-maintained!" }
  #   rating { 5 }
  #   campground { campground_2 }
  #   user { user_1 }
  # end

end
