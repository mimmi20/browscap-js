var assert = require('assert'),
    browscap = require('../browscap.js'),
    browser;

suite('checking for issue 520.', function () {
  test('issue-520', function () {
    browser = browscap.getBrowser("Mozilla/5.0 (iPad; CPU OS 6_0_1 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Mercury/7.4.1 Mobile/10A523 Safari/8536.25");

    assert.strictEqual(browser['Browser'], 'Mercury');
    assert.strictEqual(browser['Browser_Type'], 'Browser');
    assert.strictEqual(browser['Browser_Bits'], '32');
    assert.strictEqual(browser['Browser_Maker'], 'iLegendSoft, Inc.');
    assert.strictEqual(browser['Version'], '7.4');
    assert.strictEqual(browser['MajorVer'], '7');
    assert.strictEqual(browser['MinorVer'], '4');
    assert.strictEqual(browser['Platform'], 'iOS');
    assert.strictEqual(browser['Platform_Version'], '6.0');
    assert.strictEqual(browser['Platform_Bits'], '32');
    assert.strictEqual(browser['Platform_Maker'], 'Apple Inc');
    assert.strictEqual(browser['isMobileDevice'], '1');
    assert.strictEqual(browser['isTablet'], '1');
    assert.strictEqual(browser['Crawler'], '');
    assert.strictEqual(browser['JavaScript'], '1');
    assert.strictEqual(browser['Cookies'], '1');
    assert.strictEqual(browser['Frames'], '1');
    assert.strictEqual(browser['IFrames'], '1');
    assert.strictEqual(browser['Tables'], '1');
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
