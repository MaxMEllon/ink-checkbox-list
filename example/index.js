const {render} = require('ink');
const React = require('react');
const {List, ListItem} = require('../lib');
const readline = require('readline');

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
process.stdin.resume();

const unmount = render(
	<List
		onSubmit={(list) => {
			console.log(list)
			process.exit(0);
		}}
	>
		<ListItem value="1" checked>option1</ListItem>
		<ListItem value="2" disabled>option2</ListItem>
		<ListItem value="3">option3</ListItem>
		<ListItem value="4" checked>option4</ListItem>
	</List>
);
