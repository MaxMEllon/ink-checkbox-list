# ink-checkbox-list [![Build Status](https://travis-ci.org/MaxMEllon/ink-checkbox-list.svg?branch=master)](https://travis-ci.org/MaxMEllon/ink-checkbox-list) [![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

> Checkbox list component for [Ink](https://github.com/vadimdemedes/ink)

Demo
---

![Demo Image](./.github/demo.gif)

Install
---

```
$ npm install ink-checkbox-list
```

Usage
---

```js
const {h, render} = require('ink');
const {List, ListItem} = require('ink-checkbox-list');

render(
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
```

**Note**:

Use this snippet to enable `keypress` events:

```js
const readline = require('readline');

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
```

## Props

### List

#### checkedChar

Type: `string`
Default: `☒`

This character is used checked component.

#### uncheckedChar

Type: `string`
Default: `☐`

This character is used unchecked component.

#### cursorChar

Type: `string`
Default: `❯`

This character is used current cursor line.

#### onChange

Type: `Function`

Function to call when you pressed <kbd>Space</kbd> key.

#### onSubmit

Type: `Function`

Function to call when you pressed <kbd>Enter</kbd> key.

### ListItem

#### value

Type: `string`
**Required**

`onChange()`/`onSubmit()` is used this props.
Callback function return `value` list.

Key bindings
---

| key | action |
|---|---|
| <kbd>Space</kbd>| toggle check/uncheck |
| <kbd>Enter</kbd>| submit item list |
| <kbd>↑</kbd>| move to up a cursor |
| <kbd>↓</kbd>| move to down a cursor |

LICENSE
---

MIT © 2017 MaxMellon
