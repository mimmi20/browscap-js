import assert from 'assert';
import Browscap from '../src/browscap';

suite('checking for issue 1203. (5 tests)', function() {
  test('issue-1203-1 ["Callpod Keeper for Android 1.0 (10.5.0/264) Dalvik/2.1.0 (Linux; U; Android 6.0; LG-H810 Build/MRA58K)"]', function() {
    let browscap = new Browscap();
    let browser = browscap.getBrowser(
      'Callpod Keeper for Android 1.0 (10.5.0/264) Dalvik/2.1.0 (Linux; U; Android 6.0; LG-H810 Build/MRA58K)'
    );

    assert.strictEqual(
      browser['Comment'],
      'Keeper 1.0',
      "Expected actual \"Comment\" to be 'Keeper 1.0' (was '" +
        browser['Comment'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser'],
      'Keeper',
      "Expected actual \"Browser\" to be 'Keeper' (was '" +
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
      'Callpod Inc.',
      "Expected actual \"Browser_Maker\" to be 'Callpod Inc.' (was '" +
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
      '6.0',
      "Expected actual \"Platform_Version\" to be '6.0' (was '" +
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
      'G4 (AT&T)',
      "Expected actual \"Device_Name\" to be 'G4 (AT&T)' (was '" +
        browser['Device_Name'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Device_Maker'],
      'LG',
      "Expected actual \"Device_Maker\" to be 'LG' (was '" +
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
      'H810',
      "Expected actual \"Device_Code_Name\" to be 'H810' (was '" +
        browser['Device_Code_Name'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Device_Brand_Name'],
      'LG',
      "Expected actual \"Device_Brand_Name\" to be 'LG' (was '" +
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
  test('issue-1203-2 ["Callpod Keeper for Android 1.0 (10.4.8/261) Dalvik/2.1.0 (Linux; U; Android 5.1; Z812 Build/LMY47O)"]', function() {
    let browscap = new Browscap();
    let browser = browscap.getBrowser(
      'Callpod Keeper for Android 1.0 (10.4.8/261) Dalvik/2.1.0 (Linux; U; Android 5.1; Z812 Build/LMY47O)'
    );

    assert.strictEqual(
      browser['Comment'],
      'Keeper 1.0',
      "Expected actual \"Comment\" to be 'Keeper 1.0' (was '" +
        browser['Comment'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser'],
      'Keeper',
      "Expected actual \"Browser\" to be 'Keeper' (was '" +
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
      'Callpod Inc.',
      "Expected actual \"Browser_Maker\" to be 'Callpod Inc.' (was '" +
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
      '5.1',
      "Expected actual \"Platform_Version\" to be '5.1' (was '" +
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
      'Z812',
      "Expected actual \"Device_Name\" to be 'Z812' (was '" +
        browser['Device_Name'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Device_Maker'],
      'Kodak',
      "Expected actual \"Device_Maker\" to be 'Kodak' (was '" +
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
      'Z812',
      "Expected actual \"Device_Code_Name\" to be 'Z812' (was '" +
        browser['Device_Code_Name'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Device_Brand_Name'],
      'Kodak',
      "Expected actual \"Device_Brand_Name\" to be 'Kodak' (was '" +
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
  test('issue-1203-3 ["Callpod Keeper for Android 1.0 (10.4.8/261) Dalvik/2.1.0 (Linux; U; Android 5.0.1; SAMSUNG-SGH-I337 Build/LRX22C)"]', function() {
    let browscap = new Browscap();
    let browser = browscap.getBrowser(
      'Callpod Keeper for Android 1.0 (10.4.8/261) Dalvik/2.1.0 (Linux; U; Android 5.0.1; SAMSUNG-SGH-I337 Build/LRX22C)'
    );

    assert.strictEqual(
      browser['Comment'],
      'Keeper 1.0',
      "Expected actual \"Comment\" to be 'Keeper 1.0' (was '" +
        browser['Comment'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser'],
      'Keeper',
      "Expected actual \"Browser\" to be 'Keeper' (was '" +
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
      'Callpod Inc.',
      "Expected actual \"Browser_Maker\" to be 'Callpod Inc.' (was '" +
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
      'Galaxy S4 (AT&T)',
      "Expected actual \"Device_Name\" to be 'Galaxy S4 (AT&T)' (was '" +
        browser['Device_Name'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Device_Maker'],
      'Samsung',
      "Expected actual \"Device_Maker\" to be 'Samsung' (was '" +
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
      'SGH-I337',
      "Expected actual \"Device_Code_Name\" to be 'SGH-I337' (was '" +
        browser['Device_Code_Name'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Device_Brand_Name'],
      'Samsung',
      "Expected actual \"Device_Brand_Name\" to be 'Samsung' (was '" +
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
  test('issue-1203-4 ["Callpod Keeper for Android 1.0 (10.4.8/261) Dalvik/2.1.0 (Linux; U; Android 5.1.1; SAMSUNG-SM-N910A Build/LMY47X)"]', function() {
    let browscap = new Browscap();
    let browser = browscap.getBrowser(
      'Callpod Keeper for Android 1.0 (10.4.8/261) Dalvik/2.1.0 (Linux; U; Android 5.1.1; SAMSUNG-SM-N910A Build/LMY47X)'
    );

    assert.strictEqual(
      browser['Comment'],
      'Keeper 1.0',
      "Expected actual \"Comment\" to be 'Keeper 1.0' (was '" +
        browser['Comment'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser'],
      'Keeper',
      "Expected actual \"Browser\" to be 'Keeper' (was '" +
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
      'Callpod Inc.',
      "Expected actual \"Browser_Maker\" to be 'Callpod Inc.' (was '" +
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
      '5.1',
      "Expected actual \"Platform_Version\" to be '5.1' (was '" +
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
      'Galaxy Note 4 CDMA (AT&T)',
      "Expected actual \"Device_Name\" to be 'Galaxy Note 4 CDMA (AT&T)' (was '" +
        browser['Device_Name'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Device_Maker'],
      'Samsung',
      "Expected actual \"Device_Maker\" to be 'Samsung' (was '" +
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
      'SM-N910A',
      "Expected actual \"Device_Code_Name\" to be 'SM-N910A' (was '" +
        browser['Device_Code_Name'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Device_Brand_Name'],
      'Samsung',
      "Expected actual \"Device_Brand_Name\" to be 'Samsung' (was '" +
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
  test('issue-1203-5 ["Callpod Keeper for Android 1.0 (10.4.8/261) Dalvik/2.1.0 (Linux; U; Android 6.0.1; SAMSUNG-SM-G920A Build/MMB29K)"]', function() {
    let browscap = new Browscap();
    let browser = browscap.getBrowser(
      'Callpod Keeper for Android 1.0 (10.4.8/261) Dalvik/2.1.0 (Linux; U; Android 6.0.1; SAMSUNG-SM-G920A Build/MMB29K)'
    );

    assert.strictEqual(
      browser['Comment'],
      'Keeper 1.0',
      "Expected actual \"Comment\" to be 'Keeper 1.0' (was '" +
        browser['Comment'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser'],
      'Keeper',
      "Expected actual \"Browser\" to be 'Keeper' (was '" +
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
      'Callpod Inc.',
      "Expected actual \"Browser_Maker\" to be 'Callpod Inc.' (was '" +
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
      '6.0',
      "Expected actual \"Platform_Version\" to be '6.0' (was '" +
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
      'Galaxy S6 (AT&T)',
      "Expected actual \"Device_Name\" to be 'Galaxy S6 (AT&T)' (was '" +
        browser['Device_Name'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Device_Maker'],
      'Samsung',
      "Expected actual \"Device_Maker\" to be 'Samsung' (was '" +
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
      'SM-G920A',
      "Expected actual \"Device_Code_Name\" to be 'SM-G920A' (was '" +
        browser['Device_Code_Name'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Device_Brand_Name'],
      'Samsung',
      "Expected actual \"Device_Brand_Name\" to be 'Samsung' (was '" +
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
});
