const { h, mount } = require('ink');
const List = require('./components/list');
const ListItem = require('./components/list-item');

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
