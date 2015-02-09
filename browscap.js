var jsonfile = './browscap.json';

exports.setJson = function (filename) {
  jsonfile = filename;
};

exports.getBrowser = function (userAgent) {
  var patterns, re, patternReplaced;

  patterns = require(jsonfile);

  // Test user agent against each browser regex
  for (var pattern in patterns) {
    if (!patterns.hasOwnProperty(pattern)) {
      continue;
    }

    if ('GJK_Browscap_Version' === pattern || 'comments' === pattern) {
      continue;
    }

    patternReplaced = pattern.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|\@]/g, "\\$&").replace(/\\\*/g, '.*').replace(/\\\?/g, '.');
    re = new RegExp('^' + patternReplaced + '$', 'i');

    if (re.test(userAgent)) {
      var browser = {
        browser_name: userAgent,
        browser_name_regex: pattern.toLowerCase().trim()
      };
      var browserData = JSON.parse(patterns[pattern]);

      for (var property in browserData) {
        if (!browserData.hasOwnProperty(property)) {
          continue;
        }

        browser[property] = browserData[property];
      }

      var browserParentData = browserData;

      while (browserParentData['Parent']) {
        browserParentData = JSON.parse(patterns[browserParentData['Parent']]);

        for (var propertyParent in browserParentData) {
          if (!browserParentData.hasOwnProperty(propertyParent)) {
            continue;
          }

          if (browser.hasOwnProperty(propertyParent)) {
            continue;
          }

          browser[propertyParent] = browserParentData[propertyParent];
        }
      }

      return browser;
    }
  }

  // return default
  return {
    Comment:"Default Browser",
    Browser:"Default Browser",
    Version:"0.0",
    MajorVer:"0",
    MinorVer:"0",
    Platform:"unknown",
    Platform_Version:"unknown",
    Alpha:false,
    Beta:false,
    Win16:false,
    Win32:false,
    Win64:false,
    Frames:false,
    IFrames:false,
    Tables:false,
    Cookies:false,
    BackgroundSounds:false,
    JavaScript:false,
    VBScript:false,
    JavaApplets:false,
    ActiveXControls:false,
    isMobileDevice:false,
    isTablet:false,
    isSyndicationReader:false,
    Crawler:false,
    CssVersion:"0",
    AolVersion:"0"
  };
};
