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

/**
 * class to help quoting strings for using a regex
 *
 * @category   browscap-js
 * @package    helper
 * @author     Thomas Müller <mimmi20@live.de>
 * @copyright  Copyright (c) 1998-2015 Browser Capabilities Project
 * @license    http://www.opensource.org/licenses/MIT MIT License
 * @link       https://github.com/mimmi20/browscap-js/
 */
class Quoter {
    /**
     * Converts browscap match patterns into preg match patterns.
     *
     * @param {string} userAgent
     * @param {string} delimiter
     *
     * @return {string}
     */
    static pregQuote(userAgent, delimiter) {
        //  discuss at: http://phpjs.org/functions/preg_quote/
        // original by: booeyOH
        // improved by: Ates Goral (http://magnetiq.com)
        // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
        // improved by: Brett Zamir (http://brett-zamir.me)
        // bugfixed by: Onno Marsman
        //   example 1: preg_quote("$40");
        //   returns 1: '\\$40'
        //   example 2: preg_quote("*RRRING* Hello?");
        //   returns 2: '\\*RRRING\\* Hello\\?'
        //   example 3: preg_quote("\\.+*?[^]$(){}=!<>|:");
        //   returns 3: '\\\\\\.\\+\\*\\?\\[\\^\\]\\$\\(\\)\\{\\}\\=\\!\\<\\>\\|\\:'

        const pattern = String(userAgent).replace(
            new RegExp('[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\' + (delimiter || '') + '-]', 'g'),
            '\\$&'
        );

        // the \\x replacement is a fix for "Der gro\xdfe BilderSauger 2.00u" user agent match
        return pattern
            .replace('\\\\*', '.*')
            .replace('\\\\?', '.')
            .replace('\\x', '\\\\x');
    }

    /**
     * Reverts the quoting of a pattern.
     *
     * @param {string} pattern
     * @return {string}
     */
    static pregUnQuote(pattern) {
        const regex = new RegExp('[^a-z0-9\\s]', 'i');

        if (!regex.test(pattern)) {
            return pattern;
        }

        // Undo the \\x replacement, that is a fix for "Der gro\xdfe BilderSauger 2.00u" user agent match
        // @source https://github.com/browscap/browscap-php
        pattern = pattern
            .replace('/(?<!\\\\)\\.\\*/gi', '\\*')
            .replace('/(?<!\\\\)\\./gi', '\\?')
            .replace('/(?<!\\\\)\\\\x/gi', '\\x');

        // replace \@ -> @
        let re = new RegExp('\\\\\\@', 'gi');
        pattern = pattern.replace(re, '@');

        // replace \. -> \?
        re = new RegExp('\\\\\\.', 'gi');
        pattern = pattern.replace(re, '\\?');

        // replace \\ -> \
        re = new RegExp('\\\\\\\\', 'gi');
        pattern = pattern.replace(re, '\\');

        // replace \+ -> +
        re = new RegExp('\\\\\\+', 'gi');
        pattern = pattern.replace(re, '+');

        // replace \[ -> [
        re = new RegExp('\\\\\\[', 'gi');
        pattern = pattern.replace(re, '[');

        // replace \^ -> ^
        re = new RegExp('\\\\\\^', 'gi');
        pattern = pattern.replace(re, '^');

        // replace \] -> ]
        re = new RegExp('\\\\\\]', 'gi');
        pattern = pattern.replace(re, ']');

        // replace \$ -> $
        re = new RegExp('\\\\\\$', 'gi');
        pattern = pattern.replace(re, '$');

        // replace \( -> (
        re = new RegExp('\\\\\\(', 'gi');
        pattern = pattern.replace(re, '(');

        // replace \) -> )
        re = new RegExp('\\\\\\)', 'gi');
        pattern = pattern.replace(re, ')');

        // replace \{ -> {
        re = new RegExp('\\\\\\{', 'gi');
        pattern = pattern.replace(re, '{');

        // replace \} -> }
        re = new RegExp('\\\\\\}', 'gi');
        pattern = pattern.replace(re, '}');

        // replace \= -> =
        re = new RegExp('\\\\\\=', 'gi');
        pattern = pattern.replace(re, '=');

        // replace \! -> !
        re = new RegExp('\\\\\\!', 'gi');
        pattern = pattern.replace(re, '!');

        // replace \< -> <
        re = new RegExp('\\\\\\<', 'gi');
        pattern = pattern.replace(re, '<');

        // replace \> -> >
        re = new RegExp('\\\\\\>', 'gi');
        pattern = pattern.replace(re, '>');

        // replace \| -> |
        re = new RegExp('\\\\\\|', 'gi');
        pattern = pattern.replace(re, '|');

        // replace \: -> :
        re = new RegExp('\\\\\\:', 'gi');
        pattern = pattern.replace(re, ':');

        // replace \- -> -
        re = new RegExp('\\\\\\-', 'gi');
        pattern = pattern.replace(re, '-');

        // replace \+ -> +
        re = new RegExp('\\\\\\+', 'gi');
        pattern = pattern.replace(re, '+');

        // replace .* -> *
        re = new RegExp('\\.\\*', 'gi');
        pattern = pattern.replace(re, '*');

        // replace . -> ?
        re = new RegExp('\\.', 'gi');
        pattern = pattern.replace(re, '?');

        // replace \? -> .
        re = new RegExp('\\\\\\?', 'gi');
        pattern = pattern.replace(re, '.');

        // replace \/ -> /
        re = new RegExp('\\\\\\/', 'gi');
        pattern = pattern.replace(re, '/');
        return pattern;
    }
}

module.exports = Quoter;
