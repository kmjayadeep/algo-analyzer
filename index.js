var fs = require("fs");
var path = require("path");
var randomExt = require('random-ext')
var algos = []

fs
    .readdirSync(__dirname + '/algorithms')
    .forEach(function(file) {
        var fileJson = require(path.join(__dirname + '/algorithms', file));
        algos.push({
            name: file.slice(0, file.length - 3),
            fun: fileJson.function,
            result: [],
            ignore: fileJson.ignore
        })
    });


// var batch = randomExt.integerArray(20000, 999);
// console.log(batch)
// console.log(algos[0].fun(batch))

// console.log(batch.length)
// var timeStart = Date.now()
// algos[1].fun(batch)
// var timeDiff = Date.now() - timeStart
// console.log(algos[1].name + '\t' + timeDiff)

// var timeStart = Date.now()
// algos[2].fun(batch)
// var timeDiff = Date.now() - timeStart
// console.log(algos[2].name + '\t' + timeDiff)
// return;

var batch = [];
var range = 999;
var step = 5000;
var final = 50000;
var points = [];
var titles = [];
titles.push("Batch Length")
algos.map(algo => {
    if (!algo.ignore)
        titles.push(algo.name);
})
points.push(titles);
while (batch.length < final) {
    batch = batch.concat(randomExt.integerArray(step, range))
    console.error('n = ' + batch.length)
    var vertical = [];
    vertical.push(batch.length);
    algos.map(algo => {
        if (!algo.ignore) {
            var timeStart = Date.now()
            var sort=algo.fun(batch)
            var timeDiff = Date.now() - timeStart
            console.error(algo.name + '\t' + timeDiff)
            algo.result.push({
                input: batch.length,
                time: timeDiff
            })
            vertical.push(timeDiff);
        }
        return algo
    })
    points.push(vertical);
}

console.log("result.push(\'" + JSON.stringify(points) + "\')");
// console.log(JSON.stringify(algos))
