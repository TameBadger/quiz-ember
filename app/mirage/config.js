/* eslint no-console: "off" */

// import { postDigitalFingerprint } from './methods/post'
import { pair, language, statement } from './methods/get_single'
import { pairs, languages, statements } from './methods/get_all'

export default function () {

  this.urlPrefix = 'http://0.0.0.0:3000'

  this.passthrough('/statements')

  this.passthrough('/pairs')

  this.passthrough('/languages')

  this.passthrough('/pair-answers')

  this.passthrough('/quiz-sheets')

  this.passthrough('/quiz-sheets/:quiz_sheet_id')

  this.passthrough('/digital-fingerprints')

  // this.post('/digital-fingerprints', function (db, request) {
  //   return Ember.run.bind(this, postDigitalFingerprint)(db, request)
  // })

}

export function testConfig() {

  this.urlPrefix = 'http://0.0.0.0:3000'

  this.get('/languages', languages)

  this.get('/statements', statements)

  this.get('/pairs', pairs)

  this.get('/languages/:id', language)

  this.get('/statements/:id', statement)

  this.get('/pairs/:id', pair)

  // this.post('/statements', function (db, request) {
  //   return JSON.parse(request.requestBody)
  // })

  // this.post('/digital-fingerprints', function (db, request) {
  //   return Ember.run.bind(this, postDigitalFingerprint)(db, request)
  // })

  // this.post('/digital-fingerprints', postDigitalFingerprint)

}
