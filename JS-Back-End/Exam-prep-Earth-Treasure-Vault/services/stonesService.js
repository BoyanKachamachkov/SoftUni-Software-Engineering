const Stones = require('../models/Stones');


exports.create = async (userId, stonesData) => {
    // create new stone with the ID of the user
    const createdStone = await Stones.create({
        owner: userId,
        ...stonesData
    });

    return createdStone;
};

exports.getAll = () => Stones.find();

exports.getOne = (gemstoneId) => Stones.findById(gemstoneId)