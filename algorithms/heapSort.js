module.exports = function heapsort(arr) {
    arr = buildheap(arr);
    var l=arr.length;
    for (var i = l - 1; i >= 0; --i) {
        temp = arr[l - 1];
        arr[l - 1] = arr[0];
        arr[0] = temp;
        l--;
        arr = heapify(arr, 0, l)
    }
    return arr;
}

function buildheap(arr) {
    for (var i = Math.floor(arr.length / 2 - 1); i >= 0; i--)
        arr = heapify(arr, i, arr.length);
    return arr;
}

function heapify(arr, i, l) {
    // Indices of node, left child and right child
    var indexes = [i, Math.floor((i + 1) * 2 - 1), Math.floor((i + 1) * 2)];
    	// if right child is greater than l, discard it
    	if(indexes[2]>=l)
    		indexes.splice(2,1);
    	// if left child is greater than l, discard it
    	if(indexes[1]>=l)
    		indexes.splice(1,1);
        // Values of the array correspoding to the indices
        var values = indexes.map(function(index) {
            return arr[index]
        });
        // Index of maximum value in values array (is it node(0) or left(1) or right(2) child)
        var max = values.reduce(function(iMax, x, i, a) {
            return x > a[iMax] ? i : iMax;
        }, 0);
        // If node is not the maximum, swap with the maximum
        if (max != 0) {
            var temp = arr[indexes[max]]
            arr[indexes[max]] = arr[indexes[0]]
            arr[indexes[0]] = temp
            heapify(arr, indexes[max],l)
        }
    return arr;
}
