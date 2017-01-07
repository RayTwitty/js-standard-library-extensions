'use strict'

/**
 * Returns true if the value is an object.
 * @param {Mixed} value
 * @returns {Boolean}
 */
global.isObject = function(value) {
	return value instanceof Object && Object.getPrototypeOf(value) == Object.prototype
}
