var assert = require('assert'),
    browscap = require('../browscap.js'),
    browser;

suite('checking for issue 050.', function () {
  test('issue-050-2', function () {
    browser = browscap.getBrowser("Mozilla/5.0 (X11; Linux) AppleWebKit/531.2+ Midori/0.3");

    assert.strictEqual(browser['Browser'], 'Midori');
    assert.strictEqual(browser['Browser_Type'], 'Browser');
    assert.strictEqual(browser['Browser_Bits'], '32');
    assert.strictEqual(browser['Browser_Maker'], 'Christian Dywan');
    assert.strictEqual(browser['Version'], '0.3');
    assert.strictEqual(browser['MajorVer'], '0');
    assert.strictEqual(browser['MinorVer'], '3');
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
    assert.strictEqual(browser['RenderingEngine_Name'], 'WebKit');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown');
    assert.strictEqual(browser['RenderingEngine_Maker'], 'Apple Inc');
  });
  test('issue-050-1', function () {
    browser = browscap.getBrowser("Mozilla/5.0 (X11; Linux) AppleWebKit/537.32 (KHTML, like Gecko) Chrome/18.0.1025.133 Safari/537.32 Midori/0.5");

    assert.strictEqual(browser['Browser'], 'Midori');
    assert.strictEqual(browser['Browser_Type'], 'Browser');
    assert.strictEqual(browser['Browser_Bits'], '32');
    assert.strictEqual(browser['Browser_Maker'], 'Christian Dywan');
    assert.strictEqual(browser['Version'], '0.5');
    assert.strictEqual(browser['MajorVer'], '0');
    assert.strictEqual(browser['MinorVer'], '5');
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
    assert.strictEqual(browser['RenderingEngine_Name'], 'WebKit');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown');
    assert.strictEqual(browser['RenderingEngine_Maker'], 'Apple Inc');
  });
});
