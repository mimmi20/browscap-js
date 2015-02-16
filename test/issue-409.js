var assert = require('assert'),
    browscap = require('../browscap.js'),
    browser;

suite('checking for issue 409.', function () {
  test('issue-409', function () {
    browser = browscap.getBrowser("CRAZYWEBCRAWLER 0.9.0, http://www.crazywebcrawler.com");

    assert.strictEqual(browser['Browser'], 'Crazywebcrawler');
    assert.strictEqual(browser['Browser_Type'], 'Bot/Crawler');
    assert.strictEqual(browser['Browser_Bits'], '0');
    assert.strictEqual(browser['Browser_Maker'], 'crazywebcrawler.com');
    assert.strictEqual(browser['Version'], '0.9');
    assert.strictEqual(browser['MajorVer'], '0');
    assert.strictEqual(browser['MinorVer'], '9');
    assert.strictEqual(browser['Platform'], 'unknown');
    assert.strictEqual(browser['Platform_Version'], 'unknown');
    assert.strictEqual(browser['Platform_Bits'], '0');
    assert.strictEqual(browser['Platform_Maker'], 'unknown');
    assert.strictEqual(browser['isMobileDevice'], '');
    assert.strictEqual(browser['isTablet'], '');
    assert.strictEqual(browser['Crawler'], '1');
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
