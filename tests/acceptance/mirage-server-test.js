/* eslint no-undef: "off", no-magic-numbers: "off" */

import { test } from 'qunit'
import moduleForAcceptance from 'myapp/tests/helpers/module-for-acceptance'

moduleForAcceptance('Acceptance | mirage server')

test('visiting /mirage-server', function (assert) {

  visit('/languages')

  andThen(function () {
    assert.equal(currentURL(), '/languages')
    assert.equal(find('li').length, 5)
  })
})
