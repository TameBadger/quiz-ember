import Ember from 'ember'

const { Route, inject: { service } } = Ember

export default Route.extend({

  navigator: service(),

  model(params) {
    return this.store.findRecord('language', params.language_id)
  },

  afterModel(model) {
    this.get('navigator').set('_title', model.get('title'))
  }

})
