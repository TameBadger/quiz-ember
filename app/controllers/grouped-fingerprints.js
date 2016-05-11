import Ember from 'ember'

import groupBy from 'ember-group-by'

const { Controller, computed } = Ember

export default Controller.extend({

  groups: groupBy('model', 'fingerprint'),

  stats: computed('groups', function(){
    return this.get('groups').map((g)=>{
      g.detail = UAParser(g.items[0].get('ua'))
      g.count = g.items.length
      return g
    })
  })

})
