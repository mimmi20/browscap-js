import assert from 'assert';
import Browscap from '../src/browscap';

suite('checking for issue 1344. (36 tests)', function() {
  test('issue-1344-A ["Mozilla/5.0 (Windows NT 6.0; WOW64) AppleWebKit/534.34 (KHTML, like Gecko) PhantomJS/1.9.2 Safari/534.34"]', function() {
    let browscap = new Browscap();
    let browser = browscap.getBrowser(
      'Mozilla/5.0 (Windows NT 6.0; WOW64) AppleWebKit/534.34 (KHTML, like Gecko) PhantomJS/1.9.2 Safari/534.34'
    );

    assert.strictEqual(
      browser['Comment'],
      'PhantomJS 1.9',
      "Expected actual \"Comment\" to be 'PhantomJS 1.9' (was '" +
        browser['Comment'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser'],
      'PhantomJS',
      "Expected actual \"Browser\" to be 'PhantomJS' (was '" +
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
      'phantomjs.org',
      "Expected actual \"Browser_Maker\" to be 'phantomjs.org' (was '" +
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
      '1.9',
      "Expected actual \"Version\" to be '1.9' (was '" +
        browser['Version'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform'],
      'WinVista',
      "Expected actual \"Platform\" to be 'WinVista' (was '" +
        browser['Platform'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Version'],
      '6.0',
      "Expected actual \"Platform_Version\" to be '6.0' (was '" +
        browser['Platform_Version'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Description'],
      'Windows Vista',
      "Expected actual \"Platform_Description\" to be 'Windows Vista' (was '" +
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
      'WebKit',
      "Expected actual \"RenderingEngine_Name\" to be 'WebKit' (was '" +
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
      'Apple Inc',
      "Expected actual \"RenderingEngine_Maker\" to be 'Apple Inc' (was '" +
        browser['RenderingEngine_Maker'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
  });
  test('issue-1344-B ["Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/534.34 (KHTML, like Gecko) PhantomJS/1.7.0 Safari/534.34"]', function() {
    let browscap = new Browscap();
    let browser = browscap.getBrowser(
      'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/534.34 (KHTML, like Gecko) PhantomJS/1.7.0 Safari/534.34'
    );

    assert.strictEqual(
      browser['Comment'],
      'PhantomJS 1.7',
      "Expected actual \"Comment\" to be 'PhantomJS 1.7' (was '" +
        browser['Comment'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser'],
      'PhantomJS',
      "Expected actual \"Browser\" to be 'PhantomJS' (was '" +
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
      'phantomjs.org',
      "Expected actual \"Browser_Maker\" to be 'phantomjs.org' (was '" +
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
      '1.7',
      "Expected actual \"Version\" to be '1.7' (was '" +
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
      'WebKit',
      "Expected actual \"RenderingEngine_Name\" to be 'WebKit' (was '" +
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
      'Apple Inc',
      "Expected actual \"RenderingEngine_Maker\" to be 'Apple Inc' (was '" +
        browser['RenderingEngine_Maker'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
  });
  test('issue-1344-C ["Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/538.1 (KHTML, like Gecko) CasperJS/1.1.2+PhantomJS/2.1.1 Safari/538.1"]', function() {
    let browscap = new Browscap();
    let browser = browscap.getBrowser(
      'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/538.1 (KHTML, like Gecko) CasperJS/1.1.2+PhantomJS/2.1.1 Safari/538.1'
    );

    assert.strictEqual(
      browser['Comment'],
      'PhantomJS 2.1',
      "Expected actual \"Comment\" to be 'PhantomJS 2.1' (was '" +
        browser['Comment'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser'],
      'PhantomJS',
      "Expected actual \"Browser\" to be 'PhantomJS' (was '" +
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
      'phantomjs.org',
      "Expected actual \"Browser_Maker\" to be 'phantomjs.org' (was '" +
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
      '2.1',
      "Expected actual \"Version\" to be '2.1' (was '" +
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
      'WebKit',
      "Expected actual \"RenderingEngine_Name\" to be 'WebKit' (was '" +
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
      'Apple Inc',
      "Expected actual \"RenderingEngine_Maker\" to be 'Apple Inc' (was '" +
        browser['RenderingEngine_Maker'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
  });
  test('issue-1344-D ["Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) 37abc/1.6.6.8 Chrome/44.0.2403.130 Safari/537.36"]', function() {
    let browscap = new Browscap();
    let browser = browscap.getBrowser(
      'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) 37abc/1.6.6.8 Chrome/44.0.2403.130 Safari/537.36'
    );

    assert.strictEqual(
      browser['Comment'],
      '37abc Browser',
      "Expected actual \"Comment\" to be '37abc Browser' (was '" +
        browser['Comment'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser'],
      '37abc',
      "Expected actual \"Browser\" to be '37abc' (was '" +
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
      'Guangzhou Network',
      "Expected actual \"Browser_Maker\" to be 'Guangzhou Network' (was '" +
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
      '0.0',
      "Expected actual \"Version\" to be '0.0' (was '" +
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
  test('issue-1344-E ["Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) 37abc/1.6.6.8 Chrome/44.0.2403.130 Safari/537.36"]', function() {
    let browscap = new Browscap();
    let browser = browscap.getBrowser(
      'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) 37abc/1.6.6.8 Chrome/44.0.2403.130 Safari/537.36'
    );

    assert.strictEqual(
      browser['Comment'],
      '37abc Browser',
      "Expected actual \"Comment\" to be '37abc Browser' (was '" +
        browser['Comment'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser'],
      '37abc',
      "Expected actual \"Browser\" to be '37abc' (was '" +
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
      'Guangzhou Network',
      "Expected actual \"Browser_Maker\" to be 'Guangzhou Network' (was '" +
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
      '0.0',
      "Expected actual \"Version\" to be '0.0' (was '" +
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
  test('issue-1344-F ["Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Diglo/28.0.1479.334 Chrome/28.0.1479.0 Safari/537.36"]', function() {
    let browscap = new Browscap();
    let browser = browscap.getBrowser(
      'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Diglo/28.0.1479.334 Chrome/28.0.1479.0 Safari/537.36'
    );

    assert.strictEqual(
      browser['Comment'],
      'Diglo 28.0',
      "Expected actual \"Comment\" to be 'Diglo 28.0' (was '" +
        browser['Comment'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser'],
      'Diglo',
      "Expected actual \"Browser\" to be 'Diglo' (was '" +
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
      'Diglo Inc',
      "Expected actual \"Browser_Maker\" to be 'Diglo Inc' (was '" +
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
      '28.0',
      "Expected actual \"Version\" to be '28.0' (was '" +
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
  test('issue-1344-G ["Mozilla/5.0 (Windows NT 6.0) AppleWebKit/537.36 (KHTML, like Gecko) Diglo/28.0.1479.296 Chrome/28.0.1479.0 Safari/537.36"]', function() {
    let browscap = new Browscap();
    let browser = browscap.getBrowser(
      'Mozilla/5.0 (Windows NT 6.0) AppleWebKit/537.36 (KHTML, like Gecko) Diglo/28.0.1479.296 Chrome/28.0.1479.0 Safari/537.36'
    );

    assert.strictEqual(
      browser['Comment'],
      'Diglo 28.0',
      "Expected actual \"Comment\" to be 'Diglo 28.0' (was '" +
        browser['Comment'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser'],
      'Diglo',
      "Expected actual \"Browser\" to be 'Diglo' (was '" +
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
      'Diglo Inc',
      "Expected actual \"Browser_Maker\" to be 'Diglo Inc' (was '" +
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
      '28.0',
      "Expected actual \"Version\" to be '28.0' (was '" +
        browser['Version'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform'],
      'WinVista',
      "Expected actual \"Platform\" to be 'WinVista' (was '" +
        browser['Platform'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Version'],
      '6.0',
      "Expected actual \"Platform_Version\" to be '6.0' (was '" +
        browser['Platform_Version'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Description'],
      'Windows Vista',
      "Expected actual \"Platform_Description\" to be 'Windows Vista' (was '" +
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
  test('issue-1344-H ["Mozilla/5.0 (DTV) AppleWebKit/531.2+ (KHTML, like Gecko) Espial/6.1.1 AQUOSBrowser/1.1 (US01DTV;V;0001;0001)"]', function() {
    let browscap = new Browscap();
    let browser = browscap.getBrowser(
      'Mozilla/5.0 (DTV) AppleWebKit/531.2+ (KHTML, like Gecko) Espial/6.1.1 AQUOSBrowser/1.1 (US01DTV;V;0001;0001)'
    );

    assert.strictEqual(
      browser['Comment'],
      'Espial TV Browser',
      "Expected actual \"Comment\" to be 'Espial TV Browser' (was '" +
        browser['Comment'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser'],
      'Espial TV Browser',
      "Expected actual \"Browser\" to be 'Espial TV Browser' (was '" +
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
      '0',
      "Expected actual \"Browser_Bits\" to be '0' (was '" +
        browser['Browser_Bits'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser_Maker'],
      'Espial Group',
      "Expected actual \"Browser_Maker\" to be 'Espial Group' (was '" +
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
      '6.1',
      "Expected actual \"Version\" to be '6.1' (was '" +
        browser['Version'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform'],
      'unknown',
      "Expected actual \"Platform\" to be 'unknown' (was '" +
        browser['Platform'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Version'],
      'unknown',
      "Expected actual \"Platform_Version\" to be 'unknown' (was '" +
        browser['Platform_Version'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Description'],
      'unknown',
      "Expected actual \"Platform_Description\" to be 'unknown' (was '" +
        browser['Platform_Description'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Bits'],
      '0',
      "Expected actual \"Platform_Bits\" to be '0' (was '" +
        browser['Platform_Bits'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Maker'],
      'unknown',
      "Expected actual \"Platform_Maker\" to be 'unknown' (was '" +
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
      'Aquos TV',
      "Expected actual \"Device_Name\" to be 'Aquos TV' (was '" +
        browser['Device_Name'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Device_Maker'],
      'Sharp Corporation',
      "Expected actual \"Device_Maker\" to be 'Sharp Corporation' (was '" +
        browser['Device_Maker'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Device_Type'],
      'TV Device',
      "Expected actual \"Device_Type\" to be 'TV Device' (was '" +
        browser['Device_Type'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Device_Pointing_Method'],
      'unknown',
      "Expected actual \"Device_Pointing_Method\" to be 'unknown' (was '" +
        browser['Device_Pointing_Method'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Device_Code_Name'],
      'Aquos TV',
      "Expected actual \"Device_Code_Name\" to be 'Aquos TV' (was '" +
        browser['Device_Code_Name'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Device_Brand_Name'],
      'Sharp',
      "Expected actual \"Device_Brand_Name\" to be 'Sharp' (was '" +
        browser['Device_Brand_Name'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['RenderingEngine_Name'],
      'WebKit',
      "Expected actual \"RenderingEngine_Name\" to be 'WebKit' (was '" +
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
      'Apple Inc',
      "Expected actual \"RenderingEngine_Maker\" to be 'Apple Inc' (was '" +
        browser['RenderingEngine_Maker'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
  });
  test('issue-1344-I ["Mozilla/5.0 (DTV) AppleWebKit/531.2+ (KHTML, like Gecko) Espial/6.1.12 AQUOSBrowser/1.0 (AS00DTV;V;0001;0001)AQUOS-AS/2.0 LC-70LE960X"]', function() {
    let browscap = new Browscap();
    let browser = browscap.getBrowser(
      'Mozilla/5.0 (DTV) AppleWebKit/531.2+ (KHTML, like Gecko) Espial/6.1.12 AQUOSBrowser/1.0 (AS00DTV;V;0001;0001)AQUOS-AS/2.0 LC-70LE960X'
    );

    assert.strictEqual(
      browser['Comment'],
      'Espial TV Browser',
      "Expected actual \"Comment\" to be 'Espial TV Browser' (was '" +
        browser['Comment'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser'],
      'Espial TV Browser',
      "Expected actual \"Browser\" to be 'Espial TV Browser' (was '" +
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
      '0',
      "Expected actual \"Browser_Bits\" to be '0' (was '" +
        browser['Browser_Bits'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser_Maker'],
      'Espial Group',
      "Expected actual \"Browser_Maker\" to be 'Espial Group' (was '" +
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
      '6.1',
      "Expected actual \"Version\" to be '6.1' (was '" +
        browser['Version'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform'],
      'unknown',
      "Expected actual \"Platform\" to be 'unknown' (was '" +
        browser['Platform'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Version'],
      'unknown',
      "Expected actual \"Platform_Version\" to be 'unknown' (was '" +
        browser['Platform_Version'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Description'],
      'unknown',
      "Expected actual \"Platform_Description\" to be 'unknown' (was '" +
        browser['Platform_Description'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Bits'],
      '0',
      "Expected actual \"Platform_Bits\" to be '0' (was '" +
        browser['Platform_Bits'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Maker'],
      'unknown',
      "Expected actual \"Platform_Maker\" to be 'unknown' (was '" +
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
      'Aquos TV',
      "Expected actual \"Device_Name\" to be 'Aquos TV' (was '" +
        browser['Device_Name'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Device_Maker'],
      'Sharp Corporation',
      "Expected actual \"Device_Maker\" to be 'Sharp Corporation' (was '" +
        browser['Device_Maker'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Device_Type'],
      'TV Device',
      "Expected actual \"Device_Type\" to be 'TV Device' (was '" +
        browser['Device_Type'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Device_Pointing_Method'],
      'unknown',
      "Expected actual \"Device_Pointing_Method\" to be 'unknown' (was '" +
        browser['Device_Pointing_Method'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Device_Code_Name'],
      'Aquos TV',
      "Expected actual \"Device_Code_Name\" to be 'Aquos TV' (was '" +
        browser['Device_Code_Name'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Device_Brand_Name'],
      'Sharp',
      "Expected actual \"Device_Brand_Name\" to be 'Sharp' (was '" +
        browser['Device_Brand_Name'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['RenderingEngine_Name'],
      'WebKit',
      "Expected actual \"RenderingEngine_Name\" to be 'WebKit' (was '" +
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
      'Apple Inc',
      "Expected actual \"RenderingEngine_Maker\" to be 'Apple Inc' (was '" +
        browser['RenderingEngine_Maker'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
  });
  test('issue-1344-J ["Mozilla/5.0 (X11; FreeBSD) AppleWebKit/537.21 (KHTML, like Gecko) konqueror/4.14.3 Safari/537.21"]', function() {
    let browscap = new Browscap();
    let browser = browscap.getBrowser(
      'Mozilla/5.0 (X11; FreeBSD) AppleWebKit/537.21 (KHTML, like Gecko) konqueror/4.14.3 Safari/537.21'
    );

    assert.strictEqual(
      browser['Comment'],
      'Konqueror 4.14',
      "Expected actual \"Comment\" to be 'Konqueror 4.14' (was '" +
        browser['Comment'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser'],
      'Konqueror',
      "Expected actual \"Browser\" to be 'Konqueror' (was '" +
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
      'KDE e.V.',
      "Expected actual \"Browser_Maker\" to be 'KDE e.V.' (was '" +
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
      '4.14',
      "Expected actual \"Version\" to be '4.14' (was '" +
        browser['Version'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform'],
      'FreeBSD',
      "Expected actual \"Platform\" to be 'FreeBSD' (was '" +
        browser['Platform'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Version'],
      'unknown',
      "Expected actual \"Platform_Version\" to be 'unknown' (was '" +
        browser['Platform_Version'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Description'],
      'FreeBSD',
      "Expected actual \"Platform_Description\" to be 'FreeBSD' (was '" +
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
      'FreeBSD Foundation',
      "Expected actual \"Platform_Maker\" to be 'FreeBSD Foundation' (was '" +
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
      'general Desktop',
      "Expected actual \"Device_Name\" to be 'general Desktop' (was '" +
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
      'general Desktop',
      "Expected actual \"Device_Code_Name\" to be 'general Desktop' (was '" +
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
      'WebKit',
      "Expected actual \"RenderingEngine_Name\" to be 'WebKit' (was '" +
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
      'Apple Inc',
      "Expected actual \"RenderingEngine_Maker\" to be 'Apple Inc' (was '" +
        browser['RenderingEngine_Maker'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
  });
  test('issue-1344-K ["Mozilla/5.0 (X11; FreeBSD) KHTML/4.9.1 (like Gecko) Konqueror/4.9"]', function() {
    let browscap = new Browscap();
    let browser = browscap.getBrowser(
      'Mozilla/5.0 (X11; FreeBSD) KHTML/4.9.1 (like Gecko) Konqueror/4.9'
    );

    assert.strictEqual(
      browser['Comment'],
      'Konqueror 4.9',
      "Expected actual \"Comment\" to be 'Konqueror 4.9' (was '" +
        browser['Comment'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser'],
      'Konqueror',
      "Expected actual \"Browser\" to be 'Konqueror' (was '" +
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
      'KDE e.V.',
      "Expected actual \"Browser_Maker\" to be 'KDE e.V.' (was '" +
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
      '4.9',
      "Expected actual \"Version\" to be '4.9' (was '" +
        browser['Version'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform'],
      'FreeBSD',
      "Expected actual \"Platform\" to be 'FreeBSD' (was '" +
        browser['Platform'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Version'],
      'unknown',
      "Expected actual \"Platform_Version\" to be 'unknown' (was '" +
        browser['Platform_Version'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Description'],
      'FreeBSD',
      "Expected actual \"Platform_Description\" to be 'FreeBSD' (was '" +
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
      'FreeBSD Foundation',
      "Expected actual \"Platform_Maker\" to be 'FreeBSD Foundation' (was '" +
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
      'general Desktop',
      "Expected actual \"Device_Name\" to be 'general Desktop' (was '" +
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
      'general Desktop',
      "Expected actual \"Device_Code_Name\" to be 'general Desktop' (was '" +
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
      'KHTML',
      "Expected actual \"RenderingEngine_Name\" to be 'KHTML' (was '" +
        browser['RenderingEngine_Name'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['RenderingEngine_Version'],
      '4.9',
      "Expected actual \"RenderingEngine_Version\" to be '4.9' (was '" +
        browser['RenderingEngine_Version'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['RenderingEngine_Maker'],
      'KDE e.V.',
      "Expected actual \"RenderingEngine_Maker\" to be 'KDE e.V.' (was '" +
        browser['RenderingEngine_Maker'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
  });
  test('issue-1344-L ["Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/535.7 (KHTML, like Gecko) RockMelt/0.16.91.321 Chrome/16.0.912.77 Safari/535.7"]', function() {
    let browscap = new Browscap();
    let browser = browscap.getBrowser(
      'Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/535.7 (KHTML, like Gecko) RockMelt/0.16.91.321 Chrome/16.0.912.77 Safari/535.7'
    );

    assert.strictEqual(
      browser['Comment'],
      'RockMelt 0.16',
      "Expected actual \"Comment\" to be 'RockMelt 0.16' (was '" +
        browser['Comment'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser'],
      'RockMelt',
      "Expected actual \"Browser\" to be 'RockMelt' (was '" +
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
      'Yahoo! Inc.',
      "Expected actual \"Browser_Maker\" to be 'Yahoo! Inc.' (was '" +
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
      '0.16',
      "Expected actual \"Version\" to be '0.16' (was '" +
        browser['Version'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform'],
      'Win8',
      "Expected actual \"Platform\" to be 'Win8' (was '" +
        browser['Platform'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Version'],
      '6.2',
      "Expected actual \"Platform_Version\" to be '6.2' (was '" +
        browser['Platform_Version'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Description'],
      'Windows 8',
      "Expected actual \"Platform_Description\" to be 'Windows 8' (was '" +
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
      'WebKit',
      "Expected actual \"RenderingEngine_Name\" to be 'WebKit' (was '" +
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
      'Apple Inc',
      "Expected actual \"RenderingEngine_Maker\" to be 'Apple Inc' (was '" +
        browser['RenderingEngine_Maker'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
  });
  test('issue-1344-M ["Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Iridium/48.2 Safari/537.36 Chrome/48.0.2564.116"]', function() {
    let browscap = new Browscap();
    let browser = browscap.getBrowser(
      'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Iridium/48.2 Safari/537.36 Chrome/48.0.2564.116'
    );

    assert.strictEqual(
      browser['Comment'],
      'Iridium Browser 48.0',
      "Expected actual \"Comment\" to be 'Iridium Browser 48.0' (was '" +
        browser['Comment'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser'],
      'Iridium Browser',
      "Expected actual \"Browser\" to be 'Iridium Browser' (was '" +
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
      'Iridium Browser Team',
      "Expected actual \"Browser_Maker\" to be 'Iridium Browser Team' (was '" +
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
      '48.0',
      "Expected actual \"Version\" to be '48.0' (was '" +
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
  test('issue-1344-N ["Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Neuron/31.40.18 Chrome/27.0.1453.110 Safari/537.36"]', function() {
    let browscap = new Browscap();
    let browser = browscap.getBrowser(
      'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Neuron/31.40.18 Chrome/27.0.1453.110 Safari/537.36'
    );

    assert.strictEqual(
      browser['Comment'],
      'Neuron Browser',
      "Expected actual \"Comment\" to be 'Neuron Browser' (was '" +
        browser['Comment'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser'],
      'Neuron',
      "Expected actual \"Browser\" to be 'Neuron' (was '" +
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
      'unknown',
      "Expected actual \"Browser_Maker\" to be 'unknown' (was '" +
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
      '0.0',
      "Expected actual \"Version\" to be '0.0' (was '" +
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
  test('issue-1344-O ["Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) WhiteHat Aviator/32.0.1700.72 Chrome/32.0.1700.72 Safari/537.36"]', function() {
    let browscap = new Browscap();
    let browser = browscap.getBrowser(
      'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) WhiteHat Aviator/32.0.1700.72 Chrome/32.0.1700.72 Safari/537.36'
    );

    assert.strictEqual(
      browser['Comment'],
      'WhiteHat Aviator 32.0',
      "Expected actual \"Comment\" to be 'WhiteHat Aviator 32.0' (was '" +
        browser['Comment'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser'],
      'WhiteHat Aviator',
      "Expected actual \"Browser\" to be 'WhiteHat Aviator' (was '" +
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
      'WhiteHat Security',
      "Expected actual \"Browser_Maker\" to be 'WhiteHat Security' (was '" +
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
      '32.0',
      "Expected actual \"Version\" to be '32.0' (was '" +
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
  test('issue-1344-P ["Mozilla/5.0 (Unknown; U; UNIX BSD/SYSV system; C -) AppleWebKit/527  (KHTML, like Gecko, Safari/419.3) Arora/0.10.2"]', function() {
    let browscap = new Browscap();
    let browser = browscap.getBrowser(
      'Mozilla/5.0 (Unknown; U; UNIX BSD/SYSV system; C -) AppleWebKit/527  (KHTML, like Gecko, Safari/419.3) Arora/0.10.2'
    );

    assert.strictEqual(
      browser['Comment'],
      'Arora 0.10',
      "Expected actual \"Comment\" to be 'Arora 0.10' (was '" +
        browser['Comment'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser'],
      'Arora',
      "Expected actual \"Browser\" to be 'Arora' (was '" +
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
      'unknown',
      "Expected actual \"Browser_Maker\" to be 'unknown' (was '" +
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
      '0.10',
      "Expected actual \"Version\" to be '0.10' (was '" +
        browser['Version'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform'],
      'Unix',
      "Expected actual \"Platform\" to be 'Unix' (was '" +
        browser['Platform'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Version'],
      'unknown',
      "Expected actual \"Platform_Version\" to be 'unknown' (was '" +
        browser['Platform_Version'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Description'],
      'Unix',
      "Expected actual \"Platform_Description\" to be 'Unix' (was '" +
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
      'unknown',
      "Expected actual \"Platform_Maker\" to be 'unknown' (was '" +
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
      'general Desktop',
      "Expected actual \"Device_Name\" to be 'general Desktop' (was '" +
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
      'general Desktop',
      "Expected actual \"Device_Code_Name\" to be 'general Desktop' (was '" +
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
      'WebKit',
      "Expected actual \"RenderingEngine_Name\" to be 'WebKit' (was '" +
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
      'Apple Inc',
      "Expected actual \"RenderingEngine_Maker\" to be 'Apple Inc' (was '" +
        browser['RenderingEngine_Maker'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
  });
  test('issue-1344-Q ["Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.21 (KHTML, like Gecko) lswebkit Safari/537.21 Lunascape/6.10.0.27486 Safari/537.21"]', function() {
    let browscap = new Browscap();
    let browser = browscap.getBrowser(
      'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.21 (KHTML, like Gecko) lswebkit Safari/537.21 Lunascape/6.10.0.27486 Safari/537.21'
    );

    assert.strictEqual(
      browser['Comment'],
      'Lunascape 6.10',
      "Expected actual \"Comment\" to be 'Lunascape 6.10' (was '" +
        browser['Comment'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser'],
      'Lunascape',
      "Expected actual \"Browser\" to be 'Lunascape' (was '" +
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
      'Lunascape Corporation',
      "Expected actual \"Browser_Maker\" to be 'Lunascape Corporation' (was '" +
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
      '6.10',
      "Expected actual \"Version\" to be '6.10' (was '" +
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
      'WebKit',
      "Expected actual \"RenderingEngine_Name\" to be 'WebKit' (was '" +
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
      'Apple Inc',
      "Expected actual \"RenderingEngine_Maker\" to be 'Apple Inc' (was '" +
        browser['RenderingEngine_Maker'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
  });
  test('issue-1344-R ["Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/602.4.8 (KHTML, like Gecko) iCab/5.8.3 Safari/601.7.7"]', function() {
    let browscap = new Browscap();
    let browser = browscap.getBrowser(
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/602.4.8 (KHTML, like Gecko) iCab/5.8.3 Safari/601.7.7'
    );

    assert.strictEqual(
      browser['Comment'],
      'iCab 5.8',
      "Expected actual \"Comment\" to be 'iCab 5.8' (was '" +
        browser['Comment'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser'],
      'iCab',
      "Expected actual \"Browser\" to be 'iCab' (was '" +
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
      'Alexander Clauss',
      "Expected actual \"Browser_Maker\" to be 'Alexander Clauss' (was '" +
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
      '5.8',
      "Expected actual \"Version\" to be '5.8' (was '" +
        browser['Version'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform'],
      'macOS',
      "Expected actual \"Platform\" to be 'macOS' (was '" +
        browser['Platform'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Version'],
      '10.12',
      "Expected actual \"Platform_Version\" to be '10.12' (was '" +
        browser['Platform_Version'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Description'],
      'macOS',
      "Expected actual \"Platform_Description\" to be 'macOS' (was '" +
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
      'WebKit',
      "Expected actual \"RenderingEngine_Name\" to be 'WebKit' (was '" +
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
      'Apple Inc',
      "Expected actual \"RenderingEngine_Maker\" to be 'Apple Inc' (was '" +
        browser['RenderingEngine_Maker'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
  });
  test('issue-1344-S ["Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:25.4) Gecko/20150502 PaleMoon/25.4.0b3"]', function() {
    let browscap = new Browscap();
    let browser = browscap.getBrowser(
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:25.4) Gecko/20150502 PaleMoon/25.4.0b3'
    );

    assert.strictEqual(
      browser['Comment'],
      'PaleMoon 25.4',
      "Expected actual \"Comment\" to be 'PaleMoon 25.4' (was '" +
        browser['Comment'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser'],
      'PaleMoon',
      "Expected actual \"Browser\" to be 'PaleMoon' (was '" +
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
      'Moonchild Productions',
      "Expected actual \"Browser_Maker\" to be 'Moonchild Productions' (was '" +
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
      '25.4',
      "Expected actual \"Version\" to be '25.4' (was '" +
        browser['Version'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform'],
      'macOS',
      "Expected actual \"Platform\" to be 'macOS' (was '" +
        browser['Platform'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Version'],
      '10.12',
      "Expected actual \"Platform_Version\" to be '10.12' (was '" +
        browser['Platform_Version'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Description'],
      'macOS',
      "Expected actual \"Platform_Description\" to be 'macOS' (was '" +
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
      true,
      'Expected actual "Beta" to be true (was \'' +
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
  test('issue-1344-T ["Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.36 (KHTML, like Gecko) Debian Chrome/48.0.2564.116 Safari/537.36"]', function() {
    let browscap = new Browscap();
    let browser = browscap.getBrowser(
      'Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.36 (KHTML, like Gecko) Debian Chrome/48.0.2564.116 Safari/537.36'
    );

    assert.strictEqual(
      browser['Comment'],
      'Chrome 48.0',
      "Expected actual \"Comment\" to be 'Chrome 48.0' (was '" +
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
      '48.0',
      "Expected actual \"Version\" to be '48.0' (was '" +
        browser['Version'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform'],
      'Debian',
      "Expected actual \"Platform\" to be 'Debian' (was '" +
        browser['Platform'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Version'],
      'unknown',
      "Expected actual \"Platform_Version\" to be 'unknown' (was '" +
        browser['Platform_Version'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Description'],
      'Debian Linux',
      "Expected actual \"Platform_Description\" to be 'Debian Linux' (was '" +
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
      'Software in the Public Interest, Inc.',
      "Expected actual \"Platform_Maker\" to be 'Software in the Public Interest, Inc.' (was '" +
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
      'Linux Desktop',
      "Expected actual \"Device_Name\" to be 'Linux Desktop' (was '" +
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
      'Linux Desktop',
      "Expected actual \"Device_Code_Name\" to be 'Linux Desktop' (was '" +
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
  test('issue-1344-U ["Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.36 (KHTML, like Gecko) Debian Chrome/50.0.2661.103 Safari/537.36"]', function() {
    let browscap = new Browscap();
    let browser = browscap.getBrowser(
      'Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.36 (KHTML, like Gecko) Debian Chrome/50.0.2661.103 Safari/537.36'
    );

    assert.strictEqual(
      browser['Comment'],
      'Chrome 50.0',
      "Expected actual \"Comment\" to be 'Chrome 50.0' (was '" +
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
      '50.0',
      "Expected actual \"Version\" to be '50.0' (was '" +
        browser['Version'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform'],
      'Debian',
      "Expected actual \"Platform\" to be 'Debian' (was '" +
        browser['Platform'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Version'],
      'unknown',
      "Expected actual \"Platform_Version\" to be 'unknown' (was '" +
        browser['Platform_Version'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Description'],
      'Debian Linux',
      "Expected actual \"Platform_Description\" to be 'Debian Linux' (was '" +
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
      'Software in the Public Interest, Inc.',
      "Expected actual \"Platform_Maker\" to be 'Software in the Public Interest, Inc.' (was '" +
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
      'Linux Desktop',
      "Expected actual \"Device_Name\" to be 'Linux Desktop' (was '" +
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
      'Linux Desktop',
      "Expected actual \"Device_Code_Name\" to be 'Linux Desktop' (was '" +
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
  test('issue-1344-V ["Mozilla/5.0 (U; Linux; Maemo; Jolla; Sailfish; like Android 4.3) AppleWebKit/538.1 (KHTML, like Gecko) WebPirate/2.1 like Mobile Safari/538.1 (compatible)"]', function() {
    let browscap = new Browscap();
    let browser = browscap.getBrowser(
      'Mozilla/5.0 (U; Linux; Maemo; Jolla; Sailfish; like Android 4.3) AppleWebKit/538.1 (KHTML, like Gecko) WebPirate/2.1 like Mobile Safari/538.1 (compatible)'
    );

    assert.strictEqual(
      browser['Comment'],
      'WebPirate Browser',
      "Expected actual \"Comment\" to be 'WebPirate Browser' (was '" +
        browser['Comment'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser'],
      'WebPirate Browser',
      "Expected actual \"Browser\" to be 'WebPirate Browser' (was '" +
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
      'Antonio Davide',
      "Expected actual \"Browser_Maker\" to be 'Antonio Davide' (was '" +
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
      '0.0',
      "Expected actual \"Version\" to be '0.0' (was '" +
        browser['Version'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform'],
      'SailfishOS',
      "Expected actual \"Platform\" to be 'SailfishOS' (was '" +
        browser['Platform'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Version'],
      'unknown',
      "Expected actual \"Platform_Version\" to be 'unknown' (was '" +
        browser['Platform_Version'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Description'],
      'unknown',
      "Expected actual \"Platform_Description\" to be 'unknown' (was '" +
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
      'Jolla Ltd.',
      "Expected actual \"Platform_Maker\" to be 'Jolla Ltd.' (was '" +
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
      'Jolla',
      "Expected actual \"Device_Name\" to be 'Jolla' (was '" +
        browser['Device_Name'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Device_Maker'],
      'Jolla Ltd.',
      "Expected actual \"Device_Maker\" to be 'Jolla Ltd.' (was '" +
        browser['Device_Maker'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Device_Type'],
      'Mobile Phone',
      "Expected actual \"Device_Type\" to be 'Mobile Phone' (was '" +
        browser['Device_Type'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Device_Pointing_Method'],
      'touchscreen',
      "Expected actual \"Device_Pointing_Method\" to be 'touchscreen' (was '" +
        browser['Device_Pointing_Method'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Device_Code_Name'],
      'Jolla',
      "Expected actual \"Device_Code_Name\" to be 'Jolla' (was '" +
        browser['Device_Code_Name'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Device_Brand_Name'],
      'Jolla',
      "Expected actual \"Device_Brand_Name\" to be 'Jolla' (was '" +
        browser['Device_Brand_Name'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['RenderingEngine_Name'],
      'WebKit',
      "Expected actual \"RenderingEngine_Name\" to be 'WebKit' (was '" +
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
      'Apple Inc',
      "Expected actual \"RenderingEngine_Maker\" to be 'Apple Inc' (was '" +
        browser['RenderingEngine_Maker'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
  });
  test('issue-1344-W ["Mozilla/5.0 (Linux; Android 5.0; Micromax Q340 Build/LRX21M) AppleWebKit/537.36 (KHTML, like Gecko) YoloBrowser/1.0.1.74 Mobile Safari/537.36"]', function() {
    let browscap = new Browscap();
    let browser = browscap.getBrowser(
      'Mozilla/5.0 (Linux; Android 5.0; Micromax Q340 Build/LRX21M) AppleWebKit/537.36 (KHTML, like Gecko) YoloBrowser/1.0.1.74 Mobile Safari/537.36'
    );

    assert.strictEqual(
      browser['Comment'],
      'YOLO Browser 1.0',
      "Expected actual \"Comment\" to be 'YOLO Browser 1.0' (was '" +
        browser['Comment'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser'],
      'YOLO Browser',
      "Expected actual \"Browser\" to be 'YOLO Browser' (was '" +
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
      'YOLO Family',
      "Expected actual \"Browser_Maker\" to be 'YOLO Family' (was '" +
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
      '1.0',
      "Expected actual \"Version\" to be '1.0' (was '" +
        browser['Version'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform'],
      'Android',
      "Expected actual \"Platform\" to be 'Android' (was '" +
        browser['Platform'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Version'],
      '5.0',
      "Expected actual \"Platform_Version\" to be '5.0' (was '" +
        browser['Platform_Version'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Description'],
      'Android OS',
      "Expected actual \"Platform_Description\" to be 'Android OS' (was '" +
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
      'Google Inc',
      "Expected actual \"Platform_Maker\" to be 'Google Inc' (was '" +
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
      'Canvas Selfie 2',
      "Expected actual \"Device_Name\" to be 'Canvas Selfie 2' (was '" +
        browser['Device_Name'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Device_Maker'],
      'Micromax',
      "Expected actual \"Device_Maker\" to be 'Micromax' (was '" +
        browser['Device_Maker'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Device_Type'],
      'Mobile Phone',
      "Expected actual \"Device_Type\" to be 'Mobile Phone' (was '" +
        browser['Device_Type'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Device_Pointing_Method'],
      'touchscreen',
      "Expected actual \"Device_Pointing_Method\" to be 'touchscreen' (was '" +
        browser['Device_Pointing_Method'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Device_Code_Name'],
      'Q340',
      "Expected actual \"Device_Code_Name\" to be 'Q340' (was '" +
        browser['Device_Code_Name'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Device_Brand_Name'],
      'Micromax',
      "Expected actual \"Device_Brand_Name\" to be 'Micromax' (was '" +
        browser['Device_Brand_Name'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['RenderingEngine_Name'],
      'WebKit',
      "Expected actual \"RenderingEngine_Name\" to be 'WebKit' (was '" +
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
      'Apple Inc',
      "Expected actual \"RenderingEngine_Maker\" to be 'Apple Inc' (was '" +
        browser['RenderingEngine_Maker'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
  });
  test('issue-1344-X ["Mozilla/5.0 (Windows NT; Windows NT 10.0; zh-TW) WindowsPowerShell/5.1.14393.953"]', function() {
    let browscap = new Browscap();
    let browser = browscap.getBrowser(
      'Mozilla/5.0 (Windows NT; Windows NT 10.0; zh-TW) WindowsPowerShell/5.1.14393.953'
    );

    assert.strictEqual(
      browser['Comment'],
      'Windows PowerShell',
      "Expected actual \"Comment\" to be 'Windows PowerShell' (was '" +
        browser['Comment'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser'],
      'Windows PowerShell',
      "Expected actual \"Browser\" to be 'Windows PowerShell' (was '" +
        browser['Browser'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser_Type'],
      'Application',
      "Expected actual \"Browser_Type\" to be 'Application' (was '" +
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
      '0.0',
      "Expected actual \"Version\" to be '0.0' (was '" +
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
      false,
      'Expected actual "Frames" to be false (was \'' +
        browser['Frames'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['IFrames'],
      false,
      'Expected actual "IFrames" to be false (was \'' +
        browser['IFrames'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Tables'],
      false,
      'Expected actual "Tables" to be false (was \'' +
        browser['Tables'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Cookies'],
      false,
      'Expected actual "Cookies" to be false (was \'' +
        browser['Cookies'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['JavaScript'],
      false,
      'Expected actual "JavaScript" to be false (was \'' +
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
      '0',
      "Expected actual \"CssVersion\" to be '0' (was '" +
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
      'unknown',
      "Expected actual \"RenderingEngine_Name\" to be 'unknown' (was '" +
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
      'unknown',
      "Expected actual \"RenderingEngine_Maker\" to be 'unknown' (was '" +
        browser['RenderingEngine_Maker'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
  });
  test('issue-1344-Y ["Mozilla/5.0 (Windows NT; Windows NT 6.1; en-US) WindowsPowerShell/5.0.10586.117"]', function() {
    let browscap = new Browscap();
    let browser = browscap.getBrowser(
      'Mozilla/5.0 (Windows NT; Windows NT 6.1; en-US) WindowsPowerShell/5.0.10586.117'
    );

    assert.strictEqual(
      browser['Comment'],
      'Windows PowerShell',
      "Expected actual \"Comment\" to be 'Windows PowerShell' (was '" +
        browser['Comment'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser'],
      'Windows PowerShell',
      "Expected actual \"Browser\" to be 'Windows PowerShell' (was '" +
        browser['Browser'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser_Type'],
      'Application',
      "Expected actual \"Browser_Type\" to be 'Application' (was '" +
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
      '0.0',
      "Expected actual \"Version\" to be '0.0' (was '" +
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
      false,
      'Expected actual "Frames" to be false (was \'' +
        browser['Frames'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['IFrames'],
      false,
      'Expected actual "IFrames" to be false (was \'' +
        browser['IFrames'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Tables'],
      false,
      'Expected actual "Tables" to be false (was \'' +
        browser['Tables'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Cookies'],
      false,
      'Expected actual "Cookies" to be false (was \'' +
        browser['Cookies'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['JavaScript'],
      false,
      'Expected actual "JavaScript" to be false (was \'' +
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
      '0',
      "Expected actual \"CssVersion\" to be '0' (was '" +
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
      'unknown',
      "Expected actual \"RenderingEngine_Name\" to be 'unknown' (was '" +
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
      'unknown',
      "Expected actual \"RenderingEngine_Maker\" to be 'unknown' (was '" +
        browser['RenderingEngine_Maker'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
  });
  test('issue-1344-Z ["Mozilla/5.0 (Windows NT 6.2) AppleWebKit/537.36 (KHTML, like Gecko) Battle.net/1.3.1.6075 Safari/537.36"]', function() {
    let browscap = new Browscap();
    let browser = browscap.getBrowser(
      'Mozilla/5.0 (Windows NT 6.2) AppleWebKit/537.36 (KHTML, like Gecko) Battle.net/1.3.1.6075 Safari/537.36'
    );

    assert.strictEqual(
      browser['Comment'],
      'Battle.net Overlay',
      "Expected actual \"Comment\" to be 'Battle.net Overlay' (was '" +
        browser['Comment'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser'],
      'Battle.net Overlay',
      "Expected actual \"Browser\" to be 'Battle.net Overlay' (was '" +
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
      'Blizzard Entertainment Inc',
      "Expected actual \"Browser_Maker\" to be 'Blizzard Entertainment Inc' (was '" +
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
      '0.0',
      "Expected actual \"Version\" to be '0.0' (was '" +
        browser['Version'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform'],
      'Win8',
      "Expected actual \"Platform\" to be 'Win8' (was '" +
        browser['Platform'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Version'],
      '6.2',
      "Expected actual \"Platform_Version\" to be '6.2' (was '" +
        browser['Platform_Version'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Description'],
      'Windows 8',
      "Expected actual \"Platform_Description\" to be 'Windows 8' (was '" +
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
      'WebKit',
      "Expected actual \"RenderingEngine_Name\" to be 'WebKit' (was '" +
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
      'Apple Inc',
      "Expected actual \"RenderingEngine_Maker\" to be 'Apple Inc' (was '" +
        browser['RenderingEngine_Maker'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
  });
  test('issue-1344-AA ["Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Battle.net/1.3.1.6087 Safari/537.36"]', function() {
    let browscap = new Browscap();
    let browser = browscap.getBrowser(
      'Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Battle.net/1.3.1.6087 Safari/537.36'
    );

    assert.strictEqual(
      browser['Comment'],
      'Battle.net Overlay',
      "Expected actual \"Comment\" to be 'Battle.net Overlay' (was '" +
        browser['Comment'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser'],
      'Battle.net Overlay',
      "Expected actual \"Browser\" to be 'Battle.net Overlay' (was '" +
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
      'Blizzard Entertainment Inc',
      "Expected actual \"Browser_Maker\" to be 'Blizzard Entertainment Inc' (was '" +
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
      '0.0',
      "Expected actual \"Version\" to be '0.0' (was '" +
        browser['Version'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform'],
      'Win8',
      "Expected actual \"Platform\" to be 'Win8' (was '" +
        browser['Platform'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Version'],
      '6.2',
      "Expected actual \"Platform_Version\" to be '6.2' (was '" +
        browser['Platform_Version'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Description'],
      'Windows 8',
      "Expected actual \"Platform_Description\" to be 'Windows 8' (was '" +
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
      'WebKit',
      "Expected actual \"RenderingEngine_Name\" to be 'WebKit' (was '" +
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
      'Apple Inc',
      "Expected actual \"RenderingEngine_Maker\" to be 'Apple Inc' (was '" +
        browser['RenderingEngine_Maker'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
  });
  test('issue-1344-AB ["Mozilla/5.0 (Linux U; en-US)  AppleWebKit/528.5  (KHTML, like Gecko, Safari/528.5 ) Version/4.0 Kindle/3.0 (screen 600x800; rotate)"]', function() {
    let browscap = new Browscap();
    let browser = browscap.getBrowser(
      'Mozilla/5.0 (Linux U; en-US)  AppleWebKit/528.5  (KHTML, like Gecko, Safari/528.5 ) Version/4.0 Kindle/3.0 (screen 600x800; rotate)'
    );

    assert.strictEqual(
      browser['Comment'],
      'Kindle',
      "Expected actual \"Comment\" to be 'Kindle' (was '" +
        browser['Comment'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser'],
      'Kindle',
      "Expected actual \"Browser\" to be 'Kindle' (was '" +
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
      'Amazon.com, Inc.',
      "Expected actual \"Browser_Maker\" to be 'Amazon.com, Inc.' (was '" +
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
      '3.0',
      "Expected actual \"Version\" to be '3.0' (was '" +
        browser['Version'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform'],
      'Android',
      "Expected actual \"Platform\" to be 'Android' (was '" +
        browser['Platform'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Version'],
      'unknown',
      "Expected actual \"Platform_Version\" to be 'unknown' (was '" +
        browser['Platform_Version'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Description'],
      'Android OS',
      "Expected actual \"Platform_Description\" to be 'Android OS' (was '" +
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
      'Google Inc',
      "Expected actual \"Platform_Maker\" to be 'Google Inc' (was '" +
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
      'Kindle',
      "Expected actual \"Device_Name\" to be 'Kindle' (was '" +
        browser['Device_Name'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Device_Maker'],
      'Amazon.com, Inc.',
      "Expected actual \"Device_Maker\" to be 'Amazon.com, Inc.' (was '" +
        browser['Device_Maker'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Device_Type'],
      'Ebook Reader',
      "Expected actual \"Device_Type\" to be 'Ebook Reader' (was '" +
        browser['Device_Type'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Device_Pointing_Method'],
      'touchscreen',
      "Expected actual \"Device_Pointing_Method\" to be 'touchscreen' (was '" +
        browser['Device_Pointing_Method'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Device_Code_Name'],
      'Kindle',
      "Expected actual \"Device_Code_Name\" to be 'Kindle' (was '" +
        browser['Device_Code_Name'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Device_Brand_Name'],
      'Amazon',
      "Expected actual \"Device_Brand_Name\" to be 'Amazon' (was '" +
        browser['Device_Brand_Name'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['RenderingEngine_Name'],
      'WebKit',
      "Expected actual \"RenderingEngine_Name\" to be 'WebKit' (was '" +
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
      'Apple Inc',
      "Expected actual \"RenderingEngine_Maker\" to be 'Apple Inc' (was '" +
        browser['RenderingEngine_Maker'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
  });
  test('issue-1344-AC ["Mozilla/5.0 (Windows NT 5.1) AppleWebKit/534.34 (KHTML, like Gecko) RobloxStudio/0. 210. 1. 63069 Safari/534.34"]', function() {
    let browscap = new Browscap();
    let browser = browscap.getBrowser(
      'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/534.34 (KHTML, like Gecko) RobloxStudio/0. 210. 1. 63069 Safari/534.34'
    );

    assert.strictEqual(
      browser['Comment'],
      'Roblox Studio',
      "Expected actual \"Comment\" to be 'Roblox Studio' (was '" +
        browser['Comment'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser'],
      'Roblox Studio',
      "Expected actual \"Browser\" to be 'Roblox Studio' (was '" +
        browser['Browser'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser_Type'],
      'Application',
      "Expected actual \"Browser_Type\" to be 'Application' (was '" +
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
      'ROBLOX Corporation',
      "Expected actual \"Browser_Maker\" to be 'ROBLOX Corporation' (was '" +
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
      '0.0',
      "Expected actual \"Version\" to be '0.0' (was '" +
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
      'WebKit',
      "Expected actual \"RenderingEngine_Name\" to be 'WebKit' (was '" +
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
      'Apple Inc',
      "Expected actual \"RenderingEngine_Maker\" to be 'Apple Inc' (was '" +
        browser['RenderingEngine_Maker'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
  });
  test('issue-1344-AD ["Mozilla/5.0 (Windows NT 6.0) AppleWebKit/534.34 (KHTML, like Gecko) RobloxStudio/0. 206. 0. 62132 Safari/534.34"]', function() {
    let browscap = new Browscap();
    let browser = browscap.getBrowser(
      'Mozilla/5.0 (Windows NT 6.0) AppleWebKit/534.34 (KHTML, like Gecko) RobloxStudio/0. 206. 0. 62132 Safari/534.34'
    );

    assert.strictEqual(
      browser['Comment'],
      'Roblox Studio',
      "Expected actual \"Comment\" to be 'Roblox Studio' (was '" +
        browser['Comment'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser'],
      'Roblox Studio',
      "Expected actual \"Browser\" to be 'Roblox Studio' (was '" +
        browser['Browser'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser_Type'],
      'Application',
      "Expected actual \"Browser_Type\" to be 'Application' (was '" +
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
      'ROBLOX Corporation',
      "Expected actual \"Browser_Maker\" to be 'ROBLOX Corporation' (was '" +
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
      '0.0',
      "Expected actual \"Version\" to be '0.0' (was '" +
        browser['Version'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform'],
      'WinVista',
      "Expected actual \"Platform\" to be 'WinVista' (was '" +
        browser['Platform'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Version'],
      '6.0',
      "Expected actual \"Platform_Version\" to be '6.0' (was '" +
        browser['Platform_Version'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Description'],
      'Windows Vista',
      "Expected actual \"Platform_Description\" to be 'Windows Vista' (was '" +
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
      'WebKit',
      "Expected actual \"RenderingEngine_Name\" to be 'WebKit' (was '" +
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
      'Apple Inc',
      "Expected actual \"RenderingEngine_Maker\" to be 'Apple Inc' (was '" +
        browser['RenderingEngine_Maker'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
  });
  test('issue-1344-AE ["Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/534.34 (KHTML, like Gecko) RobloxStudio/0. 206. 0. 62132 Safari/534.34"]', function() {
    let browscap = new Browscap();
    let browser = browscap.getBrowser(
      'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/534.34 (KHTML, like Gecko) RobloxStudio/0. 206. 0. 62132 Safari/534.34'
    );

    assert.strictEqual(
      browser['Comment'],
      'Roblox Studio',
      "Expected actual \"Comment\" to be 'Roblox Studio' (was '" +
        browser['Comment'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser'],
      'Roblox Studio',
      "Expected actual \"Browser\" to be 'Roblox Studio' (was '" +
        browser['Browser'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser_Type'],
      'Application',
      "Expected actual \"Browser_Type\" to be 'Application' (was '" +
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
      'ROBLOX Corporation',
      "Expected actual \"Browser_Maker\" to be 'ROBLOX Corporation' (was '" +
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
      '0.0',
      "Expected actual \"Version\" to be '0.0' (was '" +
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
      'WebKit',
      "Expected actual \"RenderingEngine_Name\" to be 'WebKit' (was '" +
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
      'Apple Inc',
      "Expected actual \"RenderingEngine_Maker\" to be 'Apple Inc' (was '" +
        browser['RenderingEngine_Maker'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
  });
  test('issue-1344-AF ["Mozilla/5.0 (Windows NT 6.1) AppleWebKit/538.1 (KHTML, like Gecko) QuiteRSS/0.18.4 Safari/538.1"]', function() {
    let browscap = new Browscap();
    let browser = browscap.getBrowser(
      'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/538.1 (KHTML, like Gecko) QuiteRSS/0.18.4 Safari/538.1'
    );

    assert.strictEqual(
      browser['Comment'],
      'Quite RSS',
      "Expected actual \"Comment\" to be 'Quite RSS' (was '" +
        browser['Comment'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser'],
      'Quite RSS',
      "Expected actual \"Browser\" to be 'Quite RSS' (was '" +
        browser['Browser'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser_Type'],
      'Feed Reader',
      "Expected actual \"Browser_Type\" to be 'Feed Reader' (was '" +
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
      'Shilyaev Egor',
      "Expected actual \"Browser_Maker\" to be 'Shilyaev Egor' (was '" +
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
      '0.0',
      "Expected actual \"Version\" to be '0.0' (was '" +
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
      true,
      'Expected actual "isSyndicationReader" to be true (was \'' +
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
      'WebKit',
      "Expected actual \"RenderingEngine_Name\" to be 'WebKit' (was '" +
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
      'Apple Inc',
      "Expected actual \"RenderingEngine_Maker\" to be 'Apple Inc' (was '" +
        browser['RenderingEngine_Maker'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
  });
  test('issue-1344-AG ["Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/538.1 (KHTML, like Gecko) QuiteRss/0.18.4 Safari/538.1"]', function() {
    let browscap = new Browscap();
    let browser = browscap.getBrowser(
      'Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/538.1 (KHTML, like Gecko) QuiteRss/0.18.4 Safari/538.1'
    );

    assert.strictEqual(
      browser['Comment'],
      'Quite RSS',
      "Expected actual \"Comment\" to be 'Quite RSS' (was '" +
        browser['Comment'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser'],
      'Quite RSS',
      "Expected actual \"Browser\" to be 'Quite RSS' (was '" +
        browser['Browser'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser_Type'],
      'Feed Reader',
      "Expected actual \"Browser_Type\" to be 'Feed Reader' (was '" +
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
      'Shilyaev Egor',
      "Expected actual \"Browser_Maker\" to be 'Shilyaev Egor' (was '" +
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
      '0.0',
      "Expected actual \"Version\" to be '0.0' (was '" +
        browser['Version'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform'],
      'Win8',
      "Expected actual \"Platform\" to be 'Win8' (was '" +
        browser['Platform'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Version'],
      '6.2',
      "Expected actual \"Platform_Version\" to be '6.2' (was '" +
        browser['Platform_Version'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Description'],
      'Windows 8',
      "Expected actual \"Platform_Description\" to be 'Windows 8' (was '" +
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
      true,
      'Expected actual "isSyndicationReader" to be true (was \'' +
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
      'WebKit',
      "Expected actual \"RenderingEngine_Name\" to be 'WebKit' (was '" +
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
      'Apple Inc',
      "Expected actual \"RenderingEngine_Maker\" to be 'Apple Inc' (was '" +
        browser['RenderingEngine_Maker'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
  });
  test('issue-1344-AH ["Mozilla/5.0 (N; Windows NT 10.0; WOW64) AppleWebKit/534.34 (KHTML, like Gecko) Raptr Safari/534.34"]', function() {
    let browscap = new Browscap();
    let browser = browscap.getBrowser(
      'Mozilla/5.0 (N; Windows NT 10.0; WOW64) AppleWebKit/534.34 (KHTML, like Gecko) Raptr Safari/534.34'
    );

    assert.strictEqual(
      browser['Comment'],
      'Raptr',
      "Expected actual \"Comment\" to be 'Raptr' (was '" +
        browser['Comment'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser'],
      'Raptr',
      "Expected actual \"Browser\" to be 'Raptr' (was '" +
        browser['Browser'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser_Type'],
      'Application',
      "Expected actual \"Browser_Type\" to be 'Application' (was '" +
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
      'Raptr',
      "Expected actual \"Browser_Maker\" to be 'Raptr' (was '" +
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
      '0.0',
      "Expected actual \"Version\" to be '0.0' (was '" +
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
      'WebKit',
      "Expected actual \"RenderingEngine_Name\" to be 'WebKit' (was '" +
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
      'Apple Inc',
      "Expected actual \"RenderingEngine_Maker\" to be 'Apple Inc' (was '" +
        browser['RenderingEngine_Maker'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
  });
  test('issue-1344-AI ["Mozilla/5.0 (Windows; U; Windows NT 6.0; zh-cn) AppleWebKit/537.17 (KHTML, like Gecko) Safari/534.30 LBBROWSER"]', function() {
    let browscap = new Browscap();
    let browser = browscap.getBrowser(
      'Mozilla/5.0 (Windows; U; Windows NT 6.0; zh-cn) AppleWebKit/537.17 (KHTML, like Gecko) Safari/534.30 LBBROWSER'
    );

    assert.strictEqual(
      browser['Comment'],
      'liebao',
      "Expected actual \"Comment\" to be 'liebao' (was '" +
        browser['Comment'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser'],
      'liebao',
      "Expected actual \"Browser\" to be 'liebao' (was '" +
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
      'Kingsoft',
      "Expected actual \"Browser_Maker\" to be 'Kingsoft' (was '" +
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
      '0.0',
      "Expected actual \"Version\" to be '0.0' (was '" +
        browser['Version'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform'],
      'WinVista',
      "Expected actual \"Platform\" to be 'WinVista' (was '" +
        browser['Platform'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Version'],
      '6.0',
      "Expected actual \"Platform_Version\" to be '6.0' (was '" +
        browser['Platform_Version'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Description'],
      'Windows Vista',
      "Expected actual \"Platform_Description\" to be 'Windows Vista' (was '" +
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
      'WebKit',
      "Expected actual \"RenderingEngine_Name\" to be 'WebKit' (was '" +
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
      'Apple Inc',
      "Expected actual \"RenderingEngine_Maker\" to be 'Apple Inc' (was '" +
        browser['RenderingEngine_Maker'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
  });
  test('issue-1344-AJ ["TazWeb (X11; SliTaz GNU/Linux; U; en_US)"]', function() {
    let browscap = new Browscap();
    let browser = browscap.getBrowser(
      'TazWeb (X11; SliTaz GNU/Linux; U; en_US)'
    );

    assert.strictEqual(
      browser['Comment'],
      'TazWeb',
      "Expected actual \"Comment\" to be 'TazWeb' (was '" +
        browser['Comment'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser'],
      'TazWeb',
      "Expected actual \"Browser\" to be 'TazWeb' (was '" +
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
      'Tassaris',
      "Expected actual \"Browser_Maker\" to be 'Tassaris' (was '" +
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
      '0.0',
      "Expected actual \"Version\" to be '0.0' (was '" +
        browser['Version'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform'],
      'Linux',
      "Expected actual \"Platform\" to be 'Linux' (was '" +
        browser['Platform'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Version'],
      'unknown',
      "Expected actual \"Platform_Version\" to be 'unknown' (was '" +
        browser['Platform_Version'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Description'],
      'Linux',
      "Expected actual \"Platform_Description\" to be 'Linux' (was '" +
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
      'Linux Foundation',
      "Expected actual \"Platform_Maker\" to be 'Linux Foundation' (was '" +
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
      false,
      'Expected actual "Frames" to be false (was \'' +
        browser['Frames'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['IFrames'],
      false,
      'Expected actual "IFrames" to be false (was \'' +
        browser['IFrames'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Tables'],
      false,
      'Expected actual "Tables" to be false (was \'' +
        browser['Tables'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Cookies'],
      false,
      'Expected actual "Cookies" to be false (was \'' +
        browser['Cookies'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['JavaScript'],
      false,
      'Expected actual "JavaScript" to be false (was \'' +
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
      '0',
      "Expected actual \"CssVersion\" to be '0' (was '" +
        browser['CssVersion'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Device_Name'],
      'Linux Desktop',
      "Expected actual \"Device_Name\" to be 'Linux Desktop' (was '" +
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
      'Linux Desktop',
      "Expected actual \"Device_Code_Name\" to be 'Linux Desktop' (was '" +
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
      'unknown',
      "Expected actual \"RenderingEngine_Name\" to be 'unknown' (was '" +
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
      'unknown',
      "Expected actual \"RenderingEngine_Maker\" to be 'unknown' (was '" +
        browser['RenderingEngine_Maker'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
  });
});
