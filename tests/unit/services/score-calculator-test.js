// import Ember from 'ember'

import { moduleFor, test } from 'ember-qunit'

moduleFor('service:score-calculator', 'Unit | Service | score calculator', {
  needs: ['service:cache', 'model:language', 'model:statement', 'model:pair', 'model:pair-answer']
})

test('score-calculator initializes', function (assert) {
  const service = this.subject()
  assert.ok(service)
})

// test('loads languages from cache', function (assert) {
//   const service = this.subject()
//   const languages = service.get('languages')
//   assert.equal(languages.get('length'), 5, 'all languages loaded')
// })

// test('answers load correctly before and after setup', function (assert) {
//   const service = this.subject()
//   const answers = service.get('answers')
//   assert.equal(answers.get('length'), 0, 'answers initialized correctly')
//   // const quizSheet = Ember.Object.create({ id: 1 })
//   // service.setup(quizSheet)
//   // assert.equal(answers.get('length'), 0, 'answers are now populated after setup')
// })
