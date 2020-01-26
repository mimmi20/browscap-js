'use strict';

const md5 = require('md5');

/**
 * includes general functions for the work with patterns
 */
class PatternHelper {
    /**
     * Gets a hash or an array of hashes from the first characters of a pattern/user agent, that can
     * be used for a fast comparison, by comparing only the hashes, without having to match the
     * complete pattern against the user agent.
     *
     * With the variants options, all variants from the maximum number of pattern characters to one
     * character will be returned. This is required in some cases, the a placeholder is used very
     * early in the pattern.
     *
     * Example:
     *
     * Pattern: "Mozilla/* (Nintendo 3DS; *) Version/*"
     * User agent: "Mozilla/5.0 (Nintendo 3DS; U; ; en) Version/1.7567.US"
     *
     * In this case the has for the pattern is created for "Mozilla/" while the pattern
     * for the hash for user agent is created for "Mozilla/5.0". The variants option
     * results in an array with hashes for "Mozilla/5.0", "Mozilla/5.", "Mozilla/5",
     * "Mozilla/" ... "M", so that the pattern hash is included.
     *
     * @return {string|Array}
     * @param {string} pattern
     * @param {boolean} variants
     */
    static getHashForPattern(pattern, variants = false) {
        const regex = new RegExp('^([^\\.\\*\\?\\s\\r\\n\\\\]+).*$');
        pattern = pattern.substring(0, 32);

        if (typeof variants === 'undefined') {
            variants = false;
        }

        if (!regex.test(pattern)) {
            return variants ? [md5('')] : md5('');
        }

        const matches = pattern.match(regex);

        if (typeof matches[1] === 'undefined') {
            return variants ? [md5('')] : md5('');
        }

        let string = matches[1];

        if (variants) {
            let patternStarts = [];

            for (let i = string.length; i >= 1; i--) {
                string = string.substring(0, i);
                patternStarts.push(md5(string));
            }

            // Add empty pattern start to include patterns that start with "*",
            // e.g. "*FAST Enterprise Crawler*"
            patternStarts.push(md5(''));

            // add special key to fall back to the default browser
            patternStarts.push('zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz');

            return patternStarts;
        }

        return md5(string);
    }

    /**
     * returns a hash for one pattern
     *
     * @param {string} pattern
     *
     * @return {string}
     */
    static getHashForParts(pattern) {
        return md5(pattern);
    }

    /**
     * Gets the minimum length of the patern (used in the getPatterns() method to
     * check against the user agent length)
     *
     * @param  {string} pattern
     * @return {int}
     */
    static getPatternLength(pattern) {
        return pattern.replace('*', '').length;
    }
}

module.exports = PatternHelper;
