import { moduleForComponent, test } from 'ember-qunit'
import hbs from 'htmlbars-inline-precompile'

moduleForComponent('fingerprint-detail', 'Integration | Component | fingerprint detail', {
  integration: true
})

test('it renders', function (assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{fingerprint-detail}}`)

  assert.equal(this.$().text().trim(), '')

  // Template block usage:
  this.render(hbs`
    {{#fingerprint-detail}}
      template block text
    {{/fingerprint-detail}}
  `)

  assert.equal(this.$().text().trim(), 'template block text')
})
