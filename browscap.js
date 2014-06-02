var jsonfile = './browscap.preprocessed.json';

exports.setJson = function (filename) {
  jsonfile = filename;
};

exports.getBrowser = function (userAgent) {
  var browsers, patterns, re, key, found, matches, browsersindex;

  patterns = require(jsonfile).patterns;
  browsers = require(jsonfile).browsers;

  // Test user agent against each browser regex
  for (var pattern in patterns) {
    if (!patterns.hasOwnProperty(pattern)) {
      continue;
    }

    re = new RegExp(pattern.replace(/@/g, ''), 'i');

    if (re.test(userAgent)) {
      key = patterns[pattern];
      found = false;
      matches = userAgent.match(re);

      if (matches.length === 1) {
        browsersindex = key;
        found = true;
      } else {
        var matchString = '@' + matches.join('|');

        if (key[matchString]) {
          browsersindex = key[matchString];
          found = true;
        }
      }

      if (found && browsers[browsersindex]) {
        var browser = [userAgent, pattern.toLowerCase().trim()];
        var browserData = JSON.parse(browsers[browsersindex]);

        for (var property in browserData) {
          if (!browserData.hasOwnProperty(property)) {
            continue;
          }

          browser[property] = browserData[property];
        }

        while (browserData['Parent']) {
          var browserParentData = JSON.parse(browsers[browserData['Parent']]);

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

        if (browser['Parent']) {
          var userAgents = require(jsonfile).userAgents;
          browser['Parent'] = userAgents[browser['Parent']];
        }

        return browser;
      }
    }
  }

  return null;
};
