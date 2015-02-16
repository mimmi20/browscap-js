var assert = require('assert'),
    browscap = require('../browscap.js'),
    browser;

suite('checking for issue 558.', function () {
  test('issue-558', function () {
    browser = browscap.getBrowser("Mozilla/5.0 (Linux; Android 4.4.2; Lenovo A7600-F Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.109 Safari/537.36");

    assert.strictEqual(browser['Browser'], 'Chrome');
    assert.strictEqual(browser['Browser_Type'], 'Browser');
    assert.strictEqual(browser['Browser_Bits'], '32');
    assert.strictEqual(browser['Browser_Maker'], 'Google Inc');
    assert.strictEqual(browser['Version'], '40.0');
    assert.strictEqual(browser['MajorVer'], '40');
    assert.strictEqual(browser['MinorVer'], '0');
    assert.strictEqual(browser['Platform'], 'Android');
    assert.strictEqual(browser['Platform_Version'], '4.4');
    assert.strictEqual(browser['Platform_Bits'], '32');
    assert.strictEqual(browser['Platform_Maker'], 'Google Inc');
    assert.strictEqual(browser['isMobileDevice'], '1');
    assert.strictEqual(browser['isTablet'], '1');
    assert.strictEqual(browser['Crawler'], '');
    assert.strictEqual(browser['JavaScript'], '1');
    assert.strictEqual(browser['Cookies'], '1');
    assert.strictEqual(browser['Frames'], '1');
    assert.strictEqual(browser['IFrames'], '1');
    assert.strictEqual(browser['Tables'], '1');
    assert.strictEqual(browser['Device_Name'], 'A10-70 A7600 Wi-Fi');
    assert.strictEqual(browser['Device_Maker'], 'Lenovo');
    assert.strictEqual(browser['Device_Type'], 'Tablet');
    assert.strictEqual(browser['Device_Pointing_Method'], 'touchscreen');
    assert.strictEqual(browser['Device_Code_Name'], 'A7600-F');
    assert.strictEqual(browser['Device_Brand_Name'], 'Lenovo');
    assert.strictEqual(browser['RenderingEngine_Name'], 'Blink');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown');
    assert.strictEqual(browser['RenderingEngine_Maker'], 'Google Inc');
  });
});
