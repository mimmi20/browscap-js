var assert = require('assert'),
    browscap = require('../browscap.js'),
    browser;

suite('checking for issue 341.', function () {
  test('issue-341-A', function () {
    browser = browscap.getBrowser("Mozilla/5.0 (Linux; GoogleTV 3.2; NSZ-GS7/GX70 Build/MASTER) AppleWebKit/534.24 (KHTML, like Gecko) Chrome/11.0.696.77 Safari/534.24");

    assert.strictEqual(browser['Browser'], 'Chrome');
    assert.strictEqual(browser['Browser_Type'], 'Browser');
    assert.strictEqual(browser['Browser_Bits'], '32');
    assert.strictEqual(browser['Browser_Maker'], 'Google Inc');
    assert.strictEqual(browser['Version'], '11.0');
    assert.strictEqual(browser['MajorVer'], '11');
    assert.strictEqual(browser['MinorVer'], '0');
    assert.strictEqual(browser['Platform'], 'Android for GoogleTV');
    assert.strictEqual(browser['Platform_Version'], '3.2');
    assert.strictEqual(browser['Platform_Bits'], '32');
    assert.strictEqual(browser['Platform_Maker'], 'Google Inc');
    assert.strictEqual(browser['isMobileDevice'], '');
    assert.strictEqual(browser['isTablet'], '');
    assert.strictEqual(browser['Crawler'], '');
    assert.strictEqual(browser['Device_Name'], 'NSZ-GS7/GX70');
    assert.strictEqual(browser['Device_Maker'], 'Sony');
    assert.strictEqual(browser['Device_Type'], 'TV Device');
    assert.strictEqual(browser['Device_Pointing_Method'], 'touchscreen');
    assert.strictEqual(browser['Device_Code_Name'], 'NSZ-GS7/GX70');
    assert.strictEqual(browser['Device_Brand_Name'], 'Sony');
    assert.strictEqual(browser['RenderingEngine_Name'], 'WebKit');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown');
    assert.strictEqual(browser['RenderingEngine_Maker'], 'Apple Inc');
  });
  test('issue-341-B', function () {
    browser = browscap.getBrowser("Mozilla/5.0 (X11; Linux i686) AppleWebKit/534.24 (KHTML, like Gecko) Chrome/11.0.696.77 Large Screen Safari/534.24 GoogleTV/092754");

    assert.strictEqual(browser['Browser'], 'Chrome');
    assert.strictEqual(browser['Browser_Type'], 'Browser');
    assert.strictEqual(browser['Browser_Bits'], '32');
    assert.strictEqual(browser['Browser_Maker'], 'Google Inc');
    assert.strictEqual(browser['Version'], '11.0');
    assert.strictEqual(browser['MajorVer'], '11');
    assert.strictEqual(browser['MinorVer'], '0');
    assert.strictEqual(browser['Platform'], 'Linux');
    assert.strictEqual(browser['Platform_Version'], 'unknown');
    assert.strictEqual(browser['Platform_Bits'], '32');
    assert.strictEqual(browser['Platform_Maker'], 'Linux Foundation');
    assert.strictEqual(browser['isMobileDevice'], '');
    assert.strictEqual(browser['isTablet'], '');
    assert.strictEqual(browser['Crawler'], '');
    assert.strictEqual(browser['Device_Name'], 'GoogleTV');
    assert.strictEqual(browser['Device_Maker'], 'Google');
    assert.strictEqual(browser['Device_Type'], 'TV Device');
    assert.strictEqual(browser['RenderingEngine_Name'], 'WebKit');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown');
    assert.strictEqual(browser['RenderingEngine_Maker'], 'Apple Inc');
  });
});
