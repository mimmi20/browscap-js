var assert = require('assert'),
    browscap = require('../browscap.js'),
    browser;

suite('checking for issue 052.', function () {
  test('issue-052', function () {
    browser = browscap.getBrowser("Mozilla/5.0 (Windows NT; Win64; x64; rv:26.0) Gecko/20100101 Firefox/26.0 Waterfox/26.0");

    assert.strictEqual(browser['Browser'], 'Waterfox');
    assert.strictEqual(browser['Browser_Type'], 'Browser');
    assert.strictEqual(browser['Browser_Bits'], '64');
    assert.strictEqual(browser['Browser_Maker'], 'unknown');
    assert.strictEqual(browser['Version'], '26.0');
    assert.strictEqual(browser['MajorVer'], '26');
    assert.strictEqual(browser['MinorVer'], '0');
    assert.strictEqual(browser['Platform'], 'WinNT');
    assert.strictEqual(browser['Platform_Version'], 'unknown');
    assert.strictEqual(browser['Platform_Bits'], '64');
    assert.strictEqual(browser['Platform_Maker'], 'Microsoft Corporation');
    assert.strictEqual(browser['Win64'], '1');
    assert.strictEqual(browser['isMobileDevice'], '');
    assert.strictEqual(browser['isTablet'], '');
    assert.strictEqual(browser['Crawler'], '');
    assert.strictEqual(browser['JavaScript'], '1');
    assert.strictEqual(browser['Cookies'], '1');
    assert.strictEqual(browser['Frames'], '1');
    assert.strictEqual(browser['IFrames'], '1');
    assert.strictEqual(browser['Tables'], '1');
    assert.strictEqual(browser['Device_Name'], 'Windows Desktop');
    assert.strictEqual(browser['Device_Maker'], 'Various');
    assert.strictEqual(browser['Device_Type'], 'Desktop');
    assert.strictEqual(browser['Device_Pointing_Method'], 'mouse');
    assert.strictEqual(browser['Device_Code_Name'], 'Windows Desktop');
    assert.strictEqual(browser['Device_Brand_Name'], 'unknown');
    assert.strictEqual(browser['RenderingEngine_Name'], 'Gecko');
    assert.strictEqual(browser['RenderingEngine_Version'], '26.0');
    assert.strictEqual(browser['RenderingEngine_Maker'], 'Mozilla Foundation');
  });
});
