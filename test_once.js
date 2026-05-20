var once = require('./node_modules/once/once.js');
var f = once(function named() {
  console.log('called');
  if (!this.done) {
    this.done = true;
    process.nextTick(function() { named(); });
  }
});
f();
console.log('after first call');
