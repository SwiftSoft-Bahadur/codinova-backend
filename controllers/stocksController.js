const https = require('https');
const  Stocks= require('../models/stocks')
const validationhandler = require('../validations/validationHandler')

exports.index = async(req, res, next)=>{
    try {
        let stocks= await Stocks.find();
        res.send(stocks);
    } catch (err) {
    console.next(err);
    }

}
exports.store = async(req, res, next)=>{
    try {
    let stock= new Stocks();
    stock.exchange_id = req.body.exchange_id;
    stock.url = req.body.url;
    await stock.save()
    res.send(stock)

    } catch (err) {
    next(err);
    }
}

exports.getExchanges = async (req, res, next) => {
    try {
        var options = {
            "method": "GET",
            "hostname": "rest.coinapi.io",
            "path": "/v1/exchanges",
            "headers": { 'X-CoinAPI-Key': '4BEB5857-A77E-4027-801A-E954FA3CA51E' }
        };

        var request = https.request(options, function (response) {
            response.on("data", (chunk) => {
                res.end(chunk.toString())
            });
        });
        
        request.end();
    } catch (err) {
        next(err);
    }
}

exports.icons = async (req, res, next) => {
    try {
        var options = {
            "method": "GET",
            "hostname": "rest.coinapi.io",
            "path": "/v1/exchanges/icons/32",
            "headers": { 'X-CoinAPI-Key': '4BEB5857-A77E-4027-801A-E954FA3CA51E' }
        };

        var request = https.request(options, function (response) {
            response.on("data", (chunk) => {
                res.end(chunk.toString())
            });
        });
        
        request.end();
    } catch (err) {
        next(err);
    }
}