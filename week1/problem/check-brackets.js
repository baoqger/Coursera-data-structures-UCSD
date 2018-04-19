class Stack {
  constructor() {
    this.arr = [];
  }
  Push(ele) {
    this.arr.push(ele);
  }
  Pop() {
    return this.arr.pop();
  }
  Empty() {
    return this.arr.length === 0;
  }
  Top() {
    return this.arr[this.arr.length - 1];
  }
}


function isBalanced(str) {
  let stack = new Stack();
  str.split('').forEach((char) => {
    if (['(', '{', '['].indexOf(char) >= 0) {
      stack.Push(char);
    } else {
      if (stack.Empty()) {
        return false;
      }
      let top = stack.Pop();
      if ((top === '(' && char !== ')') ||  (top === '[' && char !== ']') || (top === '{' && char !== ')')) {
        return false;
      }
    }
  });
  return stack.Empty();
}

// test case1
isBalanced('asdfasdfsdfasf([)')