var assert = require('assert'),
    browscap = require('../browscap.js'),
    browser;

suite('checking for issue 039.', function () {
  test('issue-039', function () {
    browser = browscap.getBrowser("Mozilla/5.0 (Windows; U; Windows NT 5.1; de; rv:1.8.1.11) Gecko/20071127 Firefox/2.0.0.1");

    assert.strictEqual(browser['Browser'], 'Firefox');
    assert.strictEqual(browser['Browser_Type'], 'Browser');
    assert.strictEqual(browser['Browser_Bits'], '32');
    assert.strictEqual(browser['Browser_Maker'], 'Mozilla Foundation');
    assert.strictEqual(browser['Version'], '2.0');
    assert.strictEqual(browser['MajorVer'], '2');
    assert.strictEqual(browser['MinorVer'], '0');
    assert.strictEqual(browser['Platform'], 'WinXP');
    assert.strictEqual(browser['Platform_Version'], '5.1');
    assert.strictEqual(browser['Platform_Bits'], '32');
    assert.strictEqual(browser['Platform_Maker'], 'Microsoft Corporation');
    assert.strictEqual(browser['isMobileDevice'], '');
    assert.strictEqual(browser['isTablet'], '');
    assert.strictEqual(browser['Crawler'], '');
    assert.strictEqual(browser['Device_Name'], 'Windows Desktop');
    assert.strictEqual(browser['Device_Maker'], 'Various');
    assert.strictEqual(browser['Device_Type'], 'Desktop');
    assert.strictEqual(browser['Device_Pointing_Method'], 'mouse');
    assert.strictEqual(browser['Device_Code_Name'], 'Windows Desktop');
    assert.strictEqual(browser['Device_Brand_Name'], 'unknown');
    assert.strictEqual(browser['RenderingEngine_Name'], 'Gecko');
    assert.strictEqual(browser['RenderingEngine_Version'], '1.8');
    assert.strictEqual(browser['RenderingEngine_Maker'], 'Mozilla Foundation');
  });
});
