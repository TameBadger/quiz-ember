# Quiz Me

[![Build Status](https://travis-ci.org/TameBadger/quiz-ember.svg?branch=master)](https://travis-ci.org/TameBadger/quiz-ember)


A simple app, where you can take a quiz based on a pair of statements on a topic. The topic at this moment is static, and mostly a replica of one of the profiles found on the [5 Love Languages website](http://www.5lovelanguages.com).
You'll get a breakdown of the result on completing the quizz, and can access this result again later.
I experimented with [device fingerprinting](https://en.wikipedia.org/wiki/Device_fingerprint), as a method of identifying a user and storing their results against their device fingerprint.

Deployed at [github-pages](http://tamebadger.github.io/quiz-ember)
Deployed at [s3-aws](http://quiz-ember.s3-website-us-east-1.amazonaws.com)

Accompanying JSON API at [https://github.com/TameBadger/quiz-rails](https://github.com/TameBadger/quiz-rails)
Deployed on [heroku](https://hidden-crag-24768.herokuapp.com)
You can do some requests to retrieve 
[statements](https://hidden-crag-24768.herokuapp.com/statements)
[pairs](https://hidden-crag-24768.herokuapp.com/pairs)
[languages](https://hidden-crag-24768.herokuapp.com/languages)

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

## Roadmap / In Progress
* Implement settings menu for toggling auto-save.

## Roadmap / TODOS
* Add a variation of the docker image that includes ESLint.

* Make the quiz topic more dynamic.
* Add [ember-cordova](https://github.com/isleofcode/ember-cordova).
* Investigate [ember-cordova](https://github.com/isleofcode/ember-cordova) features for swapping platform specific templates/styles.

## Roadmap / Ongoing
* Add more tests

## Roadmap / Stuck
* Fix failing acceptance tests related to posting a record to mirage.
  Stuck via [link](http://stackoverflow.com/questions/36954576/issue-loading-records-via-ember-cli-mirage-in-unit-test)

## Roadmap / Done
* Automatic deployment via Travis CI to github-pages and aws s3
* Wire up api after deployed on heroku