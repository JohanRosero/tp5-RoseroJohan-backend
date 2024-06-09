const Spectator = require('../models/spectator');

const spectatorCtrl = {};

spectatorCtrl.getSpectators = async (req, res) => {
    let spectators = await Spectator.find();
    res.json(spectators);
}

spectatorCtrl.createSpectator = async (req, res) => {
    let spectator = new Spectator(req.body);
    try {
        await spectator.save();
        res.status(200).json({
            'status': 'success',
            'message': 'Spectator created successfully'
        });
    } catch (error) {
        res.status(500).json({
            'status': 'error',
            'message': error
        });
    }
}
spectatorCtrl.getSpectatorById = async (req, res) => {
    let spectator = await Spectator.findById(req.params.id);
    res.json(spectator);
}

module.exports = spectatorCtrl;