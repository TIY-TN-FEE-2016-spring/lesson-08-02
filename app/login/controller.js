import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),

  noWeDont(formValues) {
    const { email, password } = formValues;

    // Now we need to know how to loginz
    this.get(`session`).authenticate(`authenticator:application`, email, password)
      .catch((reason) => {
        console.log(reason);
      });
  },
});
