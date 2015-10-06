/**
 * Copyright (c) 1998-2014 Browser Capabilities Project
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 * @category   Browscap-PHP
 * @package    Parser\Helper
 * @copyright  1998-2014 Browser Capabilities Project
 * @license    http://www.opensource.org/licenses/MIT MIT License
 * @link       https://github.com/browscap/browscap-php/
 * @since      added with version 3.0
 */

var SubKey = require('../subkey');
var subkeyHelper = new SubKey();

var PatternHelper = require('../pattern/helper');
var patternHelper = new PatternHelper();

/**
 * extracts the pattern and the data for theses pattern from the ini content, optimized for PHP 5.5+
 *
 * @category   Browscap-PHP
 * @package    Parser\Helper
 * @author     Christoph Ziegenberg <christoph@ziegenberg.com>
 * @author     Thomas Müller <t_mueller_stolzenhain@yahoo.de>
 * @copyright  Copyright (c) 1998-2014 Browser Capabilities Project
 * @version    3.0
 * @license    http://www.opensource.org/licenses/MIT MIT License
 * @link       https://github.com/browscap/browscap-php/
 */
module.exports = function GetData (cache, quoter) {
    this.cache  = cache;
    this.quoter = quoter;

    /**
     * Gets the settings for a given pattern (method calls itself to
     * get the data from the parent patterns)
     *
     * @param  pattern
     * @param  settings
     * @return array
     */
    this.getSettings = function(pattern, settings) {
        // The pattern has been pre-quoted on generation to speed up the pattern search,
        // but for this check we need the unquoted version
        var unquotedPattern = this.quoter.pregUnQuote(pattern);
//console.log(unquotedPattern);
        // Try to get settings for the pattern
        var addedSettings = this.getIniPart(unquotedPattern);

        // set some additional data
        if ((typeof settings !== 'Array' && typeof settings !== 'object') || settings.length === 0) {
            // The optimization with replaced digits get can now result in setting searches, for which we
            // won't find a result - so only add the pattern information, is settings have been found.
            //
            // If not an empty array will be returned and the calling function can easily check if a pattern
            // has been found.
            if (addedSettings.length > 0) {
                settings['browser_name_regex']   = '/^' + $pattern + '$/';
                settings['browser_name_pattern'] = unquotedPattern;
            }
        }

        // check if parent pattern set, only keep the first one
        var parentPattern = null;
        if (typeof addedSettings['Parent'] !== 'undefined') {
            parentPattern = addedSettings['Parent'];

            if (typeof settings['Parent'] !== 'undefined') {
                delete addedSettings['Parent'];
            }
        }

        // merge settings
        for (var property in addedSettings) {
            if (!addedSettings.hasOwnProperty(property)) {
                continue;
            }
            if (settings.hasOwnProperty(property)) {
                continue;
            }

            settings[property] = addedSettings[property];
        }
        //settings += addedSettings;

        if (parentPattern !== null) {
            return this.getSettings(this.quoter.pregQuote(parentPattern), settings);
        }

        return settings;
    };

    /**
     * Gets the relevant part (array of settings) of the ini file for a given pattern.
     *
     * @param  pattern
     * @return Object
     */
    this.getIniPart = function(pattern) {
        pattern         = pattern.toLowerCase();
        var patternhash = patternHelper.getHashForParts(pattern);
        var subkey      = subkeyHelper.getIniPartCacheSubKey(patternhash);

        if (!this.cache.hasItem('browscap.iniparts.' + subkey, true)) {//console.log('no cache')
            return {};
        }

        var file = this.cache.getItem('browscap.iniparts.' + subkey, true);

        if (!file.success) {//console.log('no sucess')
            return {};
        }

        if ((typeof file.content !== 'Array' && typeof file.content !== 'object') || file.content.length === 0) {//console.log('empty')
            return {};
        }

        for (var i = 0; i < file.content.length; i++) {
            var buffer    = file.content[i];
            var contents  = buffer.split("\t");
            var tmpBuffer = contents.shift();
            //console.log(tmpBuffer, patternhash)
            if (tmpBuffer !== patternhash) {
                continue;
            }
            //console.log(tmpBuffer, patternhash)
            return JSON.parse(contents);
        }

        return {};
    };
};
