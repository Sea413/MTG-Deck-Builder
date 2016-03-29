import Ember from 'ember';

export default Ember.Route.extend({
  model() {



    return this.store.findAll('card');


  },



  actions: {
    save3(params) {
      var newCard = this.store.createRecord('card', params);
      newCard.save();
      this.transitionTo('index');
    },
  }
});
