import Ember from 'ember'

const { Component, inject: { service } } = Ember

export default Component.extend({

  quizzer: service(),

  tagName: 'ul',

  classNames: ['quiz-list']

})
