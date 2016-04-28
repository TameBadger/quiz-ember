export function initialize(application) {
  application.inject('service:navigator', 'router', 'router:main')
  application.inject('service:quizzer', 'router', 'router:main')
  application.inject('service:score-calculator', 'router', 'router:main')
}

export default {
  name: 'routing',
  initialize
}
