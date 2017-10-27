import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'

export default Route.extend({

  settings: service(),

  digitalFingerprint: service(),

  model() {
    const filter = this.get('settings.filterQuizzesByFingerprint')
    if (filter) {
      return this.store.query('quiz-sheet', {
        digitalFingerprint: this.get('digitalFingerprint.collectivePrints.fingerprintjs2')
      })
    } else {
      return this.store.findAll('quiz-sheet')
    }
  }

})
