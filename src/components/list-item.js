const {h, Component} = require('ink');

class ListItem extends Component {
	render(props) {
		return (
			<div>
				<div>{props.children}</div>
				<br/>
			</div>
		);
	}
}

module.exports = ListItem;
