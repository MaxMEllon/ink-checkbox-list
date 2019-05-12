const {Text} = require('ink');
const React = require('react');

function CheckBox({checkedCharacter, uncheckedCharacter, disabledCharacter, isChecked, isDisabled}) {
	let mark = isChecked === true ? checkedCharacter : uncheckedCharacter;
	mark = isDisabled === true ? disabledCharacter : mark;
	return (
		<Text green>{` ${mark}  `}</Text>
	);
}

module.exports = CheckBox;
