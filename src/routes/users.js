const express = require('express');
const usersController = require('../controller/users')
const router = express.Router();

router.post('/', usersController.createNewUsers);
router.get('/', usersController.getAllUsers);
router.patch('/:id', usersController.updateUsers);
router.delete('/:id', usersController.deleteUsers);





module.exports = router;