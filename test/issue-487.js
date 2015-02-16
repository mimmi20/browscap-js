var assert = require('assert'),
    browscap = require('../browscap.js'),
    browser;

suite('checking for issue 487.', function () {
  test('issue-487', function () {
    browser = browscap.getBrowser("Mozilla/5.0 (X11; U; Linux x86_64; zh-TW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/30.0.1599.114 Safari/537.36 Puffin/3.7.0IT");

    assert.strictEqual(browser['Browser'], 'Puffin');
    assert.strictEqual(browser['Browser_Type'], 'Browser');
    assert.strictEqual(browser['Browser_Bits'], '32');
    assert.strictEqual(browser['Browser_Maker'], 'CloudMosa Inc.');
    assert.strictEqual(browser['Version'], '3.7');
    assert.strictEqual(browser['MajorVer'], '3');
    assert.strictEqual(browser['MinorVer'], '7');
    assert.strictEqual(browser['Platform'], 'iOS');
    assert.strictEqual(browser['Platform_Version'], 'unknown');
    assert.strictEqual(browser['Platform_Bits'], '32');
    assert.strictEqual(browser['Platform_Maker'], 'Apple Inc');
    assert.strictEqual(browser['isMobileDevice'], '1');
    assert.strictEqual(browser['isTablet'], '1');
    assert.strictEqual(browser['Crawler'], '');
    assert.strictEqual(browser['Device_Name'], 'iPad');
    assert.strictEqual(browser['Device_Maker'], 'Apple Inc');
    assert.strictEqual(browser['Device_Type'], 'Tablet');
    assert.strictEqual(browser['Device_Pointing_Method'], 'touchscreen');
    assert.strictEqual(browser['Device_Code_Name'], 'iPad');
    assert.strictEqual(browser['Device_Brand_Name'], 'Apple');
    assert.strictEqual(browser['RenderingEngine_Name'], 'WebKit');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown');
    assert.strictEqual(browser['RenderingEngine_Maker'], 'Apple Inc');
  });
});
