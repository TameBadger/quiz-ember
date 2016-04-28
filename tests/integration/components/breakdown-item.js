import { moduleForComponent, test } from 'ember-qunit'
import hbs from 'htmlbars-inline-precompile'

moduleForComponent('breakdown-item', 'Integration | Component | breakdown item', {
  integration: true
})

test('breakdown-item initial render correct', function (assert) {

  const score8 = '8'
  const score5 = 5
  const optionA = 'A'

  this.set('score', score8)
  this.set('option', optionA)
  this.set('title', 'I AM TITLE')

  this.render(hbs`{{breakdown-item title=title score=score option=option}}`)

  assert.equal(this.$('div.breakdown-title').text().trim(), 'I AM TITLE', 'Title renders correctly')
  assert.equal(this.$('div.breakdown-score').text().trim(), score8, 'Score renders correctly')

  const li = this.$('li')
  const className = li.attr('class')

  assert.ok(className.indexOf('score-' + score8), 'The corresponding score class rendered correctly')
  assert.ok(className.indexOf('color-' + optionA), 'The corresponding color class rendered correctly')

  this.set('score', score5)

  this.render(hbs`{{breakdown-item title=title score=score option=option}}`)

  assert.ok(
    this.$('li').attr('class').indexOf('score-' + score5),
    'The corresponding score class re-rendered correctly'
  )

})
