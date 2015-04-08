load('ch13.js');


function findMax(arr) {
	var max = arr[0];
	for (var i = 1; i < arr.length; ++i) {
		if (arr[i] > max) {
			max = arr[i];
		}
	}
	return max;
}

var nums = [];
for (var i = 0; i < 100; ++i) {
	nums[i] = Math.floor(Math.random() * 101);
}
var minValue = findMin(nums);
dispArr(nums);
print();
print();
print("The minimum value is: " + minValue);
var maxValue = findMax(nums);
print();
print("The maximum value is: " + maxValue);
