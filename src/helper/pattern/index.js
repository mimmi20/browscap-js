'use strict';

const PatternHelper = require('./helper');
const SubKey = require('../subkey');
const SynchronousPromise = require('synchronous-promise').SynchronousPromise;

/**
 * extracts the pattern and the data for theses pattern from the ini content
 */
class GetPattern {
    /**
     * @param {BrowscapCache} cache
     */
    constructor(cache) {
        this.cache = cache;
    }

    /**
     * Gets some possible patterns that have to be matched against the user agent. With the given
     * user agent string, we can optimize the search for potential patterns:
     * - We check the first characters of the user agent (or better: a hash, generated from it)
     * - We compare the length of the pattern with the length of the user agent
     *   (the pattern cannot be longer than the user agent!)
     *
     * @param {string} userAgent
     *
     * @return {array}
     */
    getPatterns(userAgent) {
        const starts = PatternHelper.getHashForPattern(userAgent, true);
        const length = PatternHelper.getPatternLength(userAgent);

        // get patterns, first for the given browser and if that is not found,
        // for the default browser (with a special key)
        return SynchronousPromise.all(
            starts.map((tmpStart) => {
                const tmpSubkey = SubKey.getPatternCacheSubkey(tmpStart);

                return SynchronousPromise.resolve(this.cache.getItem('browscap.patterns.' + tmpSubkey, true));
            })
        ).then((files) => {
            return files
                .map(
                    (file, i) => {
                        return {
                            file: file,
                            index: i,
                            start: starts[i]
                        };
                    },
                    starts
                ).filter(
                    (map) => {
                        if (!map.file.success) {
                            return false;
                        }

                        if (!Array.isArray(map.file.content) && typeof map.file.content !== 'object') {
                            return false;
                        }

                        return map.file.content.length !== 0;
                    }
                ).map(
                    (map) => {
                        let start = map.start;
                        let found = false;
                        let patternListInner = [];

                        for (let j = 0; j < map.file.content.length; j++) {
                            const buffer = map.file.content[j];
                            const split = buffer.split("\t");
                            const tmpBuffer = split.shift();

                            if (tmpBuffer === start) {
                                const len = split.shift();

                                if (len <= length) {
                                    found = true;
                                    patternListInner.push(split);
                                } else if (found === true) {
                                    break;
                                }
                            }
                        }

                        return patternListInner;
                    }
                ).reduce(
                    (patternListInner, result) => {
                        return patternListInner.concat(result);
                    }, []
                );
        });
    }
}

module.exports = GetPattern;
