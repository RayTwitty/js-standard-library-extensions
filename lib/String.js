'use strict'

/**
 * Returns a formatted string in a printf-like format.
 * @param {Mixed} ...
 * @returns {String}
 */
String.prototype.format = function() {
	let i = -1

	return this.replace(/%(-)?(0?[0-9]+)?([.][0-9]+)?([#][0-9]+)?([scbfpeoxXud])/g, (exp, p0, p1, p2, p3, p4) => {
		if (exp == '%%')
			return '%'

		if (p4 == 'b')
			return arguments[++i] ? 'true' : 'false'

		if (arguments[++i]) {
			let exp = p2 && parseInt(p2.substr(1))
			let base = p3 && parseInt(p3.substr(1))
			let val
			switch (p4) {
				case 's':
					val = arguments[i]
					break
				case 'c':
					val = arguments[i][0]
					break
				case 'f':
					val = parseFloat(arguments[i]).toFixed(exp)
					break
				case 'p':
					val = parseFloat(arguments[i]).toPrecision(exp)
					break
				case 'e':
					val = parseFloat(arguments[i]).toExponential(exp)
					break
				case 'o':
					val = parseInt(arguments[i]).toString(base || 8)
					break
				case 'x':
				case 'X':
					val = parseInt(arguments[i]).toString(base || 16)
					if (p4 == 'X')
						val = val.toUpperCase()
					break
				case 'u':
				case 'd':
					val = parseFloat(parseInt(arguments[i], base || 10).toPrecision(exp)).toFixed(0)
					break
			}

			val = typeof val == 'object' ? JSON.stringify(val) : val.toString(base)
			let sz = parseInt(p1)
			let ch = p1 && p1[0] == '0' ? '0' : ' '

			while (val.length < sz)
				val = p0 ? val + ch : ch + val

			return val
		}
	})
}
