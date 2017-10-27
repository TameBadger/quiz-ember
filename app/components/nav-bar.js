import Component from '@ember/component'
import { alias } from '@ember/object/computed'
import { inject as service } from '@ember/service'

export default Component.extend({

  navigator: service(),

  tagName: 'nav',

  backDisabled: alias('navigator.backDisabled'),

  title: alias('navigator.title'),

  actions: {

    back() {
      this.get('navigator').back()
    }

  }

})
