var assert = require('assert'),
    browscap = require('../browscap.js'),
    browser;

suite('checking for issue 620.', function () {
  test('issue-620', function () {
    browser = browscap.getBrowser("this user agent should never exist hopefully as it is is only used in browscap tests");

    assert.strictEqual(browser['Browser'], 'Default Browser');
  });
});
