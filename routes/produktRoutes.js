// imports
const { Router } = require('express');
const produktController = require('../controllers/produktController');

const router = Router();

// routes
router.post('/lag_produkt', produktController.lag_produkt);

module.exports = router;