var async = require('async');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log("Before");

async.waterfall(
    [
        read_testcase_num,
        read_cases
    ],
    function (err, result) {
        if (err)
            console.log("err");
        console.log(result);
        rl.close();
    }
);

function read_testcase_num(callback) {
    rl.question("", (str) => {
        callback(null, str);
    });
}

function read_cases(str, callback) {
    var cases = Number(str), i = 1;
    var lst = [];

    async.whilst(
        function () { return i <= cases; },
        function (next) {
            rl.question("", (str) => {
                lst.push("case " + i + ": \"" + str + "\"");
                i++;
                next();
            });
        },
        function (err) {
            if (err)
                console.log("err");
            callback(null, lst);
        }
    );
}

console.log("After");


// generate 5 users
async.times(5, function (n, next) {
    setTimeout(function (){
        next(null, {n: 'user' + n});
    }, 1000);
    //next(null, {n: 'user' + n});
}, function (err, users) {
    // we should now have 5 users
    console.log(users);
});
