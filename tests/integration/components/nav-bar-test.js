/* eslint newline-per-chained-call: "off", no-trailing-spaces: "off", no-magic-numbers: "off" */

import Service from '@ember/service'

import { moduleForComponent, test } from 'ember-qunit'
import hbs from 'htmlbars-inline-precompile'

const locationStub = Service.extend({
  backDisabled: true,
  title: 'Quizlet'
})

moduleForComponent('nav-bar', 'Integration | Component | nav bar', {
  integration: true,
  beforeEach: function () {
    this.register('service:navigator', locationStub)
    this.inject.service('navigator')
  }
})

test('correct nav-bar instantiation', function (assert) {

  assert.expect(4)

  this.render(hbs`{{nav-bar}}`)

  assert.equal(
    this.$('h1.nav-title').text().trim(), 'Quizlet',
    'Initial Title value should be Quizlet'
  )

  assert.equal(
    this.$('div.nav-button').attr('class'),
    'nav-button cant-back', 'Initial button className should be cant-back'
  )

  this.set('navigator.title', 'something else')

  assert.equal(
    this.$('h1.nav-title').text().trim(), 'something else',
    'Setting title on service should change component title'
  )

  this.set('navigator.backDisabled', false)

  assert.equal(
    this.$('div.nav-button').attr('class'),
    'nav-button can-back', 'Initial button className should be can-back'
  )

})
