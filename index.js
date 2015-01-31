'use strict'

var r1 = /([A-Z])/g
var r2 = /[-_\s]+/g

/**
 * Allow camel cased property names by converting them back to dasherized.
 *
 * @param {Rule} rule
 * @api public
 */
module.exports = function (rule) {
    var style = rule.style

    if (!style) return

    var newStyle = {}

    for (var prop in style) {
        var value = style[prop]
        prop = prop
            .replace(r1, '-$1')
            .replace(r2, '-')
            .toLowerCase()
        newStyle[prop] = value
    }

    rule.style = newStyle
}
