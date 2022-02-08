const https = require('https');

var options = {
    "method": "GET",
    "hostname": "rest.coinapi.io",
    "path": "/v1/trades/latest",
    "headers": { 'X-CoinAPI-Key': '4BEB5857-A77E-4027-801A-E954FA3CA51E' }
};

var request = https.request(options, function (response) {
    var chunks = [];
    response.on("data", function (chunk) {
        console.log(chunk.toString());
        chunks.push(chunk);
    });
});

request.end();