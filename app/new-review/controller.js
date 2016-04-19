import Ember from 'ember';

export default Ember.Controller.extend({
  saveReview(formValues) {
    const review = this.store.createRecord(`review`, formValues);

    review.save()
      .then(() => {
        this.transitionToRoute(`reviews`);
      });
  },
});
