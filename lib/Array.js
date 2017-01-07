'use strict'

/**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 */
Object.defineProperty(Array.prototype, 'shuffle', {
	value: function() {
		for (let i = this.length - 1; i > 0; i--) {
			let j = Math.floor(Math.random() * (i + 1))
			let temp = this[i]
			this[i] = this[j]
			this[j] = temp
		}
	},
	writable: true
})

/**
 * Removes an array element by the value.
 * @param {Mixed} value
 */
Object.defineProperty(Array.prototype, 'remove', {
	value: function(value) {
		let idx = this.indexOf(value)
		if (idx != -1)
			this.splice(idx, 1)
	},
	writable: true
})
