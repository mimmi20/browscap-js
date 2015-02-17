var assert = require('assert'),
    browscap = require('../browscap.js'),
    browser;

suite('checking for issue 172.', function () {
  test('issue-172', function () {
    browser = browscap.getBrowser("Mozilla/5.0 (Windows NT 6.3; ARM; Trident/7.0; Touch; rv:11.0) like Gecko");

    assert.strictEqual(browser['Browser'], 'IE');
    assert.strictEqual(browser['Browser_Type'], 'Browser');
    assert.strictEqual(browser['Browser_Bits'], '32');
    assert.strictEqual(browser['Browser_Maker'], 'Microsoft Corporation');
    assert.strictEqual(browser['Version'], '11.0');
    assert.strictEqual(browser['MajorVer'], '11');
    assert.strictEqual(browser['MinorVer'], '0');
    assert.strictEqual(browser['Platform'], 'WinRT8.1');
    assert.strictEqual(browser['Platform_Version'], '6.3');
    assert.strictEqual(browser['Platform_Bits'], '32');
    assert.strictEqual(browser['Platform_Maker'], 'Microsoft Corporation');
    assert.strictEqual(browser['isMobileDevice'], true);
    assert.strictEqual(browser['isTablet'], true);
    assert.strictEqual(browser['Crawler'], false);
    assert.strictEqual(browser['Device_Name'], 'Surface');
    assert.strictEqual(browser['Device_Maker'], 'Microsoft');
    assert.strictEqual(browser['Device_Type'], 'Tablet');
    assert.strictEqual(browser['Device_Pointing_Method'], 'touchscreen');
    assert.strictEqual(browser['Device_Code_Name'], 'Surface');
    assert.strictEqual(browser['Device_Brand_Name'], 'Microsoft');
    assert.strictEqual(browser['RenderingEngine_Name'], 'Trident');
    assert.strictEqual(browser['RenderingEngine_Version'], '7.0');
    assert.strictEqual(browser['RenderingEngine_Maker'], 'Microsoft Corporation');
  });
});
