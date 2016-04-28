import Ember from 'ember'

const { Service, inject: { service } } = Ember

// import clientjs from 'clientjs'
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

    // I initially tested both fingerprinting libraries, to compare accuracy
    // clientjs was clearly more inaccurate, leaving this here to investigate
    // this.set('clientjs',new ClientJS())
    // const clientjsFingerprint = this.get('clientjs').getFingerprint()
    // this.set('collectivePrints.clientjsbasic',clientjsFingerprint)
    // const browserData = this.get('clientjs').getBrowserData()
    // this.set('collectivePrintData.clientjs',browserData)
    // console.log(this.get('collectivePrints'))
  },

  fingerprintjs2: null,

  currentPrintRecord: null,

  collectivePrints: Ember.Object.create({}),

  collectivePrintData: Ember.Object.create({})

  // clientjs: null,

})
