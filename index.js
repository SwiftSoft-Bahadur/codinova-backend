const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const errorHandler = require('./middleware/errorHandler');
//mongodb connection
const config = require('./config/index');
mongoose.connect(config.mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });


//controller
const stocksController = require('./routes/stocks')

app.use(cors());
app.use(bodyParser.json());
app.use("/api/stocks", stocksController);
app.use(errorHandler);

app.listen(config.port, () => console.log(`Listing...`));