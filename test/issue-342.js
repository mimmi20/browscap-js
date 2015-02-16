var assert = require('assert'),
    browscap = require('../browscap.js'),
    browser;

suite('checking for issue 342.', function () {
  test('issue-342-A', function () {
    browser = browscap.getBrowser("Mozilla/5.0 (Series40; Nokia300/07.57; Profile/MIDP-2.1 Configuration/CLDC-1.1) Gecko/20100401 S40OviBrowser/5.0.0.0.31");

    assert.strictEqual(browser['Browser'], 'Nokia Proxy Browser');
    assert.strictEqual(browser['Browser_Type'], 'Browser');
    assert.strictEqual(browser['Browser_Bits'], '32');
    assert.strictEqual(browser['Browser_Maker'], 'Nokia');
    assert.strictEqual(browser['Version'], '5.0');
    assert.strictEqual(browser['MajorVer'], '5');
    assert.strictEqual(browser['MinorVer'], '0');
    assert.strictEqual(browser['Platform'], 'SymbianOS');
    assert.strictEqual(browser['Platform_Bits'], '32');
    assert.strictEqual(browser['Platform_Maker'], 'Symbian Foundation');
    assert.strictEqual(browser['isMobileDevice'], '1');
    assert.strictEqual(browser['isTablet'], '');
    assert.strictEqual(browser['Crawler'], '');
    assert.strictEqual(browser['Device_Name'], '300');
    assert.strictEqual(browser['Device_Maker'], 'Nokia');
    assert.strictEqual(browser['Device_Type'], 'Mobile Phone');
    assert.strictEqual(browser['Device_Pointing_Method'], 'unknown');
    assert.strictEqual(browser['Device_Code_Name'], '300');
    assert.strictEqual(browser['Device_Brand_Name'], 'Nokia');
    assert.strictEqual(browser['RenderingEngine_Name'], 'Gecko');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown');
    assert.strictEqual(browser['RenderingEngine_Maker'], 'Mozilla Foundation');
  });
  test('issue-342-B', function () {
    browser = browscap.getBrowser("Mozilla/5.0 (Series40; Nokia300/07.65; Profile/MIDP-2.1 Configuration/CLDC-1.1) Gecko/20100401 S40OviBrowser/4.0.0.0.45");

    assert.strictEqual(browser['Browser'], 'Nokia Proxy Browser');
    assert.strictEqual(browser['Browser_Type'], 'Browser');
    assert.strictEqual(browser['Browser_Bits'], '32');
    assert.strictEqual(browser['Browser_Maker'], 'Nokia');
    assert.strictEqual(browser['Version'], '4.0');
    assert.strictEqual(browser['MajorVer'], '4');
    assert.strictEqual(browser['MinorVer'], '0');
    assert.strictEqual(browser['Platform'], 'SymbianOS');
    assert.strictEqual(browser['Platform_Bits'], '32');
    assert.strictEqual(browser['Platform_Maker'], 'Symbian Foundation');
    assert.strictEqual(browser['isMobileDevice'], '1');
    assert.strictEqual(browser['isTablet'], '');
    assert.strictEqual(browser['Crawler'], '');
    assert.strictEqual(browser['Device_Name'], '300');
    assert.strictEqual(browser['Device_Maker'], 'Nokia');
    assert.strictEqual(browser['Device_Type'], 'Mobile Phone');
    assert.strictEqual(browser['Device_Pointing_Method'], 'unknown');
    assert.strictEqual(browser['Device_Code_Name'], '300');
    assert.strictEqual(browser['Device_Brand_Name'], 'Nokia');
    assert.strictEqual(browser['RenderingEngine_Name'], 'Gecko');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown');
    assert.strictEqual(browser['RenderingEngine_Maker'], 'Mozilla Foundation');
  });
  test('issue-342-C', function () {
    browser = browscap.getBrowser("Mozilla/5.0 (Symbian/3; Series60/5.5 Nokia808PureView/113.010.1508; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/535.1 (KHTML, like Gecko) NokiaBrowser/8.3.2.21 Mobile Safari/535.1 3gpp-gba");

    assert.strictEqual(browser['Browser'], 'Nokia Browser');
    assert.strictEqual(browser['Browser_Type'], 'Browser');
    assert.strictEqual(browser['Browser_Bits'], '32');
    assert.strictEqual(browser['Browser_Maker'], 'Nokia');
    assert.strictEqual(browser['Version'], '8.3');
    assert.strictEqual(browser['MajorVer'], '8');
    assert.strictEqual(browser['MinorVer'], '3');
    assert.strictEqual(browser['Platform'], 'SymbianOS');
    assert.strictEqual(browser['Platform_Version'], 'unknown');
    assert.strictEqual(browser['Platform_Bits'], '32');
    assert.strictEqual(browser['Platform_Maker'], 'Symbian Foundation');
    assert.strictEqual(browser['isMobileDevice'], '1');
    assert.strictEqual(browser['isTablet'], '');
    assert.strictEqual(browser['Crawler'], '');
    assert.strictEqual(browser['Device_Name'], '808 PureView');
    assert.strictEqual(browser['Device_Maker'], 'Nokia');
    assert.strictEqual(browser['Device_Type'], 'Mobile Phone');
    assert.strictEqual(browser['Device_Pointing_Method'], 'unknown');
    assert.strictEqual(browser['Device_Code_Name'], 'Nokia808PureView');
    assert.strictEqual(browser['Device_Brand_Name'], 'Nokia');
    assert.strictEqual(browser['RenderingEngine_Name'], 'WebKit');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown');
    assert.strictEqual(browser['RenderingEngine_Maker'], 'Apple Inc');
  });
  test('issue-342-D', function () {
    browser = browscap.getBrowser("Mozilla/5.0 (Symbian/3; Series60/5.5 Nokia700/113.010.1506; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/535.1 (KHTML, like Gecko) NokiaBrowser/8.3.2.21 Mobile Safari/535.1 3gpp-gba");

    assert.strictEqual(browser['Browser'], 'Nokia Browser');
    assert.strictEqual(browser['Browser_Type'], 'Browser');
    assert.strictEqual(browser['Browser_Bits'], '32');
    assert.strictEqual(browser['Browser_Maker'], 'Nokia');
    assert.strictEqual(browser['Version'], '8.3');
    assert.strictEqual(browser['MajorVer'], '8');
    assert.strictEqual(browser['MinorVer'], '3');
    assert.strictEqual(browser['Platform'], 'SymbianOS');
    assert.strictEqual(browser['Platform_Version'], 'unknown');
    assert.strictEqual(browser['Platform_Bits'], '32');
    assert.strictEqual(browser['Platform_Maker'], 'Symbian Foundation');
    assert.strictEqual(browser['isMobileDevice'], '1');
    assert.strictEqual(browser['isTablet'], '');
    assert.strictEqual(browser['Crawler'], '');
    assert.strictEqual(browser['Device_Name'], '700');
    assert.strictEqual(browser['Device_Maker'], 'Nokia');
    assert.strictEqual(browser['Device_Type'], 'Mobile Phone');
    assert.strictEqual(browser['Device_Pointing_Method'], 'unknown');
    assert.strictEqual(browser['Device_Code_Name'], '700');
    assert.strictEqual(browser['Device_Brand_Name'], 'Nokia');
    assert.strictEqual(browser['RenderingEngine_Name'], 'WebKit');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown');
    assert.strictEqual(browser['RenderingEngine_Maker'], 'Apple Inc');
  });
  test('issue-342-E', function () {
    browser = browscap.getBrowser("Mozilla/5.0 (Series40; NokiaC2-01/11.40; Profile/MIDP-2.1 Configuration/CLDC-1.1) Gecko/20100401 S40OviBrowser/5.0.0.0.31");

    assert.strictEqual(browser['Browser'], 'Nokia Proxy Browser');
    assert.strictEqual(browser['Browser_Type'], 'Browser');
    assert.strictEqual(browser['Browser_Bits'], '32');
    assert.strictEqual(browser['Browser_Maker'], 'Nokia');
    assert.strictEqual(browser['Version'], '5.0');
    assert.strictEqual(browser['MajorVer'], '5');
    assert.strictEqual(browser['MinorVer'], '0');
    assert.strictEqual(browser['Platform'], 'SymbianOS');
    assert.strictEqual(browser['Platform_Bits'], '32');
    assert.strictEqual(browser['Platform_Maker'], 'Symbian Foundation');
    assert.strictEqual(browser['isMobileDevice'], '1');
    assert.strictEqual(browser['isTablet'], '');
    assert.strictEqual(browser['Crawler'], '');
    assert.strictEqual(browser['Device_Name'], 'C2');
    assert.strictEqual(browser['Device_Maker'], 'Nokia');
    assert.strictEqual(browser['Device_Type'], 'Mobile Phone');
    assert.strictEqual(browser['Device_Pointing_Method'], 'unknown');
    assert.strictEqual(browser['Device_Code_Name'], 'C2-01');
    assert.strictEqual(browser['Device_Brand_Name'], 'Nokia');
    assert.strictEqual(browser['RenderingEngine_Name'], 'Gecko');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown');
    assert.strictEqual(browser['RenderingEngine_Maker'], 'Mozilla Foundation');
  });
  test('issue-342-F', function () {
    browser = browscap.getBrowser("Mozilla/5.0 (Series40; NokiaC2-03/06.96; Profile/MIDP-2.1 Configuration/CLDC-1.1) Gecko/20100401 S40OviBrowser/5.0.0.0.31");

    assert.strictEqual(browser['Browser'], 'Nokia Proxy Browser');
    assert.strictEqual(browser['Browser_Type'], 'Browser');
    assert.strictEqual(browser['Browser_Bits'], '32');
    assert.strictEqual(browser['Browser_Maker'], 'Nokia');
    assert.strictEqual(browser['Version'], '5.0');
    assert.strictEqual(browser['MajorVer'], '5');
    assert.strictEqual(browser['MinorVer'], '0');
    assert.strictEqual(browser['Platform'], 'SymbianOS');
    assert.strictEqual(browser['Platform_Bits'], '32');
    assert.strictEqual(browser['Platform_Maker'], 'Symbian Foundation');
    assert.strictEqual(browser['isMobileDevice'], '1');
    assert.strictEqual(browser['isTablet'], '');
    assert.strictEqual(browser['Crawler'], '');
    assert.strictEqual(browser['Device_Name'], 'C2');
    assert.strictEqual(browser['Device_Maker'], 'Nokia');
    assert.strictEqual(browser['Device_Type'], 'Mobile Phone');
    assert.strictEqual(browser['Device_Pointing_Method'], 'unknown');
    assert.strictEqual(browser['Device_Code_Name'], 'C2-03');
    assert.strictEqual(browser['Device_Brand_Name'], 'Nokia');
    assert.strictEqual(browser['RenderingEngine_Name'], 'Gecko');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown');
    assert.strictEqual(browser['RenderingEngine_Maker'], 'Mozilla Foundation');
  });
});
