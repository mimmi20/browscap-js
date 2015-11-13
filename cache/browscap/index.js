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
 * @package    cache
 * @copyright  1998-2015 Browser Capabilities Project
 * @license    http://www.opensource.org/licenses/MIT MIT License
 * @link       https://github.com/mimmi20/browscap-js/
 */

"use strict";

var CacheClass = require('../cache-class');
var fs         = require('fs');

/**
 * a cache proxy to be able to use the cache adapters provided by the WurflCache package
 *
 * @category   browscap-js
 * @package    cache
 * @author     Thomas Müller <t_mueller_stolzenhain@yahoo.de>
 * @copyright  Copyright (c) 1998-2015 Browser Capabilities Project
 * @license    http://www.opensource.org/licenses/MIT MIT License
 * @link       https://github.com/mimmi20/browscap-js/
 */
module.exports = function BrowscapCache (datafolder) {
    this.version = null;
    this.folder  = datafolder;

    /**
     * Detected browscap version (read from INI file)
     *
     * @var int
     */
    this.getVersion = function getVersion () {

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
    this.getItem = function getItem (cacheId, withVersion, callback) {
        if (typeof withVersion === 'undefined') {
            withVersion = true;
        }

        if (withVersion) {
            cacheId += '.' + this.getVersion();
        }

        var data   = fs.readFileSync(this.getPath(cacheId));
        var object = JSON.parse(data);

        if (typeof object === 'undefined') {
            return new CacheClass(null, false);
        }

        if (typeof object.content == 'undefined' ) {
            return new CacheClass(null, false);
        }

        return new CacheClass(object.content, true);
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
    this.setItem = function setItem (cacheId, content, withVersion, callback) {
        var data = {content: content};

        if (typeof withVersion === 'undefined') {
            withVersion = true;
        }

        if (withVersion) {
            cacheId += '.' + this.getVersion();
        }

        // Save and return
        var json = JSON.stringify(data);

        return fs.writeFileSync(this.getPath(cacheId), json);
    };

    /**
     * Test if an item exists.
     *
     * @return bool
     * @param cacheId
     * @param withVersion
     */
    this.hasItem = function hasItem (cacheId, withVersion) {
        if (typeof withVersion === 'undefined') {
            withVersion = true;
        }

        if (withVersion) {
            cacheId += '.' + this.getVersion();
        }

        var data   = fs.readFileSync(this.getPath(cacheId));
        var object = JSON.parse(data);

        return (typeof object.content !== 'undefined');
    };

    this.getPath = function getPath (keyname) {
        return this.folder + '/' + keyname + '.json'
    };
};
