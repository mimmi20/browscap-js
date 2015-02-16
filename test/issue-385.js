var assert = require('assert'),
    browscap = require('../browscap.js'),
    browser;

suite('checking for issue 385.', function () {
  test('issue-385-A', function () {
    browser = browscap.getBrowser("Mozilla/5.0 (Linux; U; Android 4.4.2; en-us; MI 3W Build/KVT49L) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 UCBrowser/9.8.9.457 U3/0.8.0 Mobile Safari/533.1");

    assert.strictEqual(browser['Browser'], 'UC Browser');
    assert.strictEqual(browser['Browser_Type'], 'Browser');
    assert.strictEqual(browser['Browser_Bits'], '32');
    assert.strictEqual(browser['Browser_Maker'], 'UC Web');
    assert.strictEqual(browser['Version'], '9.8');
    assert.strictEqual(browser['MajorVer'], '9');
    assert.strictEqual(browser['MinorVer'], '8');
    assert.strictEqual(browser['Platform'], 'Android');
    assert.strictEqual(browser['Platform_Version'], '4.4');
    assert.strictEqual(browser['Platform_Bits'], '32');
    assert.strictEqual(browser['Platform_Maker'], 'Google Inc');
    assert.strictEqual(browser['isMobileDevice'], '1');
    assert.strictEqual(browser['isTablet'], '');
    assert.strictEqual(browser['Crawler'], '');
    assert.strictEqual(browser['Device_Name'], 'MI 3W');
    assert.strictEqual(browser['Device_Maker'], 'Xiaomi');
    assert.strictEqual(browser['Device_Type'], 'Mobile Phone');
    assert.strictEqual(browser['Device_Pointing_Method'], 'touchscreen');
    assert.strictEqual(browser['Device_Code_Name'], 'MI 3W');
    assert.strictEqual(browser['Device_Brand_Name'], 'Xiaomi');
    assert.strictEqual(browser['RenderingEngine_Name'], 'U3');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown');
    assert.strictEqual(browser['RenderingEngine_Maker'], 'UC Web');
  });
  test('issue-385-B', function () {
    browser = browscap.getBrowser("Mozilla/5.0 (Linux; U; Android 4.3; en-us; GT-I9300 Build/JSS15J) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 UCBrowser/9.8.9.457 U3/0.8.0 Mobile Safari/533.1");

    assert.strictEqual(browser['Browser'], 'UC Browser');
    assert.strictEqual(browser['Browser_Type'], 'Browser');
    assert.strictEqual(browser['Browser_Bits'], '32');
    assert.strictEqual(browser['Browser_Maker'], 'UC Web');
    assert.strictEqual(browser['Version'], '9.8');
    assert.strictEqual(browser['MajorVer'], '9');
    assert.strictEqual(browser['MinorVer'], '8');
    assert.strictEqual(browser['Platform'], 'Android');
    assert.strictEqual(browser['Platform_Version'], '4.3');
    assert.strictEqual(browser['Platform_Bits'], '32');
    assert.strictEqual(browser['Platform_Maker'], 'Google Inc');
    assert.strictEqual(browser['isMobileDevice'], '1');
    assert.strictEqual(browser['isTablet'], '');
    assert.strictEqual(browser['Crawler'], '');
    assert.strictEqual(browser['Device_Name'], 'Galaxy S III');
    assert.strictEqual(browser['Device_Maker'], 'Samsung');
    assert.strictEqual(browser['Device_Type'], 'Mobile Phone');
    assert.strictEqual(browser['Device_Pointing_Method'], 'touchscreen');
    assert.strictEqual(browser['Device_Code_Name'], 'GT-I9300');
    assert.strictEqual(browser['Device_Brand_Name'], 'Samsung');
    assert.strictEqual(browser['RenderingEngine_Name'], 'U3');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown');
    assert.strictEqual(browser['RenderingEngine_Maker'], 'UC Web');
  });
});
