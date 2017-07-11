const { h, Component } = require('ink')

class ListItem extends Component {
  render (props) {
    return (
      h('div', {}, [
        h('span', {}, ''),
        h('div', {}, props.children),
        h('br')
      ])
    )
  }
}

module.exports = ListItem
