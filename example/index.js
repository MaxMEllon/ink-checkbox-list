const {h, mount} = require('ink');
const {List, ListItem} = require('../src');
const readline = require('readline');

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

let component;

const unmount = mount(
  h(List, {
	ref: co => (component = co),
	onSubmit: list => {
		console.log(list);
		process.exit(0);
	}
}, [
	h(ListItem, {}, 'aaaa'),
	h(ListItem, {}, 'aaaa'),
	h(ListItem, {}, 'aaaa'),
	h(ListItem, {}, 'aaaa'),
	h(ListItem, {}, 'aaaa')
])
);

setTimeout(() => {
	unmount();
	process.exit(1);
}, 10000);
