import mongoose from "mongoose";

const CartSchema = new mongoose.Schema ({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "User"
    },
    shoeItem: [
        {
            id: {
                type: mongoose.Schema.Types.ObjectId,
                require: true,
                ref: "Shoe"
            },
            name: { type: String, require: true },
            quantity: { type: Number, require: true },
            image: { type: String, require: true },
            price: { type: Number, require: true },
            size: { type: Number, require: true },
        }
    ],
    shipAddress: {
        address: { type: String, require: true },
        city: { type: String, require: true },
        province: { type: String, require: true },
    },
    paymentMethod: {
        type: String,
        require: true,
        default: paypal
    },
    paymentResult: {
        id: { type: String},
        status: { type: String},
        update_time: { type: String}
    },
    toal: {
        type: Number,
        required: true,
        default: 0.0
    },
    isPaid: {
        type: Boolean,
        required: true,
        defualt: false
    },
    paidAt: {
        type: Date
    },
    isDelivered: {
        type: Boolean,
        required: true,
        defualt: false
    },
    deliveredAt: {
        type: Date
    }},
    {timestamps: true}
)

export default mongoose.model("Cart", CartSchema)