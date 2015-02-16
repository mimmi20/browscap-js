var assert = require('assert'),
    browscap = require('../browscap.js'),
    browser;

suite('checking for issue 029.', function () {
  test('issue-029', function () {
    browser = browscap.getBrowser("Mozilla/5.0 (Mobile; rv:18.0) Gecko/18.0 Firefox/18.0");

    assert.strictEqual(browser['Browser'], 'Firefox');
    assert.strictEqual(browser['Browser_Type'], 'Browser');
    assert.strictEqual(browser['Browser_Bits'], '32');
    assert.strictEqual(browser['Browser_Maker'], 'Mozilla Foundation');
    assert.strictEqual(browser['Version'], '18.0');
    assert.strictEqual(browser['MajorVer'], '18');
    assert.strictEqual(browser['MinorVer'], '0');
    assert.strictEqual(browser['Platform'], 'FirefoxOS');
    assert.strictEqual(browser['Platform_Version'], 'unknown');
    assert.strictEqual(browser['Platform_Bits'], '32');
    assert.strictEqual(browser['Platform_Maker'], 'Mozilla Foundation');
    assert.strictEqual(browser['isMobileDevice'], '1');
    assert.strictEqual(browser['isTablet'], '');
    assert.strictEqual(browser['Crawler'], '');
    assert.strictEqual(browser['Device_Name'], 'general Mobile Device');
    assert.strictEqual(browser['Device_Maker'], 'Various');
    assert.strictEqual(browser['Device_Type'], 'Mobile Phone');
    assert.strictEqual(browser['Device_Pointing_Method'], 'touchscreen');
    assert.strictEqual(browser['Device_Code_Name'], 'general Mobile Device');
    assert.strictEqual(browser['Device_Brand_Name'], 'unknown');
    assert.strictEqual(browser['RenderingEngine_Name'], 'Gecko');
    assert.strictEqual(browser['RenderingEngine_Version'], '18.0');
    assert.strictEqual(browser['RenderingEngine_Maker'], 'Mozilla Foundation');
  });
});
