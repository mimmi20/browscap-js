var assert = require('assert'),
    browscap = require('../browscap.js'),
    browser;

suite('checking for issue 310.', function () {
  test('issue-310', function () {
    browser = browscap.getBrowser("Mozilla/5.0 (iPod; CPU iPhone OS 6_1_5 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Mobile/10B400 [FBAN/FBIOS;FBAV/10.0.0.26.21;FBBV/2441354;FBDV/iPod4,1;FBMD/iPod touch;FBSN/iPhone OS;FBSV/6.1.5;FBSS/2; FBCR/;FBID/phone;FBLC/it_IT;FBOP/5]");

    assert.strictEqual(browser['Browser'], 'Facebook App');
    assert.strictEqual(browser['Browser_Type'], 'Application');
    assert.strictEqual(browser['Browser_Bits'], '32');
    assert.strictEqual(browser['Browser_Maker'], 'Facebook');
    assert.strictEqual(browser['Version'], '10.0');
    assert.strictEqual(browser['MajorVer'], '10');
    assert.strictEqual(browser['MinorVer'], '0');
    assert.strictEqual(browser['Platform'], 'iOS');
    assert.strictEqual(browser['Platform_Version'], '6.1');
    assert.strictEqual(browser['Platform_Bits'], '32');
    assert.strictEqual(browser['Platform_Maker'], 'Apple Inc');
    assert.strictEqual(browser['isMobileDevice'], true);
    assert.strictEqual(browser['isTablet'], false);
    assert.strictEqual(browser['Crawler'], false);
    assert.strictEqual(browser['Device_Name'], 'iPod Touch');
    assert.strictEqual(browser['Device_Maker'], 'Apple Inc');
    assert.strictEqual(browser['Device_Type'], 'Mobile Device');
    assert.strictEqual(browser['Device_Pointing_Method'], 'touchscreen');
    assert.strictEqual(browser['Device_Code_Name'], 'iPod Touch');
    assert.strictEqual(browser['Device_Brand_Name'], 'Apple');
    assert.strictEqual(browser['RenderingEngine_Name'], 'WebKit');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown');
    assert.strictEqual(browser['RenderingEngine_Maker'], 'Apple Inc');
  });
});
