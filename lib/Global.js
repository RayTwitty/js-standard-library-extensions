'use strict'

/**
 * @param {Mixed} value
 * @returns {Boolean}
 */
global.isObject = function(value) {
	return value instanceof Object && Object.getPrototypeOf(value) == Object.prototype
}
