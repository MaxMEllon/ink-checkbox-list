import test from 'ava';
import {
	h,
	render as build,
	renderToString,
	Text
} from 'ink';
import {List, ListItem} from '../lib/index';
import Cursor from '../lib/components/cursor';
import CheckBox from '../lib/components/check-box';

const render = tree => renderToString(build(tree));

test('no item', t => {
	t.is(render(<List/>), '');
});

test('blank child in list item', t => {
	t.is(render(<ListItem/>), '\n');
});

test('render simple case', t => {
	t.is(render(<ListItem>sample</ListItem>), 'sample\n');
});

test('render rich child component', t => {
	t.is(render(<ListItem><Text>s</Text></ListItem>), 's\n');
});

test('checkbox', t => {
	t.is(render(
		<CheckBox
			checkedCharacter="[x]"
			uncheckedCharacter="[ ]"
			isChecked={false}
		/>
	), render(<Text green>{` [ ]  `}</Text>));

	t.is(render(
		<CheckBox
			checkedCharacter="[x]"
			uncheckedCharacter="[ ]"
			isChecked
		/>
	), render(<Text green>{` [x]  `}</Text>));
});

test('cursor', t => {
	t.is(render(
		<Cursor
			cursorCharacter="--->"
			isActive
		/>
	), '---> ');

	t.is(render(
		<Cursor
			cursorCharacter="--->"
			isActive={false}
		/>
	), '     ');
});
