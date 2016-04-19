import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  rating: attr(),
  comments: attr(),
  date: attr(),

  reviewer: belongsTo(`reviewer`),
  coffeeShop: belongsTo(`coffee-shop`),
});
