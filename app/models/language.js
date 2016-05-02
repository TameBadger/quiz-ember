import Model from 'ember-data/model'
import attr from 'ember-data/attr'

import computed from 'ember-computed'

export default Model.extend({
  option: attr('string'),
  short: attr('string'),
  title: attr('string'),
  description: attr('string'),
  image: computed('short', function () {
    return 'assets/images/love_languages/5ll_icon-' + this.get('short') + '.png'
  })
})
