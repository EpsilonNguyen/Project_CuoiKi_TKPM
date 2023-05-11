import mongoose from 'mongoose';

const CheckoutSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            require: true,
            ref: 'User',
        },
        shoeItem: [
            {
                id: {
                    type: mongoose.Schema.Types.ObjectId,
                    require: true,
                    ref: 'Shoe',
                },
                name: { type: String, require: true },
                quantity: { type: Number, require: true },
                image: { type: String, require: false },
                price: { type: Number, require: true },
                size: { type: Number, require: true },
            },
        ],
        shipAddress: {
            type: String,
        },
        total: {
            type: Number,
            required: true,
            default: 0.0,
        },
        isPaid: {
            type: Boolean,
            required: true,
            default: false,
        },
        paidAt: {
            type: Date,
        },
        isDelivered: {
            type: Boolean,
            required: true,
            default: false,
        },
        deliveredAt: {
            type: Date,
        },
    },
    { timestamps: true },
);

export default mongoose.model('Checkout', CheckoutSchema);
