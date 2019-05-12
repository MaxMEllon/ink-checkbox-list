const {string} = require('prop-types');
const React = require('react');

/* eslint no-unused-vars: [0] */
function ListItem({value, checked, children}) {
	return (
		<span>
			<div>{children}</div>
		</span>
	);
}

ListItem.propTypes = {
	value: string.isRequired
};

module.exports = ListItem;
