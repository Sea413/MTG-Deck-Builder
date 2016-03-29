import Ember from 'ember';

export default Ember.Component.extend({
  addNewCard: false,
  actions: {
    cardFormShow() {
      this.set('addNewCard', true);
    },

    save1() {
      var params = {
        name: this.get('name'),
        img: this.get('img'),
        color: this.get('color'),
      };
      this.set('addNewCard', false);
      this.sendAction('save2', params);
    }
  }
});
