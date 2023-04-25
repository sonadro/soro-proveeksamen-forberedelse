// imports
const Router = require('express');
const userController = require('../controllers/userController');

// create router
const router = Router();

// routes
router.post('/user-create', userController.user_create);

router.post('/user-read', userController.user_readOne);

router.post('/user-update', userController.user_updateOne);

router.post('/user-delete', userController.user_deleteOne);

router.post('/user-read_all', userController.user_readAll);

// export
module.exports = router;