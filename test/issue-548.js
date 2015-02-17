var assert = require('assert'),
    browscap = require('../browscap.js'),
    browser;

suite('checking for issue 548.', function () {
  test('issue-548', function () {
    browser = browscap.getBrowser("Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0");

    assert.strictEqual(browser['Browser'], 'IE');
    assert.strictEqual(browser['Browser_Type'], 'Browser');
    assert.strictEqual(browser['Browser_Bits'], '32');
    assert.strictEqual(browser['Browser_Maker'], 'Microsoft Corporation');
    assert.strictEqual(browser['Version'], '12.0');
    assert.strictEqual(browser['MajorVer'], '12');
    assert.strictEqual(browser['MinorVer'], '0');
    assert.strictEqual(browser['Platform'], 'Win10');
    assert.strictEqual(browser['Platform_Version'], '10');
    assert.strictEqual(browser['Platform_Bits'], '64');
    assert.strictEqual(browser['Platform_Maker'], 'Microsoft Corporation');
    assert.strictEqual(browser['Win64'], true);
    assert.strictEqual(browser['isMobileDevice'], false);
    assert.strictEqual(browser['isTablet'], false);
    assert.strictEqual(browser['Crawler'], false);
    assert.strictEqual(browser['JavaScript'], true);
    assert.strictEqual(browser['Cookies'], true);
    assert.strictEqual(browser['Frames'], true);
    assert.strictEqual(browser['IFrames'], true);
    assert.strictEqual(browser['Tables'], true);
    assert.strictEqual(browser['Device_Name'], 'Windows Desktop');
    assert.strictEqual(browser['Device_Maker'], 'Various');
    assert.strictEqual(browser['Device_Type'], 'Desktop');
    assert.strictEqual(browser['Device_Pointing_Method'], 'mouse');
    assert.strictEqual(browser['Device_Code_Name'], 'Windows Desktop');
    assert.strictEqual(browser['Device_Brand_Name'], 'unknown');
    assert.strictEqual(browser['RenderingEngine_Name'], 'Trident');
    assert.strictEqual(browser['RenderingEngine_Version'], '8.0');
    assert.strictEqual(browser['RenderingEngine_Maker'], 'Microsoft Corporation');
  });
});
