import assert from 'assert';
import Browscap from '../src/browscap';

suite('checking for issue 1303. (9 tests)', function() {
  test('issue-1303-A ["Blackjack/22 CFNetwork/808.3 Darwin/16.3.0"]', function() {
    let browscap = new Browscap();
    let browser = browscap.getBrowser(
      'Blackjack/22 CFNetwork/808.3 Darwin/16.3.0'
    );

    assert.strictEqual(
      browser['Comment'],
      'CFNetwork for iOS',
      "Expected actual \"Comment\" to be 'CFNetwork for iOS' (was '" +
        browser['Comment'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser'],
      'CFNetwork',
      "Expected actual \"Browser\" to be 'CFNetwork' (was '" +
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
      'Apple Inc',
      "Expected actual \"Browser_Maker\" to be 'Apple Inc' (was '" +
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
      'iOS',
      "Expected actual \"Platform\" to be 'iOS' (was '" +
        browser['Platform'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Version'],
      '10.3',
      "Expected actual \"Platform_Version\" to be '10.3' (was '" +
        browser['Platform_Version'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Description'],
      'iPod, iPhone & iPad',
      "Expected actual \"Platform_Description\" to be 'iPod, iPhone & iPad' (was '" +
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
      'general Mobile Device',
      "Expected actual \"Device_Name\" to be 'general Mobile Device' (was '" +
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
      'Mobile Device',
      "Expected actual \"Device_Type\" to be 'Mobile Device' (was '" +
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
      'general Mobile Device',
      "Expected actual \"Device_Code_Name\" to be 'general Mobile Device' (was '" +
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
  test('issue-1303-B ["Mozilla/5.0 (iPad; CPU OS 10_3 like Mac OS X) AppleWebKit/603.1.20 (KHTML, like Gecko) Mobile/14E5230e [FBAN/FBIOS;FBAV/76.0.0.45.339;FBBV/47725512;FBRV/0;FBDV/iPad5,3;FBMD/iPad;FBSN/iOS;FBSV/10.3;FBSS/2;FBCR/;FBID/tablet;FBLC/en_US;FBOP/5]"]', function() {
    let browscap = new Browscap();
    let browser = browscap.getBrowser(
      'Mozilla/5.0 (iPad; CPU OS 10_3 like Mac OS X) AppleWebKit/603.1.20 (KHTML, like Gecko) Mobile/14E5230e [FBAN/FBIOS;FBAV/76.0.0.45.339;FBBV/47725512;FBRV/0;FBDV/iPad5,3;FBMD/iPad;FBSN/iOS;FBSV/10.3;FBSS/2;FBCR/;FBID/tablet;FBLC/en_US;FBOP/5]'
    );

    assert.strictEqual(
      browser['Comment'],
      'Facebook App for iOS',
      "Expected actual \"Comment\" to be 'Facebook App for iOS' (was '" +
        browser['Comment'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser'],
      'Facebook App',
      "Expected actual \"Browser\" to be 'Facebook App' (was '" +
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
      'Facebook',
      "Expected actual \"Browser_Maker\" to be 'Facebook' (was '" +
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
      'iOS',
      "Expected actual \"Platform\" to be 'iOS' (was '" +
        browser['Platform'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Version'],
      '10.3',
      "Expected actual \"Platform_Version\" to be '10.3' (was '" +
        browser['Platform_Version'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Description'],
      'iPod, iPhone & iPad',
      "Expected actual \"Platform_Description\" to be 'iPod, iPhone & iPad' (was '" +
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
      'iPad',
      "Expected actual \"Device_Name\" to be 'iPad' (was '" +
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
      'Tablet',
      "Expected actual \"Device_Type\" to be 'Tablet' (was '" +
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
      'iPad',
      "Expected actual \"Device_Code_Name\" to be 'iPad' (was '" +
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
  test('issue-1303-C ["Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/603.1.20 (KHTML, like Gecko) Mobile/14E5230e [FBAN/FBIOS;FBAV/53.0.0.36.140;FBBV/27547874;FBRV/0;FBDV/iPhone6,1;FBMD/iPhone;FBSN/iPhone OS;FBSV/10.3;FBSS/2;FBCR/Sprint;FBID/phone;FBLC/en_US;FBOP/5]"]', function() {
    let browscap = new Browscap();
    let browser = browscap.getBrowser(
      'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/603.1.20 (KHTML, like Gecko) Mobile/14E5230e [FBAN/FBIOS;FBAV/53.0.0.36.140;FBBV/27547874;FBRV/0;FBDV/iPhone6,1;FBMD/iPhone;FBSN/iPhone OS;FBSV/10.3;FBSS/2;FBCR/Sprint;FBID/phone;FBLC/en_US;FBOP/5]'
    );

    assert.strictEqual(
      browser['Comment'],
      'Facebook App for iOS',
      "Expected actual \"Comment\" to be 'Facebook App for iOS' (was '" +
        browser['Comment'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser'],
      'Facebook App',
      "Expected actual \"Browser\" to be 'Facebook App' (was '" +
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
      'Facebook',
      "Expected actual \"Browser_Maker\" to be 'Facebook' (was '" +
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
      'iOS',
      "Expected actual \"Platform\" to be 'iOS' (was '" +
        browser['Platform'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Version'],
      '10.3',
      "Expected actual \"Platform_Version\" to be '10.3' (was '" +
        browser['Platform_Version'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Description'],
      'iPod, iPhone & iPad',
      "Expected actual \"Platform_Description\" to be 'iPod, iPhone & iPad' (was '" +
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
      'iPhone',
      "Expected actual \"Device_Name\" to be 'iPhone' (was '" +
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
      'iPhone',
      "Expected actual \"Device_Code_Name\" to be 'iPhone' (was '" +
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
  test('issue-1303-D ["Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) GSA/22.0.141836113 Mobile/14E5230e Safari/600.1.4"]', function() {
    let browscap = new Browscap();
    let browser = browscap.getBrowser(
      'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) GSA/22.0.141836113 Mobile/14E5230e Safari/600.1.4'
    );

    assert.strictEqual(
      browser['Comment'],
      'Google App for iOS',
      "Expected actual \"Comment\" to be 'Google App for iOS' (was '" +
        browser['Comment'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser'],
      'Google App',
      "Expected actual \"Browser\" to be 'Google App' (was '" +
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
      '0.0',
      "Expected actual \"Version\" to be '0.0' (was '" +
        browser['Version'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform'],
      'iOS',
      "Expected actual \"Platform\" to be 'iOS' (was '" +
        browser['Platform'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Version'],
      '10.3',
      "Expected actual \"Platform_Version\" to be '10.3' (was '" +
        browser['Platform_Version'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Description'],
      'iPod, iPhone & iPad',
      "Expected actual \"Platform_Description\" to be 'iPod, iPhone & iPad' (was '" +
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
      'iPhone',
      "Expected actual \"Device_Name\" to be 'iPhone' (was '" +
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
      'iPhone',
      "Expected actual \"Device_Code_Name\" to be 'iPhone' (was '" +
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
  test('issue-1303-E ["Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/55.0.2883.79 Mobile/14E5230e Safari/602.1"]', function() {
    let browscap = new Browscap();
    let browser = browscap.getBrowser(
      'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/55.0.2883.79 Mobile/14E5230e Safari/602.1'
    );

    assert.strictEqual(
      browser['Comment'],
      'Chrome 55.0',
      "Expected actual \"Comment\" to be 'Chrome 55.0' (was '" +
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
      '55.0',
      "Expected actual \"Version\" to be '55.0' (was '" +
        browser['Version'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform'],
      'iOS',
      "Expected actual \"Platform\" to be 'iOS' (was '" +
        browser['Platform'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Version'],
      '10.3',
      "Expected actual \"Platform_Version\" to be '10.3' (was '" +
        browser['Platform_Version'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Description'],
      'iPod, iPhone & iPad',
      "Expected actual \"Platform_Description\" to be 'iPod, iPhone & iPad' (was '" +
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
      'iPhone',
      "Expected actual \"Device_Name\" to be 'iPhone' (was '" +
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
      'iPhone',
      "Expected actual \"Device_Code_Name\" to be 'iPhone' (was '" +
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
  test('issue-1303-F ["Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/603.1.20 (KHTML, like Gecko) FxiOS/6.0 Mobile/14E5230e Safari/603.1.20"]', function() {
    let browscap = new Browscap();
    let browser = browscap.getBrowser(
      'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/603.1.20 (KHTML, like Gecko) FxiOS/6.0 Mobile/14E5230e Safari/603.1.20'
    );

    assert.strictEqual(
      browser['Comment'],
      'Firefox 6.0 for iOS',
      "Expected actual \"Comment\" to be 'Firefox 6.0 for iOS' (was '" +
        browser['Comment'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser'],
      'Firefox for iOS',
      "Expected actual \"Browser\" to be 'Firefox for iOS' (was '" +
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
      '6.0',
      "Expected actual \"Version\" to be '6.0' (was '" +
        browser['Version'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform'],
      'iOS',
      "Expected actual \"Platform\" to be 'iOS' (was '" +
        browser['Platform'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Version'],
      '10.3',
      "Expected actual \"Platform_Version\" to be '10.3' (was '" +
        browser['Platform_Version'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Description'],
      'iPod, iPhone & iPad',
      "Expected actual \"Platform_Description\" to be 'iPod, iPhone & iPad' (was '" +
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
      'iPhone',
      "Expected actual \"Device_Name\" to be 'iPhone' (was '" +
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
      'iPhone',
      "Expected actual \"Device_Code_Name\" to be 'iPhone' (was '" +
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
  test('issue-1303-G ["Mozilla/5.0 (iPad; CPU OS 10_3 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E5260b Safari/602.1"]', function() {
    let browscap = new Browscap();
    let browser = browscap.getBrowser(
      'Mozilla/5.0 (iPad; CPU OS 10_3 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E5260b Safari/602.1'
    );

    assert.strictEqual(
      browser['Comment'],
      'Mobile Safari 10.0',
      "Expected actual \"Comment\" to be 'Mobile Safari 10.0' (was '" +
        browser['Comment'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser'],
      'Safari',
      "Expected actual \"Browser\" to be 'Safari' (was '" +
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
      'Apple Inc',
      "Expected actual \"Browser_Maker\" to be 'Apple Inc' (was '" +
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
      '10.0',
      "Expected actual \"Version\" to be '10.0' (was '" +
        browser['Version'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform'],
      'iOS',
      "Expected actual \"Platform\" to be 'iOS' (was '" +
        browser['Platform'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Version'],
      '10.3',
      "Expected actual \"Platform_Version\" to be '10.3' (was '" +
        browser['Platform_Version'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Description'],
      'iPod, iPhone & iPad',
      "Expected actual \"Platform_Description\" to be 'iPod, iPhone & iPad' (was '" +
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
      'iPad',
      "Expected actual \"Device_Name\" to be 'iPad' (was '" +
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
      'Tablet',
      "Expected actual \"Device_Type\" to be 'Tablet' (was '" +
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
      'iPad',
      "Expected actual \"Device_Code_Name\" to be 'iPad' (was '" +
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
  test('issue-1303-H ["Mozilla/5.0 (iPad; CPU OS 10_3 like Mac OS X; de-AT) AppleWebKit/537.36 (KHTML, like Gecko) Version/10.3 Mobile/14E5277a Safari/537.36 Puffin/5.2.0IT"]', function() {
    let browscap = new Browscap();
    let browser = browscap.getBrowser(
      'Mozilla/5.0 (iPad; CPU OS 10_3 like Mac OS X; de-AT) AppleWebKit/537.36 (KHTML, like Gecko) Version/10.3 Mobile/14E5277a Safari/537.36 Puffin/5.2.0IT'
    );

    assert.strictEqual(
      browser['Comment'],
      'Puffin 5.2',
      "Expected actual \"Comment\" to be 'Puffin 5.2' (was '" +
        browser['Comment'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser'],
      'Puffin',
      "Expected actual \"Browser\" to be 'Puffin' (was '" +
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
      'CloudMosa Inc.',
      "Expected actual \"Browser_Maker\" to be 'CloudMosa Inc.' (was '" +
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
      '5.2',
      "Expected actual \"Version\" to be '5.2' (was '" +
        browser['Version'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform'],
      'iOS',
      "Expected actual \"Platform\" to be 'iOS' (was '" +
        browser['Platform'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Version'],
      '10.3',
      "Expected actual \"Platform_Version\" to be '10.3' (was '" +
        browser['Platform_Version'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Description'],
      'iPod, iPhone & iPad',
      "Expected actual \"Platform_Description\" to be 'iPod, iPhone & iPad' (was '" +
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
      'iPad',
      "Expected actual \"Device_Name\" to be 'iPad' (was '" +
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
      'Tablet',
      "Expected actual \"Device_Type\" to be 'Tablet' (was '" +
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
      'iPad',
      "Expected actual \"Device_Code_Name\" to be 'iPad' (was '" +
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
  test('issue-1303-I ["Mozilla/5.0 (iPhone; CPU OS 10_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) 1Password/6.5.3 (like Version/10.3 Mobile/14E5277a Safari/600.1.4)"]', function() {
    let browscap = new Browscap();
    let browser = browscap.getBrowser(
      'Mozilla/5.0 (iPhone; CPU OS 10_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) 1Password/6.5.3 (like Version/10.3 Mobile/14E5277a Safari/600.1.4)'
    );

    assert.strictEqual(
      browser['Comment'],
      '1Password 6.5',
      "Expected actual \"Comment\" to be '1Password 6.5' (was '" +
        browser['Comment'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Browser'],
      '1Password',
      "Expected actual \"Browser\" to be '1Password' (was '" +
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
      'AgileBits, Inc.',
      "Expected actual \"Browser_Maker\" to be 'AgileBits, Inc.' (was '" +
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
      '6.5',
      "Expected actual \"Version\" to be '6.5' (was '" +
        browser['Version'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform'],
      'iOS',
      "Expected actual \"Platform\" to be 'iOS' (was '" +
        browser['Platform'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Version'],
      '10.3',
      "Expected actual \"Platform_Version\" to be '10.3' (was '" +
        browser['Platform_Version'] +
        "'; used pattern: " +
        browser['browser_name_regex'] +
        ')'
    );
    assert.strictEqual(
      browser['Platform_Description'],
      'iPod, iPhone & iPad',
      "Expected actual \"Platform_Description\" to be 'iPod, iPhone & iPad' (was '" +
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
      'iPhone',
      "Expected actual \"Device_Name\" to be 'iPhone' (was '" +
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
      'iPhone',
      "Expected actual \"Device_Code_Name\" to be 'iPhone' (was '" +
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
});