var assert = require('assert'),
    browscap = require('../browscap.js'),
    browser;

suite('checking for issue 620.', function () {
  test('issue-620 ["this user agent should never exist hopefully as it is is only used in browscap tests"]', function () {
    browser = browscap.getBrowser('this user agent should never exist hopefully as it is is only used in browscap tests');

    assert.strictEqual(browser['Browser'], 'Default Browser', 'Expected actual "Browser" to be \'Default Browser\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
});
