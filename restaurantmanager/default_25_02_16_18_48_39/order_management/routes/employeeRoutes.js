const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');

router.post('/', employeeController.createSchedule);
router.put('/:id', employeeController.updateShift);
router.get('/', employeeController.getEmployees);
router.get('/performance', employeeController.getPerformanceAnalytics);

module.exports = router;
