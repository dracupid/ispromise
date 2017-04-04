<a href="http://promisesaplus.com/">
    <img src="http://promisesaplus.com/assets/logo-small.png" alt="Promises/A+ logo"
         title="Promises/A+ 1.1 compliant" align="right" />
</a>

ispromise
======
Test whether an object/function is a promises/A+ object/function or constructor. More powerful then [`is-promise`](https://github.com/then/is-promise).

[![NPM version](https://badge.fury.io/js/ispromise.svg)](https://www.npmjs.com/package/ispromise)
[![Build Status](https://travis-ci.org/dracupid/ispromise.svg)](https://travis-ci.org/dracupid/ispromise)

## Installation
```bash
npm i ispromise -S
```

## Usage
```javascript
var isPromise = require('ispromise');

isPromise(Promise) // false
isPromise(Promise.resolve()) // true
isPromise.isConstructor(Promise) // true
```

## License
MIT@Jingchen Zhao
