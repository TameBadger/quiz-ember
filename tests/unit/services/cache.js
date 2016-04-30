import { moduleFor, test } from 'ember-qunit'
import startMirage from '../../helpers/setup-mirage-for-integration'

moduleFor('service:cache', 'Unit | Service | cache', {

  needs: ['model:language', 'model:statement', 'model:pair', 'model:pair-answer'],

  beforeEach() {
    startMirage(this.container)
  },

  afterEach() {
    window.server.shutdown()
  }
})

test('cache initializes correctly', function (assert) {
  const service = this.subject()
  assert.ok(service)
})

test('cache loads initial data', function (assert) {

  server.create('test', { name: 'Lnk' })

  const service = this.subject()

  const languages = service.get('languages')

  assert.equal(5, languages.get('length'))
})
