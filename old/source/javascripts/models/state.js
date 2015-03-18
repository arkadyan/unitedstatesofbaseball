/*global App, DS */

App.Team = DS.Model.extend({
  code: DS.attr('string'),
  name: DS.attr('string')
});

App.Team.FIXTURES = [
 {
   code: 'NY',
   name: 'New York'
 },
 {
   code: 'MA',
   name: 'Massachusetts'
 },
 {
   code: 'ME',
   name: 'Maine'
 }
];
