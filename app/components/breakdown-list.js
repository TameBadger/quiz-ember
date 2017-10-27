import Component from '@ember/component'
import { computed } from '@ember/object'

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
