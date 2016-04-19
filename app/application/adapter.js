import JSONAPIAdapter from 'ember-data/adapters/json-api';

export default JSONAPIAdapter.extend({
  host: `https://desolate-brushlands-19147.herokuapp.com`,
  namespace: `api`,
});
