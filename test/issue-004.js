var assert = require('assert'),
    browscap = require('../browscap.js'),
    browser;

suite('checking for issue 004.', function () {
  test('issue-004', function () {
    browser = browscap.getBrowser("Mozilla/5.0 (PLAYSTATION 3; 2.00)");

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
    assert.strictEqual(browser['isMobileDevice'], false);
    assert.strictEqual(browser['isTablet'], false);
    assert.strictEqual(browser['Crawler'], false);
    assert.strictEqual(browser['Device_Name'], 'Playstation 3');
    assert.strictEqual(browser['Device_Maker'], 'Sony');
    assert.strictEqual(browser['Device_Type'], 'TV Device');
    assert.strictEqual(browser['Device_Pointing_Method'], 'mouse');
    assert.strictEqual(browser['Device_Code_Name'], 'Playstation 3');
    assert.strictEqual(browser['Device_Brand_Name'], 'Sony');
    assert.strictEqual(browser['RenderingEngine_Name'], 'WebKit');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown');
    assert.strictEqual(browser['RenderingEngine_Maker'], 'Apple Inc');
  });
});
