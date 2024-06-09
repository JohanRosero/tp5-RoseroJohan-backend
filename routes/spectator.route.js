const spectatorCtrl = require('../controllers/spectator.controller');

const express = require('express');

const router = express.Router();

router.post('/', spectatorCtrl.createSpectator);

router.get('/', spectatorCtrl.getSpectators);

router.get('/:id', spectatorCtrl.getSpectatorById);

module.exports = router;