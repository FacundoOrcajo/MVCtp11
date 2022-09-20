const express = require('express');
const { about } = require('../controllers/mainController');
const router = express.Router();

/*Controller */
const mainController = require('../controllers/mainController')

/* */
router.get('/',mainController.home);
router.get('/about',mainController.about);

module.exports = router;