import { moduleForModel, test } from 'ember-qunit';

moduleForModel('review', 'Unit | Model | review', {
  // Specify the other units that are required for this test.
  needs: ['model:reviewer', 'model:coffee-shop']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
