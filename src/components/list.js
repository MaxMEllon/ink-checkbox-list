const {h, Component} = require('ink');
const figures = require('figures');
const CheckBox = require('./check-box');
const Cursor = require('./cursor');

const stdin = process.stdin;

class List extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cursor: 0,
			checked: []
		};
		this.handleKeyPress = this.handleKeyPress.bind(this);
	}

	get cursor() {
		return this.state.cursor;
	}

	componentDidMount() {
		stdin.on('keypress', this.handleKeyPress);
	}

	componentWillUnMount() {
		stdin.removeListener('keypress', this.handleKeyPress);
	}

	moveUp() {
		const {cursor} = this.state;
		const {length} = this.props.children;
		if (cursor - 1 < 0) {
			this.setState({cursor: length - 1});
			return;
		}
		this.setState({cursor: cursor - 1});
	}

	moveDown() {
		const {cursor} = this.state;
		const {length} = this.props.children;
		if (cursor + 1 >= length) {
			this.setState({cursor: 0});
			return;
		}
		this.setState({cursor: cursor + 1});
	}

	toggleCurrentCursor() {
		const {checked, cursor} = this.state;
		if (checked.includes(cursor)) {
			const i = checked.indexOf(cursor);
			checked.splice(i, 1);
			this.setState({checked});
		} else {
			checked.push(this.state.cursor);
			this.setState({checked});
		}
	}

	submit() {
		this.setState({cursor: -1});
		stdin.removeListener('keypress', this.handleKeyPress);
		if (this.props.onSubmit) {
			this.props.onChange(this.state.checked);
			this.props.onSubmit(values);
		}
	}

	handleKeyPress(ch, key) {
		const pressedKey = key.name;
		switch (pressedKey) {
			case 'up': {
				this.moveUp();
				break;
			}
			case 'down': {
				this.moveDown();
				break;
			}
			case 'space': {
				this.toggleCurrentCursor();
				if (this.props.onChange) {
					this.props.onChange(this.state.checked);
				}
				break;
			}
			case 'return': {
				this.submit();
				break;
			}
			default: {
				// Do nothing
				break;
			}
		}
	}

	render(props) {
		const {cursor} = this.state;
		const {cursorCharacter, checkedCharacter, uncheckedCharacter} = props;
		return (
			<div>
				{
					props.children.map((co, i) => (
						<div>
							<Cursor
								isActive={cursor === i}
								cursorCharacter={cursorCharacter}
							/>
							<CheckBox
								isChecked={this.state.checked.includes(i)}
								checkedCharacter={checkedCharacter}
								uncheckedCharacter={uncheckedCharacter}
							/>
							{co}
							<br/>
						</div>
					))
				}
			</div>
		);
	}
}

List.defaultProps = {
	cursorCharacter: figures.pointer,
	checkedCharacter: figures.checkboxOn,
	uncheckedCharacter: figures.checkboxOff
};

module.exports = List;
