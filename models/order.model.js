import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const orderSchema = new Schema({
    orderClientName: {type: String, required: true},
    orderClientPhone: {type: String, required: true},
    orderClientEmail: {type: String, required: true},
    orderEventId: {type: String, required: true},
    orderQuantity: {type: Number, required: true},
    orderTotal: {type: Number, required: true},

}, {
    timestamps: true,
});

const Order = mongoose.model('Order', orderSchema);

export default Order;