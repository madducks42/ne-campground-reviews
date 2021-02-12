FactoryBot.define do
  # campground_1
  factory :campground_1, class: Campground do
    name { "Forked Lake Campground" }
    caption { "Rustic and remote campground. Almost all sites directly on lake. Many boat-in only." }
    description { "Nice campground" }
    location { "New York" }
    zip_code { "12847" } 
    campground_link { "https://www.dec.ny.gov/outdoor/24467.html" }
    dogs_allowed { true }
    electric_hookups { false }
    water_hookups { false }
    potable_water { true }
    dump_station { false }
    bathrooms { true }
    showers { false }
  end

  # campground_2
  factory :campground_2, class: Campground do
    name { "Little River State Park" }
    caption { "Nice campground" }
    description { "Well maintained campground in Vermont." }
    location { "Vermont" }
    zip_code { "49820" } 
    campground_link { "https://www.dec.ny.gov/outdoor/24467.html" }
    dogs_allowed { true }
    electric_hookups { true }
    water_hookups { false }
    potable_water { true }
    dump_station { true }
    bathrooms { true }
    showers { false }
  end

end

