import DS from 'ember-data';

var State = DS.Model.extend({
  code: DS.attr('string'),
  name: DS.attr('string')
});

State.reopenClass({
  FIXTURES: [
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
  ]
});

export default State;
