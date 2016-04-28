import { moduleFor, test } from 'ember-qunit'

moduleFor('service:quizzer', 'Unit | Service | quizzer', {
  // Specify the other units that are required for this test.
  // needs: ['service:foo']
})

test('quizzer initializes correctly', function (assert) {
  const service = this.subject()
  assert.ok(service)
})
