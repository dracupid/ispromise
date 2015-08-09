<a href="http://promisesaplus.com/">
    <img src="http://promisesaplus.com/assets/logo-small.png" alt="Promises/A+ logo"
         title="Promises/A+ 1.1 compliant" align="right" />
</a>

ispromise
======
Test whether an object is a promises/A+ object or constructor. More powerful then [`is-promise`](https://github.com/then/is-promise).

[![NPM version](https://badge.fury.io/js/ispromise.svg)](https://www.npmjs.com/package/isPromise)

## Installation
```bash
npm i ispromise
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
