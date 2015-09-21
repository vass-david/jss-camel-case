![JSS logo](http://avatars1.githubusercontent.com/u/9503099?v=3&s=60)

## JSS plugin that allows to write camel cased rule properties

Internally it converts everything back to dash separated names.

[Demo](http://jsstyles.github.io/jss-examples/index.html#plugin-jss-camel-case) -
[JSS](https://github.com/jsstyles/jss)

[![Gitter](https://badges.gitter.im/Join Chat.svg)](https://gitter.im/jsstyles/jss?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)


## Usage example

```javascript
import jss from 'jss'
import cc from 'jss-camel-case'

jss.use(cc)

const styleSheet = jss.createStyleSheet({
  container: {
    fontSize: '20px',
    zIndex: 1,
    lineHeight: 1.2
  }
})
```

```javascript
console.log(styleSheet.toString())
```
```css
.jss-0-0 {
  font-size: 20px;
  z-index: 1;
  line-height: 1.2;
}
```

```javascript
console.log(styleSheet.classes)
```
```javascript
{ container: "jss-0-0" }
```


## Run tests

```bash
npm i
npm run test
```


## License

MIT
