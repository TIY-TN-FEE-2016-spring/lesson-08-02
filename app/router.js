import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('reviews');
  this.route('register');
  this.route('login');
  this.route('new-review');
});

export default Router;
