const pypyjs = require("./lib/pypyjs.js");

function benchmark() {
  var startTime;
  pypyjs.set('total', 0).then(function() {
    startTime = Date.now();
    return pypyjs.exec('for i in range(1000 * 1000): total += (i & 3)');
  }).then(function() {
    return pypyjs.get('total');
  }).then(function(result) {
    console.log('result: ' + result + ' (took ' + (Date.now() - startTime) + ' ms)');
    // Run it again!
    setTimeout(benchmark, 500);
  });
}

pypyjs.ready().then(benchmark);

