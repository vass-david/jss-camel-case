'use strict'

var jss = jss.default

QUnit.module('Camel Case plugin', {
  setup: function () {
    jss.use(jssCamelCase.default())
  },
  teardown: function () {
    jss.plugins.registry = []
  }
})

test('camel cased properties', function () {
  var sheet = jss.createStyleSheet({
    a: {
      fontSize: '20px',
      zIndex: 1,
      lineHeight: 1.2
    }
  }, {named: false})
  equal(sheet.toString(), 'a {\n  font-size: 20px;\n  z-index: 1;\n  line-height: 1.2;\n}')
})

test('camel cased @font-face with array of styles', function () {
  var sheet = jss.createStyleSheet({
    '@font-face': [
      {
        fontFamily: 'Lato-Light',
        src: 'url("/fonts/Lato-Light.ttf") format("truetype")',
      },
      {
        fontFamily: 'Lato-Bold',
        src: 'url("/fonts/Lato-Bold.ttf") format("truetype")',
      },
    ],
  })
  const css =
    '@font-face {\n' +
    '  font-family: Lato-Light;\n' +
    '  src: url("/fonts/Lato-Light.ttf") format("truetype");\n' +
    '}\n' +
    '@font-face {\n' +
    '  font-family: Lato-Bold;\n' +
    '  src: url("/fonts/Lato-Bold.ttf") format("truetype");\n' +
    '}'
  equal(sheet.toString(), expected, 'converted correctly')
})
