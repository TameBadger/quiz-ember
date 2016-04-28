import { moduleForModel, test } from 'ember-qunit'

moduleForModel('pair', 'Unit | Model | pair', {
  needs: ['model:statement']
})

test('it exists', function (assert) {
  const model = this.subject()
  assert.ok(Boolean(model))
})
