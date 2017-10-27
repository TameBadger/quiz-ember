import Controller from '@ember/controller'
import { inject as service } from '@ember/service'

export default Controller.extend({

  scoreCalculator: service(),

  actions: {

    goTo(answer) {
      this.get('scoreCalculator').viewDetail(answer)
    },

    back() {
      this.transitionToRoute('quizzes')
    }
  }

})
