"use strict";

const assert = require('assert');
const Browscap = require('../src/index.js');
const browscap = new Browscap();
let browser;

suite('checking for issue 000-invalid-versions. (119 tests)', function () {
  test('issue-000-invalid-versions-A ["Mozilla/5.0 (Windows; U; Win98; bg; rv:1.9.0.19) Gecko/20090624 Firefox/3.1b3"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Windows; U; Win98; bg; rv:1.9.0.19) Gecko/20090624 Firefox/3.1b3');

    assert.strictEqual(browser['Comment'], 'Firefox Generic', 'Expected actual "Comment" to be \'Firefox Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Firefox', 'Expected actual "Browser" to be \'Firefox\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'Win98', 'Expected actual "Platform" to be \'Win98\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], '98', 'Expected actual "Platform_Version" to be \'98\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Description'], 'Windows 98', 'Expected actual "Platform_Description" to be \'Windows 98\' (was \'' + browser['Platform_Description'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Name'], 'Gecko', 'Expected actual "RenderingEngine_Name" to be \'Gecko\' (was \'' + browser['RenderingEngine_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown', 'Expected actual "RenderingEngine_Version" to be \'unknown\' (was \'' + browser['RenderingEngine_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-B ["Mozilla/5.0 (Windows; U; Win98; ca; rv:1.7.13) Gecko/20090715 Firefox/3.5.1"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Windows; U; Win98; ca; rv:1.7.13) Gecko/20090715 Firefox/3.5.1');

    assert.strictEqual(browser['Comment'], 'Firefox Generic', 'Expected actual "Comment" to be \'Firefox Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Firefox', 'Expected actual "Browser" to be \'Firefox\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'Win98', 'Expected actual "Platform" to be \'Win98\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], '98', 'Expected actual "Platform_Version" to be \'98\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Description'], 'Windows 98', 'Expected actual "Platform_Description" to be \'Windows 98\' (was \'' + browser['Platform_Description'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Name'], 'Gecko', 'Expected actual "RenderingEngine_Name" to be \'Gecko\' (was \'' + browser['RenderingEngine_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown', 'Expected actual "RenderingEngine_Version" to be \'unknown\' (was \'' + browser['RenderingEngine_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-C ["Mozilla/5.0 (Windows; U; WinNT4.0; fr; rv:2.0b3pre) Gecko/20100722 Firefox/3.6.8"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Windows; U; WinNT4.0; fr; rv:2.0b3pre) Gecko/20100722 Firefox/3.6.8');

    assert.strictEqual(browser['Comment'], 'Firefox Generic', 'Expected actual "Comment" to be \'Firefox Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Firefox', 'Expected actual "Browser" to be \'Firefox\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'WinNT', 'Expected actual "Platform" to be \'WinNT\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], '4.0', 'Expected actual "Platform_Version" to be \'4.0\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Description'], 'Windows NT', 'Expected actual "Platform_Description" to be \'Windows NT\' (was \'' + browser['Platform_Description'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Name'], 'Gecko', 'Expected actual "RenderingEngine_Name" to be \'Gecko\' (was \'' + browser['RenderingEngine_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown', 'Expected actual "RenderingEngine_Version" to be \'unknown\' (was \'' + browser['RenderingEngine_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-D ["Mozilla/5.0 (Windows NT 4.0; rv:11.0) Gecko/20100101 Firefox/11.0"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Windows NT 4.0; rv:11.0) Gecko/20100101 Firefox/11.0');

    assert.strictEqual(browser['Comment'], 'Firefox Generic', 'Expected actual "Comment" to be \'Firefox Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Firefox', 'Expected actual "Browser" to be \'Firefox\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'WinNT', 'Expected actual "Platform" to be \'WinNT\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], '4.0', 'Expected actual "Platform_Version" to be \'4.0\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Description'], 'Windows NT', 'Expected actual "Platform_Description" to be \'Windows NT\' (was \'' + browser['Platform_Description'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Name'], 'Gecko', 'Expected actual "RenderingEngine_Name" to be \'Gecko\' (was \'' + browser['RenderingEngine_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown', 'Expected actual "RenderingEngine_Version" to be \'unknown\' (was \'' + browser['RenderingEngine_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-E ["Mozilla/5.0 (Windows; U; WinNT4.0; bg; rv:1.8.1.4) Gecko/20100401 Firefox/4.0"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Windows; U; WinNT4.0; bg; rv:1.8.1.4) Gecko/20100401 Firefox/4.0');

    assert.strictEqual(browser['Comment'], 'Firefox Generic', 'Expected actual "Comment" to be \'Firefox Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Firefox', 'Expected actual "Browser" to be \'Firefox\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'WinNT', 'Expected actual "Platform" to be \'WinNT\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], '4.0', 'Expected actual "Platform_Version" to be \'4.0\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Description'], 'Windows NT', 'Expected actual "Platform_Description" to be \'Windows NT\' (was \'' + browser['Platform_Description'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Name'], 'Gecko', 'Expected actual "RenderingEngine_Name" to be \'Gecko\' (was \'' + browser['RenderingEngine_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown', 'Expected actual "RenderingEngine_Version" to be \'unknown\' (was \'' + browser['RenderingEngine_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-F ["Mozilla/5.0 (Windows; U; WinNT4.0; fa; rv:1.8.0.5) Gecko/20090407 Firefox/3.1b3"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Windows; U; WinNT4.0; fa; rv:1.8.0.5) Gecko/20090407 Firefox/3.1b3');

    assert.strictEqual(browser['Comment'], 'Firefox Generic', 'Expected actual "Comment" to be \'Firefox Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Firefox', 'Expected actual "Browser" to be \'Firefox\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'WinNT', 'Expected actual "Platform" to be \'WinNT\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], '4.0', 'Expected actual "Platform_Version" to be \'4.0\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Description'], 'Windows NT', 'Expected actual "Platform_Description" to be \'Windows NT\' (was \'' + browser['Platform_Description'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Name'], 'Gecko', 'Expected actual "RenderingEngine_Name" to be \'Gecko\' (was \'' + browser['RenderingEngine_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown', 'Expected actual "RenderingEngine_Version" to be \'unknown\' (was \'' + browser['RenderingEngine_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-G ["Mozilla/5.0 (Windows; U; WinNT4.0; bg; rv:1.8.1.17pre) Gecko/20100526 Firefox/3.7a5pre"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Windows; U; WinNT4.0; bg; rv:1.8.1.17pre) Gecko/20100526 Firefox/3.7a5pre');

    assert.strictEqual(browser['Comment'], 'Firefox Generic', 'Expected actual "Comment" to be \'Firefox Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Firefox', 'Expected actual "Browser" to be \'Firefox\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'WinNT', 'Expected actual "Platform" to be \'WinNT\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], '4.0', 'Expected actual "Platform_Version" to be \'4.0\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Description'], 'Windows NT', 'Expected actual "Platform_Description" to be \'Windows NT\' (was \'' + browser['Platform_Description'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Name'], 'Gecko', 'Expected actual "RenderingEngine_Name" to be \'Gecko\' (was \'' + browser['RenderingEngine_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown', 'Expected actual "RenderingEngine_Version" to be \'unknown\' (was \'' + browser['RenderingEngine_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-H ["Mozilla/5.0 (Windows; U; WinNT4.0; ko; rv:1.9.1.4) Gecko/20090716 Firefox/3.5.1"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Windows; U; WinNT4.0; ko; rv:1.9.1.4) Gecko/20090716 Firefox/3.5.1');

    assert.strictEqual(browser['Comment'], 'Firefox Generic', 'Expected actual "Comment" to be \'Firefox Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Firefox', 'Expected actual "Browser" to be \'Firefox\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'WinNT', 'Expected actual "Platform" to be \'WinNT\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], '4.0', 'Expected actual "Platform_Version" to be \'4.0\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Description'], 'Windows NT', 'Expected actual "Platform_Description" to be \'Windows NT\' (was \'' + browser['Platform_Description'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Name'], 'Gecko', 'Expected actual "RenderingEngine_Name" to be \'Gecko\' (was \'' + browser['RenderingEngine_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown', 'Expected actual "RenderingEngine_Version" to be \'unknown\' (was \'' + browser['RenderingEngine_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-I ["Mozilla/5.0 (Windows NT 4.0; rv:25.0) Gecko/20100101 Firefox/25.0"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Windows NT 4.0; rv:25.0) Gecko/20100101 Firefox/25.0');

    assert.strictEqual(browser['Comment'], 'Firefox Generic', 'Expected actual "Comment" to be \'Firefox Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Firefox', 'Expected actual "Browser" to be \'Firefox\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'WinNT', 'Expected actual "Platform" to be \'WinNT\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], '4.0', 'Expected actual "Platform_Version" to be \'4.0\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Description'], 'Windows NT', 'Expected actual "Platform_Description" to be \'Windows NT\' (was \'' + browser['Platform_Description'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Name'], 'Gecko', 'Expected actual "RenderingEngine_Name" to be \'Gecko\' (was \'' + browser['RenderingEngine_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown', 'Expected actual "RenderingEngine_Version" to be \'unknown\' (was \'' + browser['RenderingEngine_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-J ["Mozilla/5.0 (Windows NT 4.10; rv:19.0) Gecko/20100101 Firefox/19.0"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Windows NT 4.10; rv:19.0) Gecko/20100101 Firefox/19.0');

    assert.strictEqual(browser['Comment'], 'Firefox Generic', 'Expected actual "Comment" to be \'Firefox Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Firefox', 'Expected actual "Browser" to be \'Firefox\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'WinNT', 'Expected actual "Platform" to be \'WinNT\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], '4.1', 'Expected actual "Platform_Version" to be \'4.1\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Description'], 'Windows NT', 'Expected actual "Platform_Description" to be \'Windows NT\' (was \'' + browser['Platform_Description'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Name'], 'Gecko', 'Expected actual "RenderingEngine_Name" to be \'Gecko\' (was \'' + browser['RenderingEngine_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown', 'Expected actual "RenderingEngine_Version" to be \'unknown\' (was \'' + browser['RenderingEngine_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-K ["Mozilla/5.0 (Windows NT 4.0; rv:43.0) Gecko/20100101 Firefox/43.0"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Windows NT 4.0; rv:43.0) Gecko/20100101 Firefox/43.0');

    assert.strictEqual(browser['Comment'], 'Firefox Generic', 'Expected actual "Comment" to be \'Firefox Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Firefox', 'Expected actual "Browser" to be \'Firefox\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'WinNT', 'Expected actual "Platform" to be \'WinNT\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], '4.0', 'Expected actual "Platform_Version" to be \'4.0\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Description'], 'Windows NT', 'Expected actual "Platform_Description" to be \'Windows NT\' (was \'' + browser['Platform_Description'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Name'], 'Gecko', 'Expected actual "RenderingEngine_Name" to be \'Gecko\' (was \'' + browser['RenderingEngine_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown', 'Expected actual "RenderingEngine_Version" to be \'unknown\' (was \'' + browser['RenderingEngine_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-L ["Mozilla/5.0 (Windows NT 4.0; rv:40.0) Gecko/20100101 Firefox/40.0"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Windows NT 4.0; rv:40.0) Gecko/20100101 Firefox/40.0');

    assert.strictEqual(browser['Comment'], 'Firefox Generic', 'Expected actual "Comment" to be \'Firefox Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Firefox', 'Expected actual "Browser" to be \'Firefox\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'WinNT', 'Expected actual "Platform" to be \'WinNT\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], '4.0', 'Expected actual "Platform_Version" to be \'4.0\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Description'], 'Windows NT', 'Expected actual "Platform_Description" to be \'Windows NT\' (was \'' + browser['Platform_Description'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Name'], 'Gecko', 'Expected actual "RenderingEngine_Name" to be \'Gecko\' (was \'' + browser['RenderingEngine_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown', 'Expected actual "RenderingEngine_Version" to be \'unknown\' (was \'' + browser['RenderingEngine_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-M ["Mozilla/5.0 (Windows NT 4.10; rv:31.0) Gecko/20100101 Firefox/31.0"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Windows NT 4.10; rv:31.0) Gecko/20100101 Firefox/31.0');

    assert.strictEqual(browser['Comment'], 'Firefox Generic', 'Expected actual "Comment" to be \'Firefox Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Firefox', 'Expected actual "Browser" to be \'Firefox\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'WinNT', 'Expected actual "Platform" to be \'WinNT\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], '4.1', 'Expected actual "Platform_Version" to be \'4.1\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Description'], 'Windows NT', 'Expected actual "Platform_Description" to be \'Windows NT\' (was \'' + browser['Platform_Description'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Name'], 'Gecko', 'Expected actual "RenderingEngine_Name" to be \'Gecko\' (was \'' + browser['RenderingEngine_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown', 'Expected actual "RenderingEngine_Version" to be \'unknown\' (was \'' + browser['RenderingEngine_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-N ["Mozilla/5.0 (Windows NT 4.0; rv:50.0) Gecko/20100101 Firefox/50.0"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Windows NT 4.0; rv:50.0) Gecko/20100101 Firefox/50.0');

    assert.strictEqual(browser['Comment'], 'Firefox Generic', 'Expected actual "Comment" to be \'Firefox Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Firefox', 'Expected actual "Browser" to be \'Firefox\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'WinNT', 'Expected actual "Platform" to be \'WinNT\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], '4.0', 'Expected actual "Platform_Version" to be \'4.0\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Description'], 'Windows NT', 'Expected actual "Platform_Description" to be \'Windows NT\' (was \'' + browser['Platform_Description'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Name'], 'Gecko', 'Expected actual "RenderingEngine_Name" to be \'Gecko\' (was \'' + browser['RenderingEngine_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown', 'Expected actual "RenderingEngine_Version" to be \'unknown\' (was \'' + browser['RenderingEngine_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-O ["Mozilla/5.0 (Windows NT 4.10; rv:49.0) Gecko/20100101 Firefox/49.0"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Windows NT 4.10; rv:49.0) Gecko/20100101 Firefox/49.0');

    assert.strictEqual(browser['Comment'], 'Firefox Generic', 'Expected actual "Comment" to be \'Firefox Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Firefox', 'Expected actual "Browser" to be \'Firefox\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'WinNT', 'Expected actual "Platform" to be \'WinNT\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], '4.1', 'Expected actual "Platform_Version" to be \'4.1\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Description'], 'Windows NT', 'Expected actual "Platform_Description" to be \'Windows NT\' (was \'' + browser['Platform_Description'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Name'], 'Gecko', 'Expected actual "RenderingEngine_Name" to be \'Gecko\' (was \'' + browser['RenderingEngine_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown', 'Expected actual "RenderingEngine_Version" to be \'unknown\' (was \'' + browser['RenderingEngine_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-P ["Mozilla/5.0 (Windows NT 5.0; rv:21.0) Gecko/20100101 Firefox/21.0"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Windows NT 5.0; rv:21.0) Gecko/20100101 Firefox/21.0');

    assert.strictEqual(browser['Comment'], 'Firefox Generic', 'Expected actual "Comment" to be \'Firefox Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Firefox', 'Expected actual "Browser" to be \'Firefox\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'Win2000', 'Expected actual "Platform" to be \'Win2000\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], '5.0', 'Expected actual "Platform_Version" to be \'5.0\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Description'], 'Windows 2000', 'Expected actual "Platform_Description" to be \'Windows 2000\' (was \'' + browser['Platform_Description'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Name'], 'Gecko', 'Expected actual "RenderingEngine_Name" to be \'Gecko\' (was \'' + browser['RenderingEngine_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown', 'Expected actual "RenderingEngine_Version" to be \'unknown\' (was \'' + browser['RenderingEngine_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-Q ["Mozilla/5.0 (Windows NT 5.0; rv:35.0) Gecko/20100101 Firefox/35.0"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Windows NT 5.0; rv:35.0) Gecko/20100101 Firefox/35.0');

    assert.strictEqual(browser['Comment'], 'Firefox Generic', 'Expected actual "Comment" to be \'Firefox Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Firefox', 'Expected actual "Browser" to be \'Firefox\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'Win2000', 'Expected actual "Platform" to be \'Win2000\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], '5.0', 'Expected actual "Platform_Version" to be \'5.0\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Description'], 'Windows 2000', 'Expected actual "Platform_Description" to be \'Windows 2000\' (was \'' + browser['Platform_Description'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Name'], 'Gecko', 'Expected actual "RenderingEngine_Name" to be \'Gecko\' (was \'' + browser['RenderingEngine_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown', 'Expected actual "RenderingEngine_Version" to be \'unknown\' (was \'' + browser['RenderingEngine_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-R ["Mozilla/5.0 (Windows NT 5.0; WOW64; rv:45.0) Gecko/20100101 Firefox/45.0"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Windows NT 5.0; WOW64; rv:45.0) Gecko/20100101 Firefox/45.0');

    assert.strictEqual(browser['Comment'], 'Firefox Generic', 'Expected actual "Comment" to be \'Firefox Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Firefox', 'Expected actual "Browser" to be \'Firefox\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'Win2000', 'Expected actual "Platform" to be \'Win2000\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], '5.0', 'Expected actual "Platform_Version" to be \'5.0\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Description'], 'Windows 2000', 'Expected actual "Platform_Description" to be \'Windows 2000\' (was \'' + browser['Platform_Description'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Name'], 'Gecko', 'Expected actual "RenderingEngine_Name" to be \'Gecko\' (was \'' + browser['RenderingEngine_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown', 'Expected actual "RenderingEngine_Version" to be \'unknown\' (was \'' + browser['RenderingEngine_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-S ["Mozilla/5.0 (Windows NT 5.0; rv:49.0) Gecko/20100101 Firefox/49.0"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Windows NT 5.0; rv:49.0) Gecko/20100101 Firefox/49.0');

    assert.strictEqual(browser['Comment'], 'Firefox Generic', 'Expected actual "Comment" to be \'Firefox Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Firefox', 'Expected actual "Browser" to be \'Firefox\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'Win2000', 'Expected actual "Platform" to be \'Win2000\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], '5.0', 'Expected actual "Platform_Version" to be \'5.0\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Description'], 'Windows 2000', 'Expected actual "Platform_Description" to be \'Windows 2000\' (was \'' + browser['Platform_Description'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Name'], 'Gecko', 'Expected actual "RenderingEngine_Name" to be \'Gecko\' (was \'' + browser['RenderingEngine_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown', 'Expected actual "RenderingEngine_Version" to be \'unknown\' (was \'' + browser['RenderingEngine_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-T ["Mozilla/5.0 (Windows NT 5.0; WOW64; rv:49.0) Gecko/20100101 Firefox/49.0"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Windows NT 5.0; WOW64; rv:49.0) Gecko/20100101 Firefox/49.0');

    assert.strictEqual(browser['Comment'], 'Firefox Generic', 'Expected actual "Comment" to be \'Firefox Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Firefox', 'Expected actual "Browser" to be \'Firefox\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'Win2000', 'Expected actual "Platform" to be \'Win2000\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], '5.0', 'Expected actual "Platform_Version" to be \'5.0\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Description'], 'Windows 2000', 'Expected actual "Platform_Description" to be \'Windows 2000\' (was \'' + browser['Platform_Description'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Name'], 'Gecko', 'Expected actual "RenderingEngine_Name" to be \'Gecko\' (was \'' + browser['RenderingEngine_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown', 'Expected actual "RenderingEngine_Version" to be \'unknown\' (was \'' + browser['RenderingEngine_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-U ["Mozilla/5.0 (Macintosh; U; PPC Mac OS X 10.4; ru; rv:1.9.2a1pre) Gecko/20100401 Firefox/4.0"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Macintosh; U; PPC Mac OS X 10.4; ru; rv:1.9.2a1pre) Gecko/20100401 Firefox/4.0');

    assert.strictEqual(browser['Comment'], 'Firefox Generic', 'Expected actual "Comment" to be \'Firefox Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Firefox', 'Expected actual "Browser" to be \'Firefox\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'MacOSX', 'Expected actual "Platform" to be \'MacOSX\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], '10.4', 'Expected actual "Platform_Version" to be \'10.4\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Description'], 'Mac OS X', 'Expected actual "Platform_Description" to be \'Mac OS X\' (was \'' + browser['Platform_Description'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Name'], 'Gecko', 'Expected actual "RenderingEngine_Name" to be \'Gecko\' (was \'' + browser['RenderingEngine_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown', 'Expected actual "RenderingEngine_Version" to be \'unknown\' (was \'' + browser['RenderingEngine_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-V ["Mozilla/5.0 (Macintosh; U; PPC Mac OS X 10.4; en-US; rv:48.0) Gecko/20110420 Firefox/48.0"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Macintosh; U; PPC Mac OS X 10.4; en-US; rv:48.0) Gecko/20110420 Firefox/48.0');

    assert.strictEqual(browser['Browser'], 'Firefox', 'Expected actual "Browser" to be \'Firefox\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'MacOSX', 'Expected actual "Platform" to be \'MacOSX\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], '10.4', 'Expected actual "Platform_Version" to be \'10.4\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Description'], 'Mac OS X', 'Expected actual "Platform_Description" to be \'Mac OS X\' (was \'' + browser['Platform_Description'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Name'], 'Gecko', 'Expected actual "RenderingEngine_Name" to be \'Gecko\' (was \'' + browser['RenderingEngine_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown', 'Expected actual "RenderingEngine_Version" to be \'unknown\' (was \'' + browser['RenderingEngine_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-W ["Mozilla/5.0 (Macintosh; Intel Mac OS X 10.5; rv:48.0) Gecko/20100101 Firefox/48.0"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Macintosh; Intel Mac OS X 10.5; rv:48.0) Gecko/20100101 Firefox/48.0');

    assert.strictEqual(browser['Browser'], 'Firefox', 'Expected actual "Browser" to be \'Firefox\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'MacOSX', 'Expected actual "Platform" to be \'MacOSX\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], '10.5', 'Expected actual "Platform_Version" to be \'10.5\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Description'], 'Mac OS X', 'Expected actual "Platform_Description" to be \'Mac OS X\' (was \'' + browser['Platform_Description'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Name'], 'Gecko', 'Expected actual "RenderingEngine_Name" to be \'Gecko\' (was \'' + browser['RenderingEngine_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown', 'Expected actual "RenderingEngine_Version" to be \'unknown\' (was \'' + browser['RenderingEngine_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-X ["Mozilla/5.0 (Macintosh; Intel Mac OS X 10.6; rv:45.0) Gecko/20100101 Firefox/49.0"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Macintosh; Intel Mac OS X 10.6; rv:45.0) Gecko/20100101 Firefox/49.0');

    assert.strictEqual(browser['Browser'], 'Firefox', 'Expected actual "Browser" to be \'Firefox\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'MacOSX', 'Expected actual "Platform" to be \'MacOSX\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], '10.6', 'Expected actual "Platform_Version" to be \'10.6\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Description'], 'Mac OS X', 'Expected actual "Platform_Description" to be \'Mac OS X\' (was \'' + browser['Platform_Description'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Name'], 'Gecko', 'Expected actual "RenderingEngine_Name" to be \'Gecko\' (was \'' + browser['RenderingEngine_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown', 'Expected actual "RenderingEngine_Version" to be \'unknown\' (was \'' + browser['RenderingEngine_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-Y ["Mozilla/5.0 (Macintosh; Intel Mac OS X 10.7; rv:45.0) Gecko/20100101 Firefox/49.0"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Macintosh; Intel Mac OS X 10.7; rv:45.0) Gecko/20100101 Firefox/49.0');

    assert.strictEqual(browser['Browser'], 'Firefox', 'Expected actual "Browser" to be \'Firefox\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'MacOSX', 'Expected actual "Platform" to be \'MacOSX\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], '10.7', 'Expected actual "Platform_Version" to be \'10.7\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Description'], 'Mac OS X', 'Expected actual "Platform_Description" to be \'Mac OS X\' (was \'' + browser['Platform_Description'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Name'], 'Gecko', 'Expected actual "RenderingEngine_Name" to be \'Gecko\' (was \'' + browser['RenderingEngine_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown', 'Expected actual "RenderingEngine_Version" to be \'unknown\' (was \'' + browser['RenderingEngine_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-Z ["Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:45.0) Gecko/20100101 Firefox/49.0"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:45.0) Gecko/20100101 Firefox/49.0');

    assert.strictEqual(browser['Browser'], 'Firefox', 'Expected actual "Browser" to be \'Firefox\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'MacOSX', 'Expected actual "Platform" to be \'MacOSX\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], '10.8', 'Expected actual "Platform_Version" to be \'10.8\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Description'], 'Mac OS X', 'Expected actual "Platform_Description" to be \'Mac OS X\' (was \'' + browser['Platform_Description'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Name'], 'Gecko', 'Expected actual "RenderingEngine_Name" to be \'Gecko\' (was \'' + browser['RenderingEngine_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown', 'Expected actual "RenderingEngine_Version" to be \'unknown\' (was \'' + browser['RenderingEngine_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-AA ["Mozilla/5.0 (Windows NT 10.0; WOW64; rv:41.0) Gecko/20100101 Firefox/AA5D"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Windows NT 10.0; WOW64; rv:41.0) Gecko/20100101 Firefox/AA5D');

    assert.strictEqual(browser['Comment'], 'Firefox Generic', 'Expected actual "Comment" to be \'Firefox Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Firefox', 'Expected actual "Browser" to be \'Firefox\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'Win10', 'Expected actual "Platform" to be \'Win10\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], '10.0', 'Expected actual "Platform_Version" to be \'10.0\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Description'], 'Windows 10', 'Expected actual "Platform_Description" to be \'Windows 10\' (was \'' + browser['Platform_Description'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Name'], 'Gecko', 'Expected actual "RenderingEngine_Name" to be \'Gecko\' (was \'' + browser['RenderingEngine_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown', 'Expected actual "RenderingEngine_Version" to be \'unknown\' (was \'' + browser['RenderingEngine_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-AB ["Mozilla/5.0 (Windows NT 10.0; WOW64; rv:41.0) Gecko/20100101 Firefox/77AB"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Windows NT 10.0; WOW64; rv:41.0) Gecko/20100101 Firefox/77AB');

    assert.strictEqual(browser['Comment'], 'Firefox Generic', 'Expected actual "Comment" to be \'Firefox Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Firefox', 'Expected actual "Browser" to be \'Firefox\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'Win10', 'Expected actual "Platform" to be \'Win10\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], '10.0', 'Expected actual "Platform_Version" to be \'10.0\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Description'], 'Windows 10', 'Expected actual "Platform_Description" to be \'Windows 10\' (was \'' + browser['Platform_Description'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Name'], 'Gecko', 'Expected actual "RenderingEngine_Name" to be \'Gecko\' (was \'' + browser['RenderingEngine_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown', 'Expected actual "RenderingEngine_Version" to be \'unknown\' (was \'' + browser['RenderingEngine_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-AC ["Mozilla/5.0 (Windows NT 10.0; WOW64; rv:41.0) Gecko/20100101 Firefox/4DF0"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Windows NT 10.0; WOW64; rv:41.0) Gecko/20100101 Firefox/4DF0');

    assert.strictEqual(browser['Comment'], 'Firefox Generic', 'Expected actual "Comment" to be \'Firefox Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Firefox', 'Expected actual "Browser" to be \'Firefox\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'Win10', 'Expected actual "Platform" to be \'Win10\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], '10.0', 'Expected actual "Platform_Version" to be \'10.0\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Description'], 'Windows 10', 'Expected actual "Platform_Description" to be \'Windows 10\' (was \'' + browser['Platform_Description'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Name'], 'Gecko', 'Expected actual "RenderingEngine_Name" to be \'Gecko\' (was \'' + browser['RenderingEngine_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown', 'Expected actual "RenderingEngine_Version" to be \'unknown\' (was \'' + browser['RenderingEngine_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-AD ["Mozilla/5.0 (Windows NT 10.0; WOW64; rv:41.0) Gecko/20100101 Firefox/3FB0"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Windows NT 10.0; WOW64; rv:41.0) Gecko/20100101 Firefox/3FB0');

    assert.strictEqual(browser['Comment'], 'Firefox Generic', 'Expected actual "Comment" to be \'Firefox Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Firefox', 'Expected actual "Browser" to be \'Firefox\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'Win10', 'Expected actual "Platform" to be \'Win10\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], '10.0', 'Expected actual "Platform_Version" to be \'10.0\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Description'], 'Windows 10', 'Expected actual "Platform_Description" to be \'Windows 10\' (was \'' + browser['Platform_Description'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Bits'], '64', 'Expected actual "Platform_Bits" to be \'64\' (was \'' + browser['Platform_Bits'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Name'], 'Gecko', 'Expected actual "RenderingEngine_Name" to be \'Gecko\' (was \'' + browser['RenderingEngine_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown', 'Expected actual "RenderingEngine_Version" to be \'unknown\' (was \'' + browser['RenderingEngine_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-AE ["Mozilla/5.0 (Windows; U; Win 9x 4.90; en-US; rv:1.7.5) Gecko/20050101 Firefox/0.6.4"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Windows; U; Win 9x 4.90; en-US; rv:1.7.5) Gecko/20050101 Firefox/0.6.4');

    assert.strictEqual(browser['Comment'], 'Firefox Generic', 'Expected actual "Comment" to be \'Firefox Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Firefox', 'Expected actual "Browser" to be \'Firefox\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'WinME', 'Expected actual "Platform" to be \'WinME\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], 'ME', 'Expected actual "Platform_Version" to be \'ME\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Description'], 'Windows ME', 'Expected actual "Platform_Description" to be \'Windows ME\' (was \'' + browser['Platform_Description'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Name'], 'Gecko', 'Expected actual "RenderingEngine_Name" to be \'Gecko\' (was \'' + browser['RenderingEngine_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown', 'Expected actual "RenderingEngine_Version" to be \'unknown\' (was \'' + browser['RenderingEngine_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-AF ["Mozilla/5.0 (Windows; U; Win98; en-US; rv:1.7) Gecko/20041122 Firefox/0.5.6+"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Windows; U; Win98; en-US; rv:1.7) Gecko/20041122 Firefox/0.5.6+');

    assert.strictEqual(browser['Comment'], 'Firefox Generic', 'Expected actual "Comment" to be \'Firefox Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Firefox', 'Expected actual "Browser" to be \'Firefox\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'Win98', 'Expected actual "Platform" to be \'Win98\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], '98', 'Expected actual "Platform_Version" to be \'98\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Description'], 'Windows 98', 'Expected actual "Platform_Description" to be \'Windows 98\' (was \'' + browser['Platform_Description'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Name'], 'Gecko', 'Expected actual "RenderingEngine_Name" to be \'Gecko\' (was \'' + browser['RenderingEngine_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown', 'Expected actual "RenderingEngine_Version" to be \'unknown\' (was \'' + browser['RenderingEngine_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-AG ["Mozilla/5.0 (X11; U; Linux i686; pl-PL; rv:1.9.0.2) Gecko/2008092313 Ubuntu/9.25 (jaunty) Firefox/3.8"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (X11; U; Linux i686; pl-PL; rv:1.9.0.2) Gecko/2008092313 Ubuntu/9.25 (jaunty) Firefox/3.8');

    assert.strictEqual(browser['Comment'], 'Firefox Generic', 'Expected actual "Comment" to be \'Firefox Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Firefox', 'Expected actual "Browser" to be \'Firefox\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'Linux', 'Expected actual "Platform" to be \'Linux\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], 'unknown', 'Expected actual "Platform_Version" to be \'unknown\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Description'], 'Linux', 'Expected actual "Platform_Description" to be \'Linux\' (was \'' + browser['Platform_Description'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Name'], 'Gecko', 'Expected actual "RenderingEngine_Name" to be \'Gecko\' (was \'' + browser['RenderingEngine_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown', 'Expected actual "RenderingEngine_Version" to be \'unknown\' (was \'' + browser['RenderingEngine_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-AH ["Mozilla/5.0 (Windows NT 4.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2049.0 Safari/537.36"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Windows NT 4.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2049.0 Safari/537.36');

    assert.strictEqual(browser['Comment'], 'Chrome Generic', 'Expected actual "Comment" to be \'Chrome Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Chrome', 'Expected actual "Browser" to be \'Chrome\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'Win32', 'Expected actual "Platform" to be \'Win32\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], 'unknown', 'Expected actual "Platform_Version" to be \'unknown\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Description'], 'Windows', 'Expected actual "Platform_Description" to be \'Windows\' (was \'' + browser['Platform_Description'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Name'], 'Blink', 'Expected actual "RenderingEngine_Name" to be \'Blink\' (was \'' + browser['RenderingEngine_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown', 'Expected actual "RenderingEngine_Version" to be \'unknown\' (was \'' + browser['RenderingEngine_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Maker'], 'Google Inc', 'Expected actual "RenderingEngine_Maker" to be \'Google Inc\' (was \'' + browser['RenderingEngine_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-AI ["Mozilla/5.0 (Windows NT 5.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Windows NT 5.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36');

    assert.strictEqual(browser['Comment'], 'Chrome Generic', 'Expected actual "Comment" to be \'Chrome Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Chrome', 'Expected actual "Browser" to be \'Chrome\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Type'], 'Browser', 'Expected actual "Browser_Type" to be \'Browser\' (was \'' + browser['Browser_Type'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Bits'], '32', 'Expected actual "Browser_Bits" to be \'32\' (was \'' + browser['Browser_Bits'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Maker'], 'Google Inc', 'Expected actual "Browser_Maker" to be \'Google Inc\' (was \'' + browser['Browser_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Modus'], 'unknown', 'Expected actual "Browser_Modus" to be \'unknown\' (was \'' + browser['Browser_Modus'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'Win32', 'Expected actual "Platform" to be \'Win32\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], 'unknown', 'Expected actual "Platform_Version" to be \'unknown\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Description'], 'Windows', 'Expected actual "Platform_Description" to be \'Windows\' (was \'' + browser['Platform_Description'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Name'], 'Blink', 'Expected actual "RenderingEngine_Name" to be \'Blink\' (was \'' + browser['RenderingEngine_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown', 'Expected actual "RenderingEngine_Version" to be \'unknown\' (was \'' + browser['RenderingEngine_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Maker'], 'Google Inc', 'Expected actual "RenderingEngine_Maker" to be \'Google Inc\' (was \'' + browser['RenderingEngine_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-AJ ["Mozilla/5.0 (Windows NT 4.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Windows NT 4.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36');

    assert.strictEqual(browser['Comment'], 'Chrome Generic', 'Expected actual "Comment" to be \'Chrome Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Chrome', 'Expected actual "Browser" to be \'Chrome\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'Win32', 'Expected actual "Platform" to be \'Win32\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], 'unknown', 'Expected actual "Platform_Version" to be \'unknown\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Description'], 'Windows', 'Expected actual "Platform_Description" to be \'Windows\' (was \'' + browser['Platform_Description'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Name'], 'Blink', 'Expected actual "RenderingEngine_Name" to be \'Blink\' (was \'' + browser['RenderingEngine_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown', 'Expected actual "RenderingEngine_Version" to be \'unknown\' (was \'' + browser['RenderingEngine_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Maker'], 'Google Inc', 'Expected actual "RenderingEngine_Maker" to be \'Google Inc\' (was \'' + browser['RenderingEngine_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-AK ["Mozilla/5.0 (Windows; U; Windows NT 5.0; en-US) AppleWebKit/533.4 (KHTML, like Gecko) Chrome/5.0.375.9 Safari/533.4"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Windows; U; Windows NT 5.0; en-US) AppleWebKit/533.4 (KHTML, like Gecko) Chrome/5.0.375.9 Safari/533.4');

    assert.strictEqual(browser['Comment'], 'Chrome Generic', 'Expected actual "Comment" to be \'Chrome Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Chrome', 'Expected actual "Browser" to be \'Chrome\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'Win32', 'Expected actual "Platform" to be \'Win32\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], 'unknown', 'Expected actual "Platform_Version" to be \'unknown\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Description'], 'Windows', 'Expected actual "Platform_Description" to be \'Windows\' (was \'' + browser['Platform_Description'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-AL ["Mozilla/5.0 (Windows NT 5.1) AppleWebKit/536.11 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/536.11"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Windows NT 5.1) AppleWebKit/536.11 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/536.11');

    assert.strictEqual(browser['Comment'], 'Chrome Generic', 'Expected actual "Comment" to be \'Chrome Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Chrome', 'Expected actual "Browser" to be \'Chrome\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'WinXP', 'Expected actual "Platform" to be \'WinXP\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], '5.1', 'Expected actual "Platform_Version" to be \'5.1\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Description'], 'Windows XP', 'Expected actual "Platform_Description" to be \'Windows XP\' (was \'' + browser['Platform_Description'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Name'], 'Blink', 'Expected actual "RenderingEngine_Name" to be \'Blink\' (was \'' + browser['RenderingEngine_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown', 'Expected actual "RenderingEngine_Version" to be \'unknown\' (was \'' + browser['RenderingEngine_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Maker'], 'Google Inc', 'Expected actual "RenderingEngine_Maker" to be \'Google Inc\' (was \'' + browser['RenderingEngine_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-AM ["Mozilla/5.0 (Windows NT 6.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.75 Safari/537.36"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Windows NT 6.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.75 Safari/537.36');

    assert.strictEqual(browser['Comment'], 'Chrome Generic', 'Expected actual "Comment" to be \'Chrome Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Chrome', 'Expected actual "Browser" to be \'Chrome\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'WinVista', 'Expected actual "Platform" to be \'WinVista\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], '6.0', 'Expected actual "Platform_Version" to be \'6.0\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Description'], 'Windows Vista', 'Expected actual "Platform_Description" to be \'Windows Vista\' (was \'' + browser['Platform_Description'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Name'], 'Blink', 'Expected actual "RenderingEngine_Name" to be \'Blink\' (was \'' + browser['RenderingEngine_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown', 'Expected actual "RenderingEngine_Version" to be \'unknown\' (was \'' + browser['RenderingEngine_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Maker'], 'Google Inc', 'Expected actual "RenderingEngine_Maker" to be \'Google Inc\' (was \'' + browser['RenderingEngine_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-AN ["Mozilla/5.0 (Windows NT 5.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Windows NT 5.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36');

    assert.strictEqual(browser['Comment'], 'Chrome Generic', 'Expected actual "Comment" to be \'Chrome Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Chrome', 'Expected actual "Browser" to be \'Chrome\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'WinXP', 'Expected actual "Platform" to be \'WinXP\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], '5.2', 'Expected actual "Platform_Version" to be \'5.2\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Description'], 'Windows XP', 'Expected actual "Platform_Description" to be \'Windows XP\' (was \'' + browser['Platform_Description'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Bits'], '64', 'Expected actual "Platform_Bits" to be \'64\' (was \'' + browser['Platform_Bits'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Name'], 'Blink', 'Expected actual "RenderingEngine_Name" to be \'Blink\' (was \'' + browser['RenderingEngine_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown', 'Expected actual "RenderingEngine_Version" to be \'unknown\' (was \'' + browser['RenderingEngine_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Maker'], 'Google Inc', 'Expected actual "RenderingEngine_Maker" to be \'Google Inc\' (was \'' + browser['RenderingEngine_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-AO ["Mozilla/5.0 (Windows NT 5.2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Windows NT 5.2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36');

    assert.strictEqual(browser['Comment'], 'Chrome Generic', 'Expected actual "Comment" to be \'Chrome Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Chrome', 'Expected actual "Browser" to be \'Chrome\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'WinXP', 'Expected actual "Platform" to be \'WinXP\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], '5.2', 'Expected actual "Platform_Version" to be \'5.2\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Description'], 'Windows XP', 'Expected actual "Platform_Description" to be \'Windows XP\' (was \'' + browser['Platform_Description'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Bits'], '32', 'Expected actual "Platform_Bits" to be \'32\' (was \'' + browser['Platform_Bits'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Name'], 'Blink', 'Expected actual "RenderingEngine_Name" to be \'Blink\' (was \'' + browser['RenderingEngine_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown', 'Expected actual "RenderingEngine_Version" to be \'unknown\' (was \'' + browser['RenderingEngine_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Maker'], 'Google Inc', 'Expected actual "RenderingEngine_Maker" to be \'Google Inc\' (was \'' + browser['RenderingEngine_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-AP ["Mozilla/5.0 (Windows NT 6.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Windows NT 6.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36');

    assert.strictEqual(browser['Comment'], 'Chrome Generic', 'Expected actual "Comment" to be \'Chrome Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Chrome', 'Expected actual "Browser" to be \'Chrome\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'WinVista', 'Expected actual "Platform" to be \'WinVista\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], '6.0', 'Expected actual "Platform_Version" to be \'6.0\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Description'], 'Windows Vista', 'Expected actual "Platform_Description" to be \'Windows Vista\' (was \'' + browser['Platform_Description'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Bits'], '64', 'Expected actual "Platform_Bits" to be \'64\' (was \'' + browser['Platform_Bits'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Name'], 'Blink', 'Expected actual "RenderingEngine_Name" to be \'Blink\' (was \'' + browser['RenderingEngine_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown', 'Expected actual "RenderingEngine_Version" to be \'unknown\' (was \'' + browser['RenderingEngine_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Maker'], 'Google Inc', 'Expected actual "RenderingEngine_Maker" to be \'Google Inc\' (was \'' + browser['RenderingEngine_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-AQ ["Mozilla/5.0 (Windows NT 5.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2778.54 Safari/537.36"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Windows NT 5.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2778.54 Safari/537.36');

    assert.strictEqual(browser['Comment'], 'Chrome Generic', 'Expected actual "Comment" to be \'Chrome Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Chrome', 'Expected actual "Browser" to be \'Chrome\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'WinXP', 'Expected actual "Platform" to be \'WinXP\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], '5.1', 'Expected actual "Platform_Version" to be \'5.1\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Description'], 'Windows XP', 'Expected actual "Platform_Description" to be \'Windows XP\' (was \'' + browser['Platform_Description'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Bits'], '64', 'Expected actual "Platform_Bits" to be \'64\' (was \'' + browser['Platform_Bits'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Name'], 'Blink', 'Expected actual "RenderingEngine_Name" to be \'Blink\' (was \'' + browser['RenderingEngine_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown', 'Expected actual "RenderingEngine_Version" to be \'unknown\' (was \'' + browser['RenderingEngine_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Maker'], 'Google Inc', 'Expected actual "RenderingEngine_Maker" to be \'Google Inc\' (was \'' + browser['RenderingEngine_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-AR ["Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36');

    assert.strictEqual(browser['Comment'], 'Chrome Generic', 'Expected actual "Comment" to be \'Chrome Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Chrome', 'Expected actual "Browser" to be \'Chrome\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'MacOSX', 'Expected actual "Platform" to be \'MacOSX\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], '10.6', 'Expected actual "Platform_Version" to be \'10.6\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Description'], 'Mac OS X', 'Expected actual "Platform_Description" to be \'Mac OS X\' (was \'' + browser['Platform_Description'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Name'], 'Blink', 'Expected actual "RenderingEngine_Name" to be \'Blink\' (was \'' + browser['RenderingEngine_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown', 'Expected actual "RenderingEngine_Version" to be \'unknown\' (was \'' + browser['RenderingEngine_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Maker'], 'Google Inc', 'Expected actual "RenderingEngine_Maker" to be \'Google Inc\' (was \'' + browser['RenderingEngine_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-AS ["Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36');

    assert.strictEqual(browser['Comment'], 'Chrome Generic', 'Expected actual "Comment" to be \'Chrome Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Chrome', 'Expected actual "Browser" to be \'Chrome\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'MacOSX', 'Expected actual "Platform" to be \'MacOSX\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], '10.8', 'Expected actual "Platform_Version" to be \'10.8\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Description'], 'Mac OS X', 'Expected actual "Platform_Description" to be \'Mac OS X\' (was \'' + browser['Platform_Description'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Name'], 'Blink', 'Expected actual "RenderingEngine_Name" to be \'Blink\' (was \'' + browser['RenderingEngine_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown', 'Expected actual "RenderingEngine_Version" to be \'unknown\' (was \'' + browser['RenderingEngine_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Maker'], 'Google Inc', 'Expected actual "RenderingEngine_Maker" to be \'Google Inc\' (was \'' + browser['RenderingEngine_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-AT ["Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36');

    assert.strictEqual(browser['Comment'], 'Chrome Generic', 'Expected actual "Comment" to be \'Chrome Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Chrome', 'Expected actual "Browser" to be \'Chrome\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'MacOSX', 'Expected actual "Platform" to be \'MacOSX\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], '10.7', 'Expected actual "Platform_Version" to be \'10.7\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Name'], 'Blink', 'Expected actual "RenderingEngine_Name" to be \'Blink\' (was \'' + browser['RenderingEngine_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown', 'Expected actual "RenderingEngine_Version" to be \'unknown\' (was \'' + browser['RenderingEngine_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Maker'], 'Google Inc', 'Expected actual "RenderingEngine_Maker" to be \'Google Inc\' (was \'' + browser['RenderingEngine_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-AU ["Mozilla/5.0 (Macintosh Intel Mac OS X 10_5_8) AppleWebKit/537.1 (KHTML, like Gecko) Chrome/22.0.1183.0 Safari/537.1"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Macintosh Intel Mac OS X 10_5_8) AppleWebKit/537.1 (KHTML, like Gecko) Chrome/22.0.1183.0 Safari/537.1');

    assert.strictEqual(browser['Comment'], 'Chrome Generic', 'Expected actual "Comment" to be \'Chrome Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Chrome', 'Expected actual "Browser" to be \'Chrome\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'MacOSX', 'Expected actual "Platform" to be \'MacOSX\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], '10.5', 'Expected actual "Platform_Version" to be \'10.5\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Description'], 'Mac OS X', 'Expected actual "Platform_Description" to be \'Mac OS X\' (was \'' + browser['Platform_Description'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-AV ["Mozilla/4.0 (compatible; MSIE 5.23; Mac_PowerPC) Opera 7.51  [en]"]', function () {
    browser = browscap.getBrowser('Mozilla/4.0 (compatible; MSIE 5.23; Mac_PowerPC) Opera 7.51  [en]');

    assert.strictEqual(browser['Comment'], 'Opera Generic', 'Expected actual "Comment" to be \'Opera Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Opera', 'Expected actual "Browser" to be \'Opera\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'MacPPC', 'Expected actual "Platform" to be \'MacPPC\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-AW ["Mozilla/4.0 (compatible; MSIE 6.0; Mac_PowerPC; en) Opera 9.24"]', function () {
    browser = browscap.getBrowser('Mozilla/4.0 (compatible; MSIE 6.0; Mac_PowerPC; en) Opera 9.24');

    assert.strictEqual(browser['Comment'], 'Opera Generic', 'Expected actual "Comment" to be \'Opera Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Opera', 'Expected actual "Browser" to be \'Opera\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'MacPPC', 'Expected actual "Platform" to be \'MacPPC\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-AX ["Mozilla/4.0 (compatible; MSIE 5.23; Mac_PowerPC) Opera 7.54  [en]"]', function () {
    browser = browscap.getBrowser('Mozilla/4.0 (compatible; MSIE 5.23; Mac_PowerPC) Opera 7.54  [en]');

    assert.strictEqual(browser['Comment'], 'Opera Generic', 'Expected actual "Comment" to be \'Opera Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Opera', 'Expected actual "Browser" to be \'Opera\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'MacPPC', 'Expected actual "Platform" to be \'MacPPC\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-AY ["Mozilla/4.0 (Windows 98; US) Opera 12.16 [en]"]', function () {
    browser = browscap.getBrowser('Mozilla/4.0 (Windows 98; US) Opera 12.16 [en]');

    assert.strictEqual(browser['Comment'], 'Opera Generic', 'Expected actual "Comment" to be \'Opera Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Opera', 'Expected actual "Browser" to be \'Opera\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'Win98', 'Expected actual "Platform" to be \'Win98\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-AZ ["Mozilla/5.0 (Windows NT 4.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1500.95 Safari/537.36 OPR/15.0.1147.153"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Windows NT 4.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1500.95 Safari/537.36 OPR/15.0.1147.153');

    assert.strictEqual(browser['Comment'], 'Opera Generic', 'Expected actual "Comment" to be \'Opera Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Opera', 'Expected actual "Browser" to be \'Opera\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'WinNT', 'Expected actual "Platform" to be \'WinNT\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], '4.0', 'Expected actual "Platform_Version" to be \'4.0\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-BA ["Mozilla/5.0 (Windows NT 4.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36 OPR/32.0.1948.25"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Windows NT 4.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36 OPR/32.0.1948.25');

    assert.strictEqual(browser['Comment'], 'Opera Generic', 'Expected actual "Comment" to be \'Opera Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Opera', 'Expected actual "Browser" to be \'Opera\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'WinNT', 'Expected actual "Platform" to be \'WinNT\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], '4.0', 'Expected actual "Platform_Version" to be \'4.0\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-BB ["Mozilla/5.0 (Windows NT 4.10) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36 OPR/32.0.1948.69"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Windows NT 4.10) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36 OPR/32.0.1948.69');

    assert.strictEqual(browser['Comment'], 'Opera Generic', 'Expected actual "Comment" to be \'Opera Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Opera', 'Expected actual "Browser" to be \'Opera\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'WinNT', 'Expected actual "Platform" to be \'WinNT\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], '4.1', 'Expected actual "Platform_Version" to be \'4.1\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-BC ["Opera/9.80 (Windows 95 U Edition Yx ru) Presto/2.10.289 Version/12.02"]', function () {
    browser = browscap.getBrowser('Opera/9.80 (Windows 95 U Edition Yx ru) Presto/2.10.289 Version/12.02');

    assert.strictEqual(browser['Comment'], 'Opera Generic', 'Expected actual "Comment" to be \'Opera Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Opera', 'Expected actual "Browser" to be \'Opera\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Type'], 'Browser', 'Expected actual "Browser_Type" to be \'Browser\' (was \'' + browser['Browser_Type'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Bits'], '32', 'Expected actual "Browser_Bits" to be \'32\' (was \'' + browser['Browser_Bits'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Maker'], 'Opera Software ASA', 'Expected actual "Browser_Maker" to be \'Opera Software ASA\' (was \'' + browser['Browser_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Modus'], 'unknown', 'Expected actual "Browser_Modus" to be \'unknown\' (was \'' + browser['Browser_Modus'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'Win95', 'Expected actual "Platform" to be \'Win95\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-BD ["Opera/9.80 (Windows ME; U; en) Presto/2.10.289 Version/12.02"]', function () {
    browser = browscap.getBrowser('Opera/9.80 (Windows ME; U; en) Presto/2.10.289 Version/12.02');

    assert.strictEqual(browser['Comment'], 'Opera Generic', 'Expected actual "Comment" to be \'Opera Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Opera', 'Expected actual "Browser" to be \'Opera\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'WinME', 'Expected actual "Platform" to be \'WinME\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-BE ["Mozilla/5.0 (compatible; Opera/9.80 Presto/2.8.131 Version/9.80; Windows NT 6.1; Trident/6.0)"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (compatible; Opera/9.80 Presto/2.8.131 Version/9.80; Windows NT 6.1; Trident/6.0)');

    assert.strictEqual(browser['Comment'], 'Opera Generic', 'Expected actual "Comment" to be \'Opera Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Opera', 'Expected actual "Browser" to be \'Opera\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'Win7', 'Expected actual "Platform" to be \'Win7\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-BF ["Mozilla/5.0 (compatible; Opera/9.80 Presto/2.8.131 Version/9.80; Windows NT 6.3; Trident/6.0)"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (compatible; Opera/9.80 Presto/2.8.131 Version/9.80; Windows NT 6.3; Trident/6.0)');

    assert.strictEqual(browser['Comment'], 'Opera Generic', 'Expected actual "Comment" to be \'Opera Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Opera', 'Expected actual "Browser" to be \'Opera\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'Win8.1', 'Expected actual "Platform" to be \'Win8.1\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-BG ["Opera/4.02 (Macintosh; U; bg)"]', function () {
    browser = browscap.getBrowser('Opera/4.02 (Macintosh; U; bg)');

    assert.strictEqual(browser['Comment'], 'Opera Generic', 'Expected actual "Comment" to be \'Opera Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Opera', 'Expected actual "Browser" to be \'Opera\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Type'], 'Browser', 'Expected actual "Browser_Type" to be \'Browser\' (was \'' + browser['Browser_Type'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Name'], 'Macintosh', 'Expected actual "Device_Name" to be \'Macintosh\' (was \'' + browser['Device_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-BH ["Opera/9.80 (Linux i686) Presto/2.12.407 Version/12.50"]', function () {
    browser = browscap.getBrowser('Opera/9.80 (Linux i686) Presto/2.12.407 Version/12.50');

    assert.strictEqual(browser['Comment'], 'Opera Generic', 'Expected actual "Comment" to be \'Opera Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Opera', 'Expected actual "Browser" to be \'Opera\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'Linux', 'Expected actual "Platform" to be \'Linux\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-BI ["Opera/9.99 (X11; U; sk)"]', function () {
    browser = browscap.getBrowser('Opera/9.99 (X11; U; sk)');

    assert.strictEqual(browser['Comment'], 'Opera Generic', 'Expected actual "Comment" to be \'Opera Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Opera', 'Expected actual "Browser" to be \'Opera\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'Linux', 'Expected actual "Platform" to be \'Linux\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-BN ["Opera 7.60 (Linux 2.4.10-4GB i686; U)"]', function () {
    browser = browscap.getBrowser('Opera 7.60 (Linux 2.4.10-4GB i686; U)');

    assert.strictEqual(browser['Comment'], 'Opera Generic', 'Expected actual "Comment" to be \'Opera Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Opera', 'Expected actual "Browser" to be \'Opera\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'Linux', 'Expected actual "Platform" to be \'Linux\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-BO ["Opera 7.60 (Windows NT 4.0; U) [en] via HTTP/1.0 l33t0-HaX0r.hiddenip.com/"]', function () {
    browser = browscap.getBrowser('Opera 7.60 (Windows NT 4.0; U) [en] via HTTP/1.0 l33t0-HaX0r.hiddenip.com/');

    assert.strictEqual(browser['Comment'], 'Opera Generic', 'Expected actual "Comment" to be \'Opera Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Opera', 'Expected actual "Browser" to be \'Opera\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'WinNT', 'Expected actual "Platform" to be \'WinNT\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-BP ["Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; en) Opera 7.60"]', function () {
    browser = browscap.getBrowser('Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; en) Opera 7.60');

    assert.strictEqual(browser['Comment'], 'Opera Generic', 'Expected actual "Comment" to be \'Opera Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Opera', 'Expected actual "Browser" to be \'Opera\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'WinXP', 'Expected actual "Platform" to be \'WinXP\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-BQ ["Mozilla/4.0 (compatible; MSIE 6.0; Windows 98; en) Opera 7.60"]', function () {
    browser = browscap.getBrowser('Mozilla/4.0 (compatible; MSIE 6.0; Windows 98; en) Opera 7.60');

    assert.strictEqual(browser['Comment'], 'Opera Generic', 'Expected actual "Comment" to be \'Opera Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Opera', 'Expected actual "Browser" to be \'Opera\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'Win98', 'Expected actual "Platform" to be \'Win98\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-BR ["Opera/9.80 (Macintosh; Intel Mac OS X 10_6_5; U; nv) Presto/2.6.34 Version/10.70"]', function () {
    browser = browscap.getBrowser('Opera/9.80 (Macintosh; Intel Mac OS X 10_6_5; U; nv) Presto/2.6.34 Version/10.70');

    assert.strictEqual(browser['Comment'], 'Opera Generic', 'Expected actual "Comment" to be \'Opera Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Opera', 'Expected actual "Browser" to be \'Opera\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'MacOSX', 'Expected actual "Platform" to be \'MacOSX\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], '10.6', 'Expected actual "Platform_Version" to be \'10.6\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-BS ["Mozilla/5.0 (Windows NT 5.2; U; ru; rv:1.9.1.6) Gecko/20091201 Firefox/3.5.6 Opera 10.70"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Windows NT 5.2; U; ru; rv:1.9.1.6) Gecko/20091201 Firefox/3.5.6 Opera 10.70');

    assert.strictEqual(browser['Comment'], 'Opera Generic', 'Expected actual "Comment" to be \'Opera Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Opera', 'Expected actual "Browser" to be \'Opera\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'WinXP', 'Expected actual "Platform" to be \'WinXP\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-BT ["Mozilla/5.0 (Windows NT 5.1; U; zh-cn; rv:1.9.1.6) Gecko/20091201 Firefox/3.5.6 Opera 10.70"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Windows NT 5.1; U; zh-cn; rv:1.9.1.6) Gecko/20091201 Firefox/3.5.6 Opera 10.70');

    assert.strictEqual(browser['Comment'], 'Opera Generic', 'Expected actual "Comment" to be \'Opera Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Opera', 'Expected actual "Browser" to be \'Opera\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'WinXP', 'Expected actual "Platform" to be \'WinXP\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-BU ["Mozilla/5.0 (Linux i686 ; U; en; rv:1.8.1) Gecko/20061208 Firefox/2.0.0 Opera 9.70"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Linux i686 ; U; en; rv:1.8.1) Gecko/20061208 Firefox/2.0.0 Opera 9.70');

    assert.strictEqual(browser['Comment'], 'Opera Generic', 'Expected actual "Comment" to be \'Opera Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Opera', 'Expected actual "Browser" to be \'Opera\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'Linux', 'Expected actual "Platform" to be \'Linux\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], 'unknown', 'Expected actual "Platform_Version" to be \'unknown\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-BV ["Mozilla/4.0 (compatible; MSIE 6.0; Linux i686 ; en) Opera 9.70"]', function () {
    browser = browscap.getBrowser('Mozilla/4.0 (compatible; MSIE 6.0; Linux i686 ; en) Opera 9.70');

    assert.strictEqual(browser['Comment'], 'Opera Generic', 'Expected actual "Comment" to be \'Opera Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Opera', 'Expected actual "Browser" to be \'Opera\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'Linux', 'Expected actual "Platform" to be \'Linux\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-BW ["Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 5.0) Opera 12.12"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 5.0) Opera 12.12');

    assert.strictEqual(browser['Comment'], 'Opera Generic', 'Expected actual "Comment" to be \'Opera Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Opera', 'Expected actual "Browser" to be \'Opera\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'Win2000', 'Expected actual "Platform" to be \'Win2000\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-BX ["Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36 OPR/33.0.1990.58"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36 OPR/33.0.1990.58');

    assert.strictEqual(browser['Comment'], 'Opera Generic', 'Expected actual "Comment" to be \'Opera Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Opera', 'Expected actual "Browser" to be \'Opera\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'MacOSX', 'Expected actual "Platform" to be \'MacOSX\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], '10.6', 'Expected actual "Platform_Version" to be \'10.6\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-BY ["Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36 OPR/37.0.2178.54"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36 OPR/37.0.2178.54');

    assert.strictEqual(browser['Comment'], 'Opera Generic', 'Expected actual "Comment" to be \'Opera Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Opera', 'Expected actual "Browser" to be \'Opera\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'MacOSX', 'Expected actual "Platform" to be \'MacOSX\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], '10.7', 'Expected actual "Platform_Version" to be \'10.7\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-BZ ["Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36 OPR/37.0.2178.54"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36 OPR/37.0.2178.54');

    assert.strictEqual(browser['Comment'], 'Opera Generic', 'Expected actual "Comment" to be \'Opera Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Opera', 'Expected actual "Browser" to be \'Opera\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'MacOSX', 'Expected actual "Platform" to be \'MacOSX\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], '10.8', 'Expected actual "Platform_Version" to be \'10.8\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-CA ["Mozilla/5.0 (Windows NT 6.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36 OPR/37.0.2178.54"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Windows NT 6.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36 OPR/37.0.2178.54');

    assert.strictEqual(browser['Comment'], 'Opera Generic', 'Expected actual "Comment" to be \'Opera Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Opera', 'Expected actual "Browser" to be \'Opera\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'WinVista', 'Expected actual "Platform" to be \'WinVista\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-CB ["Mozilla/5.0 (Windows NT 6.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36 OPR/37.0.2178.54"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Windows NT 6.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36 OPR/37.0.2178.54');

    assert.strictEqual(browser['Comment'], 'Opera Generic', 'Expected actual "Comment" to be \'Opera Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Opera', 'Expected actual "Browser" to be \'Opera\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'WinVista', 'Expected actual "Platform" to be \'WinVista\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Bits'], '64', 'Expected actual "Platform_Bits" to be \'64\' (was \'' + browser['Platform_Bits'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-CC ["Mozilla/5.0 (FreeBSD amd64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.111 Safari/537.36 OPR/25.0.1614.68"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (FreeBSD amd64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.111 Safari/537.36 OPR/25.0.1614.68');

    assert.strictEqual(browser['Comment'], 'Opera Generic', 'Expected actual "Comment" to be \'Opera Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Opera', 'Expected actual "Browser" to be \'Opera\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'FreeBSD', 'Expected actual "Platform" to be \'FreeBSD\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-CD ["Mozilla/5.0 (FreeBSD i386) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.94 Safari/537.36 OPR/27.0.1689.66"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (FreeBSD i386) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.94 Safari/537.36 OPR/27.0.1689.66');

    assert.strictEqual(browser['Comment'], 'Opera Generic', 'Expected actual "Comment" to be \'Opera Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Opera', 'Expected actual "Browser" to be \'Opera\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'FreeBSD', 'Expected actual "Platform" to be \'FreeBSD\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-CE ["Mozilla/5.0 (Windows NT 5.0) AppleWebKit/536.11 (KHTML, like Gecko) Chrome/20.0.1150.1 Iron/20.0.1150.1 Safari/536.11"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Windows NT 5.0) AppleWebKit/536.11 (KHTML, like Gecko) Chrome/20.0.1150.1 Iron/20.0.1150.1 Safari/536.11');

    assert.strictEqual(browser['Comment'], 'Iron Generic', 'Expected actual "Comment" to be \'Iron Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Iron', 'Expected actual "Browser" to be \'Iron\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'Win32', 'Expected actual "Platform" to be \'Win32\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], 'unknown', 'Expected actual "Platform_Version" to be \'unknown\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Description'], 'Windows', 'Expected actual "Platform_Description" to be \'Windows\' (was \'' + browser['Platform_Description'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-CF ["Mozilla/5.0 (Windows NT 4.0) AppleWebKit/537.36 (KHTML, like Gecko) Iron/30.0.1650.0  Chrome/30.0.1650.0 Safari/537.36"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Windows NT 4.0) AppleWebKit/537.36 (KHTML, like Gecko) Iron/30.0.1650.0  Chrome/30.0.1650.0 Safari/537.36');

    assert.strictEqual(browser['Comment'], 'Iron Generic', 'Expected actual "Comment" to be \'Iron Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Iron', 'Expected actual "Browser" to be \'Iron\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'Win32', 'Expected actual "Platform" to be \'Win32\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], 'unknown', 'Expected actual "Platform_Version" to be \'unknown\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Description'], 'Windows', 'Expected actual "Platform_Description" to be \'Windows\' (was \'' + browser['Platform_Description'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-CG ["Mozilla/5.0 (Windows; U; Windows NT 5.0; en-US) AppleWebKit/532.0 (KHTML, like Gecko) Iron/3.0.197.0 Safari/532.0"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Windows; U; Windows NT 5.0; en-US) AppleWebKit/532.0 (KHTML, like Gecko) Iron/3.0.197.0 Safari/532.0');

    assert.strictEqual(browser['Comment'], 'Iron Generic', 'Expected actual "Comment" to be \'Iron Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Iron', 'Expected actual "Browser" to be \'Iron\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'Win32', 'Expected actual "Platform" to be \'Win32\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], 'unknown', 'Expected actual "Platform_Version" to be \'unknown\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Description'], 'Windows', 'Expected actual "Platform_Description" to be \'Windows\' (was \'' + browser['Platform_Description'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-CH ["Mozilla/5.0 (Windows; U; Windows NT 5.0; en-US) AppleWebKit/533.4 (KHTML, like Gecko) Iron/5.0.381.0 Chrome/5.0.381 Safari/533.4"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Windows; U; Windows NT 5.0; en-US) AppleWebKit/533.4 (KHTML, like Gecko) Iron/5.0.381.0 Chrome/5.0.381 Safari/533.4');

    assert.strictEqual(browser['Comment'], 'Iron Generic', 'Expected actual "Comment" to be \'Iron Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Iron', 'Expected actual "Browser" to be \'Iron\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'Win32', 'Expected actual "Platform" to be \'Win32\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], 'unknown', 'Expected actual "Platform_Version" to be \'unknown\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Description'], 'Windows', 'Expected actual "Platform_Description" to be \'Windows\' (was \'' + browser['Platform_Description'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-CI ["Mozilla/5.0 (Windows; U; Windows NT 5.0; en-US) AppleWebKit/534.7 (KHTML, like Gecko) Iron/7.0.520.1 Chrome/7.0.520.1 Safari/534.7"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Windows; U; Windows NT 5.0; en-US) AppleWebKit/534.7 (KHTML, like Gecko) Iron/7.0.520.1 Chrome/7.0.520.1 Safari/534.7');

    assert.strictEqual(browser['Comment'], 'Iron Generic', 'Expected actual "Comment" to be \'Iron Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Iron', 'Expected actual "Browser" to be \'Iron\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'Win32', 'Expected actual "Platform" to be \'Win32\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], 'unknown', 'Expected actual "Platform_Version" to be \'unknown\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Description'], 'Windows', 'Expected actual "Platform_Description" to be \'Windows\' (was \'' + browser['Platform_Description'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-CJ ["Mozilla/5.0 (Windows NT 5.0 WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Iron/26.0.1450.0 Chrome/26.0.1450.0 Safari/537.36"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Windows NT 5.0 WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Iron/26.0.1450.0 Chrome/26.0.1450.0 Safari/537.36');

    assert.strictEqual(browser['Comment'], 'Iron Generic', 'Expected actual "Comment" to be \'Iron Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Iron', 'Expected actual "Browser" to be \'Iron\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'Win32', 'Expected actual "Platform" to be \'Win32\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], 'unknown', 'Expected actual "Platform_Version" to be \'unknown\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Description'], 'Windows', 'Expected actual "Platform_Description" to be \'Windows\' (was \'' + browser['Platform_Description'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-CK ["Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) QupZilla/2.0.1 Chrome/45.0.2454.101 Safari/537.36"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) QupZilla/2.0.1 Chrome/45.0.2454.101 Safari/537.36');

    assert.strictEqual(browser['Comment'], 'QupZilla Generic', 'Expected actual "Comment" to be \'QupZilla Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'QupZilla', 'Expected actual "Browser" to be \'QupZilla\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'WinXP', 'Expected actual "Platform" to be \'WinXP\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], '5.1', 'Expected actual "Platform_Version" to be \'5.1\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Description'], 'Windows XP', 'Expected actual "Platform_Description" to be \'Windows XP\' (was \'' + browser['Platform_Description'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-CL ["Mozilla/5.0 (Linux; Android 4.4.3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/19.77.34.5 Mobile Safari/537.36"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Linux; Android 4.4.3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/19.77.34.5 Mobile Safari/537.36');

    assert.strictEqual(browser['Comment'], 'Chrome Generic', 'Expected actual "Comment" to be \'Chrome Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Chrome', 'Expected actual "Browser" to be \'Chrome\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'Android', 'Expected actual "Platform" to be \'Android\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], '4.4', 'Expected actual "Platform_Version" to be \'4.4\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-CM ["Mozilla/5.0 (Linux; Android 5.0; SM-N900 Build/LRX21V) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/19.77.34.5 Mobile Safari/537.36"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Linux; Android 5.0; SM-N900 Build/LRX21V) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/19.77.34.5 Mobile Safari/537.36');

    assert.strictEqual(browser['Comment'], 'Chrome Generic', 'Expected actual "Comment" to be \'Chrome Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Chrome', 'Expected actual "Browser" to be \'Chrome\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'Android', 'Expected actual "Platform" to be \'Android\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], '5.0', 'Expected actual "Platform_Version" to be \'5.0\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-CN ["Mozilla/5.0 (Linux; Android 4.0.1; GT-P5100 Build/ITL41F) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/22.0.677.257 Mobile Safari/535.19"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Linux; Android 4.0.1; GT-P5100 Build/ITL41F) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/22.0.677.257 Mobile Safari/535.19');

    assert.strictEqual(browser['Comment'], 'Chrome Generic', 'Expected actual "Comment" to be \'Chrome Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Chrome', 'Expected actual "Browser" to be \'Chrome\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'Android', 'Expected actual "Platform" to be \'Android\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], '4.0', 'Expected actual "Platform_Version" to be \'4.0\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-CO ["Mozilla/5.0 (Linux; Android 4.4.2; SM-P600 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/19.77.34.5 Safari/537.36"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Linux; Android 4.4.2; SM-P600 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/19.77.34.5 Safari/537.36');

    assert.strictEqual(browser['Comment'], 'Chrome Generic', 'Expected actual "Comment" to be \'Chrome Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Chrome', 'Expected actual "Browser" to be \'Chrome\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'Android', 'Expected actual "Platform" to be \'Android\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], '4.4', 'Expected actual "Platform_Version" to be \'4.4\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-CP ["Mozilla/5.0 (Linux; Android 4.4.4; Nexus 5 Build/KTU84Q) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/19.77.34.5 Mobile Safari/537.36"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Linux; Android 4.4.4; Nexus 5 Build/KTU84Q) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/19.77.34.5 Mobile Safari/537.36');

    assert.strictEqual(browser['Comment'], 'Chrome Generic', 'Expected actual "Comment" to be \'Chrome Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Chrome', 'Expected actual "Browser" to be \'Chrome\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'Android', 'Expected actual "Platform" to be \'Android\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], '4.4', 'Expected actual "Platform_Version" to be \'4.4\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-CQ ["Mozilla/5.0 (Linux; Android 4.4.4; HTC One_M8 Build/KTU84P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/19.77.34.5 Mobile Safari/537.36"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Linux; Android 4.4.4; HTC One_M8 Build/KTU84P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/19.77.34.5 Mobile Safari/537.36');

    assert.strictEqual(browser['Comment'], 'Chrome Generic', 'Expected actual "Comment" to be \'Chrome Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Chrome', 'Expected actual "Browser" to be \'Chrome\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'Android', 'Expected actual "Platform" to be \'Android\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], '4.4', 'Expected actual "Platform_Version" to be \'4.4\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-CR ["Mozilla/5.0 (Linux; Android 4.4.2; SCH-I545 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/19.77.34.5 Mobile Safari/537.36"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Linux; Android 4.4.2; SCH-I545 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/19.77.34.5 Mobile Safari/537.36');

    assert.strictEqual(browser['Comment'], 'Chrome Generic', 'Expected actual "Comment" to be \'Chrome Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Chrome', 'Expected actual "Browser" to be \'Chrome\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'Android', 'Expected actual "Platform" to be \'Android\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], '4.4', 'Expected actual "Platform_Version" to be \'4.4\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-CS ["Mozilla/5.0 (Linux; Android 4.4.4; Nexus 5 Build/KTU84P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/19.77.34.5 Mobile Safari/537.36"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Linux; Android 4.4.4; Nexus 5 Build/KTU84P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/19.77.34.5 Mobile Safari/537.36');

    assert.strictEqual(browser['Comment'], 'Chrome Generic', 'Expected actual "Comment" to be \'Chrome Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Chrome', 'Expected actual "Browser" to be \'Chrome\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'Android', 'Expected actual "Platform" to be \'Android\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], '4.4', 'Expected actual "Platform_Version" to be \'4.4\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-CT ["Mozilla/5.0 (Linux; Android 5.1.1; Lenovo S920_ROW Build/LMY47V) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/14.0.1019.81 Mobile Safari/535.19"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Linux; Android 5.1.1; Lenovo S920_ROW Build/LMY47V) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/14.0.1019.81 Mobile Safari/535.19');

    assert.strictEqual(browser['Comment'], 'Chrome Generic', 'Expected actual "Comment" to be \'Chrome Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Chrome', 'Expected actual "Browser" to be \'Chrome\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'Android', 'Expected actual "Platform" to be \'Android\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], '5.1', 'Expected actual "Platform_Version" to be \'5.1\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-CU ["Mozilla/5.0 (Linux; Android 4.3; GT-I9100 Build/JSS15J) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/17.0.1461.62 Mobile Safari/535.19"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Linux; Android 4.3; GT-I9100 Build/JSS15J) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/17.0.1461.62 Mobile Safari/535.19');

    assert.strictEqual(browser['Comment'], 'Chrome Generic', 'Expected actual "Comment" to be \'Chrome Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Chrome', 'Expected actual "Browser" to be \'Chrome\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'Android', 'Expected actual "Platform" to be \'Android\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], '4.3', 'Expected actual "Platform_Version" to be \'4.3\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-CV ["Mozilla/5.0 (Linux; Android 4.1.2; GT-N8010 Build/JZO54K) AppleWebKit/534.30 (KHTML, like Gecko) Chrome/12.0.742.55 Safari/534.30"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Linux; Android 4.1.2; GT-N8010 Build/JZO54K) AppleWebKit/534.30 (KHTML, like Gecko) Chrome/12.0.742.55 Safari/534.30');

    assert.strictEqual(browser['Comment'], 'Chrome Generic', 'Expected actual "Comment" to be \'Chrome Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Chrome', 'Expected actual "Browser" to be \'Chrome\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'Android', 'Expected actual "Platform" to be \'Android\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], '4.1', 'Expected actual "Platform_Version" to be \'4.1\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-CW ["Mozilla/5.0 (Linux; Android 4.0.4; MTC 970H Build/JRO03C) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/13.0.1055.233 Safari/535.19"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Linux; Android 4.0.4; MTC 970H Build/JRO03C) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/13.0.1055.233 Safari/535.19');

    assert.strictEqual(browser['Comment'], 'Chrome Generic', 'Expected actual "Comment" to be \'Chrome Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Chrome', 'Expected actual "Browser" to be \'Chrome\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'Android', 'Expected actual "Platform" to be \'Android\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], '4.0', 'Expected actual "Platform_Version" to be \'4.0\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-CX ["Mozilla/5.0 (X11; U; Linux i686; en-US) AppleWebKit/532.0 (KHTML, like Gecko) Chrome/3.0.195.1 Safari/532.0"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (X11; U; Linux i686; en-US) AppleWebKit/532.0 (KHTML, like Gecko) Chrome/3.0.195.1 Safari/532.0');

    assert.strictEqual(browser['Comment'], 'Chrome Generic', 'Expected actual "Comment" to be \'Chrome Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Chrome', 'Expected actual "Browser" to be \'Chrome\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'Linux', 'Expected actual "Platform" to be \'Linux\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-CY ["Mozilla/5.0 (Windows NT 6.2; Win64; x64) AppleWebKit/534.34 (KHTML, like Gecko) Chrome/11.0.696.7 Safari/534.34"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Windows NT 6.2; Win64; x64) AppleWebKit/534.34 (KHTML, like Gecko) Chrome/11.0.696.7 Safari/534.34');

    assert.strictEqual(browser['Comment'], 'Chrome Generic', 'Expected actual "Comment" to be \'Chrome Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Chrome', 'Expected actual "Browser" to be \'Chrome\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Bits'], '64', 'Expected actual "Browser_Bits" to be \'64\' (was \'' + browser['Browser_Bits'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'Win8', 'Expected actual "Platform" to be \'Win8\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], '6.2', 'Expected actual "Platform_Version" to be \'6.2\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Description'], 'Windows 8', 'Expected actual "Platform_Description" to be \'Windows 8\' (was \'' + browser['Platform_Description'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Bits'], '64', 'Expected actual "Platform_Bits" to be \'64\' (was \'' + browser['Platform_Bits'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-CZ ["Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/32.0.1700.75 Safari/537.36"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/32.0.1700.75 Safari/537.36');

    assert.strictEqual(browser['Comment'], 'Chrome Generic', 'Expected actual "Comment" to be \'Chrome Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Chrome', 'Expected actual "Browser" to be \'Chrome\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Bits'], '64', 'Expected actual "Browser_Bits" to be \'64\' (was \'' + browser['Browser_Bits'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'Win10', 'Expected actual "Platform" to be \'Win10\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], '10.0', 'Expected actual "Platform_Version" to be \'10.0\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Description'], 'Windows 10', 'Expected actual "Platform_Description" to be \'Windows 10\' (was \'' + browser['Platform_Description'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Bits'], '64', 'Expected actual "Platform_Bits" to be \'64\' (was \'' + browser['Platform_Bits'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-DA ["Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/535.36 (KHTML, like Gecko) Chrome/31.0.1004.71 Safari/535.36"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/535.36 (KHTML, like Gecko) Chrome/31.0.1004.71 Safari/535.36');

    assert.strictEqual(browser['Comment'], 'Chrome Generic', 'Expected actual "Comment" to be \'Chrome Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Chrome', 'Expected actual "Browser" to be \'Chrome\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Bits'], '64', 'Expected actual "Browser_Bits" to be \'64\' (was \'' + browser['Browser_Bits'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'Win7', 'Expected actual "Platform" to be \'Win7\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], '6.1', 'Expected actual "Platform_Version" to be \'6.1\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Description'], 'Windows 7', 'Expected actual "Platform_Description" to be \'Windows 7\' (was \'' + browser['Platform_Description'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Bits'], '64', 'Expected actual "Platform_Bits" to be \'64\' (was \'' + browser['Platform_Bits'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-DB ["Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/32.0.1667.0 Safari/537.36"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/32.0.1667.0 Safari/537.36');

    assert.strictEqual(browser['Comment'], 'Chrome Generic', 'Expected actual "Comment" to be \'Chrome Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Chrome', 'Expected actual "Browser" to be \'Chrome\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Bits'], '64', 'Expected actual "Browser_Bits" to be \'64\' (was \'' + browser['Browser_Bits'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'Win8.1', 'Expected actual "Platform" to be \'Win8.1\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], '6.3', 'Expected actual "Platform_Version" to be \'6.3\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Description'], 'Windows 8.1', 'Expected actual "Platform_Description" to be \'Windows 8.1\' (was \'' + browser['Platform_Description'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Bits'], '64', 'Expected actual "Platform_Bits" to be \'64\' (was \'' + browser['Platform_Bits'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-DC ["Mozilla/5.0 (Windows NT 6.0; Win64; x64) AppleWebKit/535.45 (KHTML, like Gecko) Chrome/17.0.1700.48 Safari/535.45"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Windows NT 6.0; Win64; x64) AppleWebKit/535.45 (KHTML, like Gecko) Chrome/17.0.1700.48 Safari/535.45');

    assert.strictEqual(browser['Comment'], 'Chrome Generic', 'Expected actual "Comment" to be \'Chrome Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Chrome', 'Expected actual "Browser" to be \'Chrome\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Bits'], '64', 'Expected actual "Browser_Bits" to be \'64\' (was \'' + browser['Browser_Bits'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'WinVista', 'Expected actual "Platform" to be \'WinVista\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], '6.0', 'Expected actual "Platform_Version" to be \'6.0\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Description'], 'Windows Vista', 'Expected actual "Platform_Description" to be \'Windows Vista\' (was \'' + browser['Platform_Description'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Bits'], '64', 'Expected actual "Platform_Bits" to be \'64\' (was \'' + browser['Platform_Bits'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-DD ["Mozilla/5.0 (Windows NT 4.0; rv:17.0) Gecko/20130107 Thunderbird/17.0.2"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Windows NT 4.0; rv:17.0) Gecko/20130107 Thunderbird/17.0.2');

    assert.strictEqual(browser['Comment'], 'Thunderbird Generic', 'Expected actual "Comment" to be \'Thunderbird Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Thunderbird', 'Expected actual "Browser" to be \'Thunderbird\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Bits'], '32', 'Expected actual "Browser_Bits" to be \'32\' (was \'' + browser['Browser_Bits'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'WinNT', 'Expected actual "Platform" to be \'WinNT\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], '4.0', 'Expected actual "Platform_Version" to be \'4.0\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Description'], 'Windows NT', 'Expected actual "Platform_Description" to be \'Windows NT\' (was \'' + browser['Platform_Description'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Bits'], '32', 'Expected actual "Platform_Bits" to be \'32\' (was \'' + browser['Platform_Bits'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-DE ["Mozilla/5.0 (iPhone; CPU iPhone OS 7_1_2 like Mac OS X) AppleWebKit/537.51.2 (KHTML, like Gecko) Mobile/11D257 Version/6.0 Safari/537.51.2"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (iPhone; CPU iPhone OS 7_1_2 like Mac OS X) AppleWebKit/537.51.2 (KHTML, like Gecko) Mobile/11D257 Version/6.0 Safari/537.51.2');

    assert.strictEqual(browser['Comment'], 'Mobile Safari 6.0', 'Expected actual "Comment" to be \'Mobile Safari 6.0\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Safari', 'Expected actual "Browser" to be \'Safari\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Type'], 'Browser', 'Expected actual "Browser_Type" to be \'Browser\' (was \'' + browser['Browser_Type'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Bits'], '32', 'Expected actual "Browser_Bits" to be \'32\' (was \'' + browser['Browser_Bits'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Maker'], 'Apple Inc', 'Expected actual "Browser_Maker" to be \'Apple Inc\' (was \'' + browser['Browser_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Modus'], 'unknown', 'Expected actual "Browser_Modus" to be \'unknown\' (was \'' + browser['Browser_Modus'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '6.0', 'Expected actual "Version" to be \'6.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'iOS', 'Expected actual "Platform" to be \'iOS\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], '7.0', 'Expected actual "Platform_Version" to be \'7.0\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Description'], 'iPod, iPhone & iPad', 'Expected actual "Platform_Description" to be \'iPod, iPhone & iPad\' (was \'' + browser['Platform_Description'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Bits'], '32', 'Expected actual "Platform_Bits" to be \'32\' (was \'' + browser['Platform_Bits'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Maker'], 'Apple Inc', 'Expected actual "Platform_Maker" to be \'Apple Inc\' (was \'' + browser['Platform_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-DF ["Mozilla/5.0 (iPad; CPU OS 7_1_1 like Mac OS X) AppleWebKit/500.14 (KHTML, like Gecko) Version/8.0 Mobile/12B435 Safari/500.4"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (iPad; CPU OS 7_1_1 like Mac OS X) AppleWebKit/500.14 (KHTML, like Gecko) Version/8.0 Mobile/12B435 Safari/500.4');

    assert.strictEqual(browser['Comment'], 'Mobile Safari Generic', 'Expected actual "Comment" to be \'Mobile Safari Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Safari', 'Expected actual "Browser" to be \'Safari\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Type'], 'Browser', 'Expected actual "Browser_Type" to be \'Browser\' (was \'' + browser['Browser_Type'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Bits'], '32', 'Expected actual "Browser_Bits" to be \'32\' (was \'' + browser['Browser_Bits'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Maker'], 'Apple Inc', 'Expected actual "Browser_Maker" to be \'Apple Inc\' (was \'' + browser['Browser_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Modus'], 'unknown', 'Expected actual "Browser_Modus" to be \'unknown\' (was \'' + browser['Browser_Modus'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'iOS', 'Expected actual "Platform" to be \'iOS\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], '7.1', 'Expected actual "Platform_Version" to be \'7.1\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Description'], 'iPod, iPhone & iPad', 'Expected actual "Platform_Description" to be \'iPod, iPhone & iPad\' (was \'' + browser['Platform_Description'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Bits'], '32', 'Expected actual "Platform_Bits" to be \'32\' (was \'' + browser['Platform_Bits'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Maker'], 'Apple Inc', 'Expected actual "Platform_Maker" to be \'Apple Inc\' (was \'' + browser['Platform_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-DG ["Mozilla/5.0 (iPhone; CPU iPhone OS 10_2 like Mac OS X) AppleWebKit/602.3.12 (KHTML, like Gecko) Mobile/14C92 Version/8.0 Safari/600.1.4"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (iPhone; CPU iPhone OS 10_2 like Mac OS X) AppleWebKit/602.3.12 (KHTML, like Gecko) Mobile/14C92 Version/8.0 Safari/600.1.4');

    assert.strictEqual(browser['Comment'], 'Mobile Safari Generic', 'Expected actual "Comment" to be \'Mobile Safari Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Safari', 'Expected actual "Browser" to be \'Safari\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Type'], 'Browser', 'Expected actual "Browser_Type" to be \'Browser\' (was \'' + browser['Browser_Type'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Bits'], '32', 'Expected actual "Browser_Bits" to be \'32\' (was \'' + browser['Browser_Bits'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Maker'], 'Apple Inc', 'Expected actual "Browser_Maker" to be \'Apple Inc\' (was \'' + browser['Browser_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Modus'], 'unknown', 'Expected actual "Browser_Modus" to be \'unknown\' (was \'' + browser['Browser_Modus'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'iOS', 'Expected actual "Platform" to be \'iOS\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], '10.2', 'Expected actual "Platform_Version" to be \'10.2\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Description'], 'iPod, iPhone & iPad', 'Expected actual "Platform_Description" to be \'iPod, iPhone & iPad\' (was \'' + browser['Platform_Description'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Bits'], '32', 'Expected actual "Platform_Bits" to be \'32\' (was \'' + browser['Platform_Bits'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Maker'], 'Apple Inc', 'Expected actual "Platform_Maker" to be \'Apple Inc\' (was \'' + browser['Platform_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-DH ["Mozilla/5.0 (iPod touch; CPU iPhone OS 9_1_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12B435 Safari/600.1.4"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (iPod touch; CPU iPhone OS 9_1_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12B435 Safari/600.1.4');

    assert.strictEqual(browser['Comment'], 'Mobile Safari 8.0', 'Expected actual "Comment" to be \'Mobile Safari 8.0\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Safari', 'Expected actual "Browser" to be \'Safari\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Type'], 'Browser', 'Expected actual "Browser_Type" to be \'Browser\' (was \'' + browser['Browser_Type'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Bits'], '32', 'Expected actual "Browser_Bits" to be \'32\' (was \'' + browser['Browser_Bits'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Maker'], 'Apple Inc', 'Expected actual "Browser_Maker" to be \'Apple Inc\' (was \'' + browser['Browser_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Modus'], 'unknown', 'Expected actual "Browser_Modus" to be \'unknown\' (was \'' + browser['Browser_Modus'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '8.0', 'Expected actual "Version" to be \'8.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'iOS', 'Expected actual "Platform" to be \'iOS\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], '9.0', 'Expected actual "Platform_Version" to be \'9.0\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Description'], 'iPod, iPhone & iPad', 'Expected actual "Platform_Description" to be \'iPod, iPhone & iPad\' (was \'' + browser['Platform_Description'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Bits'], '32', 'Expected actual "Platform_Bits" to be \'32\' (was \'' + browser['Platform_Bits'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Maker'], 'Apple Inc', 'Expected actual "Platform_Maker" to be \'Apple Inc\' (was \'' + browser['Platform_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-DI ["Mozilla/5.0 (iPhone; CPU iPhone OS 9_1_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12B435 Safari/600.1.4"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (iPhone; CPU iPhone OS 9_1_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12B435 Safari/600.1.4');

    assert.strictEqual(browser['Comment'], 'Mobile Safari 8.0', 'Expected actual "Comment" to be \'Mobile Safari 8.0\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Safari', 'Expected actual "Browser" to be \'Safari\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Type'], 'Browser', 'Expected actual "Browser_Type" to be \'Browser\' (was \'' + browser['Browser_Type'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Bits'], '32', 'Expected actual "Browser_Bits" to be \'32\' (was \'' + browser['Browser_Bits'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Maker'], 'Apple Inc', 'Expected actual "Browser_Maker" to be \'Apple Inc\' (was \'' + browser['Browser_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Modus'], 'unknown', 'Expected actual "Browser_Modus" to be \'unknown\' (was \'' + browser['Browser_Modus'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '8.0', 'Expected actual "Version" to be \'8.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'iOS', 'Expected actual "Platform" to be \'iOS\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], '9.0', 'Expected actual "Platform_Version" to be \'9.0\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Description'], 'iPod, iPhone & iPad', 'Expected actual "Platform_Description" to be \'iPod, iPhone & iPad\' (was \'' + browser['Platform_Description'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Bits'], '32', 'Expected actual "Platform_Bits" to be \'32\' (was \'' + browser['Platform_Bits'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Maker'], 'Apple Inc', 'Expected actual "Platform_Maker" to be \'Apple Inc\' (was \'' + browser['Platform_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-DJ ["Mozilla/5.0 (iPhone; CPU iPhone OS 9.3.5 like Mac OS X) AppleWebKit/602.2.14 (KHTML, like Gecko) Version/10.0 Mobile/14B100 Safari/602.1"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (iPhone; CPU iPhone OS 9.3.5 like Mac OS X) AppleWebKit/602.2.14 (KHTML, like Gecko) Version/10.0 Mobile/14B100 Safari/602.1');

    assert.strictEqual(browser['Comment'], 'Mobile Safari 10.0', 'Expected actual "Comment" to be \'Mobile Safari 10.0\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Safari', 'Expected actual "Browser" to be \'Safari\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Type'], 'Browser', 'Expected actual "Browser_Type" to be \'Browser\' (was \'' + browser['Browser_Type'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Bits'], '32', 'Expected actual "Browser_Bits" to be \'32\' (was \'' + browser['Browser_Bits'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Maker'], 'Apple Inc', 'Expected actual "Browser_Maker" to be \'Apple Inc\' (was \'' + browser['Browser_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Modus'], 'unknown', 'Expected actual "Browser_Modus" to be \'unknown\' (was \'' + browser['Browser_Modus'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '10.0', 'Expected actual "Version" to be \'10.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'iOS', 'Expected actual "Platform" to be \'iOS\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], 'unknown', 'Expected actual "Platform_Version" to be \'unknown\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Description'], 'iPod, iPhone & iPad', 'Expected actual "Platform_Description" to be \'iPod, iPhone & iPad\' (was \'' + browser['Platform_Description'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Bits'], '32', 'Expected actual "Platform_Bits" to be \'32\' (was \'' + browser['Platform_Bits'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Maker'], 'Apple Inc', 'Expected actual "Platform_Maker" to be \'Apple Inc\' (was \'' + browser['Platform_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-DK ["Mozilla/5.0 (iPhone; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4.15.16 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (iPhone; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4.15.16 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1');

    assert.strictEqual(browser['Comment'], 'Mobile Safari 9.0', 'Expected actual "Comment" to be \'Mobile Safari 9.0\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Safari', 'Expected actual "Browser" to be \'Safari\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Type'], 'Browser', 'Expected actual "Browser_Type" to be \'Browser\' (was \'' + browser['Browser_Type'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Bits'], '32', 'Expected actual "Browser_Bits" to be \'32\' (was \'' + browser['Browser_Bits'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Maker'], 'Apple Inc', 'Expected actual "Browser_Maker" to be \'Apple Inc\' (was \'' + browser['Browser_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Modus'], 'unknown', 'Expected actual "Browser_Modus" to be \'unknown\' (was \'' + browser['Browser_Modus'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '9.0', 'Expected actual "Version" to be \'9.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'iOS', 'Expected actual "Platform" to be \'iOS\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], 'unknown', 'Expected actual "Platform_Version" to be \'unknown\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Description'], 'iPod, iPhone & iPad', 'Expected actual "Platform_Description" to be \'iPod, iPhone & iPad\' (was \'' + browser['Platform_Description'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Bits'], '32', 'Expected actual "Platform_Bits" to be \'32\' (was \'' + browser['Platform_Bits'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Maker'], 'Apple Inc', 'Expected actual "Platform_Maker" to be \'Apple Inc\' (was \'' + browser['Platform_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-DL ["Mozilla/5.0 (iPhone; CPU iPhone OS 8_1_1 like Mac OS X) AppleWebKit/600.1.4.12.4 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (iPhone; CPU iPhone OS 8_1_1 like Mac OS X) AppleWebKit/600.1.4.12.4 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1');

    assert.strictEqual(browser['Comment'], 'Mobile Safari 9.0', 'Expected actual "Comment" to be \'Mobile Safari 9.0\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Safari', 'Expected actual "Browser" to be \'Safari\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Type'], 'Browser', 'Expected actual "Browser_Type" to be \'Browser\' (was \'' + browser['Browser_Type'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Bits'], '32', 'Expected actual "Browser_Bits" to be \'32\' (was \'' + browser['Browser_Bits'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Maker'], 'Apple Inc', 'Expected actual "Browser_Maker" to be \'Apple Inc\' (was \'' + browser['Browser_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Modus'], 'unknown', 'Expected actual "Browser_Modus" to be \'unknown\' (was \'' + browser['Browser_Modus'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '9.0', 'Expected actual "Version" to be \'9.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'iOS', 'Expected actual "Platform" to be \'iOS\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], 'unknown', 'Expected actual "Platform_Version" to be \'unknown\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Description'], 'iPod, iPhone & iPad', 'Expected actual "Platform_Description" to be \'iPod, iPhone & iPad\' (was \'' + browser['Platform_Description'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Bits'], '32', 'Expected actual "Platform_Bits" to be \'32\' (was \'' + browser['Platform_Bits'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Maker'], 'Apple Inc', 'Expected actual "Platform_Maker" to be \'Apple Inc\' (was \'' + browser['Platform_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-DM ["Mozilla/5.0 (iPhone; CPU iPhone OS 7_1_2 like Mac OS X) AppleWebKit/537.51.2 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (iPhone; CPU iPhone OS 7_1_2 like Mac OS X) AppleWebKit/537.51.2 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1');

    assert.strictEqual(browser['Comment'], 'Mobile Safari 9.0', 'Expected actual "Comment" to be \'Mobile Safari 9.0\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Safari', 'Expected actual "Browser" to be \'Safari\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Type'], 'Browser', 'Expected actual "Browser_Type" to be \'Browser\' (was \'' + browser['Browser_Type'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Bits'], '32', 'Expected actual "Browser_Bits" to be \'32\' (was \'' + browser['Browser_Bits'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Maker'], 'Apple Inc', 'Expected actual "Browser_Maker" to be \'Apple Inc\' (was \'' + browser['Browser_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Modus'], 'unknown', 'Expected actual "Browser_Modus" to be \'unknown\' (was \'' + browser['Browser_Modus'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '9.0', 'Expected actual "Version" to be \'9.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'iOS', 'Expected actual "Platform" to be \'iOS\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], 'unknown', 'Expected actual "Platform_Version" to be \'unknown\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Description'], 'iPod, iPhone & iPad', 'Expected actual "Platform_Description" to be \'iPod, iPhone & iPad\' (was \'' + browser['Platform_Description'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Bits'], '32', 'Expected actual "Platform_Bits" to be \'32\' (was \'' + browser['Platform_Bits'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Maker'], 'Apple Inc', 'Expected actual "Platform_Maker" to be \'Apple Inc\' (was \'' + browser['Platform_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-DN ["Mozilla/5.0 (iPhone; CPU iPhone OS 7_0_5 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12F70 Safari/600.1.4"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (iPhone; CPU iPhone OS 7_0_5 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12F70 Safari/600.1.4');

    assert.strictEqual(browser['Comment'], 'Mobile Safari 8.0', 'Expected actual "Comment" to be \'Mobile Safari 8.0\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Safari', 'Expected actual "Browser" to be \'Safari\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Type'], 'Browser', 'Expected actual "Browser_Type" to be \'Browser\' (was \'' + browser['Browser_Type'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Bits'], '32', 'Expected actual "Browser_Bits" to be \'32\' (was \'' + browser['Browser_Bits'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Maker'], 'Apple Inc', 'Expected actual "Browser_Maker" to be \'Apple Inc\' (was \'' + browser['Browser_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Modus'], 'unknown', 'Expected actual "Browser_Modus" to be \'unknown\' (was \'' + browser['Browser_Modus'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '8.0', 'Expected actual "Version" to be \'8.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'iOS', 'Expected actual "Platform" to be \'iOS\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], 'unknown', 'Expected actual "Platform_Version" to be \'unknown\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Description'], 'iPod, iPhone & iPad', 'Expected actual "Platform_Description" to be \'iPod, iPhone & iPad\' (was \'' + browser['Platform_Description'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Bits'], '32', 'Expected actual "Platform_Bits" to be \'32\' (was \'' + browser['Platform_Bits'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Maker'], 'Apple Inc', 'Expected actual "Platform_Maker" to be \'Apple Inc\' (was \'' + browser['Platform_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-DO ["Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/603.1.30.1.33 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/603.1.30.1.33 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1');

    assert.strictEqual(browser['Comment'], 'Mobile Safari 9.0', 'Expected actual "Comment" to be \'Mobile Safari 9.0\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Safari', 'Expected actual "Browser" to be \'Safari\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Type'], 'Browser', 'Expected actual "Browser_Type" to be \'Browser\' (was \'' + browser['Browser_Type'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Bits'], '32', 'Expected actual "Browser_Bits" to be \'32\' (was \'' + browser['Browser_Bits'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Maker'], 'Apple Inc', 'Expected actual "Browser_Maker" to be \'Apple Inc\' (was \'' + browser['Browser_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Modus'], 'unknown', 'Expected actual "Browser_Modus" to be \'unknown\' (was \'' + browser['Browser_Modus'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '9.0', 'Expected actual "Version" to be \'9.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'iOS', 'Expected actual "Platform" to be \'iOS\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], '10.0', 'Expected actual "Platform_Version" to be \'10.0\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Description'], 'iPod, iPhone & iPad', 'Expected actual "Platform_Description" to be \'iPod, iPhone & iPad\' (was \'' + browser['Platform_Description'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Bits'], '32', 'Expected actual "Platform_Bits" to be \'32\' (was \'' + browser['Platform_Bits'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Maker'], 'Apple Inc', 'Expected actual "Platform_Maker" to be \'Apple Inc\' (was \'' + browser['Platform_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-DP ["Mozilla/5.0 (iPhone; CPU iPhone OS 10_2 like Mac OS X) AppleWebKit/602.3.12 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (iPhone; CPU iPhone OS 10_2 like Mac OS X) AppleWebKit/602.3.12 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1');

    assert.strictEqual(browser['Comment'], 'Mobile Safari 9.0', 'Expected actual "Comment" to be \'Mobile Safari 9.0\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Safari', 'Expected actual "Browser" to be \'Safari\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Type'], 'Browser', 'Expected actual "Browser_Type" to be \'Browser\' (was \'' + browser['Browser_Type'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Bits'], '32', 'Expected actual "Browser_Bits" to be \'32\' (was \'' + browser['Browser_Bits'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Maker'], 'Apple Inc', 'Expected actual "Browser_Maker" to be \'Apple Inc\' (was \'' + browser['Browser_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Modus'], 'unknown', 'Expected actual "Browser_Modus" to be \'unknown\' (was \'' + browser['Browser_Modus'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '9.0', 'Expected actual "Version" to be \'9.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'iOS', 'Expected actual "Platform" to be \'iOS\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], '10.0', 'Expected actual "Platform_Version" to be \'10.0\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Description'], 'iPod, iPhone & iPad', 'Expected actual "Platform_Description" to be \'iPod, iPhone & iPad\' (was \'' + browser['Platform_Description'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Bits'], '32', 'Expected actual "Platform_Bits" to be \'32\' (was \'' + browser['Platform_Bits'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Maker'], 'Apple Inc', 'Expected actual "Platform_Maker" to be \'Apple Inc\' (was \'' + browser['Platform_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-DQ ["Mozilla/5.0 (iPhone; CPU iPhone OS 10_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13C75 Safari/601.1"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (iPhone; CPU iPhone OS 10_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13C75 Safari/601.1');

    assert.strictEqual(browser['Comment'], 'Mobile Safari 9.0', 'Expected actual "Comment" to be \'Mobile Safari 9.0\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Safari', 'Expected actual "Browser" to be \'Safari\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Type'], 'Browser', 'Expected actual "Browser_Type" to be \'Browser\' (was \'' + browser['Browser_Type'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Bits'], '32', 'Expected actual "Browser_Bits" to be \'32\' (was \'' + browser['Browser_Bits'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Maker'], 'Apple Inc', 'Expected actual "Browser_Maker" to be \'Apple Inc\' (was \'' + browser['Browser_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Modus'], 'unknown', 'Expected actual "Browser_Modus" to be \'unknown\' (was \'' + browser['Browser_Modus'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '9.0', 'Expected actual "Version" to be \'9.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'iOS', 'Expected actual "Platform" to be \'iOS\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], '10.0', 'Expected actual "Platform_Version" to be \'10.0\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Description'], 'iPod, iPhone & iPad', 'Expected actual "Platform_Description" to be \'iPod, iPhone & iPad\' (was \'' + browser['Platform_Description'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Bits'], '32', 'Expected actual "Platform_Bits" to be \'32\' (was \'' + browser['Platform_Bits'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Maker'], 'Apple Inc', 'Expected actual "Platform_Maker" to be \'Apple Inc\' (was \'' + browser['Platform_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-DR ["Mozilla/5.0 (Linux; U; Android 2.3.6; en-US; GT-I9300 Build/MocorDroid2.2.2) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 UCBrowser/10.2.0.535 U3/0.8.0 Mobile Safari/534.30"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Linux; U; Android 2.3.6; en-US; GT-I9300 Build/MocorDroid2.2.2) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 UCBrowser/10.2.0.535 U3/0.8.0 Mobile Safari/534.30');

    assert.strictEqual(browser['Comment'], 'UC Browser 10.2 for Android', 'Expected actual "Comment" to be \'UC Browser 10.2 for Android\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'UC Browser', 'Expected actual "Browser" to be \'UC Browser\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Type'], 'Browser', 'Expected actual "Browser_Type" to be \'Browser\' (was \'' + browser['Browser_Type'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Bits'], '32', 'Expected actual "Browser_Bits" to be \'32\' (was \'' + browser['Browser_Bits'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Maker'], 'UCWeb Inc.', 'Expected actual "Browser_Maker" to be \'UCWeb Inc.\' (was \'' + browser['Browser_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Modus'], 'unknown', 'Expected actual "Browser_Modus" to be \'unknown\' (was \'' + browser['Browser_Modus'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '10.2', 'Expected actual "Version" to be \'10.2\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'Android', 'Expected actual "Platform" to be \'Android\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], '2.3', 'Expected actual "Platform_Version" to be \'2.3\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Description'], 'Android OS', 'Expected actual "Platform_Description" to be \'Android OS\' (was \'' + browser['Platform_Description'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Bits'], '32', 'Expected actual "Platform_Bits" to be \'32\' (was \'' + browser['Platform_Bits'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Maker'], 'Google Inc', 'Expected actual "Platform_Maker" to be \'Google Inc\' (was \'' + browser['Platform_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Name'], 'general Mobile Phone', 'Expected actual "Device_Name" to be \'general Mobile Phone\' (was \'' + browser['Device_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Maker'], 'unknown', 'Expected actual "Device_Maker" to be \'unknown\' (was \'' + browser['Device_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Type'], 'Mobile Phone', 'Expected actual "Device_Type" to be \'Mobile Phone\' (was \'' + browser['Device_Type'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Pointing_Method'], 'touchscreen', 'Expected actual "Device_Pointing_Method" to be \'touchscreen\' (was \'' + browser['Device_Pointing_Method'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Code_Name'], 'general Mobile Phone', 'Expected actual "Device_Code_Name" to be \'general Mobile Phone\' (was \'' + browser['Device_Code_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Brand_Name'], 'unknown', 'Expected actual "Device_Brand_Name" to be \'unknown\' (was \'' + browser['Device_Brand_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Name'], 'U3', 'Expected actual "RenderingEngine_Name" to be \'U3\' (was \'' + browser['RenderingEngine_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown', 'Expected actual "RenderingEngine_Version" to be \'unknown\' (was \'' + browser['RenderingEngine_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Maker'], 'UCWeb Inc.', 'Expected actual "RenderingEngine_Maker" to be \'UCWeb Inc.\' (was \'' + browser['RenderingEngine_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-DS ["Mozilla/5.0 (Linux; Android 4.0.3; GT-I8190 Build/IMM76D) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.102 Mobile Safari/537.36"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Linux; Android 4.0.3; GT-I8190 Build/IMM76D) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.102 Mobile Safari/537.36');

    assert.strictEqual(browser['Comment'], 'Chrome 38.0', 'Expected actual "Comment" to be \'Chrome 38.0\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Chrome', 'Expected actual "Browser" to be \'Chrome\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Type'], 'Browser', 'Expected actual "Browser_Type" to be \'Browser\' (was \'' + browser['Browser_Type'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Bits'], '32', 'Expected actual "Browser_Bits" to be \'32\' (was \'' + browser['Browser_Bits'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Maker'], 'Google Inc', 'Expected actual "Browser_Maker" to be \'Google Inc\' (was \'' + browser['Browser_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Modus'], 'unknown', 'Expected actual "Browser_Modus" to be \'unknown\' (was \'' + browser['Browser_Modus'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '38.0', 'Expected actual "Version" to be \'38.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'Android', 'Expected actual "Platform" to be \'Android\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], '4.0', 'Expected actual "Platform_Version" to be \'4.0\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Description'], 'Android OS', 'Expected actual "Platform_Description" to be \'Android OS\' (was \'' + browser['Platform_Description'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Bits'], '32', 'Expected actual "Platform_Bits" to be \'32\' (was \'' + browser['Platform_Bits'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Maker'], 'Google Inc', 'Expected actual "Platform_Maker" to be \'Google Inc\' (was \'' + browser['Platform_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Name'], 'general Mobile Phone', 'Expected actual "Device_Name" to be \'general Mobile Phone\' (was \'' + browser['Device_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Maker'], 'unknown', 'Expected actual "Device_Maker" to be \'unknown\' (was \'' + browser['Device_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Type'], 'Mobile Phone', 'Expected actual "Device_Type" to be \'Mobile Phone\' (was \'' + browser['Device_Type'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Pointing_Method'], 'touchscreen', 'Expected actual "Device_Pointing_Method" to be \'touchscreen\' (was \'' + browser['Device_Pointing_Method'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Code_Name'], 'general Mobile Phone', 'Expected actual "Device_Code_Name" to be \'general Mobile Phone\' (was \'' + browser['Device_Code_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Brand_Name'], 'unknown', 'Expected actual "Device_Brand_Name" to be \'unknown\' (was \'' + browser['Device_Brand_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Name'], 'Blink', 'Expected actual "RenderingEngine_Name" to be \'Blink\' (was \'' + browser['RenderingEngine_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown', 'Expected actual "RenderingEngine_Version" to be \'unknown\' (was \'' + browser['RenderingEngine_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Maker'], 'Google Inc', 'Expected actual "RenderingEngine_Maker" to be \'Google Inc\' (was \'' + browser['RenderingEngine_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
});
