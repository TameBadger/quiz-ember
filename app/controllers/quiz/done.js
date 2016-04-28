import Ember from 'ember'

const { Controller, inject: { service } } = Ember

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
