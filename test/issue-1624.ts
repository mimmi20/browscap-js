import assert from 'assert';
import Browscap from '../src/browscap';

suite('checking for issue 1624. (5 tests)', function() {
  test('issue-1624-A ["Mozilla/5.0 (Windows NT 6.3; rv:31.0) Gecko/20100101 Framabird/31.2.0"]', function() {
    let browscap = new Browscap();
    let browser = browscap.getBrowser(
      'Mozilla/5.0 (Windows NT 6.3; rv:31.0) Gecko/20100101 Framabird/31.2.0'
    );

    assert.strictEqual(
      browser['Comment'],
      'Framabird 31.2',
      "Expected actual \"Comment\" to be 'Framabird 31.2' (was '" +
        browser['Comment'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser'],
      'Framabird',
      "Expected actual \"Browser\" to be 'Framabird' (was '" +
        browser['Browser'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser_Type'],
      'Email Client',
      "Expected actual \"Browser_Type\" to be 'Email Client' (was '" +
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
      'Framasoft',
      "Expected actual \"Browser_Maker\" to be 'Framasoft' (was '" +
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
      '31.2',
      "Expected actual \"Version\" to be '31.2' (was '" +
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
      '2',
      "Expected actual \"CssVersion\" to be '2' (was '" +
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
      'unknown',
      "Expected actual \"RenderingEngine_Version\" to be 'unknown' (was '" +
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
  test('issue-1624-B ["Mozilla/5.0 (Windows NT 10.0; WOW64; rv:38.0) Gecko/20100101 Firefox/38.0 Framabird/38.5.1 Lightning/4.0.5.2"]', function() {
    let browscap = new Browscap();
    let browser = browscap.getBrowser(
      'Mozilla/5.0 (Windows NT 10.0; WOW64; rv:38.0) Gecko/20100101 Firefox/38.0 Framabird/38.5.1 Lightning/4.0.5.2'
    );

    assert.strictEqual(
      browser['Comment'],
      'Framabird 38.5',
      "Expected actual \"Comment\" to be 'Framabird 38.5' (was '" +
        browser['Comment'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser'],
      'Framabird',
      "Expected actual \"Browser\" to be 'Framabird' (was '" +
        browser['Browser'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser_Type'],
      'Email Client',
      "Expected actual \"Browser_Type\" to be 'Email Client' (was '" +
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
      'Framasoft',
      "Expected actual \"Browser_Maker\" to be 'Framasoft' (was '" +
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
      '38.5',
      "Expected actual \"Version\" to be '38.5' (was '" +
        browser['Version'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform'],
      'Win10',
      "Expected actual \"Platform\" to be 'Win10' (was '" +
        browser['Platform'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Version'],
      '10.0',
      "Expected actual \"Platform_Version\" to be '10.0' (was '" +
        browser['Platform_Version'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Description'],
      'Windows 10',
      "Expected actual \"Platform_Description\" to be 'Windows 10' (was '" +
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
      '2',
      "Expected actual \"CssVersion\" to be '2' (was '" +
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
      'unknown',
      "Expected actual \"RenderingEngine_Version\" to be 'unknown' (was '" +
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
  test('issue-1624-C ["Mozilla/5.0 (Windows NT 6.1; WOW64; rv:24.0) Gecko/20100101 Firefox/24.0 Framabird/24.1.1"]', function() {
    let browscap = new Browscap();
    let browser = browscap.getBrowser(
      'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:24.0) Gecko/20100101 Firefox/24.0 Framabird/24.1.1'
    );

    assert.strictEqual(
      browser['Comment'],
      'Framabird 24.1',
      "Expected actual \"Comment\" to be 'Framabird 24.1' (was '" +
        browser['Comment'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser'],
      'Framabird',
      "Expected actual \"Browser\" to be 'Framabird' (was '" +
        browser['Browser'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser_Type'],
      'Email Client',
      "Expected actual \"Browser_Type\" to be 'Email Client' (was '" +
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
      'Framasoft',
      "Expected actual \"Browser_Maker\" to be 'Framasoft' (was '" +
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
      '24.1',
      "Expected actual \"Version\" to be '24.1' (was '" +
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
      '2',
      "Expected actual \"CssVersion\" to be '2' (was '" +
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
      'unknown',
      "Expected actual \"RenderingEngine_Version\" to be 'unknown' (was '" +
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
  test('issue-1624-D ["Mozilla/5.0 (Windows NT 6.1; WOW64; rv:38.0) Gecko/20100101 Firefox/38.0 Framabird/38.5.1"]', function() {
    let browscap = new Browscap();
    let browser = browscap.getBrowser(
      'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:38.0) Gecko/20100101 Firefox/38.0 Framabird/38.5.1'
    );

    assert.strictEqual(
      browser['Comment'],
      'Framabird 38.5',
      "Expected actual \"Comment\" to be 'Framabird 38.5' (was '" +
        browser['Comment'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser'],
      'Framabird',
      "Expected actual \"Browser\" to be 'Framabird' (was '" +
        browser['Browser'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser_Type'],
      'Email Client',
      "Expected actual \"Browser_Type\" to be 'Email Client' (was '" +
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
      'Framasoft',
      "Expected actual \"Browser_Maker\" to be 'Framasoft' (was '" +
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
      '38.5',
      "Expected actual \"Version\" to be '38.5' (was '" +
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
      '2',
      "Expected actual \"CssVersion\" to be '2' (was '" +
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
      'unknown',
      "Expected actual \"RenderingEngine_Version\" to be 'unknown' (was '" +
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
  test('issue-1624-E ["Mozilla/5.0 (Windows NT 6.3; WOW64; rv:24.0) Gecko/20100101 Firefox/24.0 Framabird/24.1.1"]', function() {
    let browscap = new Browscap();
    let browser = browscap.getBrowser(
      'Mozilla/5.0 (Windows NT 6.3; WOW64; rv:24.0) Gecko/20100101 Firefox/24.0 Framabird/24.1.1'
    );

    assert.strictEqual(
      browser['Comment'],
      'Framabird 24.1',
      "Expected actual \"Comment\" to be 'Framabird 24.1' (was '" +
        browser['Comment'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser'],
      'Framabird',
      "Expected actual \"Browser\" to be 'Framabird' (was '" +
        browser['Browser'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser_Type'],
      'Email Client',
      "Expected actual \"Browser_Type\" to be 'Email Client' (was '" +
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
      'Framasoft',
      "Expected actual \"Browser_Maker\" to be 'Framasoft' (was '" +
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
      '24.1',
      "Expected actual \"Version\" to be '24.1' (was '" +
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
      '2',
      "Expected actual \"CssVersion\" to be '2' (was '" +
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
      'unknown',
      "Expected actual \"RenderingEngine_Version\" to be 'unknown' (was '" +
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
