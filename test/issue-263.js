var assert = require('assert'),
    Browscap = require('../browscap.js'),
    browscap = new Browscap(),
    browser;

suite('checking for issue 263.', function () {
  test('issue-263 ["Domnutch-Bot/Nutch-1.0 (Domnutch; http://www.Nutch.de/)"]', function () {
    browser = browscap.getBrowser('Domnutch-Bot/Nutch-1.0 (Domnutch; http://www.Nutch.de/)');

    assert.strictEqual(browser['Browser'], 'Domnutch Bot', 'Expected actual "Browser" to be \'Domnutch Bot\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Type'], 'Bot/Crawler', 'Expected actual "Browser_Type" to be \'Bot/Crawler\' (was \'' + browser['Browser_Type'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Maker'], 'nutch.de', 'Expected actual "Browser_Maker" to be \'nutch.de\' (was \'' + browser['Browser_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '1.0', 'Expected actual "Version" to be \'1.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['MajorVer'], '1', 'Expected actual "MajorVer" to be \'1\' (was \'' + browser['MajorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Crawler'], true, 'Expected actual "Crawler" to be true (was \'' + browser['Crawler'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
});
