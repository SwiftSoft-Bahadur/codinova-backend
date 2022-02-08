const mongoose = require('mongoose');
mongoose.pluralize(null);

const Schema = mongoose.Schema;

const stockSchema = new Schema({
    exchange_id: { type: String, required: true },
    url: { type: String, required: true },
    api: { type: String },
})


module.exports = mongoose.model("stock", stockSchema);