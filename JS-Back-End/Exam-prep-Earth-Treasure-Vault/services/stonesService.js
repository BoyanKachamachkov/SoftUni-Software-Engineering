const Stones = require('../models/Stones');
const User = require('../models/User');


exports.create = async (userId, stonesData) => {
    // create new stone with the ID of the user
    const createdStone = await Stones.create({
        owner: userId,
        ...stonesData
    });

    return createdStone;
};

exports.getAll = () => Stones.find();

exports.getOne = (gemstoneId) => Stones.findById(gemstoneId);

exports.getLatest = () => Stones.find().sort({ createdAt: -1 }).limit(3);

exports.like = async (gemstoneId, userId) => {
    await Stones.findByIdAndUpdate(gemstoneId, { $push: { likedList: userId } });
    await User.findByIdAndUpdate(userId, { $push: { likes: gemstoneId } });
};

exports.delete = (gemstoneId) => Stones.findByIdAndDelete(gemstoneId);

exports.edit = (gemstoneId, gemstoneData) => Stones.findByIdAndUpdate(gemstoneId, gemstoneData, { runValidators: true });

exports.search = async (gemstoneTitle) => {
    let result = await Stones.find().lean();

    if (gemstoneTitle) {
        result = result.filter(stone => stone.name.toLowerCase().includes(gemstoneTitle.toLowerCase()));
    }

    return result;
};