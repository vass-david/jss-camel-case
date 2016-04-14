const regExp = /([A-Z])/g

/**
 * Convert camel cased properties of a single style to dasherized
 *
 * @api private
 */
function convertCase(style) {
  const convertedStyle = {}
  for (let prop in style) {
    const value = style[prop]
    prop = prop.replace(regExp, replace)
    convertedStyle[prop] = value
  }
  return convertedStyle
}

/**
 * Allow camel cased property names by converting them back to dasherized.
 *
 * @param {Rule} rule
 * @api public
 */
export default function jssCamelCase() {
  return rule => {
    const {style} = rule
    if (!style) return
    if (Array.isArray(style)) {
      // Handle rules like @font-face, which can have multiple styles in an array
      for (let index = 0; index < style.length; index++) {
        style[index] = convertCase(style[index])
      }
    }
    else {
      rule.style = convertCase(style)
    }
  }
}

function replace(c) {
  return '-' + c.toLowerCase()
}
