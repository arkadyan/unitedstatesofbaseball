import DS from 'ember-data';

var Team = DS.Model.extend({
  code: DS.attr('string'),
  state_code: DS.attr('string'),
  name: DS.attr('string'),
  nickname: DS.attr('string'),
  parkImage: DS.attr('string'),
  // players: DS.hasMany('player')
  players: DS.attr()
});

Team.reopenClass({
  FIXTURES: [
    {map_id: 1, state_code: 'AL', name: 'Alabama', nickname: 'Yellowhammers'},
    {map_id: 2, state_code: 'AK', name: 'Alaska', nickname: 'Willow Ptarmigans'},
    {map_id: 4, state_code: 'AZ', name: 'Arizona', nickname: 'Cactus Wrens', parkImage: '/images/parks/az.png', players: [{name: 'Doug Mirabelli', position: 'C', team: 'AZ', home: 'Kingman', born: '1970', ops: '.723'}, {name: 'Brian Banks', position: '1B', team: 'AZ', home: 'Mesa', born: '1970', ops: '.703'},{name: 'Ian Kinsler', position: '2B', team: 'AZ', home: 'Tucson', born: '1982', ops: '.802'},{name: 'Shea Hillenbrand', position: '3B', team: 'AZ', home: 'Mesa', born: '1975', ops: '.760'},{name: 'Solly Hemus', position: 'SS', team: 'AZ', home: 'Phoenix', born: '1923', ops: '.797'},{name: 'Andre Ethier', position: 'LF', team: 'AZ', home: 'Phoenix', born: '1982', ops: '.832'},{name: 'Hank Leiber', position: 'CF', team: 'AZ', home: 'Phoenix', born: '1911', ops: '.813'},{name: 'Chris Duncan', position: 'RF', team: 'AZ', home: 'Tucson', born: '1981', ops: '.806'}]},
    {map_id: 5, state_code: 'AR', name: 'Arkansas', nickname: 'Mockingbirds'},
    {map_id: 6, state_code: 'CA', name: 'California', nickname: 'Valley Quails', parkImage: '/images/parks/ca.png', players: [
      {name: 'Ernie Lombardi', position: 'C', team: 'CA', home: 'Oakland', born: '1908', ops: '.817'},
      {name: 'Mark McGwire', position: '1B', team: 'CA', home: 'Pomona', born: '1963', ops: '.982'},
      {name: 'Chase Utley', position: '2B', team: 'CA', home: 'Pasadena', born: '1978', ops: '.870'},
      {name: 'Evan Longoria', position: '3B', team: 'CA', home: 'Downey', born: '1985', ops: '.870'},
      {name: 'Nomar Garciaparra', position: 'SS', team: 'CA', home: 'Whittier', born: '1973', ops: '.882'},
      {name: 'Ted Williams', position: 'LF', team: 'CA', home: 'San Diego', born: '1918', ops: '1.115'},
      {name: 'Barry Bonds', position: 'CF', team: 'CA', home: 'Riverside', born: '1964', ops: '1.051'},
      {name: 'Joe DiMaggio', position: 'RF', team: 'CA', home: 'Martinez', born: '1914', ops: '.976'}
    ]},
    {map_id: 8, state_code: 'CO', name: 'Colorado', nickname: 'Lark Buntings'},
    {map_id: 9, state_code: 'CT', name: 'Connecticut', nickname: 'Robins'},
    {map_id: 10, state_code: 'DE', name: 'Delaware', nickname: 'Blue Hen Chickens'},
    {map_id: 12, state_code: 'FL', name: 'Florida', nickname: 'Mockingbirds', parkImage: '/images/parks/fl.png', players: [
      {name: 'Mike Napoli', position: 'C', team: 'FL', home: 'Hollywood', born: '1981', ops: '.859'},
      {name: 'Fred McGriff', position: '1B', team: 'FL', home: 'Tampa', born: '1963', ops: '.886'},
      {name: 'Rickie Weeks', position: '2B', team: 'FL', home: 'Daytona Beach', born: '1982', ops: '.768'},
      {name: 'Chipper Jones', position: '3B', team: 'FL', home: 'DeLand', born: '1972', ops: '.930'},
      {name: 'Jay Bell', position: 'SS', team: 'FL', home: 'Eglin A.F.B.', born: '1965', ops: '.753'},
      {name: 'Gary Sheffield', position: 'LF', team: 'FL', home: 'Tampa', born: '1968', ops: '.907'},
      {name: 'Andrew McCutchen', position: 'CF', team: 'FL', home: 'Fort Meade', born: '1986', ops: '.869'},
      {name: 'Luis Gonzalez', position: 'RF', team: 'FL', home: 'Tampa', born: '1967', ops: '.845'}
    ]},
    {map_id: 13, state_code: 'GA', name: 'Georgia', nickname: 'Brown Thrashers', parkImage: '/images/parks/ga.png', players: [{name: 'Buster Posey', position: 'C', team: 'GA', home: 'Leesburg', born: '1987', ops: '.864'}, {name: 'Johnny Mize', position: '1B', team: 'GA', home: 'Demorest', born: '1913', ops: '.958'},{name: 'Jackie Robinson', position: '2B', team: 'GA', home: 'Cairo', born: '1919', ops: '.875'},{name: 'Russel Branyon', position: '3B', team: 'GA', home: 'Warner Robins', born: '1975', ops: '.813'},{name: 'Cecil Travis', position: 'SS', team: 'GA', home: 'Riverdale', born: '1913', ops: '.782'},{name: 'Ty Cobb', position: 'LF', team: 'GA', home: 'Narrows', born: '1886', ops: '.935'},{name: 'Moises Alou', position: 'CF', team: 'GA', home: 'Atlanta', born: '1966', ops: '.887'},{name: 'JD Drew', position: 'RF', team: 'GA', home: 'Valdosta', born: '1975', ops: '.872'}]},
    {map_id: 15, state_code: 'HI', name: 'Hawaii', nickname: 'Nenes'},
    {map_id: 16, state_code: 'ID', name: 'Idaho', nickname: 'Mountain Bluebirds'},
    {map_id: 17, state_code: 'IL', name: 'Illinois', nickname: 'Cardinals'},
    {map_id: 18, state_code: 'IN', name: 'Indiana', nickname: 'Cardinals'},
    {map_id: 19, state_code: 'IA', name: 'Iowa', nickname: 'Eastern Goldfinchs'},
    {map_id: 20, state_code: 'KS', name: 'Kansas', nickname: 'Western Meadowlarks'},
    {map_id: 21, state_code: 'KY', name: 'Kentucky', nickname: 'Cardinals'},
    {map_id: 22, state_code: 'LA', name: 'Louisiana', nickname: 'Eastern Brown Pelicans'},
    {map_id: 23, state_code: 'ME', name: 'Maine', nickname: 'Chickadees', parkImage: '/images/parks/me.png', players: [{name: 'Clyde Sukeforth', position: 'C', team: 'ME', home: 'Washington', born: '1901', ops: '.644'}, {name: 'Del Bissonette', position: '1B', team: 'ME', home: 'Winthrop', born: '1899', ops: '.852'},{name: 'Ryan Flaherty', position: '2B', team: 'ME', home: 'Portland', born: '1986', ops: '.655'},{name: 'Harry Lord', position: '3B', team: 'ME', home: 'Porter', born: '1882', ops: '.669'},{name: 'Ben Nickerson', position: 'SS', team: 'ME', home: 'Boothbay', born: '1986', ops: '.835'},{name: 'George Gore', position: 'LF', team: 'ME', home: 'Saccarappa', born: '1857', ops: '.797'},{name: 'Walter Thornton', position: 'CF', team: 'ME', home: 'Lewiston', born: '1875', ops: '.767'},{name: 'Chief Sockalexis', position: 'RF', team: 'ME', home: 'Old Town', born: '1871', ops: '.766'}]},
    {map_id: 24, state_code: 'MD', name: 'Maryland', nickname: 'Baltimore Orioles'},
    {map_id: 25, state_code: 'MA', name: 'Massachusetts', nickname: 'Chickadees', parkImage: '/images/parks/ma.png', players: [{name: 'Mickey Cochrane', position: 'C', team: 'MA', home: 'Bridgewater', born: '1903', ops: '.887'}, {name: 'Jeff Bagwell', position: '1B', team: 'MA', home: 'Boston', born: '1968', ops: '.948'},{name: 'Mark Bellhorn', position: '2B', team: 'MA', home: 'Boston', born: '1974', ops: '.734'},{name: 'Richie Hebner', position: '3B', team: 'MA', home: 'Boston', born: '1947', ops: '.788'},{name: 'Joe Sullivan', position: 'SS', team: 'MA', home: 'Charlestown', born: '1870', ops: '.740'},{name: 'Joe Kelley', position: 'LF', team: 'MA', home: 'Cambridge', born: '1871', ops: '.847'},{name: 'Jimmy Bannon', position: 'CF', team: 'MA', home: 'Amesbury', born: '1871', ops: '.832'},{name: 'Jimmy Ryan', position: 'RF', team: 'MA', home: 'Clinton', born: '1863', ops: '.816'}]},
    {map_id: 26, state_code: 'MI', name: 'Michigan', nickname: 'Robins'},
    {map_id: 27, state_code: 'MN', name: 'Minnesota', nickname: 'Common Loons'},
    {map_id: 28, state_code: 'MS', name: 'Mississippi', nickname: 'Mockingbirds'},
    {map_id: 29, state_code: 'MO', name: 'Missouri', nickname: 'Bluebirds'},
    {map_id: 30, state_code: 'MT', name: 'Montana', nickname: 'Western Meadowlarks'},
    {map_id: 31, state_code: 'NE', name: 'Nebraska', nickname: 'Western Meadowlarks'},
    {map_id: 32, state_code: 'NV', name: 'Nevada', nickname: 'Mountain Bluebirds'},
    {map_id: 33, state_code: 'NH', name: 'New Hampshire', nickname: 'Purple Finchs'},
    {map_id: 34, state_code: 'NJ', name: 'New Jersey', nickname: 'Eastern Goldfinchs'},
    {map_id: 35, state_code: 'NM', name: 'New Mexico', nickname: 'Roadrunners'},
    {map_id: 36, state_code: 'NY', name: 'New York', nickname: 'Bluebirds', parkImage: '/images/parks/ny.png', players: [
      {name: 'Joe Torre', position: 'C', team: 'NY', home: 'Brooklyn', born: '1940', ops: '.816'},
      {name: 'Lou Gehrig', position: '1B', team: 'NY', home: 'New York', born: '1903', ops: '1.075'},
      {name: 'Ross Barnes', position: '2B', team: 'NY', home: 'Mount Morris', born: '1850', ops: '.852'},
      {name: 'John McGraw', position: '3B', team: 'NY', home: 'Truxton', born: '1873', ops: '.873'},
      {name: 'Alex Rodriguez', position: 'SS', team: 'NY', home: 'New York', born: '1975', ops: '.941'},
      {name: 'Babe Herman', position: 'LF', team: 'NY', home: 'Buffalo', born: '1903', ops: '.909'},
      {name: 'Rocky Colavito', position: 'CF', team: 'NY', home: 'New York', born: '1933', ops: '.847'},
      {name: 'Hack Miller', position: 'RF', team: 'NY', home: 'New York', born: '1894', ops: '.846'}
    ]},
    {map_id: 37, state_code: 'NC', name: 'North Carolina', nickname: 'Cardinals'},
    {map_id: 38, state_code: 'ND', name: 'North Dakota', nickname: 'Western Meadowlarks'},
    {map_id: 39, state_code: 'OH', name: 'Ohio', nickname: 'Cardinals'},
    {map_id: 40, state_code: 'OK', name: 'Oklahoma', nickname: 'Scissor-tailed Flycatchers'},
    {map_id: 41, state_code: 'OR', name: 'Oregon', nickname: 'Western Meadowlarks'},
    {map_id: 42, state_code: 'PA', name: 'Pennsylvania', nickname: 'Ruffed Grouse'},
    {map_id: 44, state_code: 'RI', name: 'Rhode Island', nickname: 'Rhode Island Reds'},
    {map_id: 45, state_code: 'SC', name: 'South Carolina', nickname: 'Great Carolina Wrens'},
    {map_id: 46, state_code: 'SD', name: 'South Dakota', nickname: 'Ring-necked Pheasants'},
    {map_id: 47, state_code: 'TN', name: 'Tennessee', nickname: 'Mockingbirds'},
    {map_id: 48, state_code: 'TX', name: 'Texas', nickname: 'Mockingbirds', parkImage: '/images/parks/tex.png', players: [
      {name: 'Eddie Taubensee', position: 'C', team: 'TX', home: 'Beeville', born: '1968', ops: '.760'},
      {name: 'Norm Cash', position: '1B', team: 'TX', home: 'Justiceburg', born: '1934', ops: '.862'},
      {name: 'Rogers Hornsby', position: '2B', team: 'TX', home: 'Winters', born: '1896', ops: '1.000'},
      {name: 'Eddie Mathews', position: '3B', team: 'TX', home: 'Texarkana', born: '1931', ops: '.884'},
      {name: 'Topper Rigney', position: 'SS', team: 'TX', home: 'Groveton', born: '1897', ops: '.756'},
      {name: 'Lance Berkman', position: 'LF', team: 'TX', home: 'Waco', born: '1976', ops: '.943'},
      {name: 'Frank Robinson', position: 'CF', team: 'TX', home: 'Beaumont', born: '1935', ops: '.925'},
      {name: 'Tris Speaker', position: 'RF', team: 'TX', home: 'Hubbard', born: '1888', ops: '.917'}
    ]},
    {map_id: 49, state_code: 'UT', name: 'Utah', nickname: 'Common American Gulls'},
    {map_id: 50, state_code: 'VT', name: 'Vermont', nickname: 'Hermit Thrushes'},
    {map_id: 51, state_code: 'VA', name: 'Virginia', nickname: 'Cardinals'},
    {map_id: 53, state_code: 'WA', name: 'Washington', nickname: 'Willow Goldfinchs'},
    {map_id: 54, state_code: 'WV', name: 'West Virginia', nickname: 'Cardinals'},
    {map_id: 55, state_code: 'WI', name: 'Wisconsin', nickname: 'Robins'},
    {map_id: 56, state_code: 'WY', name: 'Wyoming', nickname: 'Western Meadowlarks'}
  ]
});

export default Team;
