/* eslint no-undef: "off" */

import Ember from 'ember'
import groupBy from 'ember-group-by'

const { Controller, computed } = Ember

export default Controller.extend({

  groups: groupBy('model', 'fingerprint'),

  stats: computed('groups', function () {
    return this.get('groups').map(g=> {
      g.detail = UAParser(g.items[0].get('ua'))
      g.count = g.items.length
      g.browserPicture = 'assets/images/browser/' + g.detail.browser.name.toLowerCase() + '.png'
      g.osPicture = 'assets/images/os/' + g.detail.os.name.toLowerCase() + '.png'
      g.fingerprint = g.value
      return g
    })
  })

})
