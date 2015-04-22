function dispArr(arr) {
   for (var i = 0; i < arr.length; ++i) {
		write(arr[i] + " ");
		if (i % 10 == 9) {
			write("\n");
		}
	}
	if (i % 10 != 0) {
		write("\n");
	}
}
function insertionsort(arr) {
   var temp, inner;
   var nums = 0;
   for (var outer = 1; outer <= arr.length-1; ++outer) {
      print('outer ' + outer);
      print('inner ' + inner + '\n');
      temp = arr[outer];
      inner = outer;
         while (inner > 0 && (arr[inner-1] >= temp)) {
            nums++;
            
            arr[inner] = arr[inner-1];
            --inner;
         }
         print('      times ' + nums);
      arr[inner] = temp;
   }
}

function swap(arr, index, index1) {
   temp = arr[index];
   arr[index] = arr[index1];
   arr[index1] = temp;
}

function count(arr, data) {
   var count = 0;
   var position = binSearch(arr, data);
   if (position > -1) {
      ++count;
      for (var i = position-1; i > 0; --i) {
         if (arr[i] == data) {
            ++count;
         }
         else {
            break;
         }
      }
      for (var i = position+1; i < arr.length; ++i) {
         if (arr[i] == data) {
            ++count;
         }
         else {
            break;
         }
      }
   }
   return count;
}



