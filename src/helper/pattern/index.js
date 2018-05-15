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

const PatternHelper = require('./helper');
const SubKey        = require('../subkey');

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
class GetPattern {
    /**
     * @param {BrowscapCache} cache
     */
    constructor (cache) {
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
    getPatterns (userAgent) {
        const starts = PatternHelper.getHashForPattern(userAgent, true);
        const length = PatternHelper.getPatternLength(userAgent);

        return starts
            .map((tmpStart, i) => {
                const tmpSubkey = SubKey.getPatternCacheSubkey(tmpStart);

                return {
                    tmpStart: tmpStart,
                    file: this.cache.getItem('browscap.patterns.' + tmpSubkey, true),
                    index: i
                }
            })
            .filter((map) => {
                if (!map.file.success) {
                    return false;
                }

                if (!Array.isArray(map.file.content) && typeof map.file.content !== 'object') {
                    return false;
                }

                return map.file.content.length !== 0;
            })
            .map((map) => {
                let patternList = [];
                let found = false;

                for (let j = 0; j < map.file.content.length; j++) {
                    const buffer    = map.file.content[j];
                    const split     = buffer.split("\t");
                    const tmpBuffer = split.shift();

                    if (tmpBuffer === map.tmpStart) {
                        const len = split.shift();

                        if (len <= length) {
                            patternList.push(split);
                        }

                        found = true;
                    } else if (found === true) {
                        break;
                    }
                }

                return patternList;
            })
            .concat((summary, patternList) => {
                return summary.append(patternList);
            }, []);

        // let patternList = [];
        //
        // // get patterns, first for the given browser and if that is not found,
        // // for the default browser (with a special key)
        // for (let i = 0; i < starts.length; i++) {
        //     const tmpStart  = starts[i];
        //     const tmpSubkey = SubKey.getPatternCacheSubkey(tmpStart);
        //
        //     const file = this.cache.getItem('browscap.patterns.' + tmpSubkey, true);
        //
        //     if (!file.success) {
        //         continue;
        //     }
        //
        //     if ((typeof file.content !== 'Array' && typeof file.content !== 'object') || file.content.length === 0) {
        //         continue;
        //     }
        //
        //     let found = false;
        //
        //     for (let j = 0; j < file.content.length; j++) {
        //         const buffer    = file.content[j];
        //         const split     = buffer.split("\t");
        //         const tmpBuffer = split.shift();
        //
        //         if (tmpBuffer === tmpStart) {
        //             const len = split.shift();
        //
        //             if (len <= length) {
        //                 patternList.push(split);
        //             }
        //
        //             found = true;
        //         } else if (found === true) {
        //             break;
        //         }
        //     }
        // }
        //
        // return patternList;
    };
}

module.exports = GetPattern;
