'use strict'

/**
 * @param {Object} obj
 * @returns {Object}
 */
Object.copy = function(obj) {
	if (!obj)
		return null

	if (typeof obj != 'object')
		return obj

	let res = this.getPrototypeOf(obj) ? obj.constructor() : this.create(null)

	if (!this.isEmpty(obj)) {
		for (let key in obj) {
			if (typeof obj[key] == 'object')
				res[key] = this.copy(obj[key])
			else
				res[key] = obj[key]
		}
	}

	return res
}

/**
 * @param {Object} obj
 * @param {Function} callback
 */
Object.forEach = function(obj, callback) {
	for (let key in obj)
		callback(key, obj[key], obj)
}

/**
 * @param {Object} obj
 * @returns {Boolean}
 */
Object.isEmpty = function(obj) {
	return !this.keys(obj).length
}

/**
 * @param {Object} obj
 * @returns {Boolean}
 */
Object.isObject = function(obj) {
	return obj instanceof this && this.getPrototypeOf(obj) == this.prototype
}
