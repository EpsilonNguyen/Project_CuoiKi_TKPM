import mongoose from "mongoose";

const ShoeSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    images: {
        type: [String],
        require: false,
        // validate: {
        //     validator: function(images) {
        //       return images.length > 0;
        //     },
        //     message: 'Cần ít nhất 1 tấm ảnh về Sản phẩm!'
        //   }
    },
    quantity: {
        type: Number,
        require: true
    },
    brand: {
        type: String,
        enum: ["Adidas", "Nike", "Vans", "Balenciaga", "Converse", "Puma"],
        require: true
    },
    sizes: {
        type: [Number],
        require: true,
        validate: {
            validator: function (sizes) {
                return sizes.length > 0;
            },
            message: 'Cần ít nhất 1 size về Sản phẩm!'
        }
    },
    price: {
        type: Number,
        require: true
    },
    reviews: [{
        type: mongoose.Schema.Types.ObjectId
    }],
    rating: {
        type: Number,
        default: 0,
        min: 0,
        max: 5
    },
    numRev: {
        type: Number,
        default: 0
    }
},
    { timestamps: true }
)

export default mongoose.model("Shoe", ShoeSchema)