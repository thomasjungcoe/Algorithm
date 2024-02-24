// Quicksort algo
// 1.) partition
// 2.) quick_sort
//   high and low are inclusive [lo, hi]

function qs(arr: number[], lo: number, hi: number): void {
    if (lo >= hi) {
        return;
    }

    const pivotIdx = partition(arr, lo, hi);

    qs(arr, lo, pivotIdx - 1);
    qs(arr, pivotIdx + 1, hi);
    
}

function partition(arr: number[], lo: number, hi: number): number {
    const pivot = arr[hi];

    let idx = lo - 1;

    for (let i = lo; i < hi; i++) {
        if (arr[i] <= pivot) {
            idx++;
            const tmp = arr[i];
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

export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length -1);
}



// example
// [ 8 7 6 '4' |5| ],  5 = pivot
// [ 4 7 6 8 |5|], change pivot following pivote rule.
// into 
// [ 4 ]