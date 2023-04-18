const mongoose = require("mongoose");
const { Schema } = mongoose;

const OrderSchema = new Schema({
    userId: { type: String, required: true },
    products: [{
        productId: { type: String },
        quantity: { type: Number, default: 1 }
    }],
    address: { type: String, required: true },
    amount: { type: Number, required: true },
    status: { type: String, default: 'Pending', required: true }
}, { timestamps: true })
// createdAt: a date representing when this document was created
// updatedAt: a date representing when this document was last updated


mongoose.models={};
module.exports = mongoose.model('order', OrderSchema);