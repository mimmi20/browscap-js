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

'use strict';

const SubKey        = require('../subkey');
const PatternHelper = require('../pattern/helper');
const Quoter        = require('../quoter');

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
class GetData {
    /**
     * @param {BrowscapCache} cache
     */
    constructor (cache) {
        this.cache  = cache;
    }

    /**
     * Gets the settings for a given pattern (method calls itself to
     * get the data from the parent patterns)
     *
     * @param  {string} pattern
     * @param  {object} settings
     * @return {object}
     */
    getSettings (pattern, settings = {}) {
        if (typeof settings !== 'object') {
            settings = {};
        }

        // The pattern has been pre-quoted on generation to speed up the pattern search,
        // but for this check we need the unquoted version
        const unquotedPattern = Quoter.pregUnQuote(pattern);

        // Try to get settings for the pattern
        let addedSettings = this.getIniPart(unquotedPattern);

        // fallback, if Defaultproperties are empty
        if ('DefaultProperties' === unquotedPattern) {
            const defaultProperties = GetData.getDefaultProperties();

            // merge settings
            addedSettings = Object.assign(defaultProperties, addedSettings);
        }

        // set some additional data
        // The optimization with replaced digits get can now result in setting searches, for which we
        // won't find a result - so only add the pattern information, is settings have been found.
        //
        // If not an empty array will be returned and the calling function can easily check if a pattern
        // has been found.

        if (!Object.keys(settings).length && Object.keys(addedSettings).length) {
            settings['browser_name_regex']   = '/^' + pattern + '$/';
            settings['browser_name_pattern'] = unquotedPattern;
        }

        // check if parent pattern set, only keep the first one
        let parentPattern = null;
        if (typeof addedSettings['Parent'] !== 'undefined') {
            parentPattern = addedSettings['Parent'];

            if (typeof settings['Parent'] !== 'undefined') {
                delete addedSettings['Parent'];
            }
        }

        // merge settings
        settings = Object.assign(addedSettings, settings);

        if (parentPattern !== null) {
            return this.getSettings(Quoter.pregQuote(parentPattern), settings);
        }

        return settings;
    };

    /**
     * Gets the relevant part (array of settings) of the ini file for a given pattern.
     *
     * @param  {string} pattern
     * @return {object}
     */
    getIniPart (pattern) {
        pattern         = pattern.toLowerCase();

        const patternhash = PatternHelper.getHashForParts(pattern);
        const subkey      = SubKey.getIniPartCacheSubKey(patternhash);

        const file = this.cache.getItem('browscap.iniparts.' + subkey, true);

        if (!file.success) {
            return {};
        }

        if ((!Array.isArray(file.content) && typeof file.content !== 'object') || file.content.length === 0) {
            return {};
        }

        for (const buffer of file.content) {
            const contents  = buffer.split("\t");
            const tmpBuffer = contents.shift();

            if (tmpBuffer !== patternhash) {
                continue;
            }

            return JSON.parse(contents);
        }

        return {};
    };

    /**
     * @return {object}
     */
    static getDefaultProperties () {
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
}

module.exports = GetData;
