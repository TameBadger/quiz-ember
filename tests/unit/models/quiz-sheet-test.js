import { moduleForModel, test } from 'ember-qunit';

moduleForModel('quiz-sheet', 'Unit | Model | quiz sheet', {
  // Specify the other units that are required for this test.
  needs: ['model:digital-fingerprint', 'model:pair-answer']
});

test('it exists', function (assert) {
  const model = this.subject();
  // let store = this.store();
  assert.ok(Boolean(model));
});
