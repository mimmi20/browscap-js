/**
 * Copyright (c) 1998-2015 Browser Capabilities Project
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
 * @category   browscap-js
 * @package    helper
 * @copyright  1998-2015 Browser Capabilities Project
 * @license    http://www.opensource.org/licenses/MIT MIT License
 * @link       https://github.com/mimmi20/browscap-js/
 */

"use strict";
// Override `Promise` with `SynchronousPromise` in NodeJS in order to provide
// backward-compatiblity with existing code that expects us to return a
// synchronous result after doing synchronous I/O
if (typeof(process) === 'object' && typeof(process.versions) === 'object' && process.versions.node) {
    var nodejs_only = "";
    global.Promise = require(nodejs_only + "synchronous-promise").SynchronousPromise;
}

var SubKey = require('../subkey');
var subkeyHelper = new SubKey();

var PatternHelper = require('../pattern/helper');
var patternHelper = new PatternHelper();

/**
 * extracts the pattern and the data for theses pattern from the ini content, optimized for PHP 5.5+
 *
 * @category   browscap-js
 * @package    helper
 * @author     Thomas Müller <mimmi20@live.de>
 * @copyright  Copyright (c) 1998-2015 Browser Capabilities Project
 * @license    http://www.opensource.org/licenses/MIT MIT License
 * @link       https://github.com/mimmi20/browscap-js/
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
    this.getSettings = function getSettings (pattern, settings) {
        // The pattern has been pre-quoted on generation to speed up the pattern search,
        // but for this check we need the unquoted version
        var unquotedPattern = this.quoter.pregUnQuote(pattern);

        if (typeof settings !== 'Array' && typeof settings !== 'object') {
            settings = {};
        }

        // Try to get settings for the pattern
        return this.getIniPart(unquotedPattern).then((addedSettings) => {
            // fallback, if Defaultproperties are empty
            if ('DefaultProperties' === unquotedPattern) {
                var defaultProperties = this.getDefaultProperties();

                // merge settings
                for (var property in defaultProperties) {
                    if (!defaultProperties.hasOwnProperty(property)) {
                        continue;
                    }
                    if (addedSettings.hasOwnProperty(property)) {
                        continue;
                    }

                    addedSettings[property] = defaultProperties[property];
                }
            }

            // set some additional data
            // The optimization with replaced digits get can now result in setting searches, for which we
            // won't find a result - so only add the pattern information, is settings have been found.
            //
            // If not an empty array will be returned and the calling function can easily check if a pattern
            // has been found.
            var settingsLength = false;
            var addedLength    = false;

            for (var property in settings) {
                settingsLength = true;
                break;
            }

            for (var property in addedSettings) {
                addedLength = true;
                break;
            }

            if (!settingsLength && addedLength) {
                settings['browser_name_regex']   = '/^' + pattern + '$/';
                settings['browser_name_pattern'] = unquotedPattern;
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
        });
    };

    /**
     * Gets the relevant part (array of settings) of the ini file for a given pattern.
     *
     * @param  pattern
     * @return Object
     */
    this.getIniPart = function getIniPart (pattern) {
        pattern         = pattern.toLowerCase();
        var patternhash = patternHelper.getHashForParts(pattern);
        var subkey      = subkeyHelper.getIniPartCacheSubKey(patternhash);

        return Promise.resolve(this.cache.getItem('browscap.iniparts.' + subkey, true)).then((file) => {
            if (!file.success) {
                return {};
            }

            if ((typeof file.content !== 'Array' && typeof file.content !== 'object') || file.content.length === 0) {
                return {};
            }

            for (var i = 0; i < file.content.length; i++) {
                var buffer    = file.content[i];
                var contents  = buffer.split("\t");
                var tmpBuffer = contents.shift();

                if (tmpBuffer !== patternhash) {
                    continue;
                }

                return JSON.parse(contents);
            }

            return {};
        });
    };

    /**
     * @return Object
     */
    this.getDefaultProperties = function getDefaultProperties () {
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
            "Alpha": false,
            "Beta": false,
            "Win16": false,
            "Win32": false,
            "Win64": false,
            "Frames": false,
            "IFrames": false,
            "Tables": false,
            "Cookies": false,
            "BackgroundSounds": false,
            "JavaScript": false,
            "VBScript": false,
            "JavaApplets": false,
            "ActiveXControls": false,
            "isMobileDevice": false,
            "isTablet": false,
            "isSyndicationReader": false,
            "Crawler": false,
            "isFake": false,
            "isAnonymized": false,
            "isModified": false,
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
};
