import Ember from 'ember'

const { Route, inject: { service } } = Ember

export default Route.extend({

  digitalFingerprint: service()

})
