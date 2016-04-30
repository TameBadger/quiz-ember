import Ember from 'ember'

const { Service, inject: { service } } = Ember

import fingerprintjs2 from 'fingerprintjs2'

export default Service.extend({

  store: service(),

  init(...args) {
    this._super(args)
    this.set('fingerprintjs2', new fingerprintjs2())
    this.get('fingerprintjs2').get((hash, data)=> {
      this.set('collectivePrints.fingerprintjs2', hash)
      this.set('collectivePrintData.fingerprintjs2', data)
      this.get('store')
      .createRecord('digital-fingerprint', {
        fingerprint: hash,
        ua: data.find(x=> x.key === 'user_agent').value,
        action: 'entered_app'
      })
      .save()
      .then(record=> {
        this.set('currentPrintRecord', record)
      })
    })
  },

  fingerprintjs2: null,

  currentPrintRecord: null,

  collectivePrints: Ember.Object.create({}),

  collectivePrintData: Ember.Object.create({})

})
