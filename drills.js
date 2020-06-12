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
// display(starTrek());

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

// peek(starTrek());

/* *************************************
        IsEmpty Function
*****************************************/
function isEmpty(stack) {
  if (stack.top === null) return console.log('Stack is empty');
}

console.log('***************Is Empty*************');

// isEmpty(starTrek());

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

// remove(starTrek(), 'McCoy');


/* *************************************
        Palindromes Function
*****************************************/

function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  const strStack = new stackClass();

  for (let i = 0; i < s.length; i++) {
    strStack.push(s.charAt(i));
  }
	
  for(let i = 0; i < s.length/2; i++) {
    if (strStack.pop() !== s.charAt(i)) {
      return false;
    }
  }
  return true;
}

// True, true, true, false
console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));

// display(is_palindrome("Tauhida"));


/* *************************************
        Matching Parentheses Function
*****************************************/

function matchParenthesis(exp) {
  let openingStack = new stackClass();
  let closingStack = new stackClass();

  for (let i = 0; i < exp.length; i++) {
    if (exp[i] === '(') {
      openingStack.push(exp[i]);
    } else if (exp[i] === ')') {
      closingStack.push(exp[i]);
		}
	}
	
	while (openingStack !== null) {
		let opening = openingStack.pop();
		let closing = closingStack.pop();

		if (closing === ')' || opening === ')') {
			
	}


	
  
	


}

