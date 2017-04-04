var tap = require('tap');

var promiseLibs = ['yaku', 'bluebird', 'q', 'promise', 'when'].map(function (name) {
        return {
            name: name,
            lib: require(name)
        };
    }),
    testValues = [true, false, null, undefined, 0, -12345, 123.45, '', 'hello', {}, {then: 1}, [], Date];

if (typeof Promise === 'function') {
    promiseLibs.push({
        name: 'native', lib: Promise
    });
}

promiseLibs.push({
    name: 'es6-promise', lib: require('es6-promise').Promise
});

var isPromise = require('./'),
    isConstructor = isPromise.isConstructor;

tap.test('Is constructor', function (t){
    promiseLibs.forEach(function (lib) {
        t.ok(isConstructor(lib.lib), lib.name);
        t.notOk(isPromise(lib.lib), lib.name);
    });
    testValues.forEach(function (v) {t.notOk(isConstructor(v), v);});
    t.end();
});

tap.test('Is promise', function (t){
    promiseLibs.forEach(function (lib) {
        t.ok(isPromise(lib.lib.resolve()), lib.name);
        t.notOk(isConstructor(lib.lib.resolve()), lib.name);
    });
    testValues.forEach(function (v) {t.notOk(isPromise(v), v);});

    var promiseFun = function() {}
    t.notOk(isPromise(promiseFun), 'function');

    promiseFun.then = function() {}

    t.ok(isPromise(promiseFun), 'function with then method');
    t.end();
});
