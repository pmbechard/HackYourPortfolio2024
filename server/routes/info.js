const express = require('express');
const router = express.Router();

/// CONTROLLER IMPORT ///
const infoController = require('../controllers/infoController');

/// ROUTES ///
router.get('/', infoController.get);
router.post('/', infoController.post);

module.exports = router;
