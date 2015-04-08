load('ch13.js');

function swap(arr, index, index1) {
	temp = arr[index];
	arr[index] = arr[index1];
	arr[index1] = temp;
}

var numbers = [5,1,7,4,2,10,9,3,6,8];
print(numbers);
for (var i = 1; i <= 3; i++) {
	seqSearch(numbers, 4);
	print(numbers);
}
