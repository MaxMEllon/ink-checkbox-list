const {h, mount, Text} = require('ink');
const {List, ListItem} = require('../src');

let component;

const unmount = mount(
  h(List, {
	ref: co => (component = co),
	checkedChar: '[x]',
	nocheckedChar: '[ ]',
	cursorChar: '--->',
	onDeside: () => {
		console.log(component.getCheckedItem());
		process.exit(0);
	}
}, [
	h(ListItem, {}, h(Text, {red: true}, 'aaaa')),
	h(ListItem, {}, h(Text, {yellow: true}, 'aaaa')),
	h(ListItem, {}, h(Text, {green: true}, 'aaaa')),
	h(ListItem, {}, h(Text, {purple: true}, 'aaaa')),
	h(ListItem, {}, 'aaaa')
])
);

setTimeout(() => {
	unmount();
	process.exit(1);
}, 10000);
