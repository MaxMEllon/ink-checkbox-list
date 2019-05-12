const React = require('react');
const figures = require('figures');
const PropTypes = require('prop-types');
const CheckBox = require('./check-box');
const Cursor = require('./cursor');

const stdin = process.stdin;

class List extends React.Component {
	constructor(props) {
		super(props);
		let {children} = this.props;
		let checkedList = children.map((_,i) => _.props.checked ? i : null).filter(_ => _ != null)
		this.state = {
			cursor: 0,
			checked: checkedList
		};
		this.handleKeyPress = this.handleKeyPress.bind(this);
	}

	get cursor() {
		return this.state.cursor;
	}

	get childValues() {
		const {children} = this.props;
		const filteredChildren = children.filter((child, i) => this.state.checked.includes(i) && !child.props.disabled );
		return filteredChildren.map(child => child.props.value);
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
			this.props.onSubmit(this.childValues);
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
					this.props.onChange(this.childValues);
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

	render() {
		const {cursor} = this.state;
		const {cursorCharacter, checkedCharacter, uncheckedCharacter, disabledCharacter} = this.props;
		const sStyle = {
			flexDirection: 'row'
		}
		return (
			<span>
				{
					this.props.children.map((co, i) => (
						<span style={sStyle} key={i}>
							<Cursor
								isActive={cursor === i}
								cursorCharacter={cursorCharacter}
							/>
							<CheckBox
								isChecked={this.state.checked.includes(i)}
								isDisabled={co.props.disabled}
								checkedCharacter={checkedCharacter}
								uncheckedCharacter={uncheckedCharacter}
								disabledCharacter={disabledCharacter}
							/>
							{co}
						</span>
					))
				}
			</span>
		);
	}
}

List.defaultProps = {
	cursorCharacter: figures.pointer,
	checkedCharacter: figures.checkboxOn,
	uncheckedCharacter: figures.checkboxOff,
	disabledCharacter: figures.bullet
};

List.propTypes = {
	cursorCharacter: PropTypes.string,
	checkedCharacter: PropTypes.string,
	uncheckedCharacter: PropTypes.string,
	disabledCharacter: PropTypes.string,
	onChange: PropTypes.func,
	onSubmit: PropTypes.func
};

module.exports = List;
