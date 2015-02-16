var assert = require('assert'),
    browscap = require('../browscap.js'),
    browser;

suite('checking for issue 506.', function () {
  test('issue-506-A', function () {
    browser = browscap.getBrowser("Mozilla/5.0 (Windows NT 6.4; WOW64; Trident/7.0; .NET4.0E; .NET4.0C; .NET CLR 3.5.30729; .NET CLR 2.0.50727; .NET CLR 3.0.30729; InfoPath.3; rv:11.0) like Gecko");

    assert.strictEqual(browser['Browser'], 'IE');
    assert.strictEqual(browser['Browser_Type'], 'Browser');
    assert.strictEqual(browser['Browser_Bits'], '32');
    assert.strictEqual(browser['Browser_Maker'], 'Microsoft Corporation');
    assert.strictEqual(browser['Version'], '11.0');
    assert.strictEqual(browser['MajorVer'], '11');
    assert.strictEqual(browser['MinorVer'], '0');
    assert.strictEqual(browser['Platform'], 'Win10');
    assert.strictEqual(browser['Platform_Version'], '6.4');
    assert.strictEqual(browser['Platform_Bits'], '64');
    assert.strictEqual(browser['Platform_Maker'], 'Microsoft Corporation');
    assert.strictEqual(browser['Win64'], '1');
    assert.strictEqual(browser['isMobileDevice'], '');
    assert.strictEqual(browser['isTablet'], '');
    assert.strictEqual(browser['Crawler'], '');
    assert.strictEqual(browser['Device_Name'], 'Windows Desktop');
    assert.strictEqual(browser['Device_Maker'], 'Various');
    assert.strictEqual(browser['Device_Type'], 'Desktop');
    assert.strictEqual(browser['Device_Pointing_Method'], 'mouse');
    assert.strictEqual(browser['Device_Code_Name'], 'Windows Desktop');
    assert.strictEqual(browser['Device_Brand_Name'], 'unknown');
    assert.strictEqual(browser['RenderingEngine_Name'], 'Trident');
    assert.strictEqual(browser['RenderingEngine_Version'], '7.0');
    assert.strictEqual(browser['RenderingEngine_Maker'], 'Microsoft Corporation');
  });
  test('issue-506-B', function () {
    browser = browscap.getBrowser("Mozilla/5.0 (Windows NT 6.4; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.143 Safari/537.36 Edge/12.0");

    assert.strictEqual(browser['Browser'], 'IE');
    assert.strictEqual(browser['Browser_Type'], 'Browser');
    assert.strictEqual(browser['Browser_Bits'], '32');
    assert.strictEqual(browser['Browser_Maker'], 'Microsoft Corporation');
    assert.strictEqual(browser['Version'], '12.0');
    assert.strictEqual(browser['MajorVer'], '12');
    assert.strictEqual(browser['MinorVer'], '0');
    assert.strictEqual(browser['Platform'], 'Win10');
    assert.strictEqual(browser['Platform_Version'], '6.4');
    assert.strictEqual(browser['Platform_Bits'], '64');
    assert.strictEqual(browser['Platform_Maker'], 'Microsoft Corporation');
    assert.strictEqual(browser['Win64'], '1');
    assert.strictEqual(browser['isMobileDevice'], '');
    assert.strictEqual(browser['isTablet'], '');
    assert.strictEqual(browser['Crawler'], '');
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
  test('issue-506-C', function () {
    browser = browscap.getBrowser("Mozilla/5.0 (Windows NT 6.1; Win64; x64; Trident/7.0; rv:11.0) like Gecko/20100101 Firefox/12.0");

    assert.strictEqual(browser['Browser'], 'IE');
    assert.strictEqual(browser['Browser_Type'], 'Browser');
    assert.strictEqual(browser['Browser_Bits'], '64');
    assert.strictEqual(browser['Browser_Maker'], 'Microsoft Corporation');
    assert.strictEqual(browser['Version'], '11.0');
    assert.strictEqual(browser['MajorVer'], '11');
    assert.strictEqual(browser['MinorVer'], '0');
    assert.strictEqual(browser['Platform'], 'Win7');
    assert.strictEqual(browser['Platform_Version'], '6.1');
    assert.strictEqual(browser['Platform_Bits'], '64');
    assert.strictEqual(browser['Platform_Maker'], 'Microsoft Corporation');
    assert.strictEqual(browser['Win64'], '1');
    assert.strictEqual(browser['isMobileDevice'], '');
    assert.strictEqual(browser['isTablet'], '');
    assert.strictEqual(browser['Crawler'], '');
    assert.strictEqual(browser['Device_Name'], 'Windows Desktop');
    assert.strictEqual(browser['Device_Maker'], 'Various');
    assert.strictEqual(browser['Device_Type'], 'Desktop');
    assert.strictEqual(browser['Device_Pointing_Method'], 'mouse');
    assert.strictEqual(browser['Device_Code_Name'], 'Windows Desktop');
    assert.strictEqual(browser['Device_Brand_Name'], 'unknown');
    assert.strictEqual(browser['RenderingEngine_Name'], 'Trident');
    assert.strictEqual(browser['RenderingEngine_Version'], '7.0');
    assert.strictEqual(browser['RenderingEngine_Maker'], 'Microsoft Corporation');
  });
  test('issue-506-D', function () {
    browser = browscap.getBrowser("Mozilla/5.0 (Mobile; Windows Phone 8.1; Android 4.0; ARM; Trident/7.0; Touch; rv:11.0; IEMobile/11.0; NOKIA; Lumia 930) like iPhone OS 7_0_3 Mac OS X AppleWebKit/537 (KHTML, like Gecko) Mobile Safari/537");

    assert.strictEqual(browser['Browser'], 'IEMobile');
    assert.strictEqual(browser['Browser_Type'], 'Browser');
    assert.strictEqual(browser['Browser_Bits'], '32');
    assert.strictEqual(browser['Browser_Maker'], 'Microsoft Corporation');
    assert.strictEqual(browser['Version'], '11.0');
    assert.strictEqual(browser['MajorVer'], '11');
    assert.strictEqual(browser['MinorVer'], '0');
    assert.strictEqual(browser['Platform'], 'WinPhone8.1');
    assert.strictEqual(browser['Platform_Version'], '8.1');
    assert.strictEqual(browser['Platform_Bits'], '32');
    assert.strictEqual(browser['Platform_Maker'], 'Microsoft Corporation');
    assert.strictEqual(browser['Win64'], '');
    assert.strictEqual(browser['isMobileDevice'], '1');
    assert.strictEqual(browser['isTablet'], '');
    assert.strictEqual(browser['Crawler'], '');
    assert.strictEqual(browser['Device_Name'], 'Lumia 930');
    assert.strictEqual(browser['Device_Maker'], 'Nokia');
    assert.strictEqual(browser['Device_Type'], 'Mobile Phone');
    assert.strictEqual(browser['Device_Pointing_Method'], 'touchscreen');
    assert.strictEqual(browser['Device_Code_Name'], 'Lumia 930');
    assert.strictEqual(browser['Device_Brand_Name'], 'Nokia');
    assert.strictEqual(browser['RenderingEngine_Name'], 'Trident');
    assert.strictEqual(browser['RenderingEngine_Version'], '7.0');
    assert.strictEqual(browser['RenderingEngine_Maker'], 'Microsoft Corporation');
  });
});
