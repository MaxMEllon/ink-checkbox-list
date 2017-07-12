const {h, Text} = require('ink');

function CheckBox({checkedCharacter, uncheckedCharacter, checked, index}) {
	const mark = checked.includes(index) ?
		checkedCharacter :
		uncheckedCharacter;
	return (
		<Text green>{` ${mark}  `}</Text>
	);
}

module.exports = CheckBox;
