const { body } = require('express-validator');

exports.hasQuestion = body('question')
    .isLength({ min: 5 }).withMessage("Question is required. Min length 5 characters");
