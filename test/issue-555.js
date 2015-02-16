var assert = require('assert'),
    browscap = require('../browscap.js'),
    browser;

suite('checking for issue 555.', function () {
  test('issue-555', function () {
    browser = browscap.getBrowser("Mozilla/5.0 (compatible; Qwantify/2.0; +https://www.qwant.com/)");

    assert.strictEqual(browser['Browser'], 'Qwantify');
    assert.strictEqual(browser['Browser_Type'], 'Bot/Crawler');
    assert.strictEqual(browser['Browser_Bits'], '0');
    assert.strictEqual(browser['Browser_Maker'], 'QWANT SAS');
    assert.strictEqual(browser['Version'], '2.0');
    assert.strictEqual(browser['MajorVer'], '2');
    assert.strictEqual(browser['MinorVer'], '0');
    assert.strictEqual(browser['Platform'], 'unknown');
    assert.strictEqual(browser['Platform_Version'], 'unknown');
    assert.strictEqual(browser['Platform_Bits'], '0');
    assert.strictEqual(browser['Platform_Maker'], 'unknown');
    assert.strictEqual(browser['isMobileDevice'], '');
    assert.strictEqual(browser['isTablet'], '');
    assert.strictEqual(browser['Crawler'], '1');
    assert.strictEqual(browser['JavaScript'], '');
    assert.strictEqual(browser['Cookies'], '');
    assert.strictEqual(browser['Frames'], '');
    assert.strictEqual(browser['IFrames'], '');
    assert.strictEqual(browser['Tables'], '');
    assert.strictEqual(browser['Device_Name'], 'unknown');
    assert.strictEqual(browser['Device_Maker'], 'unknown');
    assert.strictEqual(browser['Device_Type'], 'unknown');
    assert.strictEqual(browser['Device_Pointing_Method'], 'unknown');
    assert.strictEqual(browser['Device_Code_Name'], 'unknown');
    assert.strictEqual(browser['Device_Brand_Name'], 'unknown');
    assert.strictEqual(browser['RenderingEngine_Name'], 'unknown');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown');
    assert.strictEqual(browser['RenderingEngine_Maker'], 'unknown');
  });
});
