import Ember from 'ember';

export default Ember.Component.extend({
  isCardShowing: false,
  actions: {
    showCard: function () {
      this.set('isCardShowing', true);
    },
    hideCard: function () {
      this.set('isCardShowing', false);
    }
  }
});
