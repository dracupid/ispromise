module.exports = function (obj) {
  return !!obj &&
    (typeof obj === 'object' || typeof obj === 'function') &&
    ((obj.constructor && obj.constructor.name === 'Promise') || typeof obj.then === 'function')
}

module.exports.isConstructor = function (obj) {
  return !!obj &&
    (typeof obj === 'function') &&
    ((obj.name === 'Promise') ||
    ((typeof obj.resolve === 'function') && (typeof obj.reject === 'function')))
}
