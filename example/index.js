const { h, mount } = require('ink');
const { List, ListItem } = require('../src');

const unmount = mount(
  h(List, {}, [
    h(ListItem, {}, 'aaaa'),
    h(ListItem, {}, 'aaaa'),
    h(ListItem, {}, 'aaaa'),
    h(ListItem, {}, 'aaaa'),
    h(ListItem, {}, 'aaaa'),
  ])
)

setInterval(() => {
}, 10000)
