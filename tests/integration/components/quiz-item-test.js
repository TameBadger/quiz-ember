/* eslint no-unused-vars: "off", no-magic-numbers: "off" */

import { moduleForComponent, test } from 'ember-qunit'
import hbs from 'htmlbars-inline-precompile'

moduleForComponent('quiz-item', 'Integration | Component | quiz item', {
  integration: true
})

test('renders title correctly', function (assert) {

  const statement = { title: 'I hug someone I love.' }

  const answer = { id: 1 }

  this.set('statement', statement)

  this.set('answer', answer)

  this.render(hbs`{{quiz-item statement=statement title=statement.title answer=answer}}`)

  assert.equal(this.$('.select-title').text().trim(), 'I hug someone I love.', 'title renders')

})

test('renders as selected on correct answer provided', function (assert) {

  const statement = { id: 1, title: 'I hug someone I love.' }

  const answer = { id: 1 }

  this.set('statement', statement)

  this.set('answer', answer)

  this.render(hbs`{{quiz-item statement=statement title=statement.title answer=answer}}`)

  assert.equal(this.$('li').attr('class'), 'ember-view quiz-item selected', 'quiz item selected')

})

test('renders as selected on correct answer provided', function (assert) {

  const statement = { id: 1, title: 'I hug someone I love.' }

  const answer = { id: 2 }

  this.set('statement', statement)

  this.set('answer', answer)

  this.render(hbs`{{quiz-item statement=statement title=statement.title answer=answer}}`)

  assert.equal(this.$('li').attr('class'), 'ember-view quiz-item', 'quiz item not selected')

})
