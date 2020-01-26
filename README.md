# Introduction

browscap-js is a port of the library `browscap-php` to JavaScript

It makes available a `getBrowser` function which takes a browser user agent string
and returns an associative array of properties and abilities of that browser.

Example:

```node
var Browscap = require('browscap-js');
var browscap = new Browscap();

var browser = browscap.getBrowser("Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0; WinTSI 05.11.2009)");

//Will print "IE 8.0"
console.log(browser.Browser + " " + browser.Version);
```

# Installation

Using npm run `npm install browscap-js`

You can get npm from http://npmjs.org/

Alternatively you can clone the git repository

# Examples

There are test files which demonstrates how to use index.js and test
several user agents.

To run:

```node
$ npm test
```
