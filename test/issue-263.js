var assert = require('assert'),
    browscap = require('../browscap.js'),
    browser;

suite('checking for issue 263.', function () {
  test('issue-263', function () {
    browser = browscap.getBrowser("Domnutch-Bot/Nutch-1.0 (Domnutch; http://www.Nutch.de/)");

    assert.strictEqual(browser['Browser'], 'Domnutch Bot');
    assert.strictEqual(browser['Browser_Type'], 'Bot/Crawler');
    assert.strictEqual(browser['Browser_Maker'], 'nutch.de');
    assert.strictEqual(browser['Version'], '1.0');
    assert.strictEqual(browser['MajorVer'], '1');
    assert.strictEqual(browser['Crawler'], true);
  });
});
