import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'

export default Route.extend({

  quizzer: service(),

  actions: {

    cancel() {
      this.transitionTo('index')
    },

    willTransition(transition) {
      const validRoutes = ['quiz.lovelanguages', 'quiz.done']
      if (transition.intent.name !== validRoutes[0] && transition.intent.name !== validRoutes[1]) {
        this.get('quizzer').sheetCancelled()
      }
    }
  }

})
