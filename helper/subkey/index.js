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
 * includes general functions for the work with patterns
 *
 * @category   browscap-js
 * @package    helper
 * @author     Thomas Müller <mimmi20@live.de>
 * @copyright  Copyright (c) 1998-2015 Browser Capabilities Project
 * @license    http://www.opensource.org/licenses/MIT MIT License
 * @link       https://github.com/mimmi20/browscap-js/
 */
module.exports = function SubKey (content, success) {
    /**
     * Gets the subkey for the pattern cache file, generated from the given string
     *
     * @param  string
     * @return string
     */
    this.getPatternCacheSubkey = function getPatternCacheSubkey (string) {
        return string.substring(0, 2);
    };

    /**
     * Gets all subkeys for the pattern cache files
     *
     * @return Object
     */
    this.getAllPatternCacheSubkeys = function getAllPatternCacheSubkeys () {
        var subkeys = {};
        var chars   = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

        for (var i = 0; i < chars.length; i++) {
            for (var j = 0; j < chars.length; j++) {
                subkeys[chars[i] + chars[j]] = '';
            }
        }

        return subkeys;
    };

    /**
     * Gets the sub key for the ini parts cache file, generated from the given string
     *
     * @param string
     * @return string
     */
    this.getIniPartCacheSubKey = function getIniPartCacheSubKey (string) {
        return string.substring(0, 3);
    };

    /**
     * Gets all sub keys for the inipart cache files
     *
     * @return Array
     */
    this.getAllIniPartCacheSubKeys = function getAllIniPartCacheSubKeys () {
        var subKeys = [];
        var chars   = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

        for (var i = 0; i < chars.length; i++) {
            for (var j = 0; j < chars.length; j++) {
                for (var k = 0; k < chars.length; k++) {
                    subKeys.push(chars[i] + chars[j] + chars[k]);
                }
            }
        }

        return subKeys;
    };
};
