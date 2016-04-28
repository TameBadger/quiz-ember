import Model from 'ember-data/model'
import { hasMany, belongsTo } from 'ember-data/relationships'

export default Model.extend({
  statements: hasMany('statement'),
  answer: belongsTo('statement')
})
