module.exports = function(arr) {
    var array = arr.slice(0)
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                var t = array[j]
                array[j] = array[j + 1]
                array[j + 1] = t;
            }
        }
    }
    return array
}