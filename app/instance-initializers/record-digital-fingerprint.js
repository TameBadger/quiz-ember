export function initialize(applicationInstance) {
  applicationInstance.lookup('service:digital-fingerprint')
  applicationInstance.lookup('service:cache')
}

export default {
  name: 'record-digital-fingerprint',
  initialize
}
