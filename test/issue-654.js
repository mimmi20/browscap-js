var assert = require('assert'),
    browscap = require('../browscap.js'),
    browser;

suite('checking for issue 654.', function () {
  test('issue-654', function () {
    browser = browscap.getBrowser("Mozilla/4.0 (compatible; MSIE 6.0; Windows CE)");

    assert.strictEqual(browser['Browser'], 'IE');
    assert.strictEqual(browser['Browser_Type'], 'Browser');
    assert.strictEqual(browser['Browser_Bits'], '32');
    assert.strictEqual(browser['Browser_Maker'], 'Microsoft Corporation');
    assert.strictEqual(browser['Version'], '6.0');
    assert.strictEqual(browser['MajorVer'], '6');
    assert.strictEqual(browser['MinorVer'], '0');
    assert.strictEqual(browser['Platform'], 'WinCE');
    assert.strictEqual(browser['Platform_Version'], 'unknown');
    assert.strictEqual(browser['Platform_Bits'], '32');
    assert.strictEqual(browser['Platform_Maker'], 'Microsoft Corporation');
    assert.strictEqual(browser['isMobileDevice'], true);
    assert.strictEqual(browser['isTablet'], false);
    assert.strictEqual(browser['Crawler'], false);
    assert.strictEqual(browser['JavaScript'], true);
    assert.strictEqual(browser['Cookies'], true);
    assert.strictEqual(browser['Frames'], true);
    assert.strictEqual(browser['IFrames'], true);
    assert.strictEqual(browser['Tables'], true);
    assert.strictEqual(browser['VBScript'], true);
    assert.strictEqual(browser['JavaApplets'], true);
    assert.strictEqual(browser['ActiveXControls'], true);
    assert.strictEqual(browser['BackgroundSounds'], true);
    assert.strictEqual(browser['Device_Name'], 'general Mobile Phone');
    assert.strictEqual(browser['Device_Maker'], 'unknown');
    assert.strictEqual(browser['Device_Type'], 'Mobile Phone');
    assert.strictEqual(browser['Device_Pointing_Method'], 'unknown');
    assert.strictEqual(browser['Device_Code_Name'], 'general Mobile Phone');
    assert.strictEqual(browser['Device_Brand_Name'], 'unknown');
    assert.strictEqual(browser['RenderingEngine_Name'], 'Trident');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown');
    assert.strictEqual(browser['RenderingEngine_Maker'], 'Microsoft Corporation');
  });
});
