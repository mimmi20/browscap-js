var assert = require('assert'),
    browscap = require('../browscap.js'),
    browser;

suite('checking for issue 137.', function () {
  test('issue-137', function () {
    browser = browscap.getBrowser("Mozilla/5.0 (compatible; Konqueror/2.2.2; Linux 2.4.14-xfs; X11; i686)");

    assert.strictEqual(browser['Browser'], 'Konqueror');
    assert.strictEqual(browser['Browser_Type'], 'Browser');
    assert.strictEqual(browser['Browser_Bits'], '32');
    assert.strictEqual(browser['Browser_Maker'], 'KDE e.V.');
    assert.strictEqual(browser['Version'], '2.2');
    assert.strictEqual(browser['MajorVer'], '2');
    assert.strictEqual(browser['MinorVer'], '2');
    assert.strictEqual(browser['Platform'], 'Linux');
    assert.strictEqual(browser['Platform_Version'], 'unknown');
    assert.strictEqual(browser['Platform_Bits'], '32');
    assert.strictEqual(browser['Platform_Maker'], 'Linux Foundation');
    assert.strictEqual(browser['isMobileDevice'], '');
    assert.strictEqual(browser['isTablet'], '');
    assert.strictEqual(browser['Crawler'], '');
    assert.strictEqual(browser['Device_Name'], 'Linux Desktop');
    assert.strictEqual(browser['Device_Maker'], 'Various');
    assert.strictEqual(browser['Device_Type'], 'Desktop');
    assert.strictEqual(browser['Device_Pointing_Method'], 'mouse');
    assert.strictEqual(browser['Device_Code_Name'], 'Linux Desktop');
    assert.strictEqual(browser['Device_Brand_Name'], 'unknown');
    assert.strictEqual(browser['RenderingEngine_Name'], 'KHTML');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown');
    assert.strictEqual(browser['RenderingEngine_Maker'], 'KDE');
  });
});
