import Ember from 'ember'

const { Route, inject: { service } } = Ember

export default Route.extend({

  quizzer: service(),

  actions: {
    willTransition(transition) {
      if (transition.intent.name === 'index') {
        this.get('quizzer').sheetCompleted()
      }
    }
  }

})
