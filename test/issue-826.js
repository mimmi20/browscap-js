"use strict";

var assert = require('assert'),
    Browscap = require('../browscap.js'),
    browscap = new Browscap(),
    browser;

suite('checking for issue 826.', function () {
  test('issue-826-A ["Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/600.2.5 (KHTML, like Gecko) Version/8.0.2 Safari/600.2.5 (Applebot/0.1; +http://www.apple.com/go/applebot)"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/600.2.5 (KHTML, like Gecko) Version/8.0.2 Safari/600.2.5 (Applebot/0.1; +http://www.apple.com/go/applebot)');

    assert.strictEqual(browser['Browser'], 'Applebot', 'Expected actual "Browser" to be \'Applebot\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Type'], 'Bot/Crawler', 'Expected actual "Browser_Type" to be \'Bot/Crawler\' (was \'' + browser['Browser_Type'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Bits'], '32', 'Expected actual "Browser_Bits" to be \'32\' (was \'' + browser['Browser_Bits'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Maker'], 'Apple Inc', 'Expected actual "Browser_Maker" to be \'Apple Inc\' (was \'' + browser['Browser_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Modus'], 'unknown', 'Expected actual "Browser_Modus" to be \'unknown\' (was \'' + browser['Browser_Modus'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.1', 'Expected actual "Version" to be \'0.1\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['MajorVer'], '0', 'Expected actual "MajorVer" to be \'0\' (was \'' + browser['MajorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['MinorVer'], '1', 'Expected actual "MinorVer" to be \'1\' (was \'' + browser['MinorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'MacOSX', 'Expected actual "Platform" to be \'MacOSX\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], '10', 'Expected actual "Platform_Version" to be \'10\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Bits'], '32', 'Expected actual "Platform_Bits" to be \'32\' (was \'' + browser['Platform_Bits'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Maker'], 'Apple Inc', 'Expected actual "Platform_Maker" to be \'Apple Inc\' (was \'' + browser['Platform_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Win64'], false, 'Expected actual "Win64" to be false (was \'' + browser['Win64'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['isMobileDevice'], false, 'Expected actual "isMobileDevice" to be false (was \'' + browser['isMobileDevice'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['isTablet'], false, 'Expected actual "isTablet" to be false (was \'' + browser['isTablet'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Crawler'], true, 'Expected actual "Crawler" to be true (was \'' + browser['Crawler'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['JavaScript'], false, 'Expected actual "JavaScript" to be false (was \'' + browser['JavaScript'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Cookies'], false, 'Expected actual "Cookies" to be false (was \'' + browser['Cookies'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Frames'], true, 'Expected actual "Frames" to be true (was \'' + browser['Frames'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['IFrames'], true, 'Expected actual "IFrames" to be true (was \'' + browser['IFrames'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Tables'], true, 'Expected actual "Tables" to be true (was \'' + browser['Tables'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['VBScript'], false, 'Expected actual "VBScript" to be false (was \'' + browser['VBScript'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['JavaApplets'], true, 'Expected actual "JavaApplets" to be true (was \'' + browser['JavaApplets'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['ActiveXControls'], false, 'Expected actual "ActiveXControls" to be false (was \'' + browser['ActiveXControls'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['BackgroundSounds'], false, 'Expected actual "BackgroundSounds" to be false (was \'' + browser['BackgroundSounds'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Name'], 'Macintosh', 'Expected actual "Device_Name" to be \'Macintosh\' (was \'' + browser['Device_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Maker'], 'Apple Inc', 'Expected actual "Device_Maker" to be \'Apple Inc\' (was \'' + browser['Device_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Type'], 'Desktop', 'Expected actual "Device_Type" to be \'Desktop\' (was \'' + browser['Device_Type'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Pointing_Method'], 'mouse', 'Expected actual "Device_Pointing_Method" to be \'mouse\' (was \'' + browser['Device_Pointing_Method'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Code_Name'], 'Macintosh', 'Expected actual "Device_Code_Name" to be \'Macintosh\' (was \'' + browser['Device_Code_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Brand_Name'], 'Apple', 'Expected actual "Device_Brand_Name" to be \'Apple\' (was \'' + browser['Device_Brand_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Name'], 'WebKit', 'Expected actual "RenderingEngine_Name" to be \'WebKit\' (was \'' + browser['RenderingEngine_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown', 'Expected actual "RenderingEngine_Version" to be \'unknown\' (was \'' + browser['RenderingEngine_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Maker'], 'Apple Inc', 'Expected actual "RenderingEngine_Maker" to be \'Apple Inc\' (was \'' + browser['RenderingEngine_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-826-B ["Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/600.2.5 (KHTML, like Gecko) Version/8.0.2 Safari/600.2.5 (Applebot/0.1)"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/600.2.5 (KHTML, like Gecko) Version/8.0.2 Safari/600.2.5 (Applebot/0.1)');

    assert.strictEqual(browser['Browser'], 'Applebot', 'Expected actual "Browser" to be \'Applebot\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Type'], 'Bot/Crawler', 'Expected actual "Browser_Type" to be \'Bot/Crawler\' (was \'' + browser['Browser_Type'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Bits'], '32', 'Expected actual "Browser_Bits" to be \'32\' (was \'' + browser['Browser_Bits'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Maker'], 'Apple Inc', 'Expected actual "Browser_Maker" to be \'Apple Inc\' (was \'' + browser['Browser_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Modus'], 'unknown', 'Expected actual "Browser_Modus" to be \'unknown\' (was \'' + browser['Browser_Modus'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.1', 'Expected actual "Version" to be \'0.1\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['MajorVer'], '0', 'Expected actual "MajorVer" to be \'0\' (was \'' + browser['MajorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['MinorVer'], '1', 'Expected actual "MinorVer" to be \'1\' (was \'' + browser['MinorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'MacOSX', 'Expected actual "Platform" to be \'MacOSX\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], '10', 'Expected actual "Platform_Version" to be \'10\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Bits'], '32', 'Expected actual "Platform_Bits" to be \'32\' (was \'' + browser['Platform_Bits'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Maker'], 'Apple Inc', 'Expected actual "Platform_Maker" to be \'Apple Inc\' (was \'' + browser['Platform_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Win64'], false, 'Expected actual "Win64" to be false (was \'' + browser['Win64'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['isMobileDevice'], false, 'Expected actual "isMobileDevice" to be false (was \'' + browser['isMobileDevice'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['isTablet'], false, 'Expected actual "isTablet" to be false (was \'' + browser['isTablet'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Crawler'], true, 'Expected actual "Crawler" to be true (was \'' + browser['Crawler'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['JavaScript'], false, 'Expected actual "JavaScript" to be false (was \'' + browser['JavaScript'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Cookies'], false, 'Expected actual "Cookies" to be false (was \'' + browser['Cookies'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Frames'], true, 'Expected actual "Frames" to be true (was \'' + browser['Frames'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['IFrames'], true, 'Expected actual "IFrames" to be true (was \'' + browser['IFrames'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Tables'], true, 'Expected actual "Tables" to be true (was \'' + browser['Tables'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['VBScript'], false, 'Expected actual "VBScript" to be false (was \'' + browser['VBScript'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['JavaApplets'], true, 'Expected actual "JavaApplets" to be true (was \'' + browser['JavaApplets'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['ActiveXControls'], false, 'Expected actual "ActiveXControls" to be false (was \'' + browser['ActiveXControls'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['BackgroundSounds'], false, 'Expected actual "BackgroundSounds" to be false (was \'' + browser['BackgroundSounds'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Name'], 'Macintosh', 'Expected actual "Device_Name" to be \'Macintosh\' (was \'' + browser['Device_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Maker'], 'Apple Inc', 'Expected actual "Device_Maker" to be \'Apple Inc\' (was \'' + browser['Device_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Type'], 'Desktop', 'Expected actual "Device_Type" to be \'Desktop\' (was \'' + browser['Device_Type'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Pointing_Method'], 'mouse', 'Expected actual "Device_Pointing_Method" to be \'mouse\' (was \'' + browser['Device_Pointing_Method'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Code_Name'], 'Macintosh', 'Expected actual "Device_Code_Name" to be \'Macintosh\' (was \'' + browser['Device_Code_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Brand_Name'], 'Apple', 'Expected actual "Device_Brand_Name" to be \'Apple\' (was \'' + browser['Device_Brand_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Name'], 'WebKit', 'Expected actual "RenderingEngine_Name" to be \'WebKit\' (was \'' + browser['RenderingEngine_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown', 'Expected actual "RenderingEngine_Version" to be \'unknown\' (was \'' + browser['RenderingEngine_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Maker'], 'Apple Inc', 'Expected actual "RenderingEngine_Maker" to be \'Apple Inc\' (was \'' + browser['RenderingEngine_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
});
