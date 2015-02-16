var assert = require('assert'),
    browscap = require('../browscap.js'),
    browser;

suite('checking for issue 356.', function () {
  test('issue-356-A', function () {
    browser = browscap.getBrowser("Mozilla/5.0 (iPad; CPU OS 7_1_2 like Mac OS X) AppleWebKit/537.51.2 (KHTML, like Gecko) Mobile/11D257 [FBAN/FBIOS;FBAV/12.0.0.21.20;FBBV/3142790;FBDV/iPad4,5;FBMD/iPad;FBSN/iPhone OS;FBSV/7.1.2;FBSS/2; FBCR/TelenorDK;FBID/tablet;FBLC/da_DK;FBOP/1]");

    assert.strictEqual(browser['Browser'], 'Facebook App');
    assert.strictEqual(browser['Browser_Type'], 'Application');
    assert.strictEqual(browser['Browser_Bits'], '32');
    assert.strictEqual(browser['Browser_Maker'], 'Facebook');
    assert.strictEqual(browser['Version'], '12.0');
    assert.strictEqual(browser['MajorVer'], '12');
    assert.strictEqual(browser['MinorVer'], '0');
    assert.strictEqual(browser['Platform'], 'iOS');
    assert.strictEqual(browser['Platform_Version'], '7.1');
    assert.strictEqual(browser['Platform_Bits'], '32');
    assert.strictEqual(browser['Platform_Maker'], 'Apple Inc');
    assert.strictEqual(browser['isMobileDevice'], '1');
    assert.strictEqual(browser['isTablet'], '1');
    assert.strictEqual(browser['Crawler'], '');
    assert.strictEqual(browser['Device_Name'], 'iPad');
    assert.strictEqual(browser['Device_Maker'], 'Apple Inc');
    assert.strictEqual(browser['Device_Type'], 'Tablet');
    assert.strictEqual(browser['Device_Pointing_Method'], 'touchscreen');
    assert.strictEqual(browser['Device_Code_Name'], 'iPad');
    assert.strictEqual(browser['Device_Brand_Name'], 'Apple');
    assert.strictEqual(browser['RenderingEngine_Name'], 'WebKit');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown');
    assert.strictEqual(browser['RenderingEngine_Maker'], 'Apple Inc');
  });
  test('issue-356-B', function () {
    browser = browscap.getBrowser("Mozilla/5.0 (iPhone; CPU iPhone OS 7_1_2 like Mac OS X) AppleWebKit/537.51.2 (KHTML, like Gecko) Mobile/11D257 [FBAN/FBIOS;FBAV/12.0.0.21.20;FBBV/3142790;FBDV/iPhone6,2;FBMD/iPhone;FBSN/iPhone OS;FBSV/7.1.2;FBSS/2; FBCR/vodaMT;FBID/phone;FBLC/da_DK;FBOP/5]");

    assert.strictEqual(browser['Browser'], 'Facebook App');
    assert.strictEqual(browser['Browser_Type'], 'Application');
    assert.strictEqual(browser['Browser_Bits'], '32');
    assert.strictEqual(browser['Browser_Maker'], 'Facebook');
    assert.strictEqual(browser['Version'], '12.0');
    assert.strictEqual(browser['MajorVer'], '12');
    assert.strictEqual(browser['MinorVer'], '0');
    assert.strictEqual(browser['Platform'], 'iOS');
    assert.strictEqual(browser['Platform_Version'], '7.1');
    assert.strictEqual(browser['Platform_Bits'], '32');
    assert.strictEqual(browser['Platform_Maker'], 'Apple Inc');
    assert.strictEqual(browser['isMobileDevice'], '1');
    assert.strictEqual(browser['isTablet'], '');
    assert.strictEqual(browser['Crawler'], '');
    assert.strictEqual(browser['Device_Name'], 'iPhone');
    assert.strictEqual(browser['Device_Maker'], 'Apple Inc');
    assert.strictEqual(browser['Device_Type'], 'Mobile Phone');
    assert.strictEqual(browser['Device_Pointing_Method'], 'touchscreen');
    assert.strictEqual(browser['Device_Code_Name'], 'iPhone');
    assert.strictEqual(browser['Device_Brand_Name'], 'Apple');
    assert.strictEqual(browser['RenderingEngine_Name'], 'WebKit');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown');
    assert.strictEqual(browser['RenderingEngine_Maker'], 'Apple Inc');
  });
  test('issue-356-C', function () {
    browser = browscap.getBrowser("Mozilla/5.0 (iPod touch; CPU iPhone OS 7_1_2 like Mac OS X) AppleWebKit/537.51.2 (KHTML, like Gecko) Mobile/11D257 [FBAN/FBIOS;FBAV/12.0.0.21.20;FBBV/3142790;FBDV/iPod5,1;FBMD/iPod touch;FBSN/iPhone OS;FBSV/7.1.2;FBSS/2; FBCR/;FBID/phone;FBLC/da_DK;FBOP/5]");

    assert.strictEqual(browser['Browser'], 'Facebook App');
    assert.strictEqual(browser['Browser_Type'], 'Application');
    assert.strictEqual(browser['Browser_Bits'], '32');
    assert.strictEqual(browser['Browser_Maker'], 'Facebook');
    assert.strictEqual(browser['Version'], '12.0');
    assert.strictEqual(browser['MajorVer'], '12');
    assert.strictEqual(browser['MinorVer'], '0');
    assert.strictEqual(browser['Platform'], 'iOS');
    assert.strictEqual(browser['Platform_Version'], '7.1');
    assert.strictEqual(browser['Platform_Bits'], '32');
    assert.strictEqual(browser['Platform_Maker'], 'Apple Inc');
    assert.strictEqual(browser['isMobileDevice'], '1');
    assert.strictEqual(browser['isTablet'], '');
    assert.strictEqual(browser['Crawler'], '');
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
