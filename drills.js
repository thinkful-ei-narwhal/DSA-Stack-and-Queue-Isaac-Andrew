const stackClass = require('./stackClass');

function starTrek() {
	const stack = new stackClass();

	stack.push('Kirk');
	stack.push('Spock');
	stack.push('McCoy');
	stack.push('Scotty');

	return stack;
}

function display(stack) {
	let currNode = stack.top;
	if (stack.top === null) {
		return;
	}

	while (currNode !== null) {
		console.log(currNode);
		currNode = currNode.next;
	}
}
display(starTrek());

/* *************************************
        Peek Function
*****************************************/

function peek(stack) {
	if (stack.top === null) {
		return;
	}
	return console.log(stack.top.data);
}

console.log('***************Peek*************');

peek(starTrek());

/* *************************************
        IsEmpty Function
*****************************************/
function isEmpty(stack) {
	if (stack.top === null) return console.log('Stack is empty');
}

console.log('***************Is Empty*************');

isEmpty(starTrek());

/* *************************************
        Remove Function
*****************************************/
function remove(stack, item) {
	if (stack.top !== null) {
		let popOff;

		while (popOff !== item) {
			popOff = stack.pop();
		}

		return console.log(popOff);
	}
}

console.log('***************Remove*************');

remove(starTrek(), 'McCoy');
