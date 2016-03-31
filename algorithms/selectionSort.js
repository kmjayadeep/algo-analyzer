module.exports = function(arr) {
    var array = arr.slice(0)
    for (var i = 0; i < array.length; i++) {
        var s = i
        for (var j = i + 1; j < array.length; j++) {
            if (array[j] < array[s])
                s = j
        }
        var t = array[i]
        array[i] = array[s]
        array[s] = t;
    }
    return array
}
