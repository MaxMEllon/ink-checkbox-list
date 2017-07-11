const { h, Component } = require('ink')

class ListItem extends Component {
  constructor (props, context) {
    super(props, context)
    this.props.children = this.props.children || []
  }

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
