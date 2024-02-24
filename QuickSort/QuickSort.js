"use strict";
// Quicksort algo
// 1.) partition
// 2.) quick_sort
//   high and low are inclusive [lo, hi]
Object.defineProperty(exports, "__esModule", { value: true });
function qs(arr, lo, hi) {
    if (lo >= hi) {
        return;
    }
    var pivotIdx = partition(arr, lo, hi);
    qs(arr, lo, pivotIdx - 1);
    qs(arr, pivotIdx + 1, hi);
}
function partition(arr, lo, hi) {
    var pivot = arr[hi];
    var idx = lo - 1;
    for (var i = lo; i < hi; i++) {
        if (arr[i] <= pivot) {
            idx++;
            var tmp = arr[i];
            arr[i] = arr[idx];
            arr[idx] = tmp;
        }
    }
    // pivot algo
    idx++;
    arr[hi] = arr[idx];
    arr[idx] = pivot;
    return idx;
}
function quick_sort(arr) {
    qs(arr, 0, arr.length - 1);
}
exports.default = quick_sort;
// example
// [ 8 7 6 '4' |5| ],  5 = pivot
// [ 4 7 6 8 |5|], change pivot following pivote rule.
// into 
// [ 4 ]
