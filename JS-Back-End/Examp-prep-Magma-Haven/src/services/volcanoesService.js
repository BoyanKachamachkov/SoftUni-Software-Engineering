const Volcano = require('../models/Volcano');
const User = require('../models/User');

exports.create = async (userId, newVolcano) => {

    const createdVolcano = await Volcano.create({
        owner: userId,
        ...newVolcano
    });

    return createdVolcano;
};

exports.getAll = () => Volcano.find();

exports.getOne = (volcanoId) => Volcano.findById(volcanoId);

exports.vote = async (volcanoId, userId) => {
    await Volcano.findByIdAndUpdate(volcanoId, { $push: { voteList: userId } });
};