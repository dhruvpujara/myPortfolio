const router = require('express').Router();
const userController = require('../controller/userController');

router.post('/contact', userController.inquiryReceived);


module.exports = router;