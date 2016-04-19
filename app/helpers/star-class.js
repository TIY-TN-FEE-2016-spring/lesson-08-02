import Ember from 'ember';

export function starClass([rating, value]) {
  if (rating >= value) {
    return `fa-star`;
  }

  return `fa-star-o`;
}

export default Ember.Helper.helper(starClass);
