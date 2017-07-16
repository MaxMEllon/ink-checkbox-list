const {h, render} = require('ink');
const {List, ListItem} = require('../lib');
const readline = require('readline');

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.setEncoding('utf8');

const unmount = render(
	<List
		onSubmit={(list) => {
			console.log(list)
			process.exit(0);
		}}
	>
		<ListItem value="1">option1</ListItem>
		<ListItem value="2">option2</ListItem>
		<ListItem value="3">option3</ListItem>
		<ListItem value="4">option4</ListItem>
	</List>
);
