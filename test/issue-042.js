var assert = require('assert'),
    browscap = require('../browscap.js'),
    browser;

suite('checking for issue 042.', function () {
  test('issue-042', function () {
    browser = browscap.getBrowser("Mozilla/5.0 (BB10; Kbd) AppleWebKit/537.35+ (KHTML, like Gecko)");

    assert.strictEqual(browser['Browser'], 'BlackBerry');
    assert.strictEqual(browser['Browser_Type'], 'Browser');
    assert.strictEqual(browser['Browser_Bits'], '32');
    assert.strictEqual(browser['Browser_Maker'], 'Research In Motion Limited');
    assert.strictEqual(browser['Version'], '10.0');
    assert.strictEqual(browser['MajorVer'], '10');
    assert.strictEqual(browser['MinorVer'], '0');
    assert.strictEqual(browser['Platform'], 'RIM OS');
    assert.strictEqual(browser['Platform_Version'], '10.0');
    assert.strictEqual(browser['Platform_Bits'], '32');
    assert.strictEqual(browser['Platform_Maker'], 'Research In Motion Limited');
    assert.strictEqual(browser['isMobileDevice'], true);
    assert.strictEqual(browser['isTablet'], false);
    assert.strictEqual(browser['Crawler'], false);
    assert.strictEqual(browser['Device_Name'], 'KBD');
    assert.strictEqual(browser['Device_Maker'], 'BlackBerry');
    assert.strictEqual(browser['Device_Type'], 'Mobile Phone');
    assert.strictEqual(browser['Device_Pointing_Method'], 'touchscreen');
    assert.strictEqual(browser['Device_Code_Name'], 'KBD');
    assert.strictEqual(browser['Device_Brand_Name'], 'BlackBerry');
    assert.strictEqual(browser['RenderingEngine_Name'], 'WebKit');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown');
    assert.strictEqual(browser['RenderingEngine_Maker'], 'Apple Inc');
  });
});
