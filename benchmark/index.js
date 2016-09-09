var Benchmark = require('benchmark');
var reactalyst = require('../lib/index');

var suite = new Benchmark.Suite;

// add tests
suite.add('reactalyst filter', function() {
  //to test later.
})
// add listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
// run async
.run({ 'async': true });