load('search.js');
function seqSearch2(arr, data) {
   for (var i = 0; i < arr.length; ++i) {
      if (arr[i] == data) {
         return i;
      }
   }
   return -1;
   }

var nums = [];
   for (var i = 0; i < 100; ++i) {
      nums[i] = Math.floor(Math.random() * 101);
   }
write("Enter a number to search for: ");
var num = readline();
print();
var position = seqSearch2(nums, num);
   if (position > -1) {
      print(num + " is in the array at position " + position);
   }
   else {
      print(num + " is not in the array.");
   }
print();
dispArr(nums);