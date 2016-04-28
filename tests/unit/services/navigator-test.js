import { moduleFor, test } from 'ember-qunit'

moduleFor('service:navigator', 'Unit | Service | navigator', {
  // Specify the other units that are required for this test.
  // needs: ['service:foo']
})

test('navigator initializes correctly', function (assert) {
  const service = this.subject()
  assert.ok(service)
})
