import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  type: DS.attr(),
  multiverseid: DS.attr(),
  text: DS.attr(),
  colors: DS.attr()
});

// export default DS.RESTAdapter.extend({
//   host: 'http://magictcgprices.appspot.com/api/cfb/price.json?cardname={{model.name}}'
//
// });
