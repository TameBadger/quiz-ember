import Ember from 'ember'

const { Route, inject: { service } } = Ember

export default Route.extend({

  scoreCalculator: service(),

  navigator: service(),

  model(params) {
    return this.store.findRecord('quiz-sheet', params.quiz_sheet_id)
  },

  afterModel(model) {
    this.get('scoreCalculator').setup(model)
    this.get('navigator').set('_title', model.get('title'))
  },

  deactivate() {
    this.get('scoreCalculator').clear()
  }

})
