# ink-checkbox-list

> Checkbox list component for [ink](https://github.com/vadimdemedes/ink)

Demo
---

![Demo Image 1](./.github/demo1.gif)
![Demo Image 2](./.github/demo2.gif)

Install
---

```
$ npm install ink readline ink-checkbox-list
```

Usage
---

```js
const { h, mount } = require('ink')
const { List, ListItem } = require('ink-checkbox-list')

let component

const unmount = mount(
  h(List, {
    ref: (co) => (component = co),
    onDeside: () => {
      console.log(component.getCheckedItem())
      process.exit(0)
    }
  }, [
    h(ListItem, {}, 'aaaa'),
    h(ListItem, {}, 'aaaa'),
    h(ListItem, {}, 'aaaa'),
    h(ListItem, {}, 'aaaa'),
    h(ListItem, {}, 'aaaa')
  ])
);
```

> when using jsx

```js
const { h, mount } = require('ink')
const { List, ListItem } = require('ink-checkbox-list')

let component

const unmount = mount(
  <List
    ref={co => component}
    onDeside: () => {
      console.log(component.getCheckedItem())
      process.exit(0)
    }
  >
    <ListItem>aaaa</ListItem>
    <ListItem>aaaa</ListItem>
    <ListItem>aaaa</ListItem>
    <ListItem>aaaa</ListItem>
  </List>
);
```

Props
---

#### List

**checkedChar**

Type: `String` <br />
Default: `⦿`

**checkedChar**

Type: `String` <br />
Default: `○`

**cursorChar**

Type: `String` <br />
Default: `>`

LICENSE
---

MIT © 2017 MaxMellon
