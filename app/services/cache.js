import { A } from '@ember/array'
import { hash } from 'rsvp'
import Service, { inject as service } from '@ember/service'

export default Service.extend({

  store: service(),

  init(...args) {
    this._super(args)
    hash({
      languages: this.get('store').findAll('language'),
      statement: this.get('store').findAll('statement'),
      pairs: this.get('store').findAll('pair')
    }).then(result=> {
      this.set('languages', result.languages)
      this.set('statements', result.statements)
      this.set('pairs', result.pairs)
    })
  },

  languages: A(),

  statements: A(),

  pairs: A()

})
