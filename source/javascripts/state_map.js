/*global d3, topojson, $ */

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

      if (d && centered !== d) {
        var centroid = path.centroid(d);
        x = centroid[0];
        y = centroid[1];
        k = 3;
        centered = d;
      } else {
        x = width / 2;
        y = height / 2;
        k = 1;
        centered = null;
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

$(function() {
  StateMap.draw();
});
