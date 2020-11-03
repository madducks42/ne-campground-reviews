# Seed Data

Campground.destroy_all
User.destroy_all
Review.destroy_all

# New Hampshire
campground_1 = Campground.create!(
  name: 'Bear Brook State Park',
  caption: 'Large campground with lots of campsites, great for kids.', 
  description: 'Bear Brook State Park is located in southern New Hampshire just over an hour drive from the Boston area and about 30 minutes north of Manchester. The proximity to Boston makes this an extremely popular campground, especially for those with young children. If you’re looking for a quiet camping getaway, this isn’t it. But if you’re looking for somewhere where you can let your kids run wild…then this is the campground for you.

  This is the largest developed state park in New Hampshire and has 101 campsites plus some cabins. The first two loops are the most tightly packed and offer the least privacy, these are sites 76-93, 1-11, and 35-45. Sites 12-30 are a little quieter because they’re away from the mayhem of the other loops. Sites 49-94 are somewhere in-between with certain sites like 55, 56, 94, 95 offering more privacy. None of the sites have electric/water hookups but there is a dump station with potable water and there are water outlets scattered around the camping loops (I can’t confirm if you can hook a hose up to these). Bathrooms are central located in each loop and have showers.
  
  There is a lot to do at this campground; hiking, boating, fishing, softball, archery, etc. It may be a bit crowded but the trade-off is that it’s very well developed. There are over forty miles of hiking trails in the park and a lot of trailheads that start in the campground. Beaver Pond is nice to boat around in, boat rentals are available if you don’t have your own. Archery Pond is available specifically for fly fishing and across the road from that pond is another small pond that is just for children under twelve to fish in. If you’re interested in photography there are a lot of interesting landscapes around the campground for sunrise/sunset and astrophotography.', 
  location: 'New Hampshire',
  campground_link: 'https://www.nhstateparks.org/visit/state-parks/bear-brook-state-park',
  dogs_allowed: true,
  electric_hookups: false,
  water_hookups: false,
  potable_water: true,
  dump_station: true,
  bathrooms: true,
  showers: true
)

# New York
campground_2 = Campground.create(
  name: 'Forked Lake Campground', 
  caption: 'Rustic and remote campground. Almost all sites directly on lake.',
  description: "Bear Brook State Park is located in southern New Hampshire just over an hour drive from the Boston area and about 30 minutes north of Manchester. The proximity to Boston makes this an extremely popular campground, especially for those with young children. If you’re looking for a quiet camping getaway, this isn’t it. But if you’re looking for somewhere where you can let your kids run wild…then this is the campground for you.
  
  This is the largest developed state park in New Hampshire and has 101 campsites plus some cabins. The first two loops are the most tightly packed and offer the least privacy, these are sites 76-93, 1-11, and 35-45. Sites 12-30 are a little quieter because they’re away from the mayhem of the other loops. Sites 49-94 are somewhere in-between with certain sites like 55, 56, 94, 95 offering more privacy. None of the sites have electric/water hookups but there is a dump station with potable water and there are water outlets scattered around the camping loops (I can’t confirm if you can hook a hose up to these). Bathrooms are central located in each loop and have showers.
  
  There is a lot to do at this campground; hiking, boating, fishing, softball, archery, etc. It may be a bit crowded but the trade-off is that it’s very well developed. There are over forty miles of hiking trails in the park and a lot of trailheads that start in the campground. Beaver Pond is nice to boat around in, boat rentals are available if you don’t have your own. Archery Pond is available specifically for fly fishing and across the road from that pond is another small pond that is just for children under twelve to fish in. If you’re interested in photography there are a lot of interesting landscapes around the campground for sunrise/sunset and astrophotography.",
  location: 'New York', 
  campground_link: 'https://www.dec.ny.gov/outdoor/24467.html',
  dogs_allowed: true,
  electric_hookups: false,
  water_hookups: false,
  potable_water: true,
  dump_station: false,
  bathrooms: true,
  showers: false
)

campground_6 = Campground.create(
  name: 'Letchworth State Park',
  caption: 'Gorgeous state park with large campground area.',
  description: "Letchworth State Park is also known as “The Grand Canyon of the East” and is located in western New York, about 45 minutes south of Rochester. It’s one of the more famous NY state parks and has been ranked as one of the best state parks in the country. The park itself, like most NY state parks, is very well kept and maintained. This area tends to get a lot of rainfall even in summer so it’s usually pretty green with lots of grass and wildflowers. The park is massive at almost 15,000 acres and has several large waterfalls plus the canyon that earned it it’s nickname. Coming from the Boston area is a long seven hour drive which is why we stopped roughly halfway on the way there and the way back to make the drive and the trip more enjoyable. On the way there we stayed at Moreau Lake State Parkand then at Green Lakes State Park on our way back.

  The best way to describe the campgrounds located at Letchworth State Park is “convenient”. The campsites are sequestered in their own area of the park which is only accessible to the campers so the only traffic you are to worry about is from fellow campers. In the campground area there is a store and several fields for kids to play in. There is also a pool in the park but this is located outside the campground area. Each campsite has either a 20amp or 50amp hookup. They don’t have water hookups but around each loop there are several spigots that you can hook up a hose to. There are eight loops in the campground area. We stayed in Loop 100 which is probably where I would try to stay again. It's the last loop on the campground road and felt a little more quiet and removed from the rest of the loops. The sites on the outer side of the loop are surrounded by trees which offer you a little privacy but not a lot. The sites in the middle of the loop are much more open. From what we saw of the other loops they all follow this pattern. None of the sites offer a view of anything and while some of the sites offer a little more space and privacy there weren’t really any standout sites. The point of staying in this campground is to have close proximity to the rest of the park, the campground itself is nothing special. There are also a lot of cabins and Glen Iris Inn if you want to visit but not camp at the park.
  
  As previously mentioned, this is a huge state park. It’s popularity stems from the gorge that spans part of the park with the Genesee River winding though it. There are also three major waterfalls in the park referred to as Lower, Middle, and Upper Falls. A well-maintained and relatively flat path runs along side part of the gorge down to Middle and Upper Falls. There are also several parking lots along this path including a large one down by Middle and Upper Falls. This trail is very accessible and felt similar to a lot of National Parks that have walking trails along their major viewpoints. The best views from the park are going to be found along this trail, it’s also going to be the most crowded. If you want to avoid the crowds or want to explore more of the park there are plenty of trails running throughout the park. If you’re interested in rafting there is a company that offers guided rafting tours through the park. Outside of the park there really isn’t much. A couple very small towns that had a couple restaurants and shops. I’d plan on spending most of your time in the park itself and not the surrounding area.", 
  location: 'New York', 
  campground_link: 'https://parks.ny.gov/parks/letchworth',
  dogs_allowed: true,
  electric_hookups: true,
  water_hookups: false,
  potable_water: true,
  dump_station: true,
  bathrooms: true,
  showers: true
)

# Vermont
campground_3 = Campground.create(
  name: 'Little River State Park', 
  caption: 'Beautiful peaceful park located next to a resevoir.',
  description: "Little River State Park is located in Northwestern Vermont, about 15 miles south of Stowe. It’s a three and half drive from the Boston area which makes it a great camping trip for a long weekend. Stowe is a popular town so this area is a little more built up than some of the other areas we visit but it all has that quaint Vermont vibe to it. One thing to keep in mind if you’re planning a fall trip, this area is incredibly popular during late September - October. So you’ll have to book in advance to get a good site. Also be prepared for the nearby towns to be pretty busy.

  This is the largest state campground in Vermont, but it’s still Vermont so it’s not that big. There are either 71 or 81 tent/RV sites, both of those numbers are listed on different places on the website and we didn’t do a count while we were there so can’t confirm the exact number. There are also 20 lean-to sites, and 5 cabins. But despite being Vermont’s largest campground it doesn’t feel crowded. The campground is divided into an “A” and “B” area and the campsites are pretty spread out in those areas. The woods are fairly dense throughout the campground which further increases the privacy you get at your site. None of the campsites are directly on the water but some of them do offer a view of the reservoir. The sites with lean-to’s are also really nice, especially the ones in area “A”. Bathrooms are scattered through the campground so you’re never that far from one. Not all of them have showers though, so depending on your site it might be a bit further walk to the shower If you’re feeling a bit more adventurous, there are 27 remote sites available along the shoreline. They’re only accessible by boat and they’re on a first-come, first served basis.
  
  There’s a lot to do in this area. Boating is allowed in the Waterbury Reservoir so you can either bring your own or boat rentals are available. There is a boat launch for campers in area 'A'. There are a few hiking trail heads that start from the campground and there is a lot more hiking available in the area, this state park is part of the Mt. Mansfield State Forest so there is no shortage of hiking available. You’re also very close to Stowe and Waterbury which means there are lots of great restaurants and breweries in the area. We almost always make a visit to Prohibition Pig in Waterbury. And finally if you have any interest in waterfalls there are quite a few in this area, some of which have some nice swimming holes.",
  location: 'Vermont', 
  campground_link: 'https://vtstateparks.com/littleriver.html',
  dogs_allowed: true,
  electric_hookups: false,
  water_hookups: false,
  potable_water: true,
  dump_station: true,
  bathrooms: true,
  showers: true
)

# Massachusetts
campground_4 = Campground.create(
  name: 'Mohawk Trail State Forest',
  caption: 'A convenient campground off Route 2, located alongside a creek.',
  description: "Mohawk Trail State Forest is located in western Massachusetts about a two hour drive from the Boston area. It’s literally right off Route 2 which makes it convenient and easy to find. Being off Route 2 there are several small towns nearby if you need supplies or want to go to a restaurant. It’s also very close to Savoy Mountain State Forest which is about 30 minutes away and a little more remote. We like Mohawk because it’s a relatively short drive for us which makes it great for a quick camping trip. But the tradeoff is that you can both see and hear Route 2 from the campground.

  There are 56 campsites spread out over three areas and 6 cabins. There are two main loops with most of the sites and then there is another section with sites 17-22 that are tent only and you do have to walk to, the parking for those sites isn’t far. We stayed at site 49 and that’s probably where we should stay again. The sites on this loop are close to the creek but only half of them have a view/access to it. Most of the sites are fairly close together and the ones that are on the opposite side of the creek are almost completely open. I’d stick with sites 45-50, these give you a little bit more space and privacy. None of the sites have electric/water hookups but there is a dump station located at the campground that has potable water. There are bathrooms located in each camping area but none of them have showers.
  
  There are lots of rivers and creeks in this area of Massachusetts so if you’re interested in fishing or boating there are plenty of options. The creek that runs through the campground is very shallow, probably less so in the spring/early summer. We were there in August and most of it was between 1-2ft deep. So you’re not going to be fishing, swimming, or boating in it. But it’s still fun to explore and play around in. There are several hiking trails that lead out from the campground, if you take the Indian Lookout Trail be prepared for an extremely steep hike up the mountain.",
  location: 'Massachusetts',
  campground_link: 'https://www.mass.gov/locations/mohawk-trail-state-forest',
  dogs_allowed: true,
  electric_hookups: false,
  water_hookups: false,
  potable_water: true,
  dump_station: true,
  bathrooms: true,
  showers: false
)

campground_5 = Campground.create(
  name: 'Savoy State Forest',
  caption: 'A nice and relatively small state campground in the Berkshires.',
  description: "Savoy State Park is located in the Berkshires of western Massachusetts. Coming from Boston it’s about a two and a half hour drive most of which is on Route 2. This park is very close to Mohawk Trail State Forest, they’re only about ten miles apart. Savoy is a little bit harder to get to than Mohawk which is literally right off Route 2 so seems to be visited a little less. North Adams is the closest town which is about a fifteen minute drive from the campground.

  This is a pretty small campground that has only one loop that has 45 campsites. There is also a group camping area and several cabins that are on a road directly off this loop. The campsites that are located on the inside of the loop are in a field with no trees, so they’re a lot more open. Although, this is such a small campground, it still doesn’t feel that crowded. The campsites on the outside of the loop have trees surrounding them so they offer a little more privacy, however many of them are pretty close to the road that goes around the loop. If this was a larger campground it would feel more crowded but we had a site that was almost directly on the road and it didn’t bother me all that much. If you're planning on tent camping and would like to be a little further away from people, I would suggest checking out sites 27-32. That side of the loop has quite a bit of distance from the rest of the campsites. Be aware that they are more open though. There are a scattering of trees on that side and a lot of shrubs but it's not as heavily wooded as the other side of the loop.

  There are two ponds in the park, North Pond and South Pond. North Pond is larger and a bit more of a hike to get to, it does have a beach and swimming area. South Pond is much more accessible, there is a short trail that runs between a couple campsites that leads directly to the pond. People left their kayaks/canoes here, since it’s only accessible to those camping in the park it seems pretty safe to leave your boats here. It’s a pretty pond but probably better suited to boating than swimming. There were a lot of cute frogs in the pond when we were there. There are several hiking trails that start in the park and and there are plenty of other trailheads in the area. This area also has lots of rivers that are great for fishing or rafting.", 
  location: 'Massachusetts', 
  campground_link: 'https://www.mass.gov/locations/savoy-mountain-state-forest',
  dogs_allowed: true,
  electric_hookups: false,
  water_hookups: false,
  potable_water: true,
  dump_station: true,
  bathrooms: true,
  showers: true
)

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
