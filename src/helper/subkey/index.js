'use strict';

/**
 * includes general functions for the work with patterns
 */
class SubKey {
    /**
     * Gets the subkey for the pattern cache file, generated from the given string
     *
     * @param  {string} string
     * @return {string}
     */
    static getPatternCacheSubkey(string) {
        return string.substring(0, 2);
    }

    /**
     * Gets the sub key for the ini parts cache file, generated from the given string
     *
     * @param {string} string
     * @return {string}
     */
    static getIniPartCacheSubKey(string) {
        return string.substring(0, 3);
    }
}

module.exports = SubKey;
