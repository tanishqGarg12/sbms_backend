import mongoose from "mongoose"

const inventorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
    },
    description: {
        type: String
    },
    quantity: {
        type: Number,
        required: true
    },
    unit: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    supplierName: {
        type: String
    },

}, { timestamps: true });
export const inventory = mongoose.model("inventory", inventorySchema);