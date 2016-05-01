import Ember from 'ember'

const { Component, run: { debounce } } = Ember

import computed from 'ember-computed'

export default Component.extend({

  tagName: 'li',

  classNames: ['breakdown-item'],

  classNameBindings: ['scoreProgress', 'colorOption'],

  proxyScore: 'score-1',

  init(...args) {
    this._super(args)
    debounce(this, this._setProgress, 1)
  },

  scoreProgress: computed('proxyScore', function () {
    return this.get('proxyScore')
  }),

  _setProgress() {
    this.set('proxyScore', 'score-' + this.get('breakdown.score'))
  },

  colorOption: computed('breakdown.option', function () {
    return 'color-' + this.get('breakdown.option')
  }),

  click() {
    this.get('onClick')(this.get('breakdown'))
  }

})
