# NE CAMPGROUND REVIEWS

NE Campground Reviews is a review application that provides information and reviews for campground around the Northeast. Non-authenticated users can browse the app as well as search/filter for campgrounds. Authenticated users have the ability to leave reviews on campgrounds they've been to as well as mark campgrounds as favorites. Authenticated users can access their profile and see a list of all their favorite campgrounds as well as reviews they've left.

Devise was used to handle user authentication and authorization. By default all users get a role of "member". There is also an "admin" role that gives users additional abilities such as being able to create new campgrounds, update existing campgrounds, upload photos for campgrounds and edit/delete user reviews.

This application also uses CarrierWave, ActiveRecord, and ReactDropzone. Images are stored in AWS S3 Cloud Storage.

[See the deployed application on Heroku](https://ne-campground-reviews.herokuapp.com/)

[![Codeship Status for madducks42/ne-campground-reviews](https://app.codeship.com/projects/1c001202-d845-4589-9239-d063067aa4e9/status?branch=main)](https://app.codeship.com/projects/418979)


## Built with
- [Ruby on Rails](https://guides.rubyonrails.org/v5.2/)
- [React.js](https://reactjs.org/docs/getting-started.html)
- [PostgreSQL](https://www.postgresql.org/docs/13/index.html)

## Run Locally
The setup steps expect the following tools/versions:
- Ruby 2.6.5
- Rails 5.2.4.4
- PostgreSQL 13

###### Clone the Repo
```
git clone 
```
###### Install Dependencies
```
npm install 
```
```
bundle install 
```

###### Create and seed the database
```
bundle exec rake db: migrate
```
```
bundle exec rake db: seed
```

###### Run the test suite
```
bundle exec rspec
```
###### Start the Rails server and webpack-dev-server
```
bundle exec rails s
npm run start
```

###### The application can be accessed locally at <http://localhost:3000>