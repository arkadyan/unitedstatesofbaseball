/*global d3, topojson, $, _, window */

var StateMap = {
  draw: function() {

    var container = "#map";
    var width = $(container).width(),
        height = $(container).height(),
        centered;
    // console.log('width from d3 = ' + d3.select(container).style('width'));

    var projection = d3.geo.albersUsa()
        .scale(800)
        .translate([width / 2, height / 2]);

    var path = d3.geo.path()
        .projection(projection);

    var svg = d3.select(container).append("svg")
        .attr("width", width)
        .attr("height", height);

    svg.append("rect")
        .attr("class", "background")
        .attr("width", width)
        .attr("height", height)
        .on("click", clicked);

    var g = svg.append("g");

    d3.json("/data/us.json", function(error, us) {
      g.append("g")
          .attr("id", "states")
        .selectAll("path")
          .data(topojson.feature(us, us.objects.states).features)
        .enter().append("path")
          .attr("d", path)
          .on("click", clicked);

      g.append("path")
          .datum(topojson.mesh(us, us.objects.states, function(a, b) { return a !== b; }))
          .attr("id", "state-borders")
          .attr("d", path);
    });

    function clicked(d) {
      var x, y, k;
      var rootPath = '/';

      if (d && centered !== d) {
        var centroid = path.centroid(d);
        x = centroid[0];
        y = centroid[1];
        k = 3;
        centered = d;

        // Go to the state path
        var stateCode = _.find(stateMapping, function(state) { return state.map_id === d.id; }).id;
        window.location = rootPath + stateCode;

      } else {
        x = width / 2;
        y = height / 2;
        k = 1;
        centered = null;

        // Go to the root path
        window.location = rootPath;
      }

      g.selectAll("path")
          .classed("active", centered && function(d) { return d === centered; });

      g.transition()
          .duration(750)
          .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")scale(" + k + ")translate(" + -x + "," + -y + ")")
          .style("stroke-width", 1.5 / k + "px");
    }

  }
};

var stateMapping = [
{map_id: 1, id: 'AL', name: 'AL', nickname: 'Nicknames'},
{map_id: 2, id: 'AK', name: 'AK', nickname: 'Nicknames'},
{map_id: 4, id: 'AZ', name: 'AZ', nickname: 'Nicknames'},
{map_id: 5, id: 'AR', name: 'AR', nickname: 'Nicknames'},
{map_id: 6, id: 'CA', name: 'CA', nickname: 'Nicknames'},
{map_id: 8, id: 'CO', name: 'CO', nickname: 'Nicknames'},
{map_id: 9, id: 'CT', name: 'CT', nickname: 'Nicknames'},
{map_id: 10, id: 'DE', name: 'DE', nickname: 'Nicknames'},
{map_id: 12, id: 'FL', name: 'FL', nickname: 'Nicknames'},
{map_id: 13, id: 'GA', name: 'GA', nickname: 'Nicknames'},
{map_id: 15, id: 'HI', name: 'HI', nickname: 'Nicknames'},
{map_id: 16, id: 'ID', name: 'ID', nickname: 'Nicknames'},
{map_id: 17, id: 'IL', name: 'IL', nickname: 'Nicknames'},
{map_id: 18, id: 'IN', name: 'IN', nickname: 'Nicknames'},
{map_id: 19, id: 'IA', name: 'IA', nickname: 'Nicknames'},
{map_id: 20, id: 'KS', name: 'KS', nickname: 'Nicknames'},
{map_id: 21, id: 'KY', name: 'KY', nickname: 'Nicknames'},
{map_id: 22, id: 'LA', name: 'LA', nickname: 'Nicknames'},
{map_id: 23, id: 'ME', name: 'ME', nickname: 'Nicknames'},
{map_id: 24, id: 'MD', name: 'MD', nickname: 'Nicknames'},
{map_id: 25, id: 'MA', name: 'MA', nickname: 'Nicknames'},
{map_id: 26, id: 'MI', name: 'MI', nickname: 'Nicknames'},
{map_id: 27, id: 'MN', name: 'MN', nickname: 'Nicknames'},
{map_id: 28, id: 'MS', name: 'MS', nickname: 'Nicknames'},
{map_id: 29, id: 'MO', name: 'MO', nickname: 'Nicknames'},
{map_id: 30, id: 'MT', name: 'MT', nickname: 'Nicknames'},
{map_id: 31, id: 'NE', name: 'NE', nickname: 'Nicknames'},
{map_id: 32, id: 'NV', name: 'NV', nickname: 'Nicknames'},
{map_id: 33, id: 'NH', name: 'NH', nickname: 'Nicknames'},
{map_id: 34, id: 'NJ', name: 'NJ', nickname: 'Nicknames'},
{map_id: 35, id: 'NM', name: 'NM', nickname: 'Nicknames'},
{map_id: 36, id: 'NY', name: 'NY', nickname: 'Nicknames'},
{map_id: 37, id: 'NC', name: 'NC', nickname: 'Nicknames'},
{map_id: 38, id: 'ND', name: 'ND', nickname: 'Nicknames'},
{map_id: 39, id: 'OH', name: 'OH', nickname: 'Nicknames'},
{map_id: 40, id: 'OK', name: 'OK', nickname: 'Nicknames'},
{map_id: 41, id: 'OR', name: 'OR', nickname: 'Nicknames'},
{map_id: 42, id: 'PA', name: 'PA', nickname: 'Nicknames'},
{map_id: 44, id: 'RI', name: 'RI', nickname: 'Nicknames'},
{map_id: 45, id: 'SC', name: 'SC', nickname: 'Nicknames'},
{map_id: 46, id: 'SD', name: 'SD', nickname: 'Nicknames'},
{map_id: 47, id: 'TN', name: 'TN', nickname: 'Nicknames'},
{map_id: 48, id: 'TX', name: 'TX', nickname: 'Nicknames'},
{map_id: 49, id: 'UT', name: 'UT', nickname: 'Nicknames'},
{map_id: 50, id: 'VT', name: 'VT', nickname: 'Nicknames'},
{map_id: 51, id: 'VA', name: 'VA', nickname: 'Nicknames'},
{map_id: 53, id: 'WA', name: 'WA', nickname: 'Nicknames'},
{map_id: 54, id: 'WV', name: 'WV', nickname: 'Nicknames'},
{map_id: 55, id: 'WI', name: 'WI', nickname: 'Nicknames'},
{map_id: 56, id: 'WY', name: 'WY', nickname: 'Nicknames'}
];

$(function() {
  StateMap.draw();
});
