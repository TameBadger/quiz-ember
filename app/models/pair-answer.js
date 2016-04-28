import Model from 'ember-data/model'
import { belongsTo } from 'ember-data/relationships'

export default Model.extend({
  pair: belongsTo('pair'),
  answer: belongsTo('statement'),
  sheet: belongsTo('quiz-sheet')
})
