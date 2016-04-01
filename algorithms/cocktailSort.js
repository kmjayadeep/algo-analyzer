module.exports = function(arr) {
    var isSorted = true;
    while (isSorted) {
        for (var i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                var temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                isSorted = true;
            }
        }
        if (!isSorted)
            break;
        isSorted = false;
        for (var j = arr.length - 1; j > 0; j--) {
            if (arr[j - 1] > arr[j]) {
                var temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;
                isSorted = true;
            }
        }
    }
    return arr;
}
