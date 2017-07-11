const { h, mount } = require('ink')
const { List, ListItem } = require('../src')

let component

const unmount = mount(
  h(List, {
    ref: (co) => (component = co),
    onSubmit: (list) => {
      console.log(list)
      process.exit(0)
    }
  }, [
    h(ListItem, {}, 'aaaa'),
    h(ListItem, {}, 'aaaa'),
    h(ListItem, {}, 'aaaa'),
    h(ListItem, {}, 'aaaa'),
    h(ListItem, {}, 'aaaa')
  ])
)

setTimeout(() => {
  unmount()
  process.exit(1)
}, 10000)
