var Analyzer = require('log-analyzer');

var format = ':timestamp :status ":method :url HTTP/:http-version" :api-key :request-type :account-id :username ' +
    ':request-duration :bytes-sent :request-length :tenant :sub-account-id :service-address :user-agent :cache-status :entity-id';

Analyzer.tokens['field'] = {
    type: String,
    pattern: /.*/
};

Analyzer.tokens['timestamp'] = {
    type: Number,
    pattern: /\d+\.\d+|\d+/
};

Analyzer.tokens['tenant'] = {
    type: String,
    pattern: /tenant-\d+/
};

Analyzer.tokens['user-agent'] = {
    type: String,
    pattern: /".*"|.*|-/
};

Analyzer.tokens['api-key'] = {
    type: String,
    pattern: /\w+/
};

Analyzer.tokens['account-id'] = {
    type: String,
    pattern: /\w+/
};

Analyzer.tokens['username'] = {
    type: String,
    pattern: /\w+(-\d+)?/
};

Analyzer.tokens['sub-account-id'] = Analyzer.tokens['account-id'];

Analyzer.tokens['request-type'] = {
    type: String,
    pattern: /msysAPIKey|webUI|-/
};

Analyzer.tokens['request-duration'] = Analyzer.tokens['timestamp'];

Analyzer.tokens['bytes-sent']
    = Analyzer.tokens['request-length']
    = Analyzer.tokens['content-length'];

Analyzer.tokens['service-address'] = {
    type: String,
    pattern: /\d+\.\d+\.\d+\.\d+:\d+/
};

Analyzer.tokens['cache-status'] =
    Analyzer.tokens['entity-id'] = {
        type: String,
        pattern: /.*|-/
    };

module.exports = {
    analyzer: new Analyzer(format, {})
};