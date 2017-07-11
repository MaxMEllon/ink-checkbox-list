# ink-checkbox-list

> Checkbox list component for [ink](https://github.com/vadimdemedes/ink)

Install
---

```
$ npm install ink-checkbox-list
```

Usage
---

```js
const { h, mount } = require('ink');
const { List, ListItem } = require('ink-checkbox-list');

const unmount = mount(
  h(List, {}, [
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
const { h, mount } = require('ink');
const { List, ListItem } = require('ink-checkbox-list');

const unmount = mount(
  <List>
    <ListItem>aaaa</ListItem>
    <ListItem>aaaa</ListItem>
    <ListItem>aaaa</ListItem>
    <ListItem>aaaa</ListItem>
  </List>
);
```

LICENSE
---

MIT © 2017 MaxMellon
