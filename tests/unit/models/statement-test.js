import { moduleForModel, test } from 'ember-qunit'

moduleForModel('statement', 'Unit | Model | statement', {
  needs: []
})

test('it exists', function (assert) {
  const model = this.subject()
  assert.ok(Boolean(model))
})
