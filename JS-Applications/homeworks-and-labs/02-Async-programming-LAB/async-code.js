console.log('Hello');
setTimeout(() => {
  // always logged after the call stack is clear (last)
  console.log('Middle Earth');
}, 0);

console.log('End of the world');