import { moduleForModel, test } from 'ember-qunit';

moduleForModel('reviewer', 'Unit | Model | reviewer', {
  // Specify the other units that are required for this test.
  needs: ['model:review']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
