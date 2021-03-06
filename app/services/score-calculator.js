import Ember from 'ember'

const { Service, computed, A, inject: { service } } = Ember

export default Service.extend({

  store: service(),

  cache: service(),

  answers: A(),

  languages: computed.alias('cache.languages'),

  scoresByOptions: computed('answers.[]', function () {
    return this.get('languages')
    .map(language=> {
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

  maxScore: computed('answers.[]', function () {
    return this.get('scoresByOptions.firstObject.score')
  }),

  setup(model) {
    this.get('store')
    .query('pair-answer', { sheet: model.get('id') })
    .then(pairs=> {
      pairs.filterBy('sheet.id', model.get('id')).forEach(pair=> {
        this.get('answers').addObject(pair.get('answer'))
      })
    })
  },

  clear() {
    this.set('answers', A())
  },

  viewDetail(answer) {
    this.router.transitionTo('lovelanguage', answer.language)
  }
})
