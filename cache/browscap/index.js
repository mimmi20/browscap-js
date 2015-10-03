/**
 * Copyright (c) 1998-2014 Browser Capabilities Project
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
 * @category   Browscap-PHP
 * @package    Cache
 * @copyright  1998-2014 Browser Capabilities Project
 * @license    http://www.opensource.org/licenses/MIT MIT License
 * @link       https://github.com/browscap/browscap-php/
 * @since      added with version 3.0
 */

var CacheClass = require('cache-class');

/**
 * a cache proxy to be able to use the cache adapters provided by the WurflCache package
 *
 * @category   Browscap-PHP
 * @package    Cache
 * @author     Thomas Müller <t_mueller_stolzenhain@yahoo.de>
 * @copyright  Copyright (c) 1998-2014 Browser Capabilities Project
 * @version    3.0
 * @license    http://www.opensource.org/licenses/MIT MIT License
 * @link       https://github.com/browscap/browscap-php/
 */
module.exports = function BrowscapCache (flatCache) {
    this.version   = null;
    this.flatCache = flatCache;

    /**
     * Detected browscap version (read from INI file)
     *
     * @var int
     */
    this.getVersion = function() {

        if (this.version === null) {
            var version = this.getItem('browscap.version', false);

            if (version.content !== null && version.success) {
                this.version = version.content;
            }
        }

        return this.version;
    };

    /**
     * Get an item.
     */
    this.getItem = function(cacheId, withVersion) {
        if (typeof withVersion === 'undefined') {
            withVersion = true;
        }

        if (withVersion) {
            cacheId += '.' + this.getVersion();
        }

        this.flatCache.get(cacheId, function(data){
            if (data === undefined) {
                return new CacheClass(null, false);
            }

            if (typeof data.content == 'undefined' ) {
                return new CacheClass(null, false);
            }

            return new CacheClass(data.content, true);
        });
    };

    /**
     * save the content into an php file
     *
     *
     * @return boolean whether the file was correctly written to the disk
     * @param cacheId
     * @param content
     * @param withVersion
     */
    this.setItem = function(cacheId, content, withVersion) {
        var data = {content: content};

        if (typeof withVersion === 'undefined') {
            withVersion = true;
        }

        if (withVersion) {
            cacheId += '.' + this.getVersion();
        }

        // Save and return
        this.flatCache.set(cacheId, data, function(err){
            return (!err);
        });
    };

    /**
     * Test if an item exists.
     *
     * @return bool
     * @param cacheId
     * @param withVersion
     */
    this.hasItem = function(cacheId, withVersion) {
        if (typeof withVersion === 'undefined') {
            withVersion = true;
        }

        if (withVersion) {
            cacheId += '.' + this.getVersion();
        }

        this.flatCache.get(cacheId, function(result){
            return (typeof result !== 'undefined');
        });
    };
};
