const Volcano = require('../models/Volcano');

exports.create = async (userId, newVolcano) => {

    const createdVolcano = await Volcano.create({
        owner: userId,
        ...newVolcano
    });

    return createdVolcano;
};

exports.getAll = () => Volcano.find();