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
    pattern = pattern.replace('@', '');
    re = new RegExp(pattern, 'i');

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
          browser[property] = browserData[property];
        }

        while (browserData['Parent']) {
          browserData = JSON.parse(browsers[browserData['Parent']]);

          for (var property in browserData) {
            if (!browser[property]) {
              browser[property] = browserData[property];
            }
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
