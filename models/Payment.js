import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const PaymentSchema = new Schema({
    name: { type: String, required: true },
    to_user: { type: String, required: true },
    orderID: { type: String },
    message: { type: String },
    amount: { type: Number },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    done: { type: Boolean, default: false }
});
const Payment = mongoose.models.Payment || model("Payment", PaymentSchema);
export default Payment