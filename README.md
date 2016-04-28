# Quiz Me

A simple app, where you can take a quiz based on a pair of statements on a topic. The topic at this moment is static, and mostly a replica of one of the profiles found on the [5 Love Languages website](http://www.5lovelanguages.com).
You'll get a breakdown of the result on completing the quizz, and can access this result again later.
I experimented with [device fingerprinting](https://en.wikipedia.org/wiki/Device_fingerprint), as a method of identifying a user and storing their results against their device fingerprint.

## Ember CLI in a jiffy

If you don't want to spend time following the installation instructions below. Go ahead and use the [docker image](https://hub.docker.com/r/danlynn/ember-cli/) for Ember CLI.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

## Roadmap / TODOS
* Fix failing acceptance tests related to posting a record to mirage.
* Add a variation of the docker image that includes ESLint.
* Implement settings menu for toggling auto-save.
* Make the quiz topic more dynamic.
* Add more tests.
* Add [ember-cordova](https://github.com/isleofcode/ember-cordova).
* Investigate [ember-cordova](https://github.com/isleofcode/ember-cordova) features for swapping platform specific templates/styles.
