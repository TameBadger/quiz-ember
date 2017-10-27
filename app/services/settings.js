import Service from '@ember/service'

export default Service.extend({

  autoSave: true,

  autoSaveViaServiceWorker: false,

  allowRecord: true,

  filterQuizzesByFingerprint: true

})
