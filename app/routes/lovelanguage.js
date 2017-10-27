import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'

export default Route.extend({

  navigator: service(),

  model(params) {
    return this.store.findRecord('language', params.language_id)
  },

  afterModel(model) {
    this.get('navigator').set('_title', model.get('title'))
  }

})
