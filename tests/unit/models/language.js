import { moduleForModel, test } from 'ember-qunit'

moduleForModel('language', 'Unit | Model | language', {
  needs: []
})

test('it exists', function (assert) {
  const model = this.subject()
  assert.ok(Boolean(model))
})
