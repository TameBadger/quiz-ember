/* eslint quote-props: "off" */

import Ember from 'ember'

const { Service, computed, observer } = Ember

export default Service.extend({

  backDisabled: true,

  _title: 'Quiz Me',

  title: computed('router.currentPath', function () {
    const routeEntry = this.get('routeMap')[this.router.currentPath]
    if (routeEntry && routeEntry.title !== 'calculated') {
      return routeEntry.title
    } else {
      return this.get('_title')
    }
  }),

  routeMap: {
    'index': { backDisabled: true, backToRoute: 'index', title: 'Quiz Me' },
    'quiz.index': { backDisabled: false, backToRoute: 'index', title: 'Quiz Me' },
    'quiz.lovelanguages': { backDisabled: false, backToRoute: 'index', title: 'Love Languages Quiz' },
    'quiz.new': { backDisabled: false, backToRoute: 'index', title: 'New Quiz' },
    'quiz.result': { backDisabled: false, backToRoute: 'quizzes', title: 'calculated' },
    'quiz.done': { backDisabled: false, backToRoute: 'quizzes', title: 'Quiz Result' },
    'lovelanguage': { backDisabled: false, backToRoute: 'previous', title: 'calculated' },
    'quizzes': { backDisabled: false, backToRoute: 'index', title: 'Your Quizzes' },
    'fingerprints': { backDisabled: false, backToRoute: 'index', title: 'All Fingerprints' },
    'catch-error': { backDisabled: false, backToRoute: 'index', title: 'Quiz Me Error' },
    'loading': { backDisabled: false, backToRoute: 'index', title: 'Loading..' }
  },

  _currentPath: observer('router.currentPath', function () {
    const routeEntry = this.get('routeMap')[this.router.currentPath]
    if (routeEntry) {
      this.set('backDisabled', routeEntry.backDisabled)
    }
  }),

  back() {
    const routeEntry = this.get('routeMap')[this.router.currentPath]
    if (routeEntry && routeEntry.backToRoute !== 'previous') {
      this.router.transitionTo(routeEntry.backToRoute)
    } else {
      history.back()
    }
  }
})
