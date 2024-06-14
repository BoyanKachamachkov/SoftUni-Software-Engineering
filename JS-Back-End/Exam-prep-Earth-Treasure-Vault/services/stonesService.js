const Stones = require('../models/Stones');


exports.create = async (stonesData) => await Stones.create(stonesData);

exports.getAll = () => Stones.find();
