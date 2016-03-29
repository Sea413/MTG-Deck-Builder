import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  img: DS.attr(),
  color: DS.attr(),
});
