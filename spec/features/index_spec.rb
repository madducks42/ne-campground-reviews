require 'rails_helper'

RSpec.describe 'Index page has' do
  it 'displays the nav bar' do
    visit('/campgrounds')
    except(page).to have_content('Menu')
  end
end