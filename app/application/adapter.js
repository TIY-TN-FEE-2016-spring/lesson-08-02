import JSONAPIAdapter from 'ember-data/adapters/json-api';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default JSONAPIAdapter.extend(DataAdapterMixin, {
  authorizer: `authorizer:application`,

  host: `https://desolate-brushlands-19147.herokuapp.com`,
  namespace: `api`,
});
