import Ember from 'ember'

const { Service, computed, inject: { service } } = Ember

import ClientJS from 'clientjs'
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

    this.set('clientjs', new ClientJS())

    const clientjsFingerprint = this.get('clientjs').getFingerprint()

    this.set('collectivePrints.clientjsbasic', clientjsFingerprint)

    this.set('collectivePrintData.clientjs', this.get('clientjs').getBrowserData())

  },

  os: computed('clientjs', function () {
    return this.get('clientjs').getOS()
  }),

  browser: computed('clientjs', function () {
    return this.get('clientjs').getBrowser()
  }),

  osPicture: computed('clientjs', function () {
    return 'assets/images/os/' + this.get('clientjs')
    .getOS()
    .toLowerCase() + '.png'
  }),

  browserPicture: computed('clientjs', function () {
    return 'assets/images/browser/' + this.get('clientjs')
    .getBrowser()
    .toLowerCase() + '.png'
  }),

  fingerprintjs2: null,

  clientjs: null,

  currentPrintRecord: null,

  collectivePrints: Ember.Object.create({}),

  collectivePrintData: Ember.Object.create({}),

  stringified: computed('collectivePrints.fingerprintjs2', function () {
    return JSON.stringify(this.get('collectivePrints.fingerprintjs2'))
  })

})
