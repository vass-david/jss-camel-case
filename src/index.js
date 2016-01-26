const regExp = /([A-Z])/g

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
    rule.style = {}
    for (let prop in style) {
      const value = style[prop]
      prop = prop.replace(regExp, replace)
      rule.style[prop] = value
    }
  }
}

function replace(c) {
  return '-' + c.toLowerCase()
}
