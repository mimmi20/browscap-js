var assert = require('assert'),
    browscap = require('../browscap.js'),
    browser;

suite('checking for issue 166.', function () {
  test('issue-166', function () {
    browser = browscap.getBrowser("Mozilla/5.0 (iPhone; CPU iPhone OS 7_0_4 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) GSA/3.2.1.25875 Mobile/11B554a Safari/8536.25");

    assert.strictEqual(browser['Browser'], 'Google App');
    assert.strictEqual(browser['Browser_Type'], 'Application');
    assert.strictEqual(browser['Browser_Bits'], '32');
    assert.strictEqual(browser['Browser_Maker'], 'Google Inc');
    assert.strictEqual(browser['Version'], '3.2');
    assert.strictEqual(browser['MajorVer'], '3');
    assert.strictEqual(browser['MinorVer'], '2');
    assert.strictEqual(browser['Platform'], 'iOS');
    assert.strictEqual(browser['Platform_Version'], '7.0');
    assert.strictEqual(browser['Platform_Bits'], '32');
    assert.strictEqual(browser['Platform_Maker'], 'Apple Inc');
    assert.strictEqual(browser['isMobileDevice'], '1');
    assert.strictEqual(browser['isTablet'], '');
    assert.strictEqual(browser['Crawler'], '');
    assert.strictEqual(browser['Device_Name'], 'iPhone');
    assert.strictEqual(browser['Device_Maker'], 'Apple Inc');
    assert.strictEqual(browser['Device_Type'], 'Mobile Phone');
    assert.strictEqual(browser['Device_Pointing_Method'], 'touchscreen');
    assert.strictEqual(browser['Device_Code_Name'], 'iPhone');
    assert.strictEqual(browser['Device_Brand_Name'], 'Apple');
    assert.strictEqual(browser['RenderingEngine_Name'], 'WebKit');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown');
    assert.strictEqual(browser['RenderingEngine_Maker'], 'Apple Inc');
  });
});
