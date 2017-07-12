const {h} = require('ink');

function ListItem({children}) {
	return (
		<div>
			<div>{children}</div>
			<br/>
		</div>
	);
}

module.exports = ListItem;
