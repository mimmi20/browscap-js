var assert = require('assert'),
    Browscap = require('../browscap.js'),
    browscap = new Browscap(),
    browser;

suite('checking for issue 262.', function () {
  test('issue-262 ["Mozilla/5.0 (compatible; AhrefsBot/5.0; +http://ahrefs.com/robot/)"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (compatible; AhrefsBot/5.0; +http://ahrefs.com/robot/)');

    assert.strictEqual(browser['Comment'], 'AhrefsBot', 'Expected actual "Comment" to be \'AhrefsBot\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'AhrefsBot', 'Expected actual "Browser" to be \'AhrefsBot\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Type'], 'Bot/Crawler', 'Expected actual "Browser_Type" to be \'Bot/Crawler\' (was \'' + browser['Browser_Type'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Maker'], 'Ahrefs Pte Ltd', 'Expected actual "Browser_Maker" to be \'Ahrefs Pte Ltd\' (was \'' + browser['Browser_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '5.0', 'Expected actual "Version" to be \'5.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['MajorVer'], '5', 'Expected actual "MajorVer" to be \'5\' (was \'' + browser['MajorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['MinorVer'], '0', 'Expected actual "MinorVer" to be \'0\' (was \'' + browser['MinorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Crawler'], true, 'Expected actual "Crawler" to be true (was \'' + browser['Crawler'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
});
