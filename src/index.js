'use strict';

const Ini = require('./parser');
const Quoter = require('./helper/quoter');
const GetPattern = require('./helper/pattern');
const BrowscapCache = require('browscap-js-cache');
const GetData = require('./helper/data');

class Browscap {
    /**
     * @param {string} cacheDir
     */
    constructor(cacheDir) {
        if (typeof cacheDir === 'undefined') {
            cacheDir = require('path').dirname(require.resolve('browscap-json-cache-files')) + '/sources/';
        }

        this.cacheDir = cacheDir;
    }

    /**
     * parses the given user agent to get the information about the browser
     *
     * if no user agent is given, it uses {@see \BrowscapPHP\Helper\Support} to get it
     *
     * @param {string} userAgent the user agent string
     * @return {object|null}
     */
    getBrowser(userAgent) {
        const cache = new BrowscapCache(this.cacheDir);
        const patternHelper = new GetPattern(cache);
        const dataHelper = new GetData(cache);

        const parser = new Ini(patternHelper, dataHelper);

        return parser.getBrowser(userAgent);
    };
}

module.exports = Browscap;