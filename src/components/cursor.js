const {h} = require('ink');

function Cursor({cursorCharacter, isActive}) {
	const c = isActive === true ?
		`${cursorCharacter} ` :
		' '.repeat(cursorCharacter.length + 1);
	return (
		<span>{c}</span>
	);
}

module.exports = Cursor;
