import DS from 'ember-data';

var Team = DS.Model.extend({
  code: DS.attr('string'),
  name: DS.attr('string'),
  nickname: DS.attr('string'),
  parkImage: DS.attr('string'),
  // players: DS.hasMany('player')
  players: DS.attr()
});

Team.reopenClass({
  FIXTURES: [
    {map_id: 1, id: 'AL', name: 'Alabama', nickname: 'Yellowhammers'},
    {map_id: 2, id: 'AK', name: 'Alaska', nickname: 'Willow Ptarmigans'},
    {map_id: 4, id: 'AZ', name: 'Arizona', nickname: 'Cactus Wrens', parkImage: '/images/parks/az.png', players: [{name: 'Doug Mirabelli', position: 'C', team: 'AZ', home: 'Kingman', born: '1970', ops: '.723'}, {name: 'Brian Banks', position: '1B', team: 'AZ', home: 'Mesa', born: '1970', ops: '.703'},{name: 'Ian Kinsler', position: '2B', team: 'AZ', home: 'Tucson', born: '1982', ops: '.802'},{name: 'Shea Hillenbrand', position: '3B', team: 'AZ', home: 'Mesa', born: '1975', ops: '.760'},{name: 'Solly Hemus', position: 'SS', team: 'AZ', home: 'Phoenix', born: '1923', ops: '.797'},{name: 'Andre Ethier', position: 'LF', team: 'AZ', home: 'Phoenix', born: '1982', ops: '.832'},{name: 'Hank Leiber', position: 'CF', team: 'AZ', home: 'Phoenix', born: '1911', ops: '.813'},{name: 'Chris Duncan', position: 'RF', team: 'AZ', home: 'Tucson', born: '1981', ops: '.806'}]},
    {map_id: 5, id: 'AR', name: 'Arkansas', nickname: 'Mockingbirds'},
    {map_id: 6, id: 'CA', name: 'California', nickname: 'Valley Quails', parkImage: '/images/parks/ca.png', players: [
      {name: 'Ernie Lombardi', position: 'C', team: 'CA', home: 'Oakland', born: '1908', ops: '.817'},
      {name: 'Mark McGwire', position: '1B', team: 'CA', home: 'Pomona', born: '1963', ops: '.982'},
      {name: 'Chase Utley', position: '2B', team: 'CA', home: 'Pasadena', born: '1978', ops: '.870'},
      {name: 'Evan Longoria', position: '3B', team: 'CA', home: 'Downey', born: '1985', ops: '.870'},
      {name: 'Nomar Garciaparra', position: 'SS', team: 'CA', home: 'Whittier', born: '1973', ops: '.882'},
      {name: 'Ted Williams', position: 'LF', team: 'CA', home: 'San Diego', born: '1918', ops: '1.115'},
      {name: 'Barry Bonds', position: 'CF', team: 'CA', home: 'Riverside', born: '1964', ops: '1.051'},
      {name: 'Joe DiMaggio', position: 'RF', team: 'CA', home: 'Martinez', born: '1914', ops: '.976'}
    ]},
    {map_id: 8, id: 'CO', name: 'Colorado', nickname: 'Lark Buntings'},
    {map_id: 9, id: 'CT', name: 'Connecticut', nickname: 'Robins'},
    {map_id: 10, id: 'DE', name: 'Delaware', nickname: 'Blue Hen Chickens'},
    {map_id: 12, id: 'FL', name: 'Florida', nickname: 'Mockingbirds', parkImage: '/images/parks/fl.png', players: [
      {name: 'Mike Napoli', position: 'C', team: 'FL', home: 'Hollywood', born: '1981', ops: '.859'},
      {name: 'Fred McGriff', position: '1B', team: 'FL', home: 'Tampa', born: '1963', ops: '.886'},
      {name: 'Rickie Weeks', position: '2B', team: 'FL', home: 'Daytona Beach', born: '1982', ops: '.768'},
      {name: 'Chipper Jones', position: '3B', team: 'FL', home: 'DeLand', born: '1972', ops: '.930'},
      {name: 'Jay Bell', position: 'SS', team: 'FL', home: 'Eglin A.F.B.', born: '1965', ops: '.753'},
      {name: 'Gary Sheffield', position: 'LF', team: 'FL', home: 'Tampa', born: '1968', ops: '.907'},
      {name: 'Andrew McCutchen', position: 'CF', team: 'FL', home: 'Fort Meade', born: '1986', ops: '.869'},
      {name: 'Luis Gonzalez', position: 'RF', team: 'FL', home: 'Tampa', born: '1967', ops: '.845'}
    ]},
    {map_id: 13, id: 'GA', name: 'Georgia', nickname: 'Brown Thrashers', parkImage: '/images/parks/ga.png', players: [{name: 'Buster Posey', position: 'C', team: 'GA', home: 'Leesburg', born: '1987', ops: '.864'}, {name: 'Johnny Mize', position: '1B', team: 'GA', home: 'Demorest', born: '1913', ops: '.958'},{name: 'Jackie Robinson', position: '2B', team: 'GA', home: 'Cairo', born: '1919', ops: '.875'},{name: 'Russel Branyon', position: '3B', team: 'GA', home: 'Warner Robins', born: '1975', ops: '.813'},{name: 'Cecil Travis', position: 'SS', team: 'GA', home: 'Riverdale', born: '1913', ops: '.782'},{name: 'Ty Cobb', position: 'LF', team: 'GA', home: 'Narrows', born: '1886', ops: '.935'},{name: 'Moises Alou', position: 'CF', team: 'GA', home: 'Atlanta', born: '1966', ops: '.887'},{name: 'JD Drew', position: 'RF', team: 'GA', home: 'Valdosta', born: '1975', ops: '.872'}]},
    {map_id: 15, id: 'HI', name: 'Hawaii', nickname: 'Nenes'},
    {map_id: 16, id: 'ID', name: 'Idaho', nickname: 'Mountain Bluebirds'},
    {map_id: 17, id: 'IL', name: 'Illinois', nickname: 'Cardinals'},
    {map_id: 18, id: 'IN', name: 'Indiana', nickname: 'Cardinals'},
    {map_id: 19, id: 'IA', name: 'Iowa', nickname: 'Eastern Goldfinchs'},
    {map_id: 20, id: 'KS', name: 'Kansas', nickname: 'Western Meadowlarks'},
    {map_id: 21, id: 'KY', name: 'Kentucky', nickname: 'Cardinals'},
    {map_id: 22, id: 'LA', name: 'Louisiana', nickname: 'Eastern Brown Pelicans'},
    {map_id: 23, id: 'ME', name: 'Maine', nickname: 'Chickadees', parkImage: '/images/parks/me.png', players: [{name: 'Clyde Sukeforth', position: 'C', team: 'ME', home: 'Washington', born: '1901', ops: '.644'}, {name: 'Del Bissonette', position: '1B', team: 'ME', home: 'Winthrop', born: '1899', ops: '.852'},{name: 'Ryan Flaherty', position: '2B', team: 'ME', home: 'Portland', born: '1986', ops: '.655'},{name: 'Harry Lord', position: '3B', team: 'ME', home: 'Porter', born: '1882', ops: '.669'},{name: 'Ben Nickerson', position: 'SS', team: 'ME', home: 'Boothbay', born: '1986', ops: '.835'},{name: 'George Gore', position: 'LF', team: 'ME', home: 'Saccarappa', born: '1857', ops: '.797'},{name: 'Walter Thornton', position: 'CF', team: 'ME', home: 'Lewiston', born: '1875', ops: '.767'},{name: 'Chief Sockalexis', position: 'RF', team: 'ME', home: 'Old Town', born: '1871', ops: '.766'}]},
    {map_id: 24, id: 'MD', name: 'Maryland', nickname: 'Baltimore Orioles'},
    {map_id: 25, id: 'MA', name: 'Massachusetts', nickname: 'Chickadees', parkImage: '/images/parks/ma.png', players: [{name: 'Mickey Cochrane', position: 'C', team: 'MA', home: 'Bridgewater', born: '1903', ops: '.887'}, {name: 'Jeff Bagwell', position: '1B', team: 'MA', home: 'Boston', born: '1968', ops: '.948'},{name: 'Mark Bellhorn', position: '2B', team: 'MA', home: 'Boston', born: '1974', ops: '.734'},{name: 'Richie Hebner', position: '3B', team: 'MA', home: 'Boston', born: '1947', ops: '.788'},{name: 'Joe Sullivan', position: 'SS', team: 'MA', home: 'Charlestown', born: '1870', ops: '.740'},{name: 'Joe Kelley', position: 'LF', team: 'MA', home: 'Cambridge', born: '1871', ops: '.847'},{name: 'Jimmy Bannon', position: 'CF', team: 'MA', home: 'Amesbury', born: '1871', ops: '.832'},{name: 'Jimmy Ryan', position: 'RF', team: 'MA', home: 'Clinton', born: '1863', ops: '.816'}]},
    {map_id: 26, id: 'MI', name: 'Michigan', nickname: 'Robins'},
    {map_id: 27, id: 'MN', name: 'Minnesota', nickname: 'Common Loons'},
    {map_id: 28, id: 'MS', name: 'Mississippi', nickname: 'Mockingbirds'},
    {map_id: 29, id: 'MO', name: 'Missouri', nickname: 'Bluebirds'},
    {map_id: 30, id: 'MT', name: 'Montana', nickname: 'Western Meadowlarks'},
    {map_id: 31, id: 'NE', name: 'Nebraska', nickname: 'Western Meadowlarks'},
    {map_id: 32, id: 'NV', name: 'Nevada', nickname: 'Mountain Bluebirds'},
    {map_id: 33, id: 'NH', name: 'New Hampshire', nickname: 'Purple Finchs'},
    {map_id: 34, id: 'NJ', name: 'New Jersey', nickname: 'Eastern Goldfinchs'},
    {map_id: 35, id: 'NM', name: 'New Mexico', nickname: 'Roadrunners'},
    {map_id: 36, id: 'NY', name: 'New York', nickname: 'Bluebirds', parkImage: '/images/parks/ny.png', players: [
      {name: 'Joe Torre', position: 'C', team: 'NY', home: 'Brooklyn', born: '1940', ops: '.816'},
      {name: 'Lou Gehrig', position: '1B', team: 'NY', home: 'New York', born: '1903', ops: '1.075'},
      {name: 'Ross Barnes', position: '2B', team: 'NY', home: 'Mount Morris', born: '1850', ops: '.852'},
      {name: 'John McGraw', position: '3B', team: 'NY', home: 'Truxton', born: '1873', ops: '.873'},
      {name: 'Alex Rodriguez', position: 'SS', team: 'NY', home: 'New York', born: '1975', ops: '.941'},
      {name: 'Babe Herman', position: 'LF', team: 'NY', home: 'Buffalo', born: '1903', ops: '.909'},
      {name: 'Rocky Colavito', position: 'CF', team: 'NY', home: 'New York', born: '1933', ops: '.847'},
      {name: 'Hack Miller', position: 'RF', team: 'NY', home: 'New York', born: '1894', ops: '.846'}
    ]},
    {map_id: 37, id: 'NC', name: 'North Carolina', nickname: 'Cardinals'},
    {map_id: 38, id: 'ND', name: 'North Dakota', nickname: 'Western Meadowlarks'},
    {map_id: 39, id: 'OH', name: 'Ohio', nickname: 'Cardinals'},
    {map_id: 40, id: 'OK', name: 'Oklahoma', nickname: 'Scissor-tailed Flycatchers'},
    {map_id: 41, id: 'OR', name: 'Oregon', nickname: 'Western Meadowlarks'},
    {map_id: 42, id: 'PA', name: 'Pennsylvania', nickname: 'Ruffed Grouse'},
    {map_id: 44, id: 'RI', name: 'Rhode Island', nickname: 'Rhode Island Reds'},
    {map_id: 45, id: 'SC', name: 'South Carolina', nickname: 'Great Carolina Wrens'},
    {map_id: 46, id: 'SD', name: 'South Dakota', nickname: 'Ring-necked Pheasants'},
    {map_id: 47, id: 'TN', name: 'Tennessee', nickname: 'Mockingbirds'},
    {map_id: 48, id: 'TX', name: 'Texas', nickname: 'Mockingbirds', parkImage: '/images/parks/tex.png', players: [
      {name: 'Eddie Taubensee', position: 'C', team: 'TX', home: 'Beeville', born: '1968', ops: '.760'},
      {name: 'Norm Cash', position: '1B', team: 'TX', home: 'Justiceburg', born: '1934', ops: '.862'},
      {name: 'Rogers Hornsby', position: '2B', team: 'TX', home: 'Winters', born: '1896', ops: '1.000'},
      {name: 'Eddie Mathews', position: '3B', team: 'TX', home: 'Texarkana', born: '1931', ops: '.884'},
      {name: 'Topper Rigney', position: 'SS', team: 'TX', home: 'Groveton', born: '1897', ops: '.756'},
      {name: 'Lance Berkman', position: 'LF', team: 'TX', home: 'Waco', born: '1976', ops: '.943'},
      {name: 'Frank Robinson', position: 'CF', team: 'TX', home: 'Beaumont', born: '1935', ops: '.925'},
      {name: 'Tris Speaker', position: 'RF', team: 'TX', home: 'Hubbard', born: '1888', ops: '.917'}
    ]},
    {map_id: 49, id: 'UT', name: 'Utah', nickname: 'Common American Gulls'},
    {map_id: 50, id: 'VT', name: 'Vermont', nickname: 'Hermit Thrushes'},
    {map_id: 51, id: 'VA', name: 'Virginia', nickname: 'Cardinals'},
    {map_id: 53, id: 'WA', name: 'Washington', nickname: 'Willow Goldfinchs'},
    {map_id: 54, id: 'WV', name: 'West Virginia', nickname: 'Cardinals'},
    {map_id: 55, id: 'WI', name: 'Wisconsin', nickname: 'Robins'},
    {map_id: 56, id: 'WY', name: 'Wyoming', nickname: 'Western Meadowlarks'}
  ]
});

export default Team;
