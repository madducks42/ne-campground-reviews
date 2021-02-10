FactoryBot.define do

  # review_1
  factory :review_1, class: Review do
    title { "Not bad" }
    body { "Overall okay campground." }
    rating { 4 } 
    association :user, factory: :user_2
    association :campground, factory: :campground_1
  end

   # review_2
   factory :review_2, class: Review do
    title { "Awesome campground" }
    body { "Really enjoyed our stay! Campground was super clean and well-maintained!" }
    rating { 5 } 
    association :user, factory: :user_1
    association :campground, factory: :campground_2
  end

end


  