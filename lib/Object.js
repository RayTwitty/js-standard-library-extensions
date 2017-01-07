'use strict'

/**
 * Returns a copy of the object.
 * Using a deep copy.
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
 * Executes the provided callback once for each field in the object.
 * @param {Object} obj
 * @param {Function} callback
 */
Object.forEach = function(obj, callback) {
	for (let key in obj)
		callback(key, obj[key], obj)
}

/**
 * Returns true if the object doesn't have fields.
 * @param {Object} obj
 * @returns {Boolean}
 */
Object.isEmpty = function(obj) {
	return !this.keys(obj).length
}
