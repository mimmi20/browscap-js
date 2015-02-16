var assert = require('assert'),
    browscap = require('../browscap.js'),
    browser;

suite('checking for issue 213.', function () {
  test('issue-213', function () {
    browser = browscap.getBrowser("Mozilla/5.0 (Linux; U; Android 4.3; fr-fr; GT-I9305 Build/JSS15J) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30");

    assert.strictEqual(browser['Browser'], 'Android');
    assert.strictEqual(browser['Browser_Type'], 'Browser');
    assert.strictEqual(browser['Browser_Bits'], '32');
    assert.strictEqual(browser['Browser_Maker'], 'Google Inc');
    assert.strictEqual(browser['Version'], '4.0');
    assert.strictEqual(browser['MajorVer'], '4');
    assert.strictEqual(browser['MinorVer'], '0');
    assert.strictEqual(browser['Platform'], 'Android');
    assert.strictEqual(browser['Platform_Version'], '4.3');
    assert.strictEqual(browser['Platform_Bits'], '32');
    assert.strictEqual(browser['Platform_Maker'], 'Google Inc');
    assert.strictEqual(browser['isMobileDevice'], '1');
    assert.strictEqual(browser['isTablet'], '');
    assert.strictEqual(browser['Crawler'], '');
    assert.strictEqual(browser['Device_Name'], 'Galaxy S III LTE International');
    assert.strictEqual(browser['Device_Maker'], 'Samsung');
    assert.strictEqual(browser['Device_Type'], 'Mobile Phone');
    assert.strictEqual(browser['Device_Pointing_Method'], 'touchscreen');
    assert.strictEqual(browser['Device_Code_Name'], 'GT-I9305');
    assert.strictEqual(browser['Device_Brand_Name'], 'Samsung');
    assert.strictEqual(browser['RenderingEngine_Name'], 'WebKit');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown');
    assert.strictEqual(browser['RenderingEngine_Maker'], 'Apple Inc');
  });
});
