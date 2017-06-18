"use strict";

var assert = require('assert'),
    Browscap = require('../browscap.js'),
    browscap = new Browscap(),
    browser;

suite('checking for issue 000-invalid-versions.', function () {
  test('issue-000-invalid-versions-A ["Mozilla/5.0 (Windows; U; Win98; bg; rv:1.9.0.19) Gecko/20090624 Firefox/3.1b3"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Windows; U; Win98; bg; rv:1.9.0.19) Gecko/20090624 Firefox/3.1b3');

    assert.strictEqual(browser['Comment'], 'Firefox Generic', 'Expected actual "Comment" to be \'Firefox Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Firefox', 'Expected actual "Browser" to be \'Firefox\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['MajorVer'], '0', 'Expected actual "MajorVer" to be \'0\' (was \'' + browser['MajorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['MinorVer'], '0', 'Expected actual "MinorVer" to be \'0\' (was \'' + browser['MinorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
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
    assert.strictEqual(browser['MajorVer'], '0', 'Expected actual "MajorVer" to be \'0\' (was \'' + browser['MajorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['MinorVer'], '0', 'Expected actual "MinorVer" to be \'0\' (was \'' + browser['MinorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
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
    assert.strictEqual(browser['MajorVer'], '0', 'Expected actual "MajorVer" to be \'0\' (was \'' + browser['MajorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['MinorVer'], '0', 'Expected actual "MinorVer" to be \'0\' (was \'' + browser['MinorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
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
    assert.strictEqual(browser['MajorVer'], '0', 'Expected actual "MajorVer" to be \'0\' (was \'' + browser['MajorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['MinorVer'], '0', 'Expected actual "MinorVer" to be \'0\' (was \'' + browser['MinorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
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
    assert.strictEqual(browser['MajorVer'], '0', 'Expected actual "MajorVer" to be \'0\' (was \'' + browser['MajorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['MinorVer'], '0', 'Expected actual "MinorVer" to be \'0\' (was \'' + browser['MinorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
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
    assert.strictEqual(browser['MajorVer'], '0', 'Expected actual "MajorVer" to be \'0\' (was \'' + browser['MajorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['MinorVer'], '0', 'Expected actual "MinorVer" to be \'0\' (was \'' + browser['MinorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
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
    assert.strictEqual(browser['MajorVer'], '0', 'Expected actual "MajorVer" to be \'0\' (was \'' + browser['MajorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['MinorVer'], '0', 'Expected actual "MinorVer" to be \'0\' (was \'' + browser['MinorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
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
    assert.strictEqual(browser['MajorVer'], '0', 'Expected actual "MajorVer" to be \'0\' (was \'' + browser['MajorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['MinorVer'], '0', 'Expected actual "MinorVer" to be \'0\' (was \'' + browser['MinorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
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
    assert.strictEqual(browser['MajorVer'], '0', 'Expected actual "MajorVer" to be \'0\' (was \'' + browser['MajorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['MinorVer'], '0', 'Expected actual "MinorVer" to be \'0\' (was \'' + browser['MinorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
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
    assert.strictEqual(browser['MajorVer'], '0', 'Expected actual "MajorVer" to be \'0\' (was \'' + browser['MajorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['MinorVer'], '0', 'Expected actual "MinorVer" to be \'0\' (was \'' + browser['MinorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
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
    assert.strictEqual(browser['MajorVer'], '0', 'Expected actual "MajorVer" to be \'0\' (was \'' + browser['MajorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['MinorVer'], '0', 'Expected actual "MinorVer" to be \'0\' (was \'' + browser['MinorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
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
    assert.strictEqual(browser['MajorVer'], '0', 'Expected actual "MajorVer" to be \'0\' (was \'' + browser['MajorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['MinorVer'], '0', 'Expected actual "MinorVer" to be \'0\' (was \'' + browser['MinorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
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
    assert.strictEqual(browser['MajorVer'], '0', 'Expected actual "MajorVer" to be \'0\' (was \'' + browser['MajorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['MinorVer'], '0', 'Expected actual "MinorVer" to be \'0\' (was \'' + browser['MinorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
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
    assert.strictEqual(browser['MajorVer'], '0', 'Expected actual "MajorVer" to be \'0\' (was \'' + browser['MajorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['MinorVer'], '0', 'Expected actual "MinorVer" to be \'0\' (was \'' + browser['MinorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
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
    assert.strictEqual(browser['MajorVer'], '0', 'Expected actual "MajorVer" to be \'0\' (was \'' + browser['MajorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['MinorVer'], '0', 'Expected actual "MinorVer" to be \'0\' (was \'' + browser['MinorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
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
    assert.strictEqual(browser['MajorVer'], '0', 'Expected actual "MajorVer" to be \'0\' (was \'' + browser['MajorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['MinorVer'], '0', 'Expected actual "MinorVer" to be \'0\' (was \'' + browser['MinorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
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
    assert.strictEqual(browser['MajorVer'], '0', 'Expected actual "MajorVer" to be \'0\' (was \'' + browser['MajorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['MinorVer'], '0', 'Expected actual "MinorVer" to be \'0\' (was \'' + browser['MinorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
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
    assert.strictEqual(browser['MajorVer'], '0', 'Expected actual "MajorVer" to be \'0\' (was \'' + browser['MajorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['MinorVer'], '0', 'Expected actual "MinorVer" to be \'0\' (was \'' + browser['MinorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
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
    assert.strictEqual(browser['MajorVer'], '0', 'Expected actual "MajorVer" to be \'0\' (was \'' + browser['MajorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['MinorVer'], '0', 'Expected actual "MinorVer" to be \'0\' (was \'' + browser['MinorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
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
    assert.strictEqual(browser['MajorVer'], '0', 'Expected actual "MajorVer" to be \'0\' (was \'' + browser['MajorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['MinorVer'], '0', 'Expected actual "MinorVer" to be \'0\' (was \'' + browser['MinorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
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
    assert.strictEqual(browser['MajorVer'], '0', 'Expected actual "MajorVer" to be \'0\' (was \'' + browser['MajorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['MinorVer'], '0', 'Expected actual "MinorVer" to be \'0\' (was \'' + browser['MinorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
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
    assert.strictEqual(browser['MajorVer'], '0', 'Expected actual "MajorVer" to be \'0\' (was \'' + browser['MajorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['MinorVer'], '0', 'Expected actual "MinorVer" to be \'0\' (was \'' + browser['MinorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
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
    assert.strictEqual(browser['MajorVer'], '0', 'Expected actual "MajorVer" to be \'0\' (was \'' + browser['MajorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['MinorVer'], '0', 'Expected actual "MinorVer" to be \'0\' (was \'' + browser['MinorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
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
    assert.strictEqual(browser['MajorVer'], '0', 'Expected actual "MajorVer" to be \'0\' (was \'' + browser['MajorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['MinorVer'], '0', 'Expected actual "MinorVer" to be \'0\' (was \'' + browser['MinorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
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
    assert.strictEqual(browser['MajorVer'], '0', 'Expected actual "MajorVer" to be \'0\' (was \'' + browser['MajorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['MinorVer'], '0', 'Expected actual "MinorVer" to be \'0\' (was \'' + browser['MinorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
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
    assert.strictEqual(browser['MajorVer'], '0', 'Expected actual "MajorVer" to be \'0\' (was \'' + browser['MajorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['MinorVer'], '0', 'Expected actual "MinorVer" to be \'0\' (was \'' + browser['MinorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
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
    assert.strictEqual(browser['MajorVer'], '0', 'Expected actual "MajorVer" to be \'0\' (was \'' + browser['MajorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['MinorVer'], '0', 'Expected actual "MinorVer" to be \'0\' (was \'' + browser['MinorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
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
    assert.strictEqual(browser['MajorVer'], '0', 'Expected actual "MajorVer" to be \'0\' (was \'' + browser['MajorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['MinorVer'], '0', 'Expected actual "MinorVer" to be \'0\' (was \'' + browser['MinorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
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
    assert.strictEqual(browser['MajorVer'], '0', 'Expected actual "MajorVer" to be \'0\' (was \'' + browser['MajorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['MinorVer'], '0', 'Expected actual "MinorVer" to be \'0\' (was \'' + browser['MinorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
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
    assert.strictEqual(browser['MajorVer'], '0', 'Expected actual "MajorVer" to be \'0\' (was \'' + browser['MajorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['MinorVer'], '0', 'Expected actual "MinorVer" to be \'0\' (was \'' + browser['MinorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
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
    assert.strictEqual(browser['MajorVer'], '0', 'Expected actual "MajorVer" to be \'0\' (was \'' + browser['MajorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['MinorVer'], '0', 'Expected actual "MinorVer" to be \'0\' (was \'' + browser['MinorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
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
    assert.strictEqual(browser['MajorVer'], '0', 'Expected actual "MajorVer" to be \'0\' (was \'' + browser['MajorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['MinorVer'], '0', 'Expected actual "MinorVer" to be \'0\' (was \'' + browser['MinorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
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
    assert.strictEqual(browser['MajorVer'], '0', 'Expected actual "MajorVer" to be \'0\' (was \'' + browser['MajorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['MinorVer'], '0', 'Expected actual "MinorVer" to be \'0\' (was \'' + browser['MinorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'Linux', 'Expected actual "Platform" to be \'Linux\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], 'unknown', 'Expected actual "Platform_Version" to be \'unknown\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Description'], 'Linux', 'Expected actual "Platform_Description" to be \'Linux\' (was \'' + browser['Platform_Description'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Name'], 'Gecko', 'Expected actual "RenderingEngine_Name" to be \'Gecko\' (was \'' + browser['RenderingEngine_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown', 'Expected actual "RenderingEngine_Version" to be \'unknown\' (was \'' + browser['RenderingEngine_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-000-invalid-versions-GH ["Mozilla/5.0 (Windows NT 4.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2049.0 Safari/537.36"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Windows NT 4.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2049.0 Safari/537.36');

    assert.strictEqual(browser['Comment'], 'Chrome Generic', 'Expected actual "Comment" to be \'Chrome Generic\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Chrome', 'Expected actual "Browser" to be \'Chrome\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['MajorVer'], '0', 'Expected actual "MajorVer" to be \'0\' (was \'' + browser['MajorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['MinorVer'], '0', 'Expected actual "MinorVer" to be \'0\' (was \'' + browser['MinorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'Win32', 'Expected actual "Platform" to be \'Win32\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], 'unknown', 'Expected actual "Platform_Version" to be \'unknown\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Description'], 'Windows', 'Expected actual "Platform_Description" to be \'Windows\' (was \'' + browser['Platform_Description'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Name'], 'Blink', 'Expected actual "RenderingEngine_Name" to be \'Blink\' (was \'' + browser['RenderingEngine_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown', 'Expected actual "RenderingEngine_Version" to be \'unknown\' (was \'' + browser['RenderingEngine_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Maker'], 'Google Inc', 'Expected actual "RenderingEngine_Maker" to be \'Google Inc\' (was \'' + browser['RenderingEngine_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
});
