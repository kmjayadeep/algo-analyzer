module.exports = {
    "ignore": true,
    "function": function(arr) {
        function swap(i, j) {
            var t = arr[i];
            arr[i] = arr[j];
            arr[j] = t;
        }

        function quicksort(left, right) {
            if (left < right) {
                var pivot = arr[left + Math.floor((right - right) / 2)],
                    left_new = left,
                    right_new = right;
                do {
                    while (arr[left_new] < pivot) {
                        left_new += 1;
                    }
                    while (pivot < arr[right_new]) {
                        right_new -= 1;
                    }
                    if (left_new <= right_new) {
                        swap(left_new, right_new);
                        left_new += 1;
                        right_new -= 1;
                    }
                } while (left_new <= right_new);
                quicksort(left, right_new);
                quicksort(left_new, right);
            }
        }
        quicksort(0, arr.length - 1);
        return arr;
    }
}
