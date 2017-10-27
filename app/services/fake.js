import EmberObject from '@ember/object'
import { A } from '@ember/array'
import Service, { inject as service } from '@ember/service'

export default Service.extend({

  init(...args) {
    this._super(args)
    this.set('statements', A())
  },

  store: service(),

  statements: A(),

  loadFakeStatement() {
    this.get('statements').addObject(EmberObject.create({
      title: 'Statement 1',
      option: 'A'
    }))
  },

  loadRealStatements() {
    this.get('store')
      .findAll('statement')
      .then(statements=> {
        this.get('statements').addObjects(statements)
      })
  },

  createRealStatement() {
    this.get('store').createRecord('statement', {
      title: 'Statement 1',
      option: 'A'
    })
  }

})
