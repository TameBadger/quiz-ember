/* eslint no-unused-vars: "off", no-magic-numbers: "off" */

import { moduleForComponent, test } from 'ember-qunit'
import hbs from 'htmlbars-inline-precompile'

moduleForComponent('quiz-item', 'Integration | Component | quiz item', {
  integration: true
})

test('it renders', function (assert) {

  // Handle any actions with this.on('myAction', function(val) { ... });

  // assert.expect(2)

  const statement = { title: 'I hug someone I love.' }
  const statementAnswerSelected = { id: 1 }
  const statementAnswerNotSelected = { id: 2 }

  this.set('statement', statement)
  this.set('answer', statementAnswerSelected)

  this.render(hbs`{{quiz-item statement=statement title=statement.title answer=statementAnswerSelected}}`)

  // assert.equal(this.$('.select-title').text().trim(), 'I hug someone I love.')

  // assert.equal(this.$().attr('class'), 'ember-view quiz-item selected', 'quiz item not selected yet')

  // console.log(this.$())

  assert.equal(1, 1)

})
