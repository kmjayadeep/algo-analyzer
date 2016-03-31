var fs = require("fs");
var path = require("path");
var randomExt = require('random-ext')
var algos = []

fs
    .readdirSync(__dirname + '/algorithms')
    .forEach(function(file) {
        var al = require(path.join(__dirname + '/algorithms', file));
        algos.push({
            name: file.slice(0, al.length - 4),
            fun: al,
            result: []
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
var step = 5000;
var final = 15000;
while (batch.length<final) {
    batch = batch.concat(randomExt.integerArray(step, 999))
    console.log('n = ' + batch.length)
    algos.map(algo => {
        var timeStart = Date.now()
        algo.fun(batch)
        var timeDiff = Date.now() - timeStart
        console.log(algo.name + '\t' + timeDiff)
        algo.result.push({
            input: batch.length,
            time: timeDiff
        })
        return algo
    })
}

// console.log(JSON.stringify(algos))
