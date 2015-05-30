var assert = require('assert'),
    browscap = require('../browscap.js'),
    browser;

suite('checking for issue 637.', function () {
  test('issue-637', function () {
    browser = browscap.getBrowser("iTunes/12.0.1 (Macintosh; OS X 10.9.2) AppleWebKit/537.74.9");

    assert.strictEqual(browser['Browser'], 'iTunes');
    assert.strictEqual(browser['Browser_Type'], 'Application');
    assert.strictEqual(browser['Browser_Bits'], '32');
    assert.strictEqual(browser['Browser_Maker'], 'Apple Inc');
    assert.strictEqual(browser['Version'], '12.0');
    assert.strictEqual(browser['MajorVer'], '12');
    assert.strictEqual(browser['MinorVer'], '0');
    assert.strictEqual(browser['Platform'], 'MacOSX');
    assert.strictEqual(browser['Platform_Version'], '10.9');
    assert.strictEqual(browser['Platform_Bits'], '32');
    assert.strictEqual(browser['Platform_Maker'], 'Apple Inc');
    assert.strictEqual(browser['isMobileDevice'], false);
    assert.strictEqual(browser['isTablet'], false);
    assert.strictEqual(browser['Crawler'], false);
    assert.strictEqual(browser['JavaScript'], false);
    assert.strictEqual(browser['Cookies'], false);
    assert.strictEqual(browser['Frames'], false);
    assert.strictEqual(browser['IFrames'], false);
    assert.strictEqual(browser['Tables'], false);
    assert.strictEqual(browser['Device_Name'], 'Macintosh');
    assert.strictEqual(browser['Device_Maker'], 'Apple Inc');
    assert.strictEqual(browser['Device_Type'], 'Desktop');
    assert.strictEqual(browser['Device_Pointing_Method'], 'mouse');
    assert.strictEqual(browser['Device_Code_Name'], 'Macintosh');
    assert.strictEqual(browser['Device_Brand_Name'], 'Apple');
    assert.strictEqual(browser['RenderingEngine_Name'], 'WebKit');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown');
    assert.strictEqual(browser['RenderingEngine_Maker'], 'Apple Inc');
  });
});
