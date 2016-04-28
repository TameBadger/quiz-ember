import Ember from 'ember'

const { Component, computed: { alias }, inject: { service } } = Ember

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
