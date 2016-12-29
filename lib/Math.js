'use strict'

/**
 * @param {Number} num
 * @param {Number} limit
 * @returns {Number}
 */
Math.round = function(num, limit) {
	if (!limit)
		limit = 0

	let mul = this.pow(10, limit)
	return this.floor(num * mul + 0.5) / mul
}

/**
 * @param {Number} min
 * @param {Number} max
 * @returns {Number}
 */
Math.randomInt = function(min, max) {
	if (!max) {
		max = min
		min = 0
	}

	return this.floor(this.random() * (max - min + 1)) + min
}
