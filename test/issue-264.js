"use strict";

var assert = require('assert'),
    Browscap = require('../browscap.js'),
    browscap = new Browscap(),
    browser;

suite('checking for issue 264.', function () {
  test('issue-264 ["DiscoverEd/Nutch-1.7 (OER search crawler; http://wiki.creativecommons.org/DiscoverEd; webmaster@creativecommons.org)"]', function () {
    browser = browscap.getBrowser('DiscoverEd/Nutch-1.7 (OER search crawler; http://wiki.creativecommons.org/DiscoverEd; webmaster@creativecommons.org)');

    assert.strictEqual(browser['Browser'], 'DiscoverEd', 'Expected actual "Browser" to be \'DiscoverEd\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Type'], 'Bot/Crawler', 'Expected actual "Browser_Type" to be \'Bot/Crawler\' (was \'' + browser['Browser_Type'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Maker'], 'Creative Commons', 'Expected actual "Browser_Maker" to be \'Creative Commons\' (was \'' + browser['Browser_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '1.7', 'Expected actual "Version" to be \'1.7\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['MajorVer'], '1', 'Expected actual "MajorVer" to be \'1\' (was \'' + browser['MajorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['MinorVer'], '7', 'Expected actual "MinorVer" to be \'7\' (was \'' + browser['MinorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Crawler'], true, 'Expected actual "Crawler" to be true (was \'' + browser['Crawler'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
});
