require 'faker'

FactoryBot.define do
  # user_1 - member
  factory :user_1, class: User do
    first_name { "Kylo" } 
    last_name { "Ren " }
    email { Faker::Internet.safe_email }
    username { "sad_boi" }
    password { "Password@1" }
    password_confirmation { "Password@1" }
    role { "member" }
    confirmed_at { Time.now }
  end

   # user_2 - admin
   factory :user_2, class: User do
    first_name { "Buffy" }
    last_name { "Summers" }
    email { "thechosenone@gmail.com" }
    username { "og_slayer" }
    password { "Password@1" }
    password_confirmation { "Password@1" }
    role { "admin" }
    confirmed_at { Time.now }
  end
end