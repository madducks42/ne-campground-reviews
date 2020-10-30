require 'factory_bot'

FactoryBot.define do
  factory :user do
    sequence(:username) {|n| "username#{n}"}
    sequence(:first_name) {|n| "firstname#{n}"}
    sequence(:last_name) {|n| "lastname#{n}"}
    sequence(:email) {|n| "user#{n}@example.com" }
    password { 'password' }
    password_confirmation { 'password' }
  end

end