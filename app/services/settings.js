import Ember from 'ember'

const { Service } = Ember

export default Service.extend({

  autoSave: true,

  autoSaveViaServiceWorker: false,

  allowRecord: true,

  filterQuizzesByFingerprint: true

})
