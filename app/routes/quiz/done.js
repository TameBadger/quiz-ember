import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'

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
