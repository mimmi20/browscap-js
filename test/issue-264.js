var assert = require('assert'),
    browscap = require('../browscap.js'),
    browser;

suite('checking for issue 264.', function () {
  test('issue-264', function () {
    browser = browscap.getBrowser("DiscoverEd/Nutch-1.7 (OER search crawler; http://wiki.creativecommons.org/DiscoverEd; webmaster@creativecommons.org)");

    assert.strictEqual(browser['Browser'], 'DiscoverEd');
    assert.strictEqual(browser['Browser_Type'], 'Bot/Crawler');
    assert.strictEqual(browser['Browser_Maker'], 'Creative Commons');
    assert.strictEqual(browser['Version'], '1.7');
    assert.strictEqual(browser['MajorVer'], '1');
    assert.strictEqual(browser['MinorVer'], '7');
    assert.strictEqual(browser['Crawler'], true);
  });
});
