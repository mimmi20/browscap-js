exports.getBrowser = function (userAgent) {
  var patterns = require('./sources/browscap.preprocessed.patterns.json').patterns;

  // Test user agent against each browser regex
  for (var pattern in patterns) {
    if (!patterns.hasOwnProperty(pattern)) {
      continue;
    }

    var re = new RegExp(pattern.replace(/@\^/g, '^').replace(/\$@/g, '$'), 'i');

    if (!re.test(userAgent)) {
      continue;
    }

    var patternData = patterns[pattern];
    var found = false;
    var matches = userAgent.match(re);
    var browsersindex = 0;

    if (matches.length === 1) {
      browsersindex = patternData;
      found = true;
    } else {
      matches.shift();

      var matchString = '@' + matches.join('|');

      if (patternData[matchString]) {
        browsersindex = patternData[matchString];
        found = true;
      }
    }

    if (!found || 0 === browsersindex) {
      continue;
    }

    var browsers = require('./sources/browscap.preprocessed.browsers.json').browsers;

    if (!browsers[browsersindex]) {
      continue;
    }

    var browser = {
      browser_name: userAgent,
      browser_name_regex: pattern.toLowerCase().trim()
    };
    var browserData = JSON.parse(browsers[browsersindex]);

    for (var property in browserData) {
      if (!browserData.hasOwnProperty(property)) {
        continue;
      }

      if (browserData[property] === 'true') {
        browser[property] = true;
      } else if (browserData[property] === 'false') {
        browser[property] = false;
      } else {
        browser[property] = browserData[property];
      }
    }

    var browserParentData = browserData;

    while (browserParentData['Parent']) {
      browserParentData = JSON.parse(browsers[browserParentData['Parent']]);

      for (var propertyParent in browserParentData) {
        if (!browserParentData.hasOwnProperty(propertyParent)) {
          continue;
        }

        if (browser.hasOwnProperty(propertyParent)) {
          continue;
        }

        if (browserParentData[propertyParent] === 'true') {
          browser[propertyParent] = true;
        } else if (browserParentData[propertyParent] === 'false') {
          browser[propertyParent] = false;
        } else {
          browser[propertyParent] = browserParentData[propertyParent];
        }
      }
    }

    if (browser['Parent']) {
      var userAgents = require('./sources/browscap.preprocessed.useragents.json').userAgents;
      browser['Parent'] = userAgents[browser['Parent']];
    }

    return browser;
  }

  // return default
  return {
    "Comment": "Default Browser",
    "Browser": "Default Browser",
    "Browser_Type": "unknown",
    "Browser_Bits": "0",
    "Browser_Maker": "unknown",
    "Browser_Modus": "unknown",
    "Version": "0.0",
    "MajorVer": "0",
    "MinorVer": "0",
    "Platform": "unknown",
    "Platform_Version": "unknown",
    "Platform_Description": "unknown",
    "Platform_Bits": "0",
    "Platform_Maker": "unknown",
    "Alpha": "false",
    "Beta": "false",
    "Win16": "false",
    "Win32": "false",
    "Win64": "false",
    "Frames": "false",
    "IFrames": "false",
    "Tables": "false",
    "Cookies": "false",
    "BackgroundSounds": "false",
    "JavaScript": "false",
    "VBScript": "false",
    "JavaApplets": "false",
    "ActiveXControls": "false",
    "isMobileDevice": "false",
    "isTablet": "false",
    "isSyndicationReader": "false",
    "Crawler": "false",
    "CssVersion": "0",
    "AolVersion": "0",
    "Device_Name": "unknown",
    "Device_Maker": "unknown",
    "Device_Type": "unknown",
    "Device_Pointing_Method": "unknown",
    "Device_Code_Name": "unknown",
    "Device_Brand_Name": "unknown",
    "RenderingEngine_Name": "unknown",
    "RenderingEngine_Version": "unknown",
    "RenderingEngine_Description": "unknown",
    "RenderingEngine_Maker": "unknown"
  };
};
