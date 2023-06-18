import mongoose from "mongoose";

const ProductSchema = mongoose.Schema({
    id: String,
    url: String,
    detailUrl: String,
    title: {
        shortTitle: String,
        longTitle: String
    },
    price: {
        mrp: Number,
        cost: Number,
        discount: String
    },
    quantity: Number,
    description: String,
    discount: String,
    tagline: String
});

const Product = mongoose.model("products",ProductSchema);

export default Product;