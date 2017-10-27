import Component from '@ember/component'
import { computed } from '@ember/object'
import { inject as service } from '@ember/service'

export default Component.extend({

  quizzer: service(),

  tagName: 'li',

  classNames: ['quiz-item'],

  classNameBindings: ['isSelected:selected'],

  isSelected: computed('answer', function () {
    return this.get('answer.id') === this.get('statement.id')
  }),

  click() {
    this.get('quizzer').select(this.get('statement'))
  }

})
