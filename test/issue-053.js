var assert = require('assert'),
    browscap = require('../browscap.js'),
    browser;

suite('checking for issue 053.', function () {
  test('issue-053', function () {
    browser = browscap.getBrowser("Mozilla/5.0 (Linux; Android 4.2.1; en-us; Nexus 4 Build/JOP40D) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Mobile Safari/535.19");

    assert.strictEqual(browser['Browser'], 'Chrome');
    assert.strictEqual(browser['Browser_Type'], 'Browser');
    assert.strictEqual(browser['Browser_Bits'], '32');
    assert.strictEqual(browser['Browser_Maker'], 'Google Inc');
    assert.strictEqual(browser['Version'], '18.0');
    assert.strictEqual(browser['MajorVer'], '18');
    assert.strictEqual(browser['MinorVer'], '0');
    assert.strictEqual(browser['Platform'], 'Android');
    assert.strictEqual(browser['Platform_Version'], '4.2');
    assert.strictEqual(browser['Platform_Bits'], '32');
    assert.strictEqual(browser['Platform_Maker'], 'Google Inc');
    assert.strictEqual(browser['isMobileDevice'], '1');
    assert.strictEqual(browser['isTablet'], '');
    assert.strictEqual(browser['Crawler'], '');
    assert.strictEqual(browser['Device_Name'], 'Nexus 4');
    assert.strictEqual(browser['Device_Maker'], 'LG');
    assert.strictEqual(browser['Device_Type'], 'Mobile Phone');
    assert.strictEqual(browser['Device_Pointing_Method'], 'touchscreen');
    assert.strictEqual(browser['Device_Code_Name'], 'Nexus 4');
    assert.strictEqual(browser['Device_Brand_Name'], 'Google');
    assert.strictEqual(browser['RenderingEngine_Name'], 'WebKit');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown');
    assert.strictEqual(browser['RenderingEngine_Maker'], 'Apple Inc');
  });
});
