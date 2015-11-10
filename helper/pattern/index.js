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

/**
 * extracts the pattern and the data for theses pattern from the ini content, optimized for PHP 5.5+
 *
 * @category   browscap-js
 * @package    helper
 * @author     Thomas Müller <t_mueller_stolzenhain@yahoo.de>
 * @copyright  Copyright (c) 1998-2015 Browser Capabilities Project
 * @license    http://www.opensource.org/licenses/MIT MIT License
 * @link       https://github.com/mimmi20/browscap-js/
 */
module.exports = function GetPattern (cache) {
    this.cache = cache;

    /**
     * Gets some possible patterns that have to be matched against the user agent. With the given
     * user agent string, we can optimize the search for potential patterns:
     * - We check the first characters of the user agent (or better: a hash, generated from it)
     * - We compare the length of the pattern with the length of the user agent
     *   (the pattern cannot be longer than the user agent!)
     *
     * @param userAgent
     *
     * @return Array
     */
    this.getPatterns = function(userAgent) {
        var PatternHelper = require('./helper');
        var patternHelper = new PatternHelper();

        var SubKey       = require('../subkey');
        var subkeyHelper = new SubKey();

        var starts = patternHelper.getHashForPattern(userAgent, true);
        var length = patternHelper.getPatternLength(userAgent);

        var patternList = [];

        // get patterns, first for the given browser and if that is not found,
        // for the default browser (with a special key)
        for (var i = 0; i < starts.length; i++) {
            var tmpStart  = starts[i];
            var tmpSubkey = subkeyHelper.getPatternCacheSubkey(tmpStart);

            if (!this.cache.hasItem('browscap.patterns.' + tmpSubkey, true)) {
                continue;
            }

            var file = this.cache.getItem('browscap.patterns.' + tmpSubkey, true);

            if (!file.success) {
                continue;
            }

            if ((typeof file.content !== 'Array' && typeof file.content !== 'object') || file.content.length === 0) {
                continue;
            }

            var found = false;

            for (var j = 0; j < file.content.length; j++) {
                var buffer    = file.content[j];

                var split     = buffer.split("\t");
                var tmpBuffer = split.shift();

                if (tmpBuffer === tmpStart) {
                    var len = split.shift();

                    if (len <= length) {
                        patternList.push(split);
                    }

                    found = true;
                } else if (found === true) {
                    break;
                }
            }
        }

        return patternList;
    };
};
