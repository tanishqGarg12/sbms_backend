import mongoose from "mongoose";

const stockLocationSchema = new mongoose.Schema({
    location: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
});

const totalStockSchema = new mongoose.Schema({
    inventoryItem: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'inventory',
        required: true
    },
    stockLocations: [stockLocationSchema],
    totalQuantity: {
        type: Number,
        required: true
    }
}, { timestamps: true });

export const TotalStock = mongoose.model("TotalStock", totalStockSchema);