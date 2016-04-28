import Model from 'ember-data/model'
import attr from 'ember-data/attr'
import { hasMany, belongsTo } from 'ember-data/relationships'

export default Model.extend({
  title: attr('string'),
  digitalFingerprint: belongsTo('digital-fingerprint', { async: true }),
  pairAnswers: hasMany('pair-answer', { async: true })
})
