function boo(bool) {
  // Uses the operator typeof to check if is a boolean
  // if yes then return true, if it is another type then return false
  console.log(typeof bool);
  return typeof bool === 'boolean';
}

boo("boolean");