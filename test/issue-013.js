var assert = require('assert'),
    browscap = require('../browscap.js'),
    browser;

suite('checking for issue 013.', function () {
  test('issue-013', function () {
    browser = browscap.getBrowser("Mozilla/5.0 (Android; Tablet; rv:23.0) Gecko/23.0 Firefox/23.0");

    assert.strictEqual(browser['Browser'], 'Firefox');
    assert.strictEqual(browser['Browser_Type'], 'Browser');
    assert.strictEqual(browser['Browser_Bits'], '32');
    assert.strictEqual(browser['Browser_Maker'], 'Mozilla Foundation');
    assert.strictEqual(browser['Version'], '23.0');
    assert.strictEqual(browser['MajorVer'], '23');
    assert.strictEqual(browser['MinorVer'], '0');
    assert.strictEqual(browser['Platform'], 'FirefoxOS');
    assert.strictEqual(browser['Platform_Version'], 'unknown');
    assert.strictEqual(browser['Platform_Bits'], '32');
    assert.strictEqual(browser['Platform_Maker'], 'Mozilla Foundation');
    assert.strictEqual(browser['isMobileDevice'], '1');
    assert.strictEqual(browser['isTablet'], '1');
    assert.strictEqual(browser['Crawler'], '');
    assert.strictEqual(browser['Device_Name'], 'general Mobile Device');
    assert.strictEqual(browser['Device_Maker'], 'Various');
    assert.strictEqual(browser['Device_Type'], 'Tablet');
    assert.strictEqual(browser['Device_Pointing_Method'], 'touchscreen');
    assert.strictEqual(browser['Device_Code_Name'], 'general Mobile Device');
    assert.strictEqual(browser['Device_Brand_Name'], 'unknown');
    assert.strictEqual(browser['RenderingEngine_Name'], 'Gecko');
    assert.strictEqual(browser['RenderingEngine_Version'], '23.0');
    assert.strictEqual(browser['RenderingEngine_Maker'], 'Mozilla Foundation');
  });
});
