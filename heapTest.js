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
   for (var i = 0; i < 15; ++i) {
      nums[i] = Math.floor(Math.random() * 51);
   }
//var classarr = [40,7,41,13,19,92,51,31,13,12];
dispArr(nums);
console.log('\n');
var sort = require('./heapsort.js').heapSort;
var sorted = sort(nums);
//console.log(sort(nums)); // [ 0, 1, 2, 4, 5 ]
dispArr(sorted);
