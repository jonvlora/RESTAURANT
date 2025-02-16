const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');

router.get('/sales/daily', reportController.getDailySales);
router.get('/sales/weekly', reportController.getWeeklySales);
router.get('/sales/monthly', reportController.getMonthlySales);

module.exports = router;
