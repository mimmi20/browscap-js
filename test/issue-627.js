var assert = require('assert'),
    browscap = require('../browscap.js'),
    browser;

suite('checking for issue 627.', function () {
  test('issue-627', function () {
    browser = browscap.getBrowser("dv(GT-S6102);pr(UCBrowser/9.8.5.442);ov(Android 2.3.6);ss(240*301);bt(GJ);pm(1);bv(0);nm(0);im(0);sr(0);nt(2);");

    assert.strictEqual(browser['Browser'], 'UC Browser');
    assert.strictEqual(browser['Browser_Type'], 'Browser');
    assert.strictEqual(browser['Browser_Bits'], '32');
    assert.strictEqual(browser['Browser_Maker'], 'UC Web');
    assert.strictEqual(browser['Version'], '9.8');
    assert.strictEqual(browser['MajorVer'], '9');
    assert.strictEqual(browser['MinorVer'], '8');
    assert.strictEqual(browser['Platform'], 'Android');
    assert.strictEqual(browser['Platform_Version'], '2.3');
    assert.strictEqual(browser['Platform_Bits'], '32');
    assert.strictEqual(browser['Platform_Maker'], 'Google Inc');
    assert.strictEqual(browser['isMobileDevice'], true);
    assert.strictEqual(browser['isTablet'], false);
    assert.strictEqual(browser['Crawler'], false);
    assert.strictEqual(browser['JavaScript'], true);
    assert.strictEqual(browser['Cookies'], true);
    assert.strictEqual(browser['Frames'], true);
    assert.strictEqual(browser['IFrames'], true);
    assert.strictEqual(browser['Tables'], true);
    assert.strictEqual(browser['Device_Name'], 'Galaxy Y Duos');
    assert.strictEqual(browser['Device_Maker'], 'Samsung');
    assert.strictEqual(browser['Device_Type'], 'Mobile Phone');
    assert.strictEqual(browser['Device_Pointing_Method'], 'touchscreen');
    assert.strictEqual(browser['Device_Code_Name'], 'GT-S6102');
    assert.strictEqual(browser['Device_Brand_Name'], 'Samsung');
    assert.strictEqual(browser['RenderingEngine_Name'], 'unknown');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown');
    assert.strictEqual(browser['RenderingEngine_Maker'], 'unknown');
  });
});
