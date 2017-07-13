const {h, mount} = require('ink');
const {List, ListItem} = require('../lib');
const readline = require('readline');

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.setEncoding('utf8');

const unmount = mount(
	<List
		onSubmit={(list) => {
			console.log(list)
			process.exit(0);
		}}
	>
		<ListItem>aaaa</ListItem>
	</List>
);

setTimeout(() => {
	unmount();
	process.exit(1);
}, 10000);
