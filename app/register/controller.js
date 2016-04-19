import Ember from 'ember';

export default Ember.Controller.extend({
  signUp(formValues) {
    const reviewer = this.store.createRecord(`reviewer`, formValues);

    reviewer.save()
      .then(() => {
        this.transitionToRoute(`reviews`);
      }).catch((err) => {
        alert(`There was an error registering this user: ${err.errors[0].detail}.`);
      });
  },
});
