const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var PromotionSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true,
    },
    label: {
        type: String,
        default: '',
    },
    price: {
        type: Number,
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

var Promotions = mongoose.model('Promotion', PromotionSchema);

module.exports = Promotions;