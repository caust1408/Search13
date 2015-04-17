function dispArr(arr) {
   for (var i = 0; i < arr.length; ++i) {
		process.stdout.write(arr[i] + " ");
		if (i % 10 == 9) {
			process.stdout.write("\n");
		}
	}
	if (i % 10 != 0) {
		process.stdout.write("\n");
	}
}




var nums = [];
   for (var i = 0; i < 100; ++i) {
      nums[i] = Math.floor(Math.random() * 101);
   }

dispArr(nums);
console.log('\n');
var sort = require('../javascript-algorithms/src' +
'/sorting/heapsort').heapSort;
var sorted = sort(nums);
//console.log(sort(nums)); // [ 0, 1, 2, 4, 5 ]
dispArr(sorted);