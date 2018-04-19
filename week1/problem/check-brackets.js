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
  var index = 0;
  for (let i = 0; i < str.split('').length; i++) {
    let char = str.charAt(i);
    index += 1;
    if (['(', '{', '['].indexOf(char) >= 0) {
      stack.Push({key: char, index: index});
    } else if ([')', '}', ']'].indexOf(char) >= 0) {
      if (stack.Empty()) {
        return index;
      }
      let top = stack.Pop();
      if ((top.key === '(' && char !== ')') ||  (top.key === '[' && char !== ']') || (top.key === '{' && char !== '}')) {
        return index;
      }
    }
  }
  if (stack.Empty()) {
    return 'Success';
  } else {
    return stack.Pop().index;
  }
}
