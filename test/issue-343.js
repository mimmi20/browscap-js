var assert = require('assert'),
    browscap = require('../browscap.js'),
    browser;

suite('checking for issue 343.', function () {
  test('issue-343', function () {
    browser = browscap.getBrowser("Mozilla/5.0 (PlayStation 4 1.72) AppleWebKit/536.26 (KHTML, like Gecko)");

    assert.strictEqual(browser['Browser'], 'Playstation Browser');
    assert.strictEqual(browser['Browser_Type'], 'Browser');
    assert.strictEqual(browser['Browser_Bits'], '32');
    assert.strictEqual(browser['Browser_Maker'], 'Sony');
    assert.strictEqual(browser['Version'], '0.0');
    assert.strictEqual(browser['MajorVer'], '0');
    assert.strictEqual(browser['MinorVer'], '0');
    assert.strictEqual(browser['Platform'], 'CellOS');
    assert.strictEqual(browser['Platform_Version'], 'unknown');
    assert.strictEqual(browser['Platform_Bits'], '32');
    assert.strictEqual(browser['Platform_Maker'], 'Sony');
    assert.strictEqual(browser['isMobileDevice'], '');
    assert.strictEqual(browser['isTablet'], '');
    assert.strictEqual(browser['Crawler'], '');
    assert.strictEqual(browser['Device_Name'], 'Playstation 4');
    assert.strictEqual(browser['Device_Maker'], 'Sony');
    assert.strictEqual(browser['Device_Type'], 'TV Device');
    assert.strictEqual(browser['Device_Pointing_Method'], 'mouse');
    assert.strictEqual(browser['Device_Code_Name'], 'Playstation 4');
    assert.strictEqual(browser['Device_Brand_Name'], 'Sony');
    assert.strictEqual(browser['RenderingEngine_Name'], 'WebKit');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown');
    assert.strictEqual(browser['RenderingEngine_Maker'], 'Apple Inc');
  });
});
