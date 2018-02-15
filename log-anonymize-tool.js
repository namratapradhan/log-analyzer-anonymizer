var parser = require('./parser');
var DataAnonymizer = require('data-anonymizer');
var fs = require('fs');

var args = process.argv.slice(2);

var analyzer = parser.analyzer;
var writeStream = fs.createWriteStream(args[1], { flags: 'a' })

/* Seeds to anonymize data. Seed can be anything you like.*/
var apiKeyAnonymizer = new DataAnonymizer({ seed: 'apikey' });
var accountIdAnonymizer = new DataAnonymizer({ seed: 'account' });
var usernameAnonymizer = new DataAnonymizer({ seed: 'username' });
var tenantAnonymizer = new DataAnonymizer({ seed: 'tenant' });
var subAccountIdAnonymizer = new DataAnonymizer({ seed: 'subaccount' });

analyzer.overview(function (logs) {
    for (var i = 0, l = logs.length; i < l; ++i) {
        var log = logs[i];
        anonymizeFields(log);
        writeToFile(log);
    }
});

analyzer.analyzeFile(args[0], function (err, result) {
    if (err) {
        console.error(err);
    } else {
        console.log("Data anonymized!");
    }
});

function writeToFile(log) {
    var logLine = log['timestamp'] + ' ' + log['status'] + ' "' + log['method'] + ' ' + log['url'] + ' ' + 'HTTP/' + log['http-version'] + '" ' + log['api-key'] + ' ' + log['request-type'] + ' ' + log['account-id'] + ' ' + log['username']
        + ' ' + log['request-duration'] + ' ' + log['bytes-sent'] + ' ' + log['request-length'] + ' ' + log['tenant'] + ' ' + log['sub-account-id'] + ' ' + log['service-address'] + ' ' + log['user-agent'] + ' ' + log['cache-status'] + ' ' + log['entity-id'];
    writeStream.write(logLine + '\n');
}

function anonymizeFields(log) {
    log['api-key'] = apiKeyAnonymizer.anonymize(log['api-key'] || '');
    log['account-id'] = accountIdAnonymizer.anonymize(log['account-id'] || '');
    log['username'] = usernameAnonymizer.anonymize(log['username'] || '');
    log['tenant'] = usernameAnonymizer.anonymize(log['tenant'] || '');
    log['sub-account-id'] = subAccountIdAnonymizer.anonymize(log['sub-account-id'] || '');
}

