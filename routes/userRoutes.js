// imports
const Router = require('express');
const userController = require('../controllers/userController');

// create router
const router = Router();

// routes
router.post('/user-login', userController.user_login);

// export
module.exports = router;