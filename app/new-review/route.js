import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      coffeeShops: this.store.findAll(`coffee-shop`),

      formValues: {
        rating: "1",
        comments: ``,
        coffeeShop: null,
      },
    });
  },
});
