import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'

export default Route.extend({

  quizzer: service(),

  digitalFingerprint: service(),

  model() {
    return this.store.createRecord('quiz-sheet', {
      digitalFingerprint: this.get('digitalFingerprint.currentPrintRecord')
    })
  },

  actions: {

    proceed() {
      this.get('quizzer').startQuiz(this.get('currentModel'))
    },

    willTransition(transition) {
      if (transition.intent.name !== 'quiz.lovelanguages') {
        this.get('currentModel').destroyRecord()
      }
    }

  }

})
