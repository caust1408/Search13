load('search.js');


function binSearch(arr, data) {
   var upperBound = arr.length-1;
   var lowerBound = 0;
      while (lowerBound <= upperBound) {
         var mid = Math.floor((upperBound + lowerBound) / 2);
         print('this is mid ' + mid);
         print('this is arr[mid] ' + arr[mid]);
         print('this is upper bound ' + upperBound);
         print('this is lower bound ' + lowerBound + '\n');

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



var words = read("words.txt").split(" ");
insertionsort(words);
var word = "rhetoric";
var start = new Date().getTime();
var position = binSearch(words, word);
var stop = new Date().getTime();
var elapsed = stop - start;
if (position >= 0) {
print("Found " + word + " at position " + position + ".");
print("Binary search took " + elapsed + " milliseconds.");
}
else {
print(word + " is not in the file.");
}