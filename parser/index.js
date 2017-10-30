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
 * @package    parser
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

/**
 * json parser class
 *
 * @category   browscap-js
 * @package    parser
 * @author     Thomas Müller <mimmi20@live.de>
 * @copyright  Copyright (c) 1998-2015 Browser Capabilities Project
 * @license    http://www.opensource.org/licenses/MIT MIT License
 * @link       https://github.com/mimmi20/browscap-js/
 */
module.exports = function Ini (patternHelper, dataHelper) {
    this.patternHelper = patternHelper;
    this.dataHelper    = dataHelper;

    /**
     * Gets the browser data formatr for the given user agent
     * (or null if no data avaailble, no even the default browser)
     *
     * @param  userAgent
     * @return Object|null
     */
    this.getBrowser = function getBrowser (userAgent) {
        userAgent = userAgent.toLowerCase();

        return this.patternHelper.getPatterns(userAgent).then(function _patternListLoopFn(patternList) {
            var _patternListLoop = _patternListLoopFn.bind(this);

            if(patternList.length > 0) {
                var patterns = patternList.shift();

                var patternToMatch = new RegExp('^(?:' + patterns.join(')|(?:') + ')$', 'i');

                if (!patternToMatch.test(userAgent)) {
                    return _patternListLoop(patternList);
                }

                return Promise.all(patterns.map((patternText) => {
                    var pattern       = patternText.replace(new RegExp('\\[\\\\d\\]', 'gi'), '(\\d)');
                    var quotedPattern = new RegExp('^' + pattern + '$', 'i');

                    return [pattern, quotedPattern];
                }).filter((item) => {
                    var pattern = item[0], quotedPattern = item[1];
                    return quotedPattern.test(userAgent);
                }).map((item) => {
                    var pattern = item[0], quotedPattern = item[1];
                    var matches = userAgent.match(quotedPattern);

                    // Insert the digits back into the pattern, so that we can search the settings for it
                    if (matches.length > 1) {
                        matches.shift();

                        for (var k = 0; k < matches.length; k++){
                            var numPos = pattern.indexOf('(\\d)');
                            var sub    = pattern.substr(numPos, 4);
                            pattern    = pattern.replace(sub, matches[k]);
                        }
                    }

                    return this.dataHelper.getSettings(pattern, {});
                })).then((patternSettings) => {
                    for (var settings of patternSettings) {
                        // Try to get settings - as digits have been replaced to speed up the pattern search,
                        // we won't always find the data in the first step - so check if settings have been found and if not,
                        // search for the next pattern.
                        var hasResult = false;

                        for (var property in settings) {
                            if (settings.hasOwnProperty(property)) {
                                hasResult = true;
                                break;
                            }
                        }
                        if (hasResult) {
                            return settings;
                        }
                    }

                    return _patternListLoop(patternList);
                });
            } else {
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
            }
        }.bind(this));
    };
};
