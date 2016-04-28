import Ember from 'ember'

const { Component, computed, inject: { service } } = Ember

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
