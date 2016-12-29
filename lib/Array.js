'use strict'

/**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 */
Array.prototype.shuffle = function() {
	for (let i = this.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1))
		let temp = this[i]
		this[i] = this[j]
		this[j] = temp
	}
}

/**
 * Remove array element by value.
 * @param {Mixed} value
 */
Array.prototype.remove = function(value) {
	let idx = this.indexOf(value)
	if (idx != -1)
		this.splice(idx, 1)
}
