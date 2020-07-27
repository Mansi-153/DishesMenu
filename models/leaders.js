const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var LeaderSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true,
    },
    designation: {
        type: String,
        default: '',
    },
    abbr: {
        type: String,
        required: true,
    },
    featured: {
        type: Boolean,
        default: true,
    },
    description: {
        type: String,
        required: true,
    }
},
{
    timestamps: true
}
);

var Leaders = mongoose.model('Leader', LeaderSchema);

module.exports = Leaders;