"use strict";

var assert = require('assert'),
    Browscap = require('../browscap.js'),
    browscap = new Browscap(),
    browser;

suite('checking for issue 1244.', function () {
  test('issue-1244 ["RedFlagDealsApp/3.7.2 (Linux; U; Android 4.1.1; en-ca; Arc Build/JRO03L) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Safari/534.30"]', function () {
    browser = browscap.getBrowser('RedFlagDealsApp/3.7.2 (Linux; U; Android 4.1.1; en-ca; Arc Build/JRO03L) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Safari/534.30');

    assert.strictEqual(browser['Comment'], 'RedFlagDeals Mobile App', 'Expected actual "Comment" to be \'RedFlagDeals Mobile App\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'RedFlagDeals Mobile App', 'Expected actual "Browser" to be \'RedFlagDeals Mobile App\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Type'], 'Application', 'Expected actual "Browser_Type" to be \'Application\' (was \'' + browser['Browser_Type'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Bits'], '32', 'Expected actual "Browser_Bits" to be \'32\' (was \'' + browser['Browser_Bits'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Maker'], 'Yellow Pages Digital & Media Solutions Limited', 'Expected actual "Browser_Maker" to be \'Yellow Pages Digital & Media Solutions Limited\' (was \'' + browser['Browser_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Modus'], 'unknown', 'Expected actual "Browser_Modus" to be \'unknown\' (was \'' + browser['Browser_Modus'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['MajorVer'], '0', 'Expected actual "MajorVer" to be \'0\' (was \'' + browser['MajorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['MinorVer'], '0', 'Expected actual "MinorVer" to be \'0\' (was \'' + browser['MinorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'Android', 'Expected actual "Platform" to be \'Android\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], '4.1', 'Expected actual "Platform_Version" to be \'4.1\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Description'], 'Android OS', 'Expected actual "Platform_Description" to be \'Android OS\' (was \'' + browser['Platform_Description'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Bits'], '32', 'Expected actual "Platform_Bits" to be \'32\' (was \'' + browser['Platform_Bits'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Maker'], 'Google Inc', 'Expected actual "Platform_Maker" to be \'Google Inc\' (was \'' + browser['Platform_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Alpha'], false, 'Expected actual "Alpha" to be false (was \'' + browser['Alpha'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Beta'], false, 'Expected actual "Beta" to be false (was \'' + browser['Beta'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Win16'], false, 'Expected actual "Win16" to be false (was \'' + browser['Win16'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Win32'], false, 'Expected actual "Win32" to be false (was \'' + browser['Win32'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Win64'], false, 'Expected actual "Win64" to be false (was \'' + browser['Win64'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Frames'], false, 'Expected actual "Frames" to be false (was \'' + browser['Frames'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['IFrames'], false, 'Expected actual "IFrames" to be false (was \'' + browser['IFrames'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Tables'], false, 'Expected actual "Tables" to be false (was \'' + browser['Tables'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Cookies'], false, 'Expected actual "Cookies" to be false (was \'' + browser['Cookies'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['BackgroundSounds'], false, 'Expected actual "BackgroundSounds" to be false (was \'' + browser['BackgroundSounds'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['JavaScript'], false, 'Expected actual "JavaScript" to be false (was \'' + browser['JavaScript'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['VBScript'], false, 'Expected actual "VBScript" to be false (was \'' + browser['VBScript'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['JavaApplets'], true, 'Expected actual "JavaApplets" to be true (was \'' + browser['JavaApplets'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['ActiveXControls'], false, 'Expected actual "ActiveXControls" to be false (was \'' + browser['ActiveXControls'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['isMobileDevice'], true, 'Expected actual "isMobileDevice" to be true (was \'' + browser['isMobileDevice'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['isTablet'], true, 'Expected actual "isTablet" to be true (was \'' + browser['isTablet'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['isSyndicationReader'], false, 'Expected actual "isSyndicationReader" to be false (was \'' + browser['isSyndicationReader'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Crawler'], false, 'Expected actual "Crawler" to be false (was \'' + browser['Crawler'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['isFake'], false, 'Expected actual "isFake" to be false (was \'' + browser['isFake'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['isAnonymized'], false, 'Expected actual "isAnonymized" to be false (was \'' + browser['isAnonymized'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['isModified'], false, 'Expected actual "isModified" to be false (was \'' + browser['isModified'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['CssVersion'], '0', 'Expected actual "CssVersion" to be \'0\' (was \'' + browser['CssVersion'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['AolVersion'], '0', 'Expected actual "AolVersion" to be \'0\' (was \'' + browser['AolVersion'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Name'], 'Arc', 'Expected actual "Device_Name" to be \'Arc\' (was \'' + browser['Device_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Maker'], 'Kobo', 'Expected actual "Device_Maker" to be \'Kobo\' (was \'' + browser['Device_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Type'], 'Tablet', 'Expected actual "Device_Type" to be \'Tablet\' (was \'' + browser['Device_Type'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Pointing_Method'], 'touchscreen', 'Expected actual "Device_Pointing_Method" to be \'touchscreen\' (was \'' + browser['Device_Pointing_Method'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Code_Name'], 'Arc', 'Expected actual "Device_Code_Name" to be \'Arc\' (was \'' + browser['Device_Code_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Brand_Name'], 'Kobo', 'Expected actual "Device_Brand_Name" to be \'Kobo\' (was \'' + browser['Device_Brand_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Name'], 'WebKit', 'Expected actual "RenderingEngine_Name" to be \'WebKit\' (was \'' + browser['RenderingEngine_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown', 'Expected actual "RenderingEngine_Version" to be \'unknown\' (was \'' + browser['RenderingEngine_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Maker'], 'Apple Inc', 'Expected actual "RenderingEngine_Maker" to be \'Apple Inc\' (was \'' + browser['RenderingEngine_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
});
