import Component from '@ember/component'
import { inject as service } from '@ember/service'

export default Component.extend({

  quizzer: service(),

  tagName: 'ul',

  classNames: ['quiz-list']

})
