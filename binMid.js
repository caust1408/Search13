load('search.js');


function binSearchMid(arr, data) {
   var upperBound = arr.length-1;
   var lowerBound = 0;
   while (lowerBound <= upperBound) {
      var mid = Math.floor((upperBound + lowerBound) / 2);
      print("Current midpoint: " + mid);
      if (arr[mid] < data) {
         lowerBound = mid + 1;
      }
      else if (arr[mid] > data) {
         upperBound = mid - 1;
      }
      else {
         return mid;
      }
   }
   return -1;
}

var nums = [];
for (var i = 0; i < 100; ++i) {
   nums[i] = Math.floor(Math.random() * 101);
}
insertionsort(nums);
dispArr(nums);
print();
write("Enter a value to search for: ");
var val = parseInt(readline());
var retVal = binSearchMid(nums, val);
if (retVal >= 0) {
   print("Found " + val + " at position " + retVal);
}
else {
   print(val + " is not in array.");
}