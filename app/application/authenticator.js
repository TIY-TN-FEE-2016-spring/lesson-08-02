import Loopback from 'ember-simple-auth-loopback/authenticators/loopback';

export default Loopback.extend({
  loginEndpoint: `https://desolate-brushlands-19147.herokuapp.com/api/reviewers/login`,
});
