load('search.js');

function seqSearch1(arr, data) {
   for (var i = 0; i < arr.length; ++i) {
      if (arr[i] == data) {
         return true;
      }
   }
   return false;
   }
   
   var nums = [];
   for (var i = 0; i < 100; ++i) {
      nums[i] = Math.floor(Math.random() * 101);
   }
   
  dispArr(nums);
   write("Enter a number to search for: ");
   var num = parseInt(readline());
   print();
   if (seqSearch1(nums, num)) {
      print(num + " is in the array.");
   }
   else {
      print(num + " is not in the array.");
   }
   print();
   dispArr(nums);

