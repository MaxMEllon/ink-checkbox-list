const {h, Text} = require('ink');

function CheckBox({checkedCharacter, uncheckedCharacter, isChecked}) {
	const mark = isChecked === true ? checkedCharacter : uncheckedCharacter;
	return (
		<Text green>{` ${mark}  `}</Text>
	);
}

module.exports = CheckBox;
