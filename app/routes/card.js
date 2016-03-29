import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('card', params.card_id);
  }
 //  model: function(params) {
 //  var url = 'http://http://magictcgprices.appspot.com/api/cfb/price.json?cardname=' + {{model.name}};
 //  return Ember.$.getJSON(url).then(function(responseJSON) {
 //    var price = [];
 //    responseJSON.results.forEach(function(price) {
 //      legislators.push(price);
 //    });
 //    return price;
 //  });
 // }
// });
});
