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
  zip_code: '03275',
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
  caption: 'Rustic and remote campground. Most sites are waterfront.',
  description: "Forked Lake Campground is a state run campground located in the Adirondacks of upstate New York. It’s about a five hour drive from Boston. Unlike most of the places we camp, this isn’t a state park but rather a state run campground. This means there aren’t a lot of trails that start right at, or close by, the campground. But there are a lot of lakes, rivers, and state parks in this area so the campground provides a great home-base to venture forth. Or you can hang out all day the campsite because the lake is fantastic.

  This is a very primitive campground. There is one small bathroom (not gonna lie it doesn’t smell great) and no showers on-site. The tent-sites have an outhouse. Yeah...this is not glamping. The upside? Almost all of the sites are waterfront. In fact they’re so waterfront that a good chunk of them you have to boat to. The first 15 or so campsites you can walk to along a dirt path, but rest are only accessible by boat. For the ones you can walk to, it’s about a quarter-mile hike depending on how far down the path your site is. There are a few campsites around the boat launch and trail-head area that allow RV's/campers but the rest are tent-only. In addition to the campsites around the lake there are also three campsites that are on islands in the lake. I've been trying for years to get one of these sites but they go fast. So if you want one of those be prepared to book it the second it's available and/or be flexible about the dates you can go.
  
  When we camp here we tend to spend most of our time at our site or on the lake. The lake doesn’t allow motorboats which makes it nice for kayaks and canoes. There is a boat launch area and many of the campsites have either a floating dock or an area to easily stash your boat. Along the dirt road to the campground is a trailhead for Buttermilk Falls which are some small waterfalls, the trail is very short, you basically park and walk two minutes and you’re at the waterfalls. The towns near the campground are nice, lots of breweries and takeout places if you want a break from cooking.",
  location: 'New York',
  zip_code: '12847', 
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
  zip_code: '14427',
  campground_link: 'https://parks.ny.gov/parks/letchworth',
  dogs_allowed: true,
  electric_hookups: true,
  water_hookups: false,
  potable_water: true,
  dump_station: true,
  bathrooms: true,
  showers: true
)

campground_9 = Campground.create(
  name: 'Moreau Lake State Park',
  caption: 'Large campground on a lake just outside Saratoga Springs.',
  description: "Moreau Lake State Park is located in Eastern New York about ten miles north of Saratoga Springs. Coming from Boston it’s just over a three hour drive which made it a good stopping place for us on our way to Letchworth State Park. It would also make a good stopping place on your way to the Adirondacks. It’s a good state park for a weekend getaway or stop on the way to somewhere else.

  There are seven camping loops throughout the park. We stayed in Loop A which despite how crowded it looks on the map actually wasn't that bad. Most of the sites have a decent amount of space between them and the trees add to the privacy. Loops B & E offer a little more space and aren't quite as crowded but the woods aren't as dense so they don't feel quite as private. Loops C & D are not lakeside but you can see glimpses of the lake through the trees, getting to this loop does mean driving up a fairly steep and rough road. I would avoid Loops G & F unless absolutely necessary, those loops were the most packed and the farthest from the lake. The campground also offers several cabins, two of which are on the lake, Sunset Cabin and Lakeshore Cottage. Since these are the only two sites in the campground that are waterfront which obviously makes them very hard to get.
  
  The major draw to this area is obviously the lake which is very pretty. There is a swimming area and a boat launch for kayaks/canoes that also has racks to store and lock your boat. Motorboats are not allowed in the lake which make it very nice for paddling around or fishing. There are also several trails around the lake for hiking. It's only 10 minutes away from Saratoga Springs so you have a fun town to go visit while camping as well.", 
  location: 'New York',
  zip_code: '12831',
  campground_link: 'https://parks.ny.gov/parks/moreaulake/details.aspx',
  dogs_allowed: true,
  electric_hookups: false,
  water_hookups: false,
  potable_water: true,
  dump_station: true,
  bathrooms: true,
  showers: true
)

campground_10 = Campground.create(
  name: 'Green Lakes State Park',
  caption: 'Large campground around two glacier lakes in upstate New York.',
  description: "Green Lakes State Park is located in central New York, about ten miles east of Syracuse. We used it as a mid-way stopping point on our way back to Boston from Letchworth State Park but it’s also less than two hours away from Taughannock Falls State Park and Watkins Glen State Park. This is a good state park to pair up with others either as day trip or a stopping point on the way to somewhere else.

  There’s no nice way to say this, the campground at Green Lakes State Park is pretty bad. There are two loops, “Rolling Hills” and “Pinewoods”, these names do not describe the loops in anyway. Both loops are basically open fields with a few trees scattered here and there and a lot of campsites jammed in. The campsites tend to run long and narrow which makes you feel even closer to your neighbor. It honestly felt like we were just parked in a grassy parking lot. I walked around both loops and there weren’t any sites that stood out to me as being less worse than the others, what did stand out were the cabins. Behind the “Pinewoods” loop are eight cabins. If I ever went back to this campground to stay I would definitely go for one of those cabins instead of camping. They’re far enough removed from the camping loop to offer a little privacy. None of the cabins (or campsites) are water front but you can see the lake through the trees from a few of the cabins. The trail that goes down to the lake also starts at the end of the row of cabins.
  
  The draw of this state park are the two glacier lakes. There aren’t many glacier lakes in North America and these are the only two in the Northeast. And the lakes are gorgeous. Depending on the time of day and the area of the lake the color ranges from a greenish-blue to light turquoise. There is a trail that goes around both lakes and it’s the only way to really see the lakes. The only drive-up area is a parking lot by the beach/swimming area. While you can see the water from there, that area of the lake looks different than the rest. If you actually want to see the pretty colors of the lake you’ll have to walk along one of the trails. Because of the fragile eco-system in the lakes you can’t bring your own kayak/canoe, but they are available to rent. Despite how horrible the campground is, the lakes really are worth seeing.", 
  location: 'New York',
  zip_code: '13066',
  campground_link: 'https://parks.ny.gov/parks/greenlakes/details.aspx',
  dogs_allowed: true,
  electric_hookups: false,
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
  zip_code: '05676',
  campground_link: 'https://vtstateparks.com/littleriver.html',
  dogs_allowed: true,
  electric_hookups: false,
  water_hookups: false,
  potable_water: true,
  dump_station: true,
  bathrooms: true,
  showers: true
)

campground_8 = Campground.create(
  name: 'Coolidge State Park', 
  caption: 'Nice campground with access to a lot of hiking trails.',
  description: "Coolidge State Park is located in western Vermont, just under 3 hours from the Boston area. It sits right on the edge of the Green Mountains region of Vermont. The Quechee Gorge is about 30 minutes east of the campground. The gorge is a bit of a tourist trap and gets extremely busy in the fall so staying at Coolidge lets you be close enough to drive to it but far enough away to escape the crowds.

  This is a very pretty park and campground. It’s a typical sized Vermont campground in that it’s small and fairly densely wooded. There are two loops in the park, one has 36 lean-to sites and the other has the park’s 26 tent/RV sites. All the sites are decently spaced and the trees provide a good amount of privacy. Each loop has a couple bathrooms, some of which have showers that are coin-operated. A word of warning, the road to the park is up a very steep hill that was full of potholes when we were there last.
  
  This campground doesn’t have a lake or a river but the hiking is great. There are several trails that lead out from the campground. Some of them will take you to some very pretty viewpoints. There is also a large meadow area that is usually full of wildflowers and has a covered area where you can enjoy some lunch. There are no shortage of waterfalls in Vermont, Buttermilk Falls is about 20 minutes south of the campground.",
  location: 'Vermont',
  zip_code: '05056', 
  campground_link: 'https://vtstateparks.com/coolidge.html',
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
  zip_code: '01339',
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
  zip_code: '01247', 
  campground_link: 'https://www.mass.gov/locations/savoy-mountain-state-forest',
  dogs_allowed: true,
  electric_hookups: false,
  water_hookups: false,
  potable_water: true,
  dump_station: true,
  bathrooms: true,
  showers: true
)

campground_7 = Campground.create(
  name: 'Mount Greylock State Park',
  caption: 'A remote campground that offers tent-only camping in the Berkshires.',
  description: "Mount Greylock State Reservation is located in western Massachusetts about a two and a half hour drive from the Boston area. North Adams is just north of the reservation, about a fifteen minute drive from the campground area.

  This is a primitive hike-in campground. From the main parking lot it's a 1.3 mile hike to the campground although there are some turnouts you can use to get a little bit closer. No matter what though you're carrying your equipment to your campsite. The campsites themselves are large and spaced out nicely. If you're looking for a quiet and remote camping trip, this is it. There are composting toilets for use, no showers and no camp store. Usually a park ranger will swing by your site to check you in and they also have fire wood you can purchase.
  
  Mount Greylock offers some great hiking and there are several trailheads that start from the campground and link up to other trails. The trail for the March Cataract Falls also starts close to the campground. If you want to do something besides hike, North Adams is closeby and Mass MOCA is always worth a visit.",
  location: 'Massachusetts',
  zip_code: '01237',
  campground_link: 'https://www.mass.gov/location-details/camping-at-mount-greylock',
  dogs_allowed: true,
  electric_hookups: false,
  water_hookups: false,
  potable_water: true,
  dump_station: false,
  bathrooms: true,
  showers: false
)

user_1 = User.create(first_name: 'Maddox', last_name: 'Grey', email: 'maddoxgrey42@gmail.com', username: 'madducks42', password: 'password', role: 'member')
user_2 = User.create(first_name: 'Kylo', last_name: 'Ren', email: 'kyloren@gmail.com', username: 'sad_boi', password: 'password', role: 'member')
user_3 = User.create(first_name: 'Buffy', last_name: 'Summer', email: 'buffy@gmail.com', username: 'og_slayer', password: 'password', role: 'member')
user_4 = User.create(first_name: 'Zoe', last_name: 'Washbourne', email: 'zoe@gmail.com', username: 'shouldabeencaptain', password: 'password', role: 'member')
user_5 = User.create(first_name: 'Maddox', last_name: 'Grey', email: 'maddoxgrey42+admin@gmail.com', password: 'password', role: 'admin')

review_1 = Review.create(title: 'Not bad', body: 'Overall okay campground.', rating: 4, campground: campground_1, user: user_2 )
review_2 = Review.create(title: 'Awesome campground', body: 'Really enjoyed our stay! Campground was super clean and well-maintained!', rating: 5, campground: campground_3, user: user_1 )
review_3 = Review.create(title: 'Nice campground', body: 'Nice pretty campground', rating: 4, campground: campground_2, user: user_3 )
review_4 = Review.create(title: 'Quiet campground', body: 'Pretty and quiet campground', rating: 4, campground: campground_3, user: user_4 )
review_5 = Review.create(title: 'Great for kids', body: 'Great campground for kids. The lake was really nice!', rating: 5, campground: campground_1, user: user_4 )
review_6 = Review.create(title: 'Terrible campground', body: 'Dirt and bugs everywhere. Nature is the worst.', rating: 1, campground: campground_1, user: user_2 )
review_7 = Review.create(title: 'Awesome campground', body: 'Really enjoyed our stay! Campground was super clean and well-maintained!', rating: 5, campground: campground_2, user: user_3 )
review_8 = Review.create(title: 'Awesome campground', body: 'Really enjoyed our stay! Campground was super clean and well-maintained!', rating: 5, campground: campground_1, user: user_4 )

favorite_1 = Favorite.create(user: user_1, campground: campground_2)
favorite_2 = Favorite.create(user: user_1, campground: campground_3)
favorite_1 = Favorite.create(user: user_1, campground: campground_6)
