const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

router.post('/', orderController.createOrder);
router.get('/', orderController.getAllOrders);
router.put('/:id', orderController.updateOrder);
router.delete('/:id', orderController.deleteOrder);
router.post('/customize', orderController.customizeMenuItem);
router.post('/online', orderController.handleOnlineOrder);

module.exports = router;
