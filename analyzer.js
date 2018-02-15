var parser = require('./parser');

var analyzer = parser.analyzer;

analyzer.overview(function (logs) {
    var timestamp = logs.map(l => l.timestamp);
    var minTimestamp = timestamp.reduce((a, b) => Math.min(a, b));
    var maxTimestamp = timestamp.reduce((a, b) => Math.max(a, b));
    var startTimestamp = new Date(0);
    startTimestamp.setUTCSeconds(minTimestamp);
    var endTimestamp = new Date(0);
    endTimestamp.setUTCSeconds(maxTimestamp);
    return {
        timestamp: {
            'startTimestamp': startTimestamp,
            'endTimestamp': endTimestamp
        }
    }
});

analyzer.group(':tenant', function (log) {
    return log.tenant;
});

analyzer.group(':user-agent', function (log) {
    return log['user-agent'];
});

analyzer.group(':status', function (log) {
    return log['status'];
});

module.exports = {
    analyzeLogFile: function (fileName, callback) {
        analyzer.analyzeFile(fileName, function (err, result) {
            if (err) {
                callback(err, null);
            } else {
                callback(null, {
                    _time_duration: result.overall.overview.timestamp,
                    _tenants: result.overall.groups[':tenant'],
                    _user_agents: result.overall.groups[':user-agent'],
                    _statuses: result.overall.groups[':status']
                });
            }
        });
    }
};