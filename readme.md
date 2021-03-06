![JSS logo](https://avatars1.githubusercontent.com/u/9503099?v=3&s=60)

## JSS plugin that allows to write camel cased rule properties

Internally it converts everything back to dash separated names.

Make sure you read [how to use
plugins](https://github.com/cssinjs/jss/blob/master/docs/setup.md#setup-with-plugins)
in general.

[Demo](http://cssinjs.github.io/examples/index.html#plugin-jss-camel-case) -
[JSS](https://github.com/cssinjs/jss)

[![Gitter](https://badges.gitter.im/Join Chat.svg)](https://gitter.im/cssinjs/lobby)

## Usage example

```javascript
import jss from 'jss'
import camelCase from 'jss-camel-case'

jss.use(camelCase())

let sheet = jss.createStyleSheet({
  container: {
    fontSize: '20px',
    zIndex: 1,
    lineHeight: 1.2
  }
})
```

```javascript
console.log(sheet.toString())
```
```css
.jss-0-0 {
  font-size: 20px;
  z-index: 1;
  line-height: 1.2;
}
```

```javascript
console.log(sheet.classes)
```
```javascript
{ container: "jss-0-0" }
```

## Issues

File a bug against [cssinjs/jss prefixed with \[jss-camel-case\]](https://github.com/cssinjs/jss/issues/new?title=[jss-camel-case]%20).

## Run tests

```bash
npm i
npm run test
```

## License

MIT
