# date.js
Extensions for native JavaScript Date object

[![Build status](https://travis-ci.org/muchencute/date.js.png?branch=master)](https://travis-ci.org/muchencute/date.js)
[![npm](https://img.shields.io/github/contributors/muchencute/date.js.svg)](https://github.com/muchencute/date.js/graphs/contributors)
[![npm](https://img.shields.io/github/license/muchencute/date.js.svg)](https://github.com/muchencute/date.js/blob/master/LICENSE)

## What to use it for?
In JavaScript, data.js has been used to reduce duplicated & boring date related codes by us for weeks, and it grows.
 
## Installation
There are many ways to install data.js but we suggest using npm or Bower.

```
npm install muchencute-date --save
```
or
```
bower install muchencute-date --save
```

### Alternative installation
- [Download ZIP](https://github.com/muchencute/date.js/archive/master.zip)
- [Download from nuget](https://www.nuget.org/packages/muchencute/)

### AMD support
If you use a modular script loader then you can require date.js just like any other module:

```javascript
require(['muchencute-date'], function() {
    var someDateStr = new Date().format('yyyy-MM-dd');
});
```

### CommonJS module support
If you use a CommonJS compatible environment you can use the `require` function to import date.js

```javascript
var muchencuteDate = require('muchencute-date');
```

## Basic usage
Assuming you hanve already installed date.js.

```javascript
alert(new Date().format('yyyy-MM-dd'));
```

## Examples
- [format]()
- [toYmd]()

## Resources
- [Date]()

## Community
- [GitHub](https://github.com/muchencute/date.js/issues)
- [Twitter](https://twitter.com/HelloMuchencute)

## Contributing
If you would like to help us in writing the code, please take a look into [CONTRIBUTING.md](https://github.com/muchencute/date.js/blob/master/CONTRIBUTING.md)

## Copyright and license
date.js is release under the [MIT license](https://github.com/muchencute/date.js/blob/master/LICENSE).

Copyrights belongs to Muchencute