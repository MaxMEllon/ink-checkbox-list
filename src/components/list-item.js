const {h} = require('ink');
const {string} = require('prop-types');

/* eslint no-unused-vars: [0] */
function ListItem({value, children}) {
	return (
		<div>
			<div>{children}</div>
			<br/>
		</div>
	);
}

ListItem.propTypes = {
	value: string.isRequired
};

module.exports = ListItem;
