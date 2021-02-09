# require 'rails_helper'

# feature "Signing in" do
#   background do
#     User.make(email: 'user@example.com', password: 'caplin')
#   end

#   scenario "Signing in with correct credentials" do
#     visit '/sessions/new'
#     within("#session") do
#       fill_in 'Email', with: 'user@example.com'
#       fill_in 'Password', with: 'caplin'
#     end
#     click_button 'Sign in'
#     expect(page).to have_content 'Success'
#   end

  # given(:other_user) { User.make(email: 'other@example.com', password: 'rous') }

  # scenario "Signing in as another user" do
  #   visit '/sessions/new'
  #   within("#session") do
  #     fill_in 'Email', with: other_user.email
  #     fill_in 'Password', with: other_user.password
  #   end
  #   click_button 'Sign in'
  #   expect(page).to have_content 'Invalid email or password'
  # end
# end

# feature 'user signs in', %Q{
#   As a signed up user
#   I want to sign in
#   So that I can regain access to my account
# } do
#   scenario 'specify valid credentials' do
#     let!(:user) {FactoryBot.build(:user_1)}
#     # binding.pry

#     visit new_user_session_path

#     fill_in 'Email', with: user.email
#     fill_in 'Password', with: user.password

#     click_button 'Log in'

#     expect(page).to have_content('Signed in successfully')
#     expect(page).to have_content('Sign Out')
#   end

#   scenario 'specify invalid credentials' do
#     visit new_user_session_path

#     click_button 'Log in'
#     expect(page).to have_content('Invalid Email or password')
#     expect(page).to_not have_content('Sign Out')
#   end
# end

# describe "the signin process", type: :feature do
#   let!(:user) {FactoryBot.build(:user_1)}
#   # before :each do
#   #   let!(:user) {FactoryBot.build(:user_1)}
#   #   user.confirm!
#   # end
#   binding.pry
#   context "signs me in" do
#     visit 'new_user_session_path'
#     within("#session") do
#       fill_in 'Email', with: user.email
#       fill_in 'Password', with: user.password
#     end
#     click_button 'Sign in'
#     expect(page).to have_content 'Signed in successfully'
#   end
# end

# RSpec.describe "sign in" do
#   context "successfully signs in the user" do
#     user = FactoryBot.create(:user_1)
#     user.confirm!
#     puts user
#   end
# end
