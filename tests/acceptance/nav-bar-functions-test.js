/* eslint no-undef: "off", no-magic-numbers: "off" */

import { test } from 'qunit'
import moduleForAcceptance from 'myapp/tests/helpers/module-for-acceptance'

moduleForAcceptance('Acceptance | nav bar functions')

const navButton = 'nav > .nav-button'

test('visiting /nav-bar-functions', function (assert) {

  visit('/')

  andThen(function () {
    assert.equal(currentURL(), '/')
    assert.equal(find(navButton).attr('class'), 'nav-button cant-back')
  })

  visit('/quiz/lovelanguages')

  andThen(function () {
    assert.equal(currentURL(), '/quiz/lovelanguages')
    assert.equal(find(navButton).attr('class'), 'nav-button can-back')
  })

  click(navButton)

  andThen(function () {
    assert.equal(currentURL(), '/')
    assert.equal(find(navButton).attr('class'), 'nav-button cant-back')
  })

})
