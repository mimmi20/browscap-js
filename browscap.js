var jsonfile = './browscap.preprocessed.json';

exports.setJson = function (filename) {
  jsonfile = filename;
};

exports.getBrowser = function (userAgent) {
  patterns = require(jsonfile).patterns;
  browsers = require(jsonfile).browsers;

  // Test user agent against each browser regex
  for (var pattern in patterns) {
    pattern = pattern.replace('@', '');
    re = new RegExp(pattern, 'i');

    if (re.test(userAgent)) {
      key     = patterns[pattern];
      found   = false;
      matches = userAgent.match(re);

      if (matches.length === 1) {
        browsersindex = key;
        found = true;
      } else {
        matchString = '@' + matches.join('|');

        if (key[matchString]) {
          browsersindex = key[matchString];
          found = true;
        }
      }

      if (found && browsers[browsersindex]) {
        browser = [userAgent, pattern.toLowerCase().trim()];
        browserData = JSON.parse(browsers[browsersindex]);

        for (var property in browserData) {
          browser[property] = browserData[property];
        }

        while (browserData['3']) {
          browserData = JSON.parse(browsers[browserData[3]]);

          for (var property in browserData) {
            if (!browser[property]) {
              browser[property] = browserData[property];
            }
          }
        }

        if (browser['3']) {
          userAgents = require(jsonfile).userAgents;
          browser['3'] = userAgents[browser['3']];
        }

        ua = {};
        properties = require(jsonfile).properties;

        for (var propertyNumber in browser) {
          propertyName = properties[propertyNumber];
          ua[propertyName] = browser[propertyNumber];
        }

        return ua;
      }
    }
  }

  return null;
};
