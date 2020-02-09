import assert from 'assert';
import Browscap from '../src/browscap';

suite('checking for issue 047. (6 tests)', function() {
  test('issue-047-phpbrowscap-8 ["Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36"]', function() {
    let browscap = new Browscap();
    let browser = browscap.getBrowser(
      'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36'
    );

    assert.strictEqual(
      browser['Comment'],
      'Chrome 31.0',
      "Expected actual \"Comment\" to be 'Chrome 31.0' (was '" +
        browser['Comment'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser'],
      'Chrome',
      "Expected actual \"Browser\" to be 'Chrome' (was '" +
        browser['Browser'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser_Type'],
      'Browser',
      "Expected actual \"Browser_Type\" to be 'Browser' (was '" +
        browser['Browser_Type'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser_Bits'],
      '32',
      "Expected actual \"Browser_Bits\" to be '32' (was '" +
        browser['Browser_Bits'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser_Maker'],
      'Google Inc',
      "Expected actual \"Browser_Maker\" to be 'Google Inc' (was '" +
        browser['Browser_Maker'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser_Modus'],
      'unknown',
      "Expected actual \"Browser_Modus\" to be 'unknown' (was '" +
        browser['Browser_Modus'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Version'],
      '31.0',
      "Expected actual \"Version\" to be '31.0' (was '" +
        browser['Version'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform'],
      'WinXP',
      "Expected actual \"Platform\" to be 'WinXP' (was '" +
        browser['Platform'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Version'],
      '5.1',
      "Expected actual \"Platform_Version\" to be '5.1' (was '" +
        browser['Platform_Version'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Description'],
      'Windows XP',
      "Expected actual \"Platform_Description\" to be 'Windows XP' (was '" +
        browser['Platform_Description'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Bits'],
      '32',
      "Expected actual \"Platform_Bits\" to be '32' (was '" +
        browser['Platform_Bits'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Maker'],
      'Microsoft Corporation',
      "Expected actual \"Platform_Maker\" to be 'Microsoft Corporation' (was '" +
        browser['Platform_Maker'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Alpha'],
      false,
      'Expected actual "Alpha" to be false (was \'' +
        browser['Alpha'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Beta'],
      false,
      'Expected actual "Beta" to be false (was \'' +
        browser['Beta'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Frames'],
      true,
      'Expected actual "Frames" to be true (was \'' +
        browser['Frames'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['IFrames'],
      true,
      'Expected actual "IFrames" to be true (was \'' +
        browser['IFrames'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Tables'],
      true,
      'Expected actual "Tables" to be true (was \'' +
        browser['Tables'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Cookies'],
      true,
      'Expected actual "Cookies" to be true (was \'' +
        browser['Cookies'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['JavaScript'],
      true,
      'Expected actual "JavaScript" to be true (was \'' +
        browser['JavaScript'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['VBScript'],
      false,
      'Expected actual "VBScript" to be false (was \'' +
        browser['VBScript'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['JavaApplets'],
      false,
      'Expected actual "JavaApplets" to be false (was \'' +
        browser['JavaApplets'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['isSyndicationReader'],
      false,
      'Expected actual "isSyndicationReader" to be false (was \'' +
        browser['isSyndicationReader'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['isFake'],
      false,
      'Expected actual "isFake" to be false (was \'' +
        browser['isFake'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['isAnonymized'],
      false,
      'Expected actual "isAnonymized" to be false (was \'' +
        browser['isAnonymized'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['isModified'],
      false,
      'Expected actual "isModified" to be false (was \'' +
        browser['isModified'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['CssVersion'],
      '3',
      "Expected actual \"CssVersion\" to be '3' (was '" +
        browser['CssVersion'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Device_Name'],
      'Windows Desktop',
      "Expected actual \"Device_Name\" to be 'Windows Desktop' (was '" +
        browser['Device_Name'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Device_Maker'],
      'unknown',
      "Expected actual \"Device_Maker\" to be 'unknown' (was '" +
        browser['Device_Maker'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Device_Type'],
      'Desktop',
      "Expected actual \"Device_Type\" to be 'Desktop' (was '" +
        browser['Device_Type'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Device_Pointing_Method'],
      'mouse',
      "Expected actual \"Device_Pointing_Method\" to be 'mouse' (was '" +
        browser['Device_Pointing_Method'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Device_Code_Name'],
      'Windows Desktop',
      "Expected actual \"Device_Code_Name\" to be 'Windows Desktop' (was '" +
        browser['Device_Code_Name'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Device_Brand_Name'],
      'unknown',
      "Expected actual \"Device_Brand_Name\" to be 'unknown' (was '" +
        browser['Device_Brand_Name'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['RenderingEngine_Name'],
      'Blink',
      "Expected actual \"RenderingEngine_Name\" to be 'Blink' (was '" +
        browser['RenderingEngine_Name'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['RenderingEngine_Version'],
      'unknown',
      "Expected actual \"RenderingEngine_Version\" to be 'unknown' (was '" +
        browser['RenderingEngine_Version'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['RenderingEngine_Maker'],
      'Google Inc',
      "Expected actual \"RenderingEngine_Maker\" to be 'Google Inc' (was '" +
        browser['RenderingEngine_Maker'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
  });
  test('issue-047-phpbrowscap-7 ["Mozilla/5.0 (Windows NT 5.1; rv:26.0) Gecko/20100101 Firefox/26.0"]', function() {
    let browscap = new Browscap();
    let browser = browscap.getBrowser(
      'Mozilla/5.0 (Windows NT 5.1; rv:26.0) Gecko/20100101 Firefox/26.0'
    );

    assert.strictEqual(
      browser['Comment'],
      'Firefox 26.0',
      "Expected actual \"Comment\" to be 'Firefox 26.0' (was '" +
        browser['Comment'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser'],
      'Firefox',
      "Expected actual \"Browser\" to be 'Firefox' (was '" +
        browser['Browser'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser_Type'],
      'Browser',
      "Expected actual \"Browser_Type\" to be 'Browser' (was '" +
        browser['Browser_Type'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser_Bits'],
      '32',
      "Expected actual \"Browser_Bits\" to be '32' (was '" +
        browser['Browser_Bits'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser_Maker'],
      'Mozilla Foundation',
      "Expected actual \"Browser_Maker\" to be 'Mozilla Foundation' (was '" +
        browser['Browser_Maker'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser_Modus'],
      'unknown',
      "Expected actual \"Browser_Modus\" to be 'unknown' (was '" +
        browser['Browser_Modus'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Version'],
      '26.0',
      "Expected actual \"Version\" to be '26.0' (was '" +
        browser['Version'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform'],
      'WinXP',
      "Expected actual \"Platform\" to be 'WinXP' (was '" +
        browser['Platform'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Version'],
      '5.1',
      "Expected actual \"Platform_Version\" to be '5.1' (was '" +
        browser['Platform_Version'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Description'],
      'Windows XP',
      "Expected actual \"Platform_Description\" to be 'Windows XP' (was '" +
        browser['Platform_Description'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Bits'],
      '32',
      "Expected actual \"Platform_Bits\" to be '32' (was '" +
        browser['Platform_Bits'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Maker'],
      'Microsoft Corporation',
      "Expected actual \"Platform_Maker\" to be 'Microsoft Corporation' (was '" +
        browser['Platform_Maker'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Alpha'],
      false,
      'Expected actual "Alpha" to be false (was \'' +
        browser['Alpha'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Beta'],
      false,
      'Expected actual "Beta" to be false (was \'' +
        browser['Beta'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Frames'],
      true,
      'Expected actual "Frames" to be true (was \'' +
        browser['Frames'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['IFrames'],
      true,
      'Expected actual "IFrames" to be true (was \'' +
        browser['IFrames'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Tables'],
      true,
      'Expected actual "Tables" to be true (was \'' +
        browser['Tables'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Cookies'],
      true,
      'Expected actual "Cookies" to be true (was \'' +
        browser['Cookies'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['JavaScript'],
      true,
      'Expected actual "JavaScript" to be true (was \'' +
        browser['JavaScript'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['VBScript'],
      false,
      'Expected actual "VBScript" to be false (was \'' +
        browser['VBScript'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['JavaApplets'],
      true,
      'Expected actual "JavaApplets" to be true (was \'' +
        browser['JavaApplets'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['isSyndicationReader'],
      false,
      'Expected actual "isSyndicationReader" to be false (was \'' +
        browser['isSyndicationReader'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['isFake'],
      false,
      'Expected actual "isFake" to be false (was \'' +
        browser['isFake'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['isAnonymized'],
      false,
      'Expected actual "isAnonymized" to be false (was \'' +
        browser['isAnonymized'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['isModified'],
      false,
      'Expected actual "isModified" to be false (was \'' +
        browser['isModified'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['CssVersion'],
      '3',
      "Expected actual \"CssVersion\" to be '3' (was '" +
        browser['CssVersion'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Device_Name'],
      'Windows Desktop',
      "Expected actual \"Device_Name\" to be 'Windows Desktop' (was '" +
        browser['Device_Name'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Device_Maker'],
      'unknown',
      "Expected actual \"Device_Maker\" to be 'unknown' (was '" +
        browser['Device_Maker'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Device_Type'],
      'Desktop',
      "Expected actual \"Device_Type\" to be 'Desktop' (was '" +
        browser['Device_Type'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Device_Pointing_Method'],
      'mouse',
      "Expected actual \"Device_Pointing_Method\" to be 'mouse' (was '" +
        browser['Device_Pointing_Method'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Device_Code_Name'],
      'Windows Desktop',
      "Expected actual \"Device_Code_Name\" to be 'Windows Desktop' (was '" +
        browser['Device_Code_Name'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Device_Brand_Name'],
      'unknown',
      "Expected actual \"Device_Brand_Name\" to be 'unknown' (was '" +
        browser['Device_Brand_Name'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['RenderingEngine_Name'],
      'Gecko',
      "Expected actual \"RenderingEngine_Name\" to be 'Gecko' (was '" +
        browser['RenderingEngine_Name'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['RenderingEngine_Version'],
      '26.0',
      "Expected actual \"RenderingEngine_Version\" to be '26.0' (was '" +
        browser['RenderingEngine_Version'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['RenderingEngine_Maker'],
      'Mozilla Foundation',
      "Expected actual \"RenderingEngine_Maker\" to be 'Mozilla Foundation' (was '" +
        browser['RenderingEngine_Maker'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
  });
  test('issue-047-phpbrowscap-4 ["Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36"]', function() {
    let browscap = new Browscap();
    let browser = browscap.getBrowser(
      'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36'
    );

    assert.strictEqual(
      browser['Comment'],
      'Chrome 31.0',
      "Expected actual \"Comment\" to be 'Chrome 31.0' (was '" +
        browser['Comment'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser'],
      'Chrome',
      "Expected actual \"Browser\" to be 'Chrome' (was '" +
        browser['Browser'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser_Type'],
      'Browser',
      "Expected actual \"Browser_Type\" to be 'Browser' (was '" +
        browser['Browser_Type'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser_Bits'],
      '32',
      "Expected actual \"Browser_Bits\" to be '32' (was '" +
        browser['Browser_Bits'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser_Maker'],
      'Google Inc',
      "Expected actual \"Browser_Maker\" to be 'Google Inc' (was '" +
        browser['Browser_Maker'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser_Modus'],
      'unknown',
      "Expected actual \"Browser_Modus\" to be 'unknown' (was '" +
        browser['Browser_Modus'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Version'],
      '31.0',
      "Expected actual \"Version\" to be '31.0' (was '" +
        browser['Version'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform'],
      'Win8.1',
      "Expected actual \"Platform\" to be 'Win8.1' (was '" +
        browser['Platform'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Version'],
      '6.3',
      "Expected actual \"Platform_Version\" to be '6.3' (was '" +
        browser['Platform_Version'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Description'],
      'Windows 8.1',
      "Expected actual \"Platform_Description\" to be 'Windows 8.1' (was '" +
        browser['Platform_Description'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Bits'],
      '64',
      "Expected actual \"Platform_Bits\" to be '64' (was '" +
        browser['Platform_Bits'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Maker'],
      'Microsoft Corporation',
      "Expected actual \"Platform_Maker\" to be 'Microsoft Corporation' (was '" +
        browser['Platform_Maker'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Alpha'],
      false,
      'Expected actual "Alpha" to be false (was \'' +
        browser['Alpha'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Beta'],
      false,
      'Expected actual "Beta" to be false (was \'' +
        browser['Beta'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Frames'],
      true,
      'Expected actual "Frames" to be true (was \'' +
        browser['Frames'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['IFrames'],
      true,
      'Expected actual "IFrames" to be true (was \'' +
        browser['IFrames'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Tables'],
      true,
      'Expected actual "Tables" to be true (was \'' +
        browser['Tables'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Cookies'],
      true,
      'Expected actual "Cookies" to be true (was \'' +
        browser['Cookies'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['JavaScript'],
      true,
      'Expected actual "JavaScript" to be true (was \'' +
        browser['JavaScript'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['VBScript'],
      false,
      'Expected actual "VBScript" to be false (was \'' +
        browser['VBScript'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['JavaApplets'],
      false,
      'Expected actual "JavaApplets" to be false (was \'' +
        browser['JavaApplets'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['isSyndicationReader'],
      false,
      'Expected actual "isSyndicationReader" to be false (was \'' +
        browser['isSyndicationReader'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['isFake'],
      false,
      'Expected actual "isFake" to be false (was \'' +
        browser['isFake'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['isAnonymized'],
      false,
      'Expected actual "isAnonymized" to be false (was \'' +
        browser['isAnonymized'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['isModified'],
      false,
      'Expected actual "isModified" to be false (was \'' +
        browser['isModified'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['CssVersion'],
      '3',
      "Expected actual \"CssVersion\" to be '3' (was '" +
        browser['CssVersion'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Device_Name'],
      'Windows Desktop',
      "Expected actual \"Device_Name\" to be 'Windows Desktop' (was '" +
        browser['Device_Name'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Device_Maker'],
      'unknown',
      "Expected actual \"Device_Maker\" to be 'unknown' (was '" +
        browser['Device_Maker'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Device_Type'],
      'Desktop',
      "Expected actual \"Device_Type\" to be 'Desktop' (was '" +
        browser['Device_Type'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Device_Pointing_Method'],
      'mouse',
      "Expected actual \"Device_Pointing_Method\" to be 'mouse' (was '" +
        browser['Device_Pointing_Method'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Device_Code_Name'],
      'Windows Desktop',
      "Expected actual \"Device_Code_Name\" to be 'Windows Desktop' (was '" +
        browser['Device_Code_Name'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Device_Brand_Name'],
      'unknown',
      "Expected actual \"Device_Brand_Name\" to be 'unknown' (was '" +
        browser['Device_Brand_Name'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['RenderingEngine_Name'],
      'Blink',
      "Expected actual \"RenderingEngine_Name\" to be 'Blink' (was '" +
        browser['RenderingEngine_Name'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['RenderingEngine_Version'],
      'unknown',
      "Expected actual \"RenderingEngine_Version\" to be 'unknown' (was '" +
        browser['RenderingEngine_Version'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['RenderingEngine_Maker'],
      'Google Inc',
      "Expected actual \"RenderingEngine_Maker\" to be 'Google Inc' (was '" +
        browser['RenderingEngine_Maker'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
  });
  test('issue-047-phpbrowscap-3 ["Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko"]', function() {
    let browscap = new Browscap();
    let browser = browscap.getBrowser(
      'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko'
    );

    assert.strictEqual(
      browser['Comment'],
      'IE 11.0',
      "Expected actual \"Comment\" to be 'IE 11.0' (was '" +
        browser['Comment'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser'],
      'IE',
      "Expected actual \"Browser\" to be 'IE' (was '" +
        browser['Browser'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser_Type'],
      'Browser',
      "Expected actual \"Browser_Type\" to be 'Browser' (was '" +
        browser['Browser_Type'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser_Bits'],
      '32',
      "Expected actual \"Browser_Bits\" to be '32' (was '" +
        browser['Browser_Bits'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser_Maker'],
      'Microsoft Corporation',
      "Expected actual \"Browser_Maker\" to be 'Microsoft Corporation' (was '" +
        browser['Browser_Maker'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser_Modus'],
      'unknown',
      "Expected actual \"Browser_Modus\" to be 'unknown' (was '" +
        browser['Browser_Modus'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Version'],
      '11.0',
      "Expected actual \"Version\" to be '11.0' (was '" +
        browser['Version'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform'],
      'Win7',
      "Expected actual \"Platform\" to be 'Win7' (was '" +
        browser['Platform'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Version'],
      '6.1',
      "Expected actual \"Platform_Version\" to be '6.1' (was '" +
        browser['Platform_Version'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Description'],
      'Windows 7',
      "Expected actual \"Platform_Description\" to be 'Windows 7' (was '" +
        browser['Platform_Description'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Bits'],
      '64',
      "Expected actual \"Platform_Bits\" to be '64' (was '" +
        browser['Platform_Bits'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Maker'],
      'Microsoft Corporation',
      "Expected actual \"Platform_Maker\" to be 'Microsoft Corporation' (was '" +
        browser['Platform_Maker'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Alpha'],
      false,
      'Expected actual "Alpha" to be false (was \'' +
        browser['Alpha'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Beta'],
      false,
      'Expected actual "Beta" to be false (was \'' +
        browser['Beta'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Frames'],
      true,
      'Expected actual "Frames" to be true (was \'' +
        browser['Frames'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['IFrames'],
      true,
      'Expected actual "IFrames" to be true (was \'' +
        browser['IFrames'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Tables'],
      true,
      'Expected actual "Tables" to be true (was \'' +
        browser['Tables'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Cookies'],
      true,
      'Expected actual "Cookies" to be true (was \'' +
        browser['Cookies'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['JavaScript'],
      true,
      'Expected actual "JavaScript" to be true (was \'' +
        browser['JavaScript'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['VBScript'],
      true,
      'Expected actual "VBScript" to be true (was \'' +
        browser['VBScript'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['JavaApplets'],
      true,
      'Expected actual "JavaApplets" to be true (was \'' +
        browser['JavaApplets'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['isSyndicationReader'],
      false,
      'Expected actual "isSyndicationReader" to be false (was \'' +
        browser['isSyndicationReader'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['isFake'],
      false,
      'Expected actual "isFake" to be false (was \'' +
        browser['isFake'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['isAnonymized'],
      false,
      'Expected actual "isAnonymized" to be false (was \'' +
        browser['isAnonymized'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['isModified'],
      false,
      'Expected actual "isModified" to be false (was \'' +
        browser['isModified'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['CssVersion'],
      '3',
      "Expected actual \"CssVersion\" to be '3' (was '" +
        browser['CssVersion'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Device_Name'],
      'Windows Desktop',
      "Expected actual \"Device_Name\" to be 'Windows Desktop' (was '" +
        browser['Device_Name'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Device_Maker'],
      'unknown',
      "Expected actual \"Device_Maker\" to be 'unknown' (was '" +
        browser['Device_Maker'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Device_Type'],
      'Desktop',
      "Expected actual \"Device_Type\" to be 'Desktop' (was '" +
        browser['Device_Type'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Device_Pointing_Method'],
      'mouse',
      "Expected actual \"Device_Pointing_Method\" to be 'mouse' (was '" +
        browser['Device_Pointing_Method'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Device_Code_Name'],
      'Windows Desktop',
      "Expected actual \"Device_Code_Name\" to be 'Windows Desktop' (was '" +
        browser['Device_Code_Name'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Device_Brand_Name'],
      'unknown',
      "Expected actual \"Device_Brand_Name\" to be 'unknown' (was '" +
        browser['Device_Brand_Name'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['RenderingEngine_Name'],
      'Trident',
      "Expected actual \"RenderingEngine_Name\" to be 'Trident' (was '" +
        browser['RenderingEngine_Name'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['RenderingEngine_Version'],
      '7.0',
      "Expected actual \"RenderingEngine_Version\" to be '7.0' (was '" +
        browser['RenderingEngine_Version'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['RenderingEngine_Maker'],
      'Microsoft Corporation',
      "Expected actual \"RenderingEngine_Maker\" to be 'Microsoft Corporation' (was '" +
        browser['RenderingEngine_Maker'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
  });
  test('issue-047-phpbrowscap-2 ["Mozilla/5.0 (Windows NT 6.1; WOW64; rv:25.0) Gecko/20100101 Firefox/25.0"]', function() {
    let browscap = new Browscap();
    let browser = browscap.getBrowser(
      'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:25.0) Gecko/20100101 Firefox/25.0'
    );

    assert.strictEqual(
      browser['Comment'],
      'Firefox 25.0',
      "Expected actual \"Comment\" to be 'Firefox 25.0' (was '" +
        browser['Comment'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser'],
      'Firefox',
      "Expected actual \"Browser\" to be 'Firefox' (was '" +
        browser['Browser'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser_Type'],
      'Browser',
      "Expected actual \"Browser_Type\" to be 'Browser' (was '" +
        browser['Browser_Type'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser_Bits'],
      '32',
      "Expected actual \"Browser_Bits\" to be '32' (was '" +
        browser['Browser_Bits'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser_Maker'],
      'Mozilla Foundation',
      "Expected actual \"Browser_Maker\" to be 'Mozilla Foundation' (was '" +
        browser['Browser_Maker'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser_Modus'],
      'unknown',
      "Expected actual \"Browser_Modus\" to be 'unknown' (was '" +
        browser['Browser_Modus'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Version'],
      '25.0',
      "Expected actual \"Version\" to be '25.0' (was '" +
        browser['Version'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform'],
      'Win7',
      "Expected actual \"Platform\" to be 'Win7' (was '" +
        browser['Platform'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Version'],
      '6.1',
      "Expected actual \"Platform_Version\" to be '6.1' (was '" +
        browser['Platform_Version'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Description'],
      'Windows 7',
      "Expected actual \"Platform_Description\" to be 'Windows 7' (was '" +
        browser['Platform_Description'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Bits'],
      '64',
      "Expected actual \"Platform_Bits\" to be '64' (was '" +
        browser['Platform_Bits'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Maker'],
      'Microsoft Corporation',
      "Expected actual \"Platform_Maker\" to be 'Microsoft Corporation' (was '" +
        browser['Platform_Maker'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Alpha'],
      false,
      'Expected actual "Alpha" to be false (was \'' +
        browser['Alpha'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Beta'],
      false,
      'Expected actual "Beta" to be false (was \'' +
        browser['Beta'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Frames'],
      true,
      'Expected actual "Frames" to be true (was \'' +
        browser['Frames'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['IFrames'],
      true,
      'Expected actual "IFrames" to be true (was \'' +
        browser['IFrames'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Tables'],
      true,
      'Expected actual "Tables" to be true (was \'' +
        browser['Tables'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Cookies'],
      true,
      'Expected actual "Cookies" to be true (was \'' +
        browser['Cookies'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['JavaScript'],
      true,
      'Expected actual "JavaScript" to be true (was \'' +
        browser['JavaScript'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['VBScript'],
      false,
      'Expected actual "VBScript" to be false (was \'' +
        browser['VBScript'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['JavaApplets'],
      true,
      'Expected actual "JavaApplets" to be true (was \'' +
        browser['JavaApplets'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['isSyndicationReader'],
      false,
      'Expected actual "isSyndicationReader" to be false (was \'' +
        browser['isSyndicationReader'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['isFake'],
      false,
      'Expected actual "isFake" to be false (was \'' +
        browser['isFake'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['isAnonymized'],
      false,
      'Expected actual "isAnonymized" to be false (was \'' +
        browser['isAnonymized'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['isModified'],
      false,
      'Expected actual "isModified" to be false (was \'' +
        browser['isModified'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['CssVersion'],
      '3',
      "Expected actual \"CssVersion\" to be '3' (was '" +
        browser['CssVersion'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Device_Name'],
      'Windows Desktop',
      "Expected actual \"Device_Name\" to be 'Windows Desktop' (was '" +
        browser['Device_Name'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Device_Maker'],
      'unknown',
      "Expected actual \"Device_Maker\" to be 'unknown' (was '" +
        browser['Device_Maker'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Device_Type'],
      'Desktop',
      "Expected actual \"Device_Type\" to be 'Desktop' (was '" +
        browser['Device_Type'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Device_Pointing_Method'],
      'mouse',
      "Expected actual \"Device_Pointing_Method\" to be 'mouse' (was '" +
        browser['Device_Pointing_Method'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Device_Code_Name'],
      'Windows Desktop',
      "Expected actual \"Device_Code_Name\" to be 'Windows Desktop' (was '" +
        browser['Device_Code_Name'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Device_Brand_Name'],
      'unknown',
      "Expected actual \"Device_Brand_Name\" to be 'unknown' (was '" +
        browser['Device_Brand_Name'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['RenderingEngine_Name'],
      'Gecko',
      "Expected actual \"RenderingEngine_Name\" to be 'Gecko' (was '" +
        browser['RenderingEngine_Name'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['RenderingEngine_Version'],
      '25.0',
      "Expected actual \"RenderingEngine_Version\" to be '25.0' (was '" +
        browser['RenderingEngine_Version'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['RenderingEngine_Maker'],
      'Mozilla Foundation',
      "Expected actual \"RenderingEngine_Maker\" to be 'Mozilla Foundation' (was '" +
        browser['RenderingEngine_Maker'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
  });
  test('issue-047-phpbrowscap-1 ["Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:25.0) Gecko/20100101 Firefox/25.0 FirePHP/0.7.4"]', function() {
    let browscap = new Browscap();
    let browser = browscap.getBrowser(
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:25.0) Gecko/20100101 Firefox/25.0 FirePHP/0.7.4'
    );

    assert.strictEqual(
      browser['Comment'],
      'Firefox 25.0',
      "Expected actual \"Comment\" to be 'Firefox 25.0' (was '" +
        browser['Comment'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser'],
      'Firefox',
      "Expected actual \"Browser\" to be 'Firefox' (was '" +
        browser['Browser'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser_Type'],
      'Browser',
      "Expected actual \"Browser_Type\" to be 'Browser' (was '" +
        browser['Browser_Type'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser_Bits'],
      '32',
      "Expected actual \"Browser_Bits\" to be '32' (was '" +
        browser['Browser_Bits'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser_Maker'],
      'Mozilla Foundation',
      "Expected actual \"Browser_Maker\" to be 'Mozilla Foundation' (was '" +
        browser['Browser_Maker'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser_Modus'],
      'unknown',
      "Expected actual \"Browser_Modus\" to be 'unknown' (was '" +
        browser['Browser_Modus'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Version'],
      '25.0',
      "Expected actual \"Version\" to be '25.0' (was '" +
        browser['Version'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform'],
      'MacOSX',
      "Expected actual \"Platform\" to be 'MacOSX' (was '" +
        browser['Platform'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Version'],
      '10.8',
      "Expected actual \"Platform_Version\" to be '10.8' (was '" +
        browser['Platform_Version'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Description'],
      'Mac OS X',
      "Expected actual \"Platform_Description\" to be 'Mac OS X' (was '" +
        browser['Platform_Description'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Bits'],
      '32',
      "Expected actual \"Platform_Bits\" to be '32' (was '" +
        browser['Platform_Bits'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Maker'],
      'Apple Inc',
      "Expected actual \"Platform_Maker\" to be 'Apple Inc' (was '" +
        browser['Platform_Maker'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Alpha'],
      false,
      'Expected actual "Alpha" to be false (was \'' +
        browser['Alpha'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Beta'],
      false,
      'Expected actual "Beta" to be false (was \'' +
        browser['Beta'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Frames'],
      true,
      'Expected actual "Frames" to be true (was \'' +
        browser['Frames'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['IFrames'],
      true,
      'Expected actual "IFrames" to be true (was \'' +
        browser['IFrames'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Tables'],
      true,
      'Expected actual "Tables" to be true (was \'' +
        browser['Tables'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Cookies'],
      true,
      'Expected actual "Cookies" to be true (was \'' +
        browser['Cookies'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['JavaScript'],
      true,
      'Expected actual "JavaScript" to be true (was \'' +
        browser['JavaScript'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['VBScript'],
      false,
      'Expected actual "VBScript" to be false (was \'' +
        browser['VBScript'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['JavaApplets'],
      true,
      'Expected actual "JavaApplets" to be true (was \'' +
        browser['JavaApplets'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['isSyndicationReader'],
      false,
      'Expected actual "isSyndicationReader" to be false (was \'' +
        browser['isSyndicationReader'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['isFake'],
      false,
      'Expected actual "isFake" to be false (was \'' +
        browser['isFake'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['isAnonymized'],
      false,
      'Expected actual "isAnonymized" to be false (was \'' +
        browser['isAnonymized'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['isModified'],
      false,
      'Expected actual "isModified" to be false (was \'' +
        browser['isModified'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['CssVersion'],
      '3',
      "Expected actual \"CssVersion\" to be '3' (was '" +
        browser['CssVersion'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Device_Name'],
      'Macintosh',
      "Expected actual \"Device_Name\" to be 'Macintosh' (was '" +
        browser['Device_Name'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Device_Maker'],
      'Apple Inc',
      "Expected actual \"Device_Maker\" to be 'Apple Inc' (was '" +
        browser['Device_Maker'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Device_Type'],
      'Desktop',
      "Expected actual \"Device_Type\" to be 'Desktop' (was '" +
        browser['Device_Type'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Device_Pointing_Method'],
      'mouse',
      "Expected actual \"Device_Pointing_Method\" to be 'mouse' (was '" +
        browser['Device_Pointing_Method'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Device_Code_Name'],
      'Macintosh',
      "Expected actual \"Device_Code_Name\" to be 'Macintosh' (was '" +
        browser['Device_Code_Name'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Device_Brand_Name'],
      'Apple',
      "Expected actual \"Device_Brand_Name\" to be 'Apple' (was '" +
        browser['Device_Brand_Name'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['RenderingEngine_Name'],
      'Gecko',
      "Expected actual \"RenderingEngine_Name\" to be 'Gecko' (was '" +
        browser['RenderingEngine_Name'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['RenderingEngine_Version'],
      '25.0',
      "Expected actual \"RenderingEngine_Version\" to be '25.0' (was '" +
        browser['RenderingEngine_Version'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['RenderingEngine_Maker'],
      'Mozilla Foundation',
      "Expected actual \"RenderingEngine_Maker\" to be 'Mozilla Foundation' (was '" +
        browser['RenderingEngine_Maker'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
  });
});
