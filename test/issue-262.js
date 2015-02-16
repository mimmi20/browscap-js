var assert = require('assert'),
    browscap = require('../browscap.js'),
    browser;

suite('checking for issue 262.', function () {
  test('issue-262', function () {
    browser = browscap.getBrowser("Mozilla/5.0 (compatible; AhrefsBot/5.0; +http://ahrefs.com/robot/)");

    assert.strictEqual(browser['Comment'], 'AhrefsBot');
    assert.strictEqual(browser['Browser'], 'AhrefsBot');
    assert.strictEqual(browser['Browser_Type'], 'Bot/Crawler');
    assert.strictEqual(browser['Browser_Maker'], 'Ahrefs Inc');
    assert.strictEqual(browser['Version'], '5.0');
    assert.strictEqual(browser['MajorVer'], '5');
    assert.strictEqual(browser['MinorVer'], '0');
    assert.strictEqual(browser['Crawler'], '1');
  });
});
