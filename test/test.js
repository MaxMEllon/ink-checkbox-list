import test from 'ava';
import {spy} from 'sinon';
import {
	h,
	renderToString,
	Text
} from 'ink';
import {List, ListItem} from '../lib/index';
import Cursor from '../lib/components/cursor';
import CheckBox from '../lib/components/check-box';

test('no item', t => {
	t.is(renderToString(<List/>), '');
});

test('blank child in list item', t => {
	t.is(renderToString(<ListItem value="test"/>), '\n');
});

test('renderToString simple case', t => {
	t.is(renderToString(<ListItem value="test">sample</ListItem>), 'sample\n');
});

test('renderToString rich child component', t => {
	t.is(renderToString(<ListItem value="test"><Text>s</Text></ListItem>), 's\n');
});

test('checkbox', t => {
	t.is(renderToString(
		<CheckBox
			checkedCharacter="[x]"
			uncheckedCharacter="[ ]"
			isChecked={false}
		/>
	), renderToString(<Text green>{` [ ]  `}</Text>));

	t.is(renderToString(
		<CheckBox
			checkedCharacter="[x]"
			uncheckedCharacter="[ ]"
			isChecked
		/>
	), renderToString(<Text green>{` [x]  `}</Text>));
});

test('cursor', t => {
	t.is(renderToString(
		<Cursor
			cursorCharacter="--->"
			isActive
		/>
	), '---> ');

	t.is(renderToString(
		<Cursor
			cursorCharacter="--->"
			isActive={false}
		/>
	), '     ');
});

test('called `onChange` when user pressed space key', t => {
	const setRef = spy();
	const onChange = spy();
	const onSubmit = spy();

	renderToString(<List ref={setRef} onChange={onChange} onSubmit={onSubmit}/>);

	const ref = setRef.firstCall.args[0];
	ref.handleKeyPress('', {name: 'space'});

	t.true(onChange.called);
	t.false(onSubmit.called);
});

test('called `onSubmit` when user pressed return key', t => {
	const setRef = spy();
	const onChange = spy();
	const onSubmit = spy();

	renderToString(<List ref={setRef} onChange={onChange} onSubmit={onSubmit}/>);

	const ref = setRef.firstCall.args[0];
	ref.handleKeyPress('', {name: 'return'});

	t.false(onChange.called);
	t.true(onSubmit.called);
});
