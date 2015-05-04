(function (exports) {
  'use strict';

  function comparator(a, b) {
    return b - a;
  }

  var heapSort = (function () {

    /**
     * Finds the correct place of given element in given max heap.
     *
     * @private
     * @param {Array} array Array.
     * @param {Number} index Index of the element which palce in
     * the max heap should be found.
     * @param {Number} heapSize Size of the heap.
     * @param {function} cmp Comparison function.
     */
    function heapify(array, index, heapSize, cmp) {
      
      //console.log('    Swapped ' + JSON.stringify(array[index]));
	    
      var left = 2 * index + 1;
      //console.log('This is left ' + left);

      var right = 2 * index + 2;
      //console.log('This is right ' + right);
      var largest = index;
      //console.log('This is largest ' + largest);
      

      if (left < heapSize && cmp(array[left], array[index]) > 0) {
        largest = left;
        //console.log('left ' + JSON.stringify(array[left]));
      }

      if (right < heapSize && cmp(array[right], array[largest]) > 0) {
        largest = right;
        //console.log('    right ' + JSON.stringify(array[right]));
      }

      //console.log(JSON.stringify(array));
      //console.log('\n');
      if (largest !== index) {
        var temp = array[index];
        console.log('Before ' + JSON.stringify(array));
        console.log('    Swapped ' + JSON.stringify(array[largest]) + ' with ' + JSON.stringify(array[index]));
        //console.log(JSON.stringify(array));
        array[index] = array[largest];
        array[largest] = temp;
        console.log('After ' + JSON.stringify(array));
        console.log('\n');
          heapify(array, largest, heapSize, cmp);
        //console.log(JSON.stringify(array));
        //console.log('    Swapped ' + JSON.stringify(temp) + ' with ' + JSON.stringify(array[left]));
        //console.log('\n');
      }
    }

    /**
     * Builds max heap from given array.
     *
     * @private
     * @param {Array} array Array which should be turned into max heap.
     * @param {function} cmp Comparison function.
     * @return {Array} array Array turned into max heap.
     */
    function buildMaxHeap(array, cmp) {
      for (var i = Math.floor(array.length / 2); i >= 0; i -= 1) {
        heapify(array, i, array.length, cmp);
      }
      //console.log('     The heap ' + JSON.stringify(array));
      return array;
    }




    /**
     * Heapsort. Turns the input array into max
     * heap and after that sorts it.<br><br>
     * Time complexity: O(N log N).
     *
     * @example
     *
     * var sort = require('path-to-algorithms/src' +
     * '/sorting/heapsort').heapSort;
     * console.log(sort([2, 5, 1, 0, 4])); // [ 0, 1, 2, 4, 5 ]
     *
     * @public
     * @module sorting/heapsort
     * @param {Array} array Input array.
     * @param {Function} cmp Optional. A function that defines an
     * alternative sort order. The function should return a negative,
     * zero, or positive value, depending on the arguments.
     * @return {Array} Sorted array.
     */
    return function (array, cmp) {
      cmp = cmp || comparator;
      var size = array.length;
      var temp;
      buildMaxHeap(array, cmp);
      for (var i = array.length - 1; i > 0; i -= 1) {
        temp = array[0];
        array[0] = array[i];
        array[i] = temp;
        size -= 1;
        heapify(array, 0, size, cmp);
      }
      return array;
    };
  }());

  exports.heapSort = heapSort;

})(typeof window === 'undefined' ? module.exports : window);


