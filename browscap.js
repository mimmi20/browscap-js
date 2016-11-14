"use strict";

module.exports = function Browscap (cacheDir) {
  if (typeof cacheDir === 'undefined') {
    cacheDir = __dirname + '/node_modules/browscap-json-cache-files/sources/';
  }

  this.cacheDir = cacheDir;

  /**
   * parses the given user agent to get the information about the browser
   *
   * if no user agent is given, it uses {@see \BrowscapPHP\Helper\Support} to get it
   *
   * @param userAgent the user agent string
   */
  this.getBrowser = function(userAgent) {
    var Ini           = require('./parser');
    var Quoter        = require('./helper/quoter');
    var quoter        = new Quoter();
    var GetPattern    = require('./helper/pattern');
    var BrowscapCache = require('browscap-js-cache');
    var cache         = new BrowscapCache(this.cacheDir);
    var GetData       = require('./helper/data');
    var patternHelper = new GetPattern(cache);
    var dataHelper    = new GetData(cache, quoter);

    var parser = new Ini(patternHelper, dataHelper);

    return parser.getBrowser(userAgent);
  };
};
