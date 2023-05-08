import mongoose from "mongoose";

const CartSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        unique: true,
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
            image: { type: String, require: false },
            price: { type: Number, require: true },
            size: { type: Number, require: true },
        }
    ],
    toal: {
        type: Number,
        required: true,
        default: 0.0
    }
},
    { timestamps: true }
)

export default mongoose.model("Cart", CartSchema)