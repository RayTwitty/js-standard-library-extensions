'use strict'

/**
 * Returns the value of a number rounded to a specified number of decimal places.
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
 * Returns a random integer between min (inclusive) and max (inclusive).
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

/**
 * Returns a number whose value is limited to the given range.
 * @param {Number} num
 * @param {Number} min
 * @param {Number} max
 * @returns {Number}
 */
Math.clamp = function(num, min, max) {
	if (!max) {
		max = min
		min = 0
	}

	return num > max ? max : num < min ? min : num
}
