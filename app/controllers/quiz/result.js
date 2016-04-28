import Ember from 'ember'

const { Controller, inject: { service } } = Ember

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
