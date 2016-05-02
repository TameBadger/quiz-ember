import { moduleForModel, test } from 'ember-qunit';

moduleForModel('language', 'Unit | Model | language', {
  needs: []
});

test('it exists', function (assert) {
  const model = this.subject({ short: 'quality' });

  assert.equal(model.get('image'), 'assets/images/love_languages/5ll_icon-quality.png');

  assert.ok(Boolean(model));
});
