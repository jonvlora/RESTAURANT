const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryController');

router.post('/', inventoryController.addItem);
router.put('/:id', inventoryController.updateItem);
router.delete('/:id', inventoryController.deleteItem);
router.get('/', inventoryController.getItems);
router.post('/supplier', inventoryController.manageSupplier);

module.exports = router;
