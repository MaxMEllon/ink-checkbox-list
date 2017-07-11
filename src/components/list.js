const { h, Text, Component } = require('ink')
const readline = require('readline')
const stdin = process.stdin

class List extends Component {
  constructor (props) {
    super(props)
    this.state = {
      cursor: 0,
      checked: []
    }
    readline.emitKeypressEvents(process.stdin)
    stdin.setRawMode(true)
    stdin.resume()
    stdin.setEncoding('utf8')
    this.handleKeyEvent = this.handleKeyEvent.bind(this)
  }

  getCheckedItem () {
    return this.state.checked
  }

  moveUp () {
    const { cursor } = this.state
    if (cursor - 1 < 0) return
    this.setState({ cursor: cursor - 1 })
  }

  moveDown () {
    const { cursor } = this.state
    const { length } = this.props.children
    if (cursor + 1 >= length) return
    this.setState({ cursor: cursor + 1 })
  }

  toggleCurrentCursol () {
    const { checked, cursor } = this.state
    if (checked.includes(cursor)) {
      const i = checked.indexOf(cursor)
      checked.splice(i, 1)
      this.setState({ checked: checked })
    } else {
      checked.push(this.state.cursor)
      this.setState({ checked: checked })
    }
  }

  deside () {
    if (this.props.onDeside) this.props.onDeside()
    this.setState({ cursor: -1 })
    stdin.removeListener('data', this.handleKeyEvent)
  }

  handleKeyEvent (key) {
    switch (key) {
      case '\u001b\u005b\u0041': {
        this.moveUp()
        break
      }
      case '\u001b\u005b\u0042': {
        this.moveDown()
        break
      }
      case '\u001b\u005b\u0043':
      case '\u001b\u005b\u0044':
      case '\u0020': case '\ucaa0': {
        this.toggleCurrentCursol()
        break
      }
      case '\u000d': {
        this.deside()
        break
      }
    }
  }

  componentDidMount () {
    stdin.on('data', this.handleKeyEvent)
  }

  componentWillUnMount () {
    stdin.removeListener('data', this.handleKeyEvent)
  }

  renderCheckbox (index) {
    const { checked } = this.state
    if (checked.includes(index)) {
      return h(Text, { green: true }, ' ⦿ ')
    } else {
      return h(Text, { green: true }, ' ○ ')
    }
  }

  render (props) {
    const { cursor } = this.state
    return (
      h('div', {},
        props.children.map((co, i) => (
          cursor === i
          ? h('div', {}, [
            h('span', {}, '> '),
            this.renderCheckbox(i),
            co
          ])
          : h('div', {}, [
            h('span', {}, '  '),
            this.renderCheckbox(i),
            co
          ])
        ))
      )
    )
  }
}

module.exports = List
