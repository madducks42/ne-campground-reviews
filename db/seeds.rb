# Seed Data

campground_1 = Campground.create(name: 'Pawtuckaway State Park', description: 'Large campground with well-spaced campsites. Lots of waterfront campsites.', location: 'New Hampshire', amenities: 'No dogs allowed')
campground_2 = Campground.create(name: 'Forked Lake Campground', description: 'Rustic and remote campground. Almost all sites directly on lake. Many boat-in only.', location: 'New York', amenities: 'Dogs allowed')
campground_3 = Campground.create(name: 'Little River State Park', description: 'Pretty campground next to reservoir.', location: 'Vermont', amenities: 'Dogs allowed')

user_1 = User.create(first_name: 'Maddox', last_name: 'Grey', email: 'maddoxgrey42@gmail.com', username: 'madducks42', password: 'password')
user_2 = User.create(first_name: 'Kylo', last_name: 'Ren', email: 'kyloren@gmail.com', username: 'sad_boi', password: 'password')
user_3 = User.create(first_name: 'Buffy', last_name: 'Summer', email: 'buffy@gmail.com', username: 'og_slayer', password: 'password')
user_4 = User.create(first_name: 'Zoe', last_name: 'Washbourne', email: 'zoe@gmail.com', username: 'shouldabeencaptain', password: 'password')

review_1 = Review.create(title: 'Not bad', body: 'Overall okay campground.', rating: 4, campground: campground_1, user: user_2 )
review_2 = Review.create(title: 'Awesome campground', body: 'Really enjoyed our stay! Campground was super clean and well-maintained!', rating: 5, campground: campground_3, user: user_1 )
review_3 = Review.create(title: 'Nice campground', body: 'Nice pretty campground', rating: 4, campground: campground_2, user: user_3 )
review_4 = Review.create(title: 'Quiet campground', body: 'Pretty and quiet campground', rating: 4, campground: campground_3, user: user_4 )
review_5 = Review.create(title: 'Great for kids', body: 'Great campground for kids. The lake was really nice!', rating: 5, campground: campground_1, user: user_4 )
review_6 = Review.create(title: 'Terrible campground', body: 'Dirt and bugs everywhere. Nature is the worst.', rating: 1, campground: campground_1, user: user_2 )
review_7 = Review.create(title: 'Awesome campground', body: 'Really enjoyed our stay! Campground was super clean and well-maintained!', rating: 5, campground: campground_2, user: user_3 )
review_8 = Review.create(title: 'Awesome campground', body: 'Really enjoyed our stay! Campground was super clean and well-maintained!', rating: 5, campground: campground_1, user: user_4 )
