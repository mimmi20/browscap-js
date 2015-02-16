var assert = require('assert'),
    browscap = require('../browscap.js'),
    browser;

suite('checking for issue 258.', function () {
  test('issue-258', function () {
    browser = browscap.getBrowser("Mozilla/5.0 (compatible; nbot/2.0)");

    assert.strictEqual(browser['Browser'], 'nbot');
    assert.strictEqual(browser['Browser_Type'], 'Bot/Crawler');
    assert.strictEqual(browser['Browser_Maker'], 'unknown');
    assert.strictEqual(browser['Version'], '2.0');
    assert.strictEqual(browser['MajorVer'], '2');
    assert.strictEqual(browser['Crawler'], '1');
  });
});
