const mongoose = required('mongoose');

const volcanoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    elevation: {
        type: String,
        required: true,
    },
    lastErruption: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    typeVolcano: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    voteList: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
});