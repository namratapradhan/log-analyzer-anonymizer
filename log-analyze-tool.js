var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
var logAnalyzer = require("./analyzer");

var args = process.argv.slice(2);

console.log("\n Analyzing log data. Please wait...")
logAnalyzer.analyzeLogFile(args[0], function (err, result) {
    if (err) {
        console.log(err);
    } else {
        logResults = result;
        displayOptions();
    }
});

var logResults = {};

var user_options = [
    "\n1. Time period covered by the log file",
    "\n2. Number of calls by tenant",
    "\n3. List of user agents by volume",
    "\n4. HTTP status code by frequency",
    "\n5. Exit \n>"
];

function displayOptions() {
    var options = user_options.join('');
    console.log("\nPlease enter a number to select the corresponding option (1-5)");
    rl.setPrompt(`${options}`);
    rl.prompt();
}

function processAnswer(data) {
    var ans = data.trim();
    switch (ans) {
        case "1":
            console.log(logResults._time_duration);
            displayOptions();
            break;
        case "2":
            console.log(logResults._tenants);
            displayOptions();
            break;
        case "3":
            console.log(logResults._user_agents);
            displayOptions();
            break;
        case "4":
            console.log(logResults._statuses);
            displayOptions();
            break;
        case "5":
            rl.close();
            break;
        default:
            displayOptions();
            break;
    }
}

rl.on('line', function (answer) {
    processAnswer(answer);
});

rl.on('close', function () {
    console.log("\nExiting...\n\nGood bye!!");
    process.exit();
});

