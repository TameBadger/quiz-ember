import { moduleFor, test } from 'ember-qunit'

moduleFor('adapter:application', 'Unit | Adapter | application', {
})

test('adapter initializes', function (assert) {
  const adapter = this.subject()
  assert.ok(adapter)
})
