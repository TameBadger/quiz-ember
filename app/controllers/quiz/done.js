import Controller from '@ember/controller'
import { inject as service } from '@ember/service'

export default Controller.extend({

  quizzer: service(),

  actions: {

    goTo(answer) {
      this.get('quizzer').viewDetail(answer)
    },

    done() {
      this.get('quizzer').sheetCompleted()
      this.transitionToRoute('index')
    }
  }

})
