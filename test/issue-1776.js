'use strict';

const assert = require('assert');
const Browscap = require('../src/index.js');
const browscap = new Browscap();
let browser;

suite('checking for issue 1776. (1 test)', function () {
  test('issue-1776-A ["Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_3) AppleWebKit/534.31 (KHTML, like Gecko) Chrome/17.0.558.0 Safari/534.31 UCBrowser/2.2.2.259"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_3) AppleWebKit/534.31 (KHTML, like Gecko) Chrome/17.0.558.0 Safari/534.31 UCBrowser/2.2.2.259');

    assert.strictEqual(browser['Comment'], 'UC Browser 2.2 for Android', 'Expected actual "Comment" to be \'UC Browser 2.2 for Android\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'UC Browser', 'Expected actual "Browser" to be \'UC Browser\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Type'], 'Browser', 'Expected actual "Browser_Type" to be \'Browser\' (was \'' + browser['Browser_Type'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Bits'], '32', 'Expected actual "Browser_Bits" to be \'32\' (was \'' + browser['Browser_Bits'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Maker'], 'UCWeb Inc.', 'Expected actual "Browser_Maker" to be \'UCWeb Inc.\' (was \'' + browser['Browser_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Modus'], 'Desktop Mode', 'Expected actual "Browser_Modus" to be \'Desktop Mode\' (was \'' + browser['Browser_Modus'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '2.2', 'Expected actual "Version" to be \'2.2\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'Android', 'Expected actual "Platform" to be \'Android\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], 'unknown', 'Expected actual "Platform_Version" to be \'unknown\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Description'], 'Android OS', 'Expected actual "Platform_Description" to be \'Android OS\' (was \'' + browser['Platform_Description'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Bits'], '32', 'Expected actual "Platform_Bits" to be \'32\' (was \'' + browser['Platform_Bits'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Maker'], 'Google Inc', 'Expected actual "Platform_Maker" to be \'Google Inc\' (was \'' + browser['Platform_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Alpha'], false, 'Expected actual "Alpha" to be false (was \'' + browser['Alpha'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Beta'], false, 'Expected actual "Beta" to be false (was \'' + browser['Beta'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Frames'], true, 'Expected actual "Frames" to be true (was \'' + browser['Frames'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['IFrames'], true, 'Expected actual "IFrames" to be true (was \'' + browser['IFrames'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Tables'], true, 'Expected actual "Tables" to be true (was \'' + browser['Tables'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Cookies'], true, 'Expected actual "Cookies" to be true (was \'' + browser['Cookies'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['JavaScript'], true, 'Expected actual "JavaScript" to be true (was \'' + browser['JavaScript'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['VBScript'], false, 'Expected actual "VBScript" to be false (was \'' + browser['VBScript'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['JavaApplets'], true, 'Expected actual "JavaApplets" to be true (was \'' + browser['JavaApplets'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['isSyndicationReader'], false, 'Expected actual "isSyndicationReader" to be false (was \'' + browser['isSyndicationReader'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['isFake'], false, 'Expected actual "isFake" to be false (was \'' + browser['isFake'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['isAnonymized'], false, 'Expected actual "isAnonymized" to be false (was \'' + browser['isAnonymized'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['isModified'], false, 'Expected actual "isModified" to be false (was \'' + browser['isModified'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['CssVersion'], '3', 'Expected actual "CssVersion" to be \'3\' (was \'' + browser['CssVersion'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Name'], 'general Mobile Phone', 'Expected actual "Device_Name" to be \'general Mobile Phone\' (was \'' + browser['Device_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Maker'], 'unknown', 'Expected actual "Device_Maker" to be \'unknown\' (was \'' + browser['Device_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Type'], 'Mobile Phone', 'Expected actual "Device_Type" to be \'Mobile Phone\' (was \'' + browser['Device_Type'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Pointing_Method'], 'touchscreen', 'Expected actual "Device_Pointing_Method" to be \'touchscreen\' (was \'' + browser['Device_Pointing_Method'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Code_Name'], 'general Mobile Phone', 'Expected actual "Device_Code_Name" to be \'general Mobile Phone\' (was \'' + browser['Device_Code_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Brand_Name'], 'unknown', 'Expected actual "Device_Brand_Name" to be \'unknown\' (was \'' + browser['Device_Brand_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Name'], 'WebKit', 'Expected actual "RenderingEngine_Name" to be \'WebKit\' (was \'' + browser['RenderingEngine_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown', 'Expected actual "RenderingEngine_Version" to be \'unknown\' (was \'' + browser['RenderingEngine_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Maker'], 'Apple Inc', 'Expected actual "RenderingEngine_Maker" to be \'Apple Inc\' (was \'' + browser['RenderingEngine_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
});
