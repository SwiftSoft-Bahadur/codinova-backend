const express = require('express');
const router = express.Router();
const quizController = require('../controllers/stocksController')

router.get("/", quizController.index);
router.post("/", quizController.store);
router.get("/exchanges", quizController.getExchanges);
router.get("/icons", quizController.icons);

module.exports = router;