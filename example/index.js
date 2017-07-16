const { h, render } = require('ink');
const { List, ListItem } = require('../lib');
const readline = require('readline');

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.setEncoding('utf8');

const unmount = render(h(
	List,
	{
		onSubmit: list => {
			unmount();
			console.log(list);
			process.exit(0);
		}
	},
	h(
		ListItem,
		{ value: '1' },
		'option1'
	),
	h(
		ListItem,
		{ value: '2' },
		'option2'
	),
	h(
		ListItem,
		{ value: '3' },
		'option3'
	),
	h(
		ListItem,
		{ value: '4' },
		'option4'
	)
));

