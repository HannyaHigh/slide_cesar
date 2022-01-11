//Routes for users
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// API/users
router.post('/', userController.createUser);
router.get('/', userController.getUser);
router.put('/:id', userController.updateUser);
router.get('/:id', userController.getOneUser);
router.delete('/:id', userController.deleteUser);

module.exports = router