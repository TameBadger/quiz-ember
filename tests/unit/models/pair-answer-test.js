import { moduleForModel, test } from 'ember-qunit'

moduleForModel('pair-answer', 'Unit | Model | pair answer', {
  // Specify the other units that are required for this test.
  needs: ['model:pair', 'model:statement', 'model:quiz-sheet']
})

test('it exists', function (assert) {
  const model = this.subject()
  // let store = this.store();
  assert.ok(Boolean(model))
})
