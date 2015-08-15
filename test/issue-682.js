var assert = require('assert'),
    browscap = require('../browscap.js'),
    browser;

suite('checking for issue 682.', function () {
  test('issue-682', function () {
    browser = browscap.getBrowser("Mozilla/5.0 (Linux; U; Android 4.4.3; en-us; KFASWI Build/KTU84M) AppleWebKit/537.36 (KHTML, like Gecko) Silk/3.66 like Chrome/39.0.2171.93 Safari/537.36");

    assert.strictEqual(browser['Browser'], 'Silk');
    assert.strictEqual(browser['Browser_Type'], 'Browser');
    assert.strictEqual(browser['Browser_Bits'], '32');
    assert.strictEqual(browser['Browser_Maker'], 'Amazon.com, Inc.');
    assert.strictEqual(browser['Browser_Modus'], 'unknown');
    assert.strictEqual(browser['Version'], '3.66');
    assert.strictEqual(browser['MajorVer'], '3');
    assert.strictEqual(browser['MinorVer'], '66');
    assert.strictEqual(browser['Platform'], 'Android');
    assert.strictEqual(browser['Platform_Version'], '4.4');
    assert.strictEqual(browser['Platform_Bits'], '32');
    assert.strictEqual(browser['Platform_Maker'], 'Google Inc');
    assert.strictEqual(browser['isMobileDevice'], true);
    assert.strictEqual(browser['isTablet'], true);
    assert.strictEqual(browser['Crawler'], false);
    assert.strictEqual(browser['JavaScript'], true);
    assert.strictEqual(browser['Cookies'], true);
    assert.strictEqual(browser['Frames'], true);
    assert.strictEqual(browser['IFrames'], true);
    assert.strictEqual(browser['Tables'], true);
    assert.strictEqual(browser['VBScript'], false);
    assert.strictEqual(browser['JavaApplets'], false);
    assert.strictEqual(browser['ActiveXControls'], false);
    assert.strictEqual(browser['BackgroundSounds'], false);
    assert.strictEqual(browser['Device_Name'], 'Fire HD 7 (4th Gen)');
    assert.strictEqual(browser['Device_Maker'], 'Amazon.com, Inc.');
    assert.strictEqual(browser['Device_Type'], 'Tablet');
    assert.strictEqual(browser['Device_Pointing_Method'], 'touchscreen');
    assert.strictEqual(browser['Device_Code_Name'], 'KFASWI');
    assert.strictEqual(browser['Device_Brand_Name'], 'Amazon');
    assert.strictEqual(browser['RenderingEngine_Name'], 'Blink');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown');
    assert.strictEqual(browser['RenderingEngine_Maker'], 'Google Inc');
  });
});
