import Ember from 'ember'
import config from './config/environment'

const Router = Ember.Router.extend({
  location: config.locationType
})

Router.map(function () {
  this.route('quiz', function () {
    this.route('lovelanguages')
    this.route('new')
    this.route('result', { path: '/result/:quiz_sheet_id' })
    this.route('done')
  })
  this.route('languages')
  this.route('lovelanguage', { path: '/lovelanguage/:language_id' })
  this.route('quizzes')
  this.route('fingerprints')
  this.route('my-digital-fingerprint');
})

export default Router
