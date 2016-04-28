import { moduleFor, test } from 'ember-qunit'

moduleFor('service:digital-fingerprint', 'Unit | Service | digital fingerprint', {
  // Specify the other units that are required for this test.
  needs: ['model:digital-fingerprint', 'model:statement']
})

// Replace this with your real tests.
test('it exists', function (assert) {
  const service = this.subject()
  assert.ok(service)
})
