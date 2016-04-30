import { moduleFor, test } from 'ember-qunit'
import startMirage from '../../helpers/setup-mirage-for-integration'

moduleFor('service:fake', 'Unit | Service | fake', {

  needs: ['model:statement'],

  beforeEach() {
    startMirage(this.container)
  },

  afterEach() {
    window.server.shutdown()
  }
})

test('initializes correctly', function (assert) {
  const service = this.subject()
  assert.ok(service)
})

test('loads fake data correctly', function (assert) {

  const service = this.subject()

  assert.equal(service.get('statements.length'), 0, 'statements initially 0')

  service.loadFakeStatement()

  assert.equal(service.get('statements.length'), 1, 'statements populated by load')
})

// test('loads mirage data correctly', function(assert) {

//   const service = this.subject()

//   assert.equal(service.get('statements.length'), 0, 'statements initially 0')

//   service.loadRealStatements()

//   assert.equal(service.get('statements.length'), 1, 'statements populated by load')
// })

test('creates data correctly', function (assert) {
  const service = this.subject()
  assert.ok(service)
})
