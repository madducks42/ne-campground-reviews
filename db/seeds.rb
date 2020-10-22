# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

campground_1 = Campground.create(name: 'Pawtuckaway State Park', description: 'Large campground with well-spaced campsites. Lots of waterfront campsites.', location: 'New Hampshire', amenities: 'No dogs allowed')
campground_2 = Campground.create(name: 'Forked Lake Campground', description: 'Rustic and remote campground. Almost all sites directly on lake. Many boat-in only.', location: 'New York', amenities: 'Dogs allowed')
