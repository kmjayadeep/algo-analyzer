module.exports = {
    "function": function(arr) {
        var array = arr.slice(0).sort(function(a, b) {
            return a - b
        })
        return array
    }
}
