var assert = require('assert'),
    browscap = require('../browscap.js'),
    browser;

suite('checking for issue 396.', function () {
  test('issue-396', function () {
    browser = browscap.getBrowser("Mozilla/5.0 (Linux; U; Android 2.3.6; fa-fa; GT-S5830i Build/GINGERBREAD) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1 MxBrowser/4.3.0.2000");

    assert.strictEqual(browser['Browser'], 'Maxthon');
    assert.strictEqual(browser['Browser_Type'], 'Browser');
    assert.strictEqual(browser['Browser_Bits'], '32');
    assert.strictEqual(browser['Browser_Maker'], 'Maxthon International Limited');
    assert.strictEqual(browser['Version'], '4.3');
    assert.strictEqual(browser['MajorVer'], '4');
    assert.strictEqual(browser['MinorVer'], '3');
    assert.strictEqual(browser['Platform'], 'Android');
    assert.strictEqual(browser['Platform_Version'], '2.3');
    assert.strictEqual(browser['Platform_Bits'], '32');
    assert.strictEqual(browser['Platform_Maker'], 'Google Inc');
    assert.strictEqual(browser['isMobileDevice'], true);
    assert.strictEqual(browser['isTablet'], false);
    assert.strictEqual(browser['Crawler'], false);
    assert.strictEqual(browser['Device_Name'], 'Galaxy Ace');
    assert.strictEqual(browser['Device_Maker'], 'Samsung');
    assert.strictEqual(browser['Device_Type'], 'Mobile Phone');
    assert.strictEqual(browser['Device_Pointing_Method'], 'touchscreen');
    assert.strictEqual(browser['Device_Code_Name'], 'GT-S5830i');
    assert.strictEqual(browser['Device_Brand_Name'], 'Samsung');
    assert.strictEqual(browser['RenderingEngine_Name'], 'WebKit');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown');
    assert.strictEqual(browser['RenderingEngine_Maker'], 'Apple Inc');
  });
});
