'use strict';

const SubKey = require('../subkey');
const PatternHelper = require('../pattern/helper');
const Quoter = require('../quoter');
const SynchronousPromise = require('synchronous-promise').SynchronousPromise;

/**
 * extracts the pattern and the data for theses pattern from the ini content
 */
class GetData {
    /**
     *
     * @param {BrowscapCache} cache
     */
    constructor(cache) {
        this.cache = cache;
    }

    /**
     * Gets the settings for a given pattern (method calls itself to
     * get the data from the parent patterns)
     *
     * @param {string} pattern
     * @param {object|array} settings
     * @return {array}
     */
    getSettings(pattern, settings) {
        // The pattern has been pre-quoted on generation to speed up the pattern search,
        // but for this check we need the unquoted version
        const unquotedPattern = Quoter.pregUnQuote(pattern);

        if (!Array.isArray(settings) && typeof settings !== 'object') {
            settings = {};
        }

        // Try to get settings for the pattern
        return this.getIniPart(unquotedPattern).then((addedSettings) => {
            // fallback, if Defaultproperties are empty
            if ('DefaultProperties' === unquotedPattern) {
                let defaultProperties = GetData.getDefaultProperties();

                // merge settings
                for (let property in defaultProperties) {
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
            let settingsLength = false;
            let addedLength = false;

            for (let property in settings) {
                settingsLength = true;
                break;
            }

            for (let property in addedSettings) {
                addedLength = true;
                break;
            }

            if (!settingsLength && addedLength) {
                settings['browser_name_regex'] = '/^' + pattern + '$/';
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
            for (let property in addedSettings) {
                if (!addedSettings.hasOwnProperty(property)) {
                    continue;
                }
                if (settings.hasOwnProperty(property)) {
                    continue;
                }

                settings[property] = addedSettings[property];
            }

            if (parentPattern !== null) {
                return this.getSettings(Quoter.pregQuote(parentPattern), settings);
            }

            return settings;
        });
    }

    /**
     * Gets the relevant part (array of settings) of the ini file for a given pattern.
     *
     * @param  {string} pattern
     * @return {object}
     */
    getIniPart(pattern) {
        pattern = pattern.toLowerCase();

        const patternhash = PatternHelper.getHashForParts(pattern);
        const subkey = SubKey.getIniPartCacheSubKey(patternhash);

        return SynchronousPromise.resolve(this.cache.getItem('browscap.iniparts.' + subkey, true)).then((file) => {
            if (!file.success) {
                return {};
            }

            if ((!Array.isArray(file.content) && typeof file.content !== 'object') || file.content.length === 0) {
                return {};
            }

            for (let i = 0; i < file.content.length; i++) {
                const buffer = file.content[i];
                const contents = buffer.split("\t");
                const tmpBuffer = contents.shift();

                if (tmpBuffer !== patternhash) {
                    continue;
                }

                return JSON.parse(contents);
            }

            return {};
        });
    }

    /**
     * @return {object}
     */
    static getDefaultProperties() {
        return {
            Comment: 'Default Browser',
            Browser: 'Default Browser',
            Browser_Type: 'unknown',
            Browser_Bits: '0',
            Browser_Maker: 'unknown',
            Browser_Modus: 'unknown',
            Version: '0.0',
            MajorVer: '0',
            MinorVer: '0',
            Platform: 'unknown',
            Platform_Version: 'unknown',
            Platform_Description: 'unknown',
            Platform_Bits: '0',
            Platform_Maker: 'unknown',
            Alpha: false,
            Beta: false,
            Win16: false,
            Win32: false,
            Win64: false,
            Frames: false,
            IFrames: false,
            Tables: false,
            Cookies: false,
            BackgroundSounds: false,
            JavaScript: false,
            VBScript: false,
            JavaApplets: false,
            ActiveXControls: false,
            isMobileDevice: false,
            isTablet: false,
            isSyndicationReader: false,
            Crawler: false,
            isFake: false,
            isAnonymized: false,
            isModified: false,
            CssVersion: '0',
            AolVersion: '0',
            Device_Name: 'unknown',
            Device_Maker: 'unknown',
            Device_Type: 'unknown',
            Device_Pointing_Method: 'unknown',
            Device_Code_Name: 'unknown',
            Device_Brand_Name: 'unknown',
            RenderingEngine_Name: 'unknown',
            RenderingEngine_Version: 'unknown',
            RenderingEngine_Description: 'unknown',
            RenderingEngine_Maker: 'unknown',
        };
    }
}

module.exports = GetData;
