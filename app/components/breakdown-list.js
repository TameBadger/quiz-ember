import Ember from 'ember'

const { Component, computed } = Ember

export default Component.extend({

  tagName: 'ul',

  classNames: ['breakdown-list'],

  classNameBindings: ['_maxScore'],

  _maxScore: computed('maxScore', function () {
    const roundTo = 5
    return 'max-' + Math.ceil(this.get('maxScore') / roundTo) * roundTo
  }),

  actions: {
    viewDetail(breakdown) {
      this.viewDetail(breakdown)
    }
  }

})
