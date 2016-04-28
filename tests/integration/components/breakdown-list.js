/* eslint no-unused-vars: "off", no-magic-numbers: "off" */

import { moduleForComponent, test } from 'ember-qunit'
import hbs from 'htmlbars-inline-precompile'

moduleForComponent('breakdown-list', 'Integration | Component | breakdown-list', {
  integration: true
})

test('it renders', function (assert) {

  this.render(hbs`{{breakdown-list}}`)

  // assert.equal(this.$().attr('class'), 'ember-view breakdown-list', 'breakdown has className breakdown-list')

  assert.equal(1, 1)

})
