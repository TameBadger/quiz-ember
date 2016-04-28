import Ember from 'ember'

const { Service, computed, A, run: { later }, inject: { service } } = Ember

export default Service.extend({

  store: service(),

  cache: service(),

  settings: service(),

  languages: computed.alias('cache.languages'),

  pairs: computed.alias('cache.pairs'),

  currentQuestion: null,

  answer: null,

  answers: A(),

  scoresByOptions: computed('answers', function () {
    return this.get('languages').map(language=> {
      return {
        language: language,
        option: language.get('option'),
        title: language.get('title'),
        score: this.get('answers')
                .filterBy('option', language.get('option'))
                .get('length')
      }
    })
    .sortBy('score')
    .reverse()
  }),

  maxScore: computed('answers', function () {
    return this.get('scoresByOptions.firstObject.score')
  }),

  startQuiz(newQuizSheet) {
    this.set('currentQuestion', this.get('pairs.firstObject'))
    if (this.get('settings.autoSave')) {
      newQuizSheet.save().then(savedQuizSheet=> {
        this.continueToQuiz(savedQuizSheet)
      })
    } else {
      this.continueToQuiz(newQuizSheet)
    }
  },

  continueToQuiz(newQuizSheet) {
    this.set('currentSheet', newQuizSheet)
    this.router.transitionTo('quiz.lovelanguages')
  },

  savePairAnswer() {
    return this.get('store')
    .createRecord('pair-answer', {
      pair: this.get('currentQuestion'),
      answer: this.get('answer'),
      sheet: this.get('currentSheet')
    })
    .save()
  },

  nextPair() {
    const currentPair = this.get('currentQuestion.id')
    const nextPair = this.get('pairs').objectAt(parseInt(currentPair, 10))
    if (nextPair) {
      this.set('currentQuestion', nextPair)
      this.set('answer', null)
    } else {
      this.set('currentQuestion', null)
      this.set('answer', null)
      this.router.transitionTo('quiz.done')
    }
  },

  select(answer) {
    this.set('answer', answer)
    this.get('answers').addObject(answer)
    if (this.get('settings.autoSave')) {
      this.savePairAnswer().then(()=> {
        this.nextPair()
      })
    } else {
      const milliseconds = 100
      later(()=> {
        this.nextPair()
      }, milliseconds)
    }
  },

  sheetCancelled() {
    this.sheetCompleted()
  },

  sheetCompleted() {
    // -> this.router.transitionTo('index')
    // ^ todo implement this as some sort of example of a "race condition" of sorts
    this.set('answers', A())
    this.set('currentQuestion', null)
    this.set('answer', null)
  },

  viewDetail(answer) {
    this.router.transitionTo('lovelanguage', answer.language)
  }
})
