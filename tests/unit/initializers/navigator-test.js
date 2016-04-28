import Ember from 'ember'
import NavigatorInitializer from 'myapp/initializers/routing'
import { module, test } from 'qunit'

let application

module('Unit | Initializer | routing', {
  beforeEach() {
    Ember.run(function () {
      application = Ember.Application.create()
      application.deferReadiness()
    })
  }
})

// Replace this with your real tests.
test('it works', function (assert) {
  NavigatorInitializer.initialize(application)

  // you would normally confirm the results of the initializer here
  assert.ok(true)
})
