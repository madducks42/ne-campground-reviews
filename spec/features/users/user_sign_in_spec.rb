require 'rails_helper'

feature 'user signs in', %Q{
  As an unauthenticated user
  I want to sign in
  So I can access my profile and additional features
} do

  scenario 'user attempts to sign in with correct credentials' do
    user = FactoryBot.create(:user_1)
    visit new_user_session_path
    fill_in 'Email', with: user.email
    fill_in 'Password', with: user.password
    click_button 'Log in'
    expect(page).to have_content('Signed in successfully')
  end

  scenario 'user attempts to sign in with incorrect credentials' do
    user = FactoryBot.create(:user_1)
    visit new_user_session_path
    fill_in 'Email', with: user.email
    fill_in 'Password', with: "wrongpass"
    click_button 'Log in'
    expect(page).to have_content('Invalid Email or password')
  end
end



# require 'rails_helper'

# describe "the signin process", type: :feature do
#   # before :each do
#     user = FactoryBot.create(:user_1)
#   # end
  
#   it "signs me in" do
#     visit '/d/users/sign_in'
#     # binding.pry
#     # within("#new_user") do
#       fill_in 'user_email', with: user.email
#       fill_in 'user_password', with: user.password
#     # end
#     # save_and_open_page
#     click_button 'Log in'
#     expect(page).to have_content 'Signed in successfully'
#   end

# end