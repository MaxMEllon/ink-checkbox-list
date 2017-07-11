const {h, Text, Component} = require('ink');

const stdin = process.stdin;

class List extends Component {
	constructor(props) {
		super(props);
		this.props.children = this.props.children || [];
		this.props.checkedCharacter = this.props.checkedCharacter || '⦿';
		this.props.nocheckedCharacter = this.props.nocheckedCharacter || '○';
		this.props.cursorCharacter = this.props.cursorCharacter || '>';
		this.state = {
			cursor: 0,
			checked: []
		};
		stdin.resume();
		stdin.setEncoding('utf8');
		this.handleKeyEvent = this.handleKeyEvent.bind(this);
	}

	componentDidMount() {
		stdin.on('data', this.handleKeyEvent);
	}

	componentDidUpdate() {
		if (this.props.onChange) {
			this.props.onChange(this.state.checked);
		}
	}

	componentWillUnMount() {
		stdin.removeListener('data', this.handleKeyEvent);
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
		setTimeout(() => {
			stdin.removeListener('data', this.handleKeyEvent);
			if (this.props.onSubmit) {
				this.props.onSubmit(this.state.checked);
			}
		}, 50);
	}

	handleKeyEvent(key) {
		switch (key) {
			case '\u001b\u005b\u0041': {
				this.moveUp();
				break;
			}
			case '\u001b\u005b\u0042': {
				this.moveDown();
				break;
			}
			case '\u001b\u005b\u0043':
			case '\u001b\u005b\u0044':
			case '\u0020': case '\ucaa0': {
				this.toggleCurrentCursor();
				break;
			}
			case '\u000d': {
				this.submit();
				break;
			}
			default: {
				// Do nothing
				break;
			}
		}
	}

	renderCheckbox(index) {
		const {checkedCharacter, nocheckedCharacter} = this.props;
		const {checked} = this.state;
		const mark = checked.includes(index) ?
			checkedCharacter :
			nocheckedCharacter;
		return <Text green>{` ${mark}  `}</Text>;
	}

	render(props) {
		const {cursor} = this.state;
		const {cursorCharacter} = props;
		return (
			<div>
				{
					props.children.map((co, i) => {
						if (cursor === i) {
							return (
								<div>
									<span>{`${cursorCharacter}`} </span>
									{this.renderCheckbox(i)}
									{co}
								</div>
							);
						}
						return (
							<div>
								<span>{' '.repeat(cursorCharacter.length + 1)} </span>
								{this.renderCheckbox(i)}
								{co}
							</div>
						);
					})
				}
			</div>
		);
	}
}

module.exports = List;
