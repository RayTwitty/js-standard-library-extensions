'use strict'

/**
 * @param {Mixed} ...
 * @returns {String}
 */
String.prototype.format = function() {
	let i = 0

	return this.replace(/%(?:\.([0-9]+))?(.)/g, (str, precisionGroup, genericGroup) => {
		if (precisionGroup && genericGroup != 'f')
			throw new Error("Precision can only be specified for 'f'")

		switch (genericGroup) {
			case '%':
				return '%'
			case 's':
				return arguments[i++].toString()
			case 'd':
				return parseInt(arguments[i++])
			case 'b':
				return arguments[i++] ? 'true' : 'false'
			case 'f':
				if (!precisionGroup)
					return parseFloat(arguments[i++])
				else
					return parseFloat(arguments[i++]).toFixed(parseInt(precisionGroup))
			default:
				throw new Error('Unsupported conversion character %' + genericGroup)
		}
	})
}
