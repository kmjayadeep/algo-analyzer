module.exports = function(arr) {
    for (var i = 0; i < arr.length; i++) {
        var k = arr[i];
        for (var j = i; j > 0 && k < arr[j - 1]; j--)
            arr[j] = arr[j - 1];
        arr[j] = k;
    }
    return arr;
}