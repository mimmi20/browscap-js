'use strict';

const GetData = require('../helper/data');
const SynchronousPromise = require('synchronous-promise').SynchronousPromise;

/**
 * json parser class
 */
class Ini {
    /**
     * @param {PatternHelper} patternHelper
     * @param {GetData} dataHelper
     */
    constructor(patternHelper, dataHelper) {
        this.patternHelper = patternHelper;
        this.dataHelper = dataHelper;
    }

    /**
     * Gets the browser data formatr for the given user agent
     * (or null if no data avaailble, no even the default browser)
     *
     * @param {string} userAgent
     * @return {object|null}
     */
    getBrowser(userAgent) {
        userAgent = userAgent.toLowerCase();

        return this.patternHelper.getPatterns(userAgent).then(
            function _patternListLoopFn(patternList) {
                const _patternListLoop = _patternListLoopFn.bind(this);

                if (patternList.length === 0) {
                    // return default
                    return GetData.getDefaultProperties();
                }

                const patterns = patternList.shift();

                const patternToMatch = new RegExp('^(?:' + patterns.join(')|(?:') + ')$', 'i');

                if (!patternToMatch.test(userAgent)) {
                    return _patternListLoop(patternList);
                }

                return SynchronousPromise.all(
                    patterns
                        .map((patternText) => {
                            const pattern = patternText.replace(new RegExp('\\[\\\\d\\]', 'gi'), '(\\d)');
                            const quotedPattern = new RegExp('^' + pattern + '$', 'i');

                            return [pattern, quotedPattern];
                        })
                        .filter((item) => {
                            const quotedPattern = item[1];
                            return quotedPattern.test(userAgent);
                        })
                        .map((item) => {
                            let pattern = item[0];
                            const quotedPattern = item[1];
                            const matches = userAgent.match(quotedPattern);

                            // Insert the digits back into the pattern, so that we can search the settings for it
                            if (matches.length > 1) {
                                matches.shift();

                                for (let k = 0; k < matches.length; k++) {
                                    const numPos = pattern.indexOf('(\\d)');
                                    const sub = pattern.substr(numPos, 4);
                                    pattern = pattern.replace(sub, matches[k]);
                                }
                            }

                            return this.dataHelper.getSettings(pattern, {});
                        })
                ).then((patternSettings) => {
                    for (let settings of patternSettings) {
                        // Try to get settings - as digits have been replaced to speed up the pattern search,
                        // we won't always find the data in the first step - so check if settings have been found and if not,
                        // search for the next pattern.
                        let hasResult = false;

                        for (let property in settings) {
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
            }.bind(this)
        );
    }
}

module.exports = Ini;
