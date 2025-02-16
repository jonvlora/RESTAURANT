const express = require('express');
const router = express.Router();
const tableController = require('../controllers/tableController');

router.get('/status', tableController.getTableStatus);
router.post('/reserve', tableController.bookReservation);
router.get('/waitlist', tableController.getWaitlist);
router.get('/floorplan', tableController.getFloorPlan);

module.exports = router;
