// imports
const { Router } = require('express');
const mainController = require('../controllers/mainController');

// create router
const router = Router();

// middleware
const { adminAuth } = require('../middleware/authentication');

// routes
router.get('/', mainController.home_get);
router.get('/login', mainController.login_get);
router.get('/addprodukt', adminAuth, mainController.addProdukt_get);
router.get('/produkter', mainController.produkter_get);

module.exports = router;