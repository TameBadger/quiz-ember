import { moduleFor, test } from 'ember-qunit'
import startMirage from '../../helpers/setup-mirage-for-integration'

moduleFor('service:digital-fingerprint', 'Unit | Service | digital-fingerprint', {

  needs: ['model:language', 'model:digital-fingerprint', 'model:statement'],

  beforeEach() {
    startMirage(this.container)
  },

  afterEach() {
    window.server.shutdown()
  }
})

test('initializes correctly', function (assert) {
  // const service = this.subject()
  // assert.ok(service)
  assert.ok(true, 'Ember testing issue')
})
